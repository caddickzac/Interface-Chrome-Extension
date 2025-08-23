// ===== google_calendar_import.js =====
// Front-end hooks + UI glue for Google Calendar.
// Prefers ALL calendars (gcal_events_all) and falls back to primary.
// Requires: jQuery, MV3 environment, and background.js that handles gcal:* messages.

(() => {
  'use strict';

  const GCAL_DEBUG = true;
  const REPAINT_MAX_RETRIES = 80;   // ~8s total if 100ms interval
  const REPAINT_RETRY_MS    = 100;

  // ---- tiny helpers ----
  const log  = (...a) => { if (GCAL_DEBUG) console.log('[GCAL]', ...a); };
  const warn = (...a) => console.warn('[GCAL]', ...a);

  // ===== GCAL connection status =====
  // Global anyone can read
  window.GCAL_STATUS = typeof window.GCAL_STATUS === 'string' ? window.GCAL_STATUS : 'never';

  function applyStatus(status, source = 'unknown') {
    if (typeof status !== 'string') return;
    if (!['never','connected','disconnected'].includes(status)) return;
    if (window.GCAL_STATUS === status) return;

    window.GCAL_STATUS = status;
    try { document.documentElement.setAttribute('data-gcal-status', status); } catch {}
    log('status →', status, `(via ${source})`);

    // Fire both events so callers can hook whichever they prefer
    try {
      document.dispatchEvent(new CustomEvent('gcal:statusChanged', { detail: status }));
      document.dispatchEvent(new CustomEvent('gcal:statusReady',   { detail: status }));
    } catch {}
  }

  // Small helpers others can call
  window.get_gcal_status = () => window.GCAL_STATUS;
  window.is_gcal_connected = () => window.GCAL_STATUS === 'connected';
  window.wait_for_gcal_status = (timeoutMs = 4000) => new Promise((resolve) => {
    if (window.GCAL_STATUS !== 'never') return resolve(window.GCAL_STATUS);
    const handler = (evt) => resolve(evt?.detail || window.GCAL_STATUS);
    document.addEventListener('gcal:statusChanged', handler, { once: true });
    setTimeout(() => resolve(window.GCAL_STATUS), timeoutMs);
  });

  // ---- repaint helpers ----
  function repaintWhenReady(triesLeft = REPAINT_MAX_RETRIES) {
    const vcReady          = typeof window.View_Changer === 'function';
    const hasCurrentDisplay= typeof window.current_display !== 'undefined';
    const pageReadyFlag    = typeof window.page_ready === 'string' ? (window.page_ready === 'yes') : true;

    if (vcReady && hasCurrentDisplay && pageReadyFlag) {
      try { window.View_Changer(); return; }
      catch (e) { warn('View_Changer threw:', e); }
    }
    if (triesLeft > 0) {
      setTimeout(() => repaintWhenReady(triesLeft - 1), REPAINT_RETRY_MS);
    } else {
      log('Skipped repaint (app not ready after retries).');
    }
  }

  function deliverToMapperAndRepaint(events) {
    try {
      if (typeof window.map_imported_events_to_dictionary === 'function') {
        window.map_imported_events_to_dictionary(events);
      } else {
        // fallback so you can inspect or paint later
        window._imported_google_events = events;
      }
    } catch (e) {
      warn('Mapper threw:', e);
    }
    // If your week renderer exists, kick it too (safe no-op if missing)
    if (typeof window.render_week_from_google === 'function') {
      try { window.render_week_from_google(); } catch (e) { warn('render_week_from_google threw:', e); }
    }
    repaintWhenReady();
  }

  // Prefer all calendars; fall back to primary
  function pullAndRender() {
    try {
      chrome.storage.local.get(
        ['gcal_events_all', 'gcal_events_primary', 'gcal_events_by_calendar', 'gcal_calendars', 'gcal_last_sync_at', 'gcal_connection_status'],
        (data) => {
          // keep local status in sync if background already persisted it
          if (typeof data?.gcal_connection_status === 'string') {
            applyStatus(data.gcal_connection_status, 'storage/refresh');
          }

          const calendars = data?.gcal_calendars || [];
          const byCal = data?.gcal_events_by_calendar || {};
          const all = data?.gcal_events_all;
          const primary = data?.gcal_events_primary;

          const events = Array.isArray(all)
            ? all
            : (Array.isArray(primary) ? primary : []);

          // Helpful logging to confirm you’re seeing more than just primary
          if (calendars.length) {
            const perCal = calendars.map(c => ({
              id: c.id,
              name: c.summary,
              count: Array.isArray(byCal[c.id]) ? byCal[c.id].length : 0
            }));
            log(`Loaded ${events.length} events total from storage`, {
              calendars: calendars.length,
              perCalendarCounts: perCal,
              lastSyncAt: data?.gcal_last_sync_at
            });
          } else {
            log(`Loaded ${events.length} events from storage (no calendars list yet).`);
          }

          deliverToMapperAndRepaint(events);
        }
      );
    } catch (e) {
      warn('chrome.storage unavailable?', e);
      deliverToMapperAndRepaint([]);
    }
  }

  // ---- Public helpers (keep your naming) ----
  window.start_google_calendar_sync = function start_google_calendar_sync() {
    chrome.runtime.sendMessage({ type: 'gcal:startPolling' }, (res) => {
      log('startPolling →', res, chrome.runtime.lastError);
    });
  };

  window.stop_google_calendar_sync = function stop_google_calendar_sync() {
    chrome.runtime.sendMessage({ type: 'gcal:stopPolling' }, (res) => {
      log('stopPolling →', res, chrome.runtime.lastError);
    });
  };

  window.refresh_google_calendar_now = function refresh_google_calendar_now() {
    chrome.runtime.sendMessage({ type: 'gcal:refreshNow' }, (res) => {
      if (res?.status) applyStatus(res.status, 'refreshNow');
      log('refreshNow →', res, chrome.runtime.lastError);
    });
  };

  // ---- Wire up buttons if they exist ----
  $(document).on('click', '#connect_google_calendar_button', function (e) {
    e.preventDefault();
    const $btn = $(this);
    if ($btn.data('busy')) return;

    $btn.data('busy', true);
    log('Connect clicked');

    chrome.runtime.sendMessage({ type: 'gcal:connect' }, (res) => {
      if (res?.status) applyStatus(res.status, 'connect');
      log('gcal:connect response →', res, chrome.runtime.lastError);
      $btn.data('busy', false);
      // Show whatever is already present; fresh data will arrive via gcal:updated
      pullAndRender();
    });
  });

  // Support both your typed id and the correctly spelled one.
  $(document).on('click', '#discconnect_google_calendar_button, #disconnect_google_calendar_button', function (e) {
    e.preventDefault();
    const $btn = $(this);
    if ($btn.data('busy')) return;

    $btn.data('busy', true);
    log('Disconnect clicked');

    chrome.runtime.sendMessage({ type: 'gcal:disconnect' }, (res) => {
      if (res?.status) applyStatus(res.status, 'disconnect');
      log('disconnect →', res, chrome.runtime.lastError);
      $btn.data('busy', false);

      // Clear immediately; background will also broadcast gcal:disconnected
      window._imported_google_events = [];
      repaintWhenReady();
    });
  });

  // ---- Listen for background updates ----
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg?.type === 'gcal:updated') {
      if (msg?.status) applyStatus(msg.status, 'updated');
      log('gcal:updated message received', msg?.counts || {});
      pullAndRender();
    }
    if (msg?.type === 'gcal:disconnected') {
      applyStatus('disconnected', 'broadcast');
      log('gcal:disconnected message received');
      window._imported_google_events = [];
      repaintWhenReady();
    }
    if (msg?.type === 'gcal:statusChanged' && typeof msg.status === 'string') {
      applyStatus(msg.status, 'push');
    }
  });

  // ---- Storage watcher (extra safety) ----
  try {
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== 'local') return;
      if (changes.gcal_connection_status && typeof changes.gcal_connection_status.newValue === 'string') {
        applyStatus(changes.gcal_connection_status.newValue, 'storage:change');
      }
    });
  } catch {}

  // ---- On load: bootstrap status quickly from storage, then ask background ----
  try {
    chrome.storage.local.get('gcal_connection_status', ({ gcal_connection_status }) => {
      if (typeof gcal_connection_status === 'string') {
        applyStatus(gcal_connection_status, 'storage:init');
      }
    });
  } catch {}

  try {
    chrome.runtime.sendMessage({ type: 'gcal:getStatus' }, (res) => {
      const err = chrome.runtime.lastError;
      if (err) { warn('getStatus error:', err.message); return; }
      if (res?.ok && typeof res.status === 'string') {
        applyStatus(res.status, 'getStatus');
      }
    });
  } catch {}

  // ---- Finally, render whatever's already cached ----
  pullAndRender();

  // ---- Environment sanity check ----
  if (!chrome?.runtime?.id) {
    warn('Not running in an extension page (chrome.runtime.id missing).');
  }
  if (typeof $ !== 'function') {
    warn('jQuery is not loaded before google_calendar_import.js.');
  }
})();
