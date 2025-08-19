// background.js — MV3 service worker
// Manifest must include permissions: ["identity","alarms","storage"]
// host_permissions: ["https://www.googleapis.com/*"]
// oauth2.scopes: ["https://www.googleapis.com/auth/calendar.readonly",
//                 "https://www.googleapis.com/auth/calendarlist.readonly"]

const GOOGLE_BASE = 'https://www.googleapis.com/calendar/v3';
const POLL_ALARM  = 'gcal-poll';
const POLL_MINUTES = 15;  // adjust as you like
const PAST_DAYS   = 30;   // how far back to fetch events
const FUTURE_DAYS = 365;  // how far forward to fetch events

// ---------- Identity helpers ----------
function getAuthToken({ interactive }) {
  return new Promise((resolve, reject) => {
    chrome.identity.getAuthToken({ interactive }, (token) => {
      const err = chrome.runtime.lastError;
      if (err || !token) return reject(new Error(err?.message || 'No token'));
      resolve(token);
    });
  });
}

function clearCachedTokens() {
  // Don’t attempt to fetch tokens here (avoids “invalid scope” logs).
  try { chrome.identity.clearAllCachedAuthTokens(() => {}); } catch {}
}

// ---------- Time helpers ----------
function toRfc3339(d) { return d.toISOString(); }
function eventWindow() {
  const now = new Date();
  const start = new Date(now);  start.setDate(start.getDate() - PAST_DAYS);
  const end   = new Date(now);  end.setDate(end.getDate() + FUTURE_DAYS);
  return { timeMin: toRfc3339(start), timeMax: toRfc3339(end) };
}

// ---------- API helpers ----------
async function apiGet(url, token) {
  const res = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${txt}`);
  }
  return res.json();
}

async function listCalendars(token) {
  const out = [];
  let pageToken;
  do {
    const url = new URL(`${GOOGLE_BASE}/users/me/calendarList`);
    url.searchParams.set('maxResults', '250');
    if (pageToken) url.searchParams.set('pageToken', pageToken);
    const json = await apiGet(url.toString(), token);
    (json.items || []).forEach(c => out.push(c));
    pageToken = json.nextPageToken;
  } while (pageToken);
  return out;
}

async function listEventsForCalendar(calendarId, token, { timeMin, timeMax }) {
  const out = [];
  let pageToken;
  do {
    const url = new URL(`${GOOGLE_BASE}/calendars/${encodeURIComponent(calendarId)}/events`);
    url.searchParams.set('singleEvents', 'true'); // expand recurrences
    url.searchParams.set('orderBy', 'startTime');
    url.searchParams.set('timeMin', timeMin);
    url.searchParams.set('timeMax', timeMax);
    url.searchParams.set('maxResults', '2500');
    if (pageToken) url.searchParams.set('pageToken', pageToken);
    const json = await apiGet(url.toString(), token);
    (json.items || []).forEach(ev => out.push(ev));
    pageToken = json.nextPageToken;
  } while (pageToken);
  return out;
}

// ---------- Core sync ----------
async function refreshCalendar(interactive = false) {
  const token = await getAuthToken({ interactive });

  const calendars = await listCalendars(token);
  await chrome.storage.local.set({ gcal_calendars: calendars });

  const primary = calendars.find(c => c.primary) || calendars.find(c => c.id === 'primary') || null;
  const win = eventWindow();

  // Fetch all calendars in parallel
  const perCal = await Promise.all(
    calendars.map(async (cal) => {
      try {
        const events = await listEventsForCalendar(cal.id, token, win);
        const bg = cal.backgroundColor || cal.foregroundColor || null;
        for (const ev of events) {
          ev._calendarId = cal.id;
          ev._calendarBg = bg;
        }
        return { id: cal.id, events };
      } catch {
        return { id: cal.id, events: [] };
      }
    })
  );

  const allEvents = perCal.flatMap(x => x.events);
  const primaryEvents = primary ? (perCal.find(x => x.id === primary.id)?.events || []) : [];

  await chrome.storage.local.set({
    gcal_events_all: allEvents,
    gcal_events_primary: primaryEvents
  });

  chrome.runtime.sendMessage({
    type: 'gcal:updated',
    counts: { calendars: calendars.length, all: allEvents.length, primary: primaryEvents.length }
  });

  return { calendars: calendars.length, all: allEvents.length, primary: primaryEvents.length };
}

// ---------- Polling ----------
function startPolling() {
  chrome.alarms.create(POLL_ALARM, { periodInMinutes: POLL_MINUTES });
}
function stopPolling() {
  chrome.alarms.clear(POLL_ALARM);
}
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === POLL_ALARM) {
    refreshCalendar(false).catch(err => console.warn('[BG] poll error:', err?.message || err));
  }
});

// ---------- Message router ----------
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  (async () => {
    try {
      if (msg?.type === 'gcal:connect') {
        const counts = await refreshCalendar(true);
        startPolling();
        sendResponse({ ok: true, counts });
        return;
      }
      if (msg?.type === 'gcal:refreshNow') {
        const counts = await refreshCalendar(false);
        sendResponse({ ok: true, counts });
        return;
      }
      if (msg?.type === 'gcal:startPolling') {
        startPolling(); sendResponse({ ok: true }); return;
      }
      if (msg?.type === 'gcal:stopPolling') {
        stopPolling(); sendResponse({ ok: true }); return;
      }
      if (msg?.type === 'gcal:disconnect') {
        // DO NOT request tokens/scopes here. Just clear local state.
        stopPolling();
        clearCachedTokens();
        await chrome.storage.local.remove(['gcal_calendars', 'gcal_events_all', 'gcal_events_primary']);
        chrome.runtime.sendMessage({ type: 'gcal:disconnected' });
        sendResponse({ ok: true });
        return;
      }
    } catch (e) {
      console.warn('[BG] handler error:', e);
      sendResponse({ ok: false, error: String(e?.message || e) });
    }
  })();
  return true; // keep the port open for async sendResponse
});

// Optional
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed/updated.');
  // startPolling();
});
