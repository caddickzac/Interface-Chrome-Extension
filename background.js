// background.js — MV3 service worker
// Manifest must include:
//   "permissions": ["identity", "alarms", "storage"],
//   "host_permissions": ["https://www.googleapis.com/*"],
//   "oauth2": {
//     "client_id": "...",
//     "scopes": [
//       "https://www.googleapis.com/auth/calendar.readonly",
//       "https://www.googleapis.com/auth/calendarlist.readonly"
//     ]
//   }

const GOOGLE_BASE = 'https://www.googleapis.com/calendar/v3';
const POLL_ALARM  = 'gcal-poll';
const POLL_MINUTES = 15; // adjust as you like

// ───────────────── Identity helpers ─────────────────
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
  try { chrome.identity.clearAllCachedAuthTokens(() => {}); } catch {}
}

// ───────────────── Time helpers ─────────────────
function eventWindow() {
  // Full **current** year: [Jan 1 this year, Jan 1 next year)
  const y = new Date().getFullYear();
  const start = new Date(y, 0, 1, 0, 0, 0, 0);
  const end   = new Date(y + 1, 0, 1, 0, 0, 0, 0);
  return { timeMin: start.toISOString(), timeMax: end.toISOString() };
}

// ───────────────── API helpers ─────────────────
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
    url.searchParams.set('timeMax', timeMax);     // end-exclusive
    url.searchParams.set('maxResults', '2500');
    if (pageToken) url.searchParams.set('pageToken', pageToken);
    const json = await apiGet(url.toString(), token);
    (json.items || []).forEach(ev => out.push(ev));
    pageToken = json.nextPageToken;
  } while (pageToken);
  return out;
}

// ───────────────── Utilities ─────────────────
function isPrimaryCalendar(cals) {
  return cals.find(c => c.primary) || cals.find(c => c.id === 'primary') || null;
}

function mergeDedup(baseArr, addArr) {
  const byKey = new Map(
    (Array.isArray(baseArr) ? baseArr : []).map(ev =>
      [ev.id + '|' + (ev.start?.dateTime || ev.start?.date || ''), ev]
    )
  );
  for (const ev of (addArr || [])) {
    const k = ev.id + '|' + (ev.start?.dateTime || ev.start?.date || '');
    byKey.set(k, ev);
  }
  return Array.from(byKey.values());
}

// ───────────────── Core full-year sync ─────────────────
async function refreshCalendar(interactive = false) {
  const token = await getAuthToken({ interactive });

  const calendars = await listCalendars(token);
  await chrome.storage.local.set({ gcal_calendars: calendars });

  const primary = isPrimaryCalendar(calendars);
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
  const primaryEvents = primary
    ? (perCal.find(x => x.id === primary.id)?.events || [])
    : [];

  await chrome.storage.local.set({
    gcal_calendars: calendars,
    gcal_events_all: allEvents,
    gcal_events_primary: primaryEvents
  });

  chrome.runtime.sendMessage({
    type: 'gcal:updated',
    counts: { calendars: calendars.length, all: allEvents.length, primary: primaryEvents.length }
  });

  return { calendars: calendars.length, all: allEvents.length, primary: primaryEvents.length };
}

// ───────────────── Polling ─────────────────
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

// ───────────────── Message router ─────────────────
// Single, consolidated listener (no duplicates / no-ops).
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  (async () => {
    try {
      // Connect + prime + start polling
      if (msg?.type === 'gcal:connect') {
        const counts = await refreshCalendar(true);
        startPolling();
        sendResponse({ ok: true, counts });
        return;
      }

      // Manual refresh (keeps current-year window)
      if (msg?.type === 'gcal:refreshNow') {
        const counts = await refreshCalendar(false);
        sendResponse({ ok: true, counts });
        return;
      }

      if (msg?.type === 'gcal:startPolling') {
        startPolling();
        sendResponse({ ok: true });
        return;
      }

      if (msg?.type === 'gcal:stopPolling') {
        stopPolling();
        sendResponse({ ok: true });
        return;
      }

      // Disconnect: clear local state only (don’t request new tokens/scopes here)
      if (msg?.type === 'gcal:disconnect') {
        stopPolling();
        clearCachedTokens();
        await chrome.storage.local.remove(['gcal_calendars', 'gcal_events_all', 'gcal_events_primary']);
        chrome.runtime.sendMessage({ type: 'gcal:disconnected' });
        sendResponse({ ok: true });
        return;
      }

      // On-demand range fetch (used by YearView preloader)
      if (msg?.type === 'gcal:fetchRange' || msg?.type === 'gcal:ensureRange') {
        const token = await getAuthToken({ interactive: false });

        // Reuse cached calendars if present; otherwise fetch once
        let { gcal_calendars } = await chrome.storage.local.get('gcal_calendars');
        if (!Array.isArray(gcal_calendars) || gcal_calendars.length === 0) {
          gcal_calendars = await listCalendars(token);
          await chrome.storage.local.set({ gcal_calendars });
        }
        const primary = isPrimaryCalendar(gcal_calendars);

        const { startISO, endISO } = msg;

        // Fetch each calendar within the requested window
        const perCal = await Promise.all(
          gcal_calendars.map(async (cal) => {
            try {
              const events = await listEventsForCalendar(
                cal.id, token, { timeMin: startISO, timeMax: endISO }
              );
              const bg = cal.backgroundColor || cal.foregroundColor || null;
              for (const ev of events) {
                ev._calendarId = cal.id;
                ev._calendarBg = bg;
              }
              return events;
            } catch {
              return [];
            }
          })
        );

        const addAll = perCal.flat();
        const addPrimary = primary ? addAll.filter(ev => ev._calendarId === primary.id) : [];

        // Merge/de-dupe into storage
        const data = await chrome.storage.local.get(['gcal_events_all', 'gcal_events_primary']);
        const curAll = Array.isArray(data.gcal_events_all) ? data.gcal_events_all : [];
        const curPri = Array.isArray(data.gcal_events_primary) ? data.gcal_events_primary : [];

        const mergedAll = mergeDedup(curAll, addAll);
        const mergedPri = primary ? mergeDedup(curPri, addPrimary) : curPri;

        await chrome.storage.local.set({
          gcal_events_all: mergedAll,
          gcal_events_primary: mergedPri
        });

        chrome.runtime.sendMessage({ type: 'gcal:updated' });
        sendResponse({ ok: true, added: addAll.length, total: mergedAll.length });
        return;
      }

      // Unknown message: ignore gracefully
      sendResponse({ ok: false, error: 'unknown_message_type' });
    } catch (e) {
      console.warn('[BG] handler error:', e);
      sendResponse({ ok: false, error: String(e?.message || e) });
    }
  })();
  return true; // keep the port open for async sendResponse
});

// Optional
chrome.runtime.onInstalled.addListener(() => {
  console.log('[BG] Extension installed/updated.');
  // startPolling();
});
