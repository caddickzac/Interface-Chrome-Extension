// ===== google_calendar_import.js =====
// Front-end hooks + UI glue for Google Calendar.
// Prefers ALL calendars (gcal_events_all) and falls back to primary.
// Requires: jQuery, MV3 environment, and background.js that handles gcal:* messages.

(() => {
  'use strict';

  const GCAL_DEBUG = true;
  const REPAINT_MAX_RETRIES = 80;   // ~8s total if 100ms interval
  const REPAINT_RETRY_MS = 100;

  // ---- tiny helpers ----
  const log  = (...a) => { if (GCAL_DEBUG) console.log('[GCAL]', ...a); };
  const warn = (...a) => console.warn('[GCAL]', ...a);

  function repaintWhenReady(triesLeft = REPAINT_MAX_RETRIES) {
    const vcReady = typeof window.View_Changer === 'function';
    const hasCurrentDisplay = typeof window.current_display !== 'undefined';
    const pageReadyFlag = typeof window.page_ready === 'string' ? (window.page_ready === 'yes') : true;

    if (vcReady && hasCurrentDisplay && pageReadyFlag) {
      try {
        window.View_Changer();
        return;
      } catch (e) {
        warn('View_Changer threw:', e);
      }
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
        ['gcal_events_all', 'gcal_events_primary', 'gcal_events_by_calendar', 'gcal_calendars', 'gcal_last_sync_at'],
        (data) => {
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
      log('gcal:connect response →', res, chrome.runtime.lastError);
      $btn.data('busy', false);
      // Show whatever is already present; fresh data will arrive via gcal:updated
      pullAndRender();
    });
  });

  // // Optional buttons:
  // $(document).on('click', '#disconnect_google_calendar_button', function (e) {
  //   e.preventDefault();
  //   chrome.runtime.sendMessage({ type: 'gcal:disconnect' }, (res) => {
  //     log('disconnect →', res, chrome.runtime.lastError);
  //   });
  // });
  // $(document).on('click', '#gcal_refresh_now_button', function (e) {
  //   e.preventDefault();
  //   chrome.runtime.sendMessage({ type: 'gcal:refreshNow' }, (res) => {
  //     log('refreshNow →', res, chrome.runtime.lastError);
  //   });
  // });

  // ---- Listen for background updates ----
  chrome.runtime.onMessage.addListener((msg) => {
    if (msg?.type === 'gcal:updated') {
      log('gcal:updated message received', msg?.counts || {});
      pullAndRender();
    }
    if (msg?.type === 'gcal:disconnected') {
      log('gcal:disconnected message received');
      window._imported_google_events = [];
      repaintWhenReady();
    }
  });

  // ---- On load: if background already synced earlier, render immediately ----
  pullAndRender();

  // ---- Optional: auto-start polling when the page loads ----
  // window.start_google_calendar_sync();

  // ---- Environment sanity check ----
  if (!chrome?.runtime?.id) {
    warn('Not running in an extension page (chrome.runtime.id missing).');
  }
  if (typeof $ !== 'function') {
    warn('jQuery is not loaded before google_calendar_import.js.');
  }
})();

// ===== google_calendar_import.js =====
// Front-end hooks + UI glue for Google Calendar.
// Requires: jQuery, MV3 environment, and background.js that handles gcal:* messages.

(() => {
  'use strict';

  const GCAL_DEBUG = true;
  const STORE_ALL_EVENTS_KEY     = 'gcal_events_all';
  const STORE_PRIMARY_EVENTS_KEY = 'gcal_events_primary';
  const REPAINT_MAX_RETRIES = 80;   // ~8s total if 100ms interval
  const REPAINT_RETRY_MS    = 100;

  // ---- tiny helpers ----
  const log  = (...a) => { if (GCAL_DEBUG) console.log('[GCAL]', ...a); };
  const warn = (...a) => console.warn('[GCAL]', ...a);

  function readEventsFromStorage(cb) {
    try {
      chrome.storage.local.get([STORE_ALL_EVENTS_KEY, STORE_PRIMARY_EVENTS_KEY], (data) => {
        const all   = data?.[STORE_ALL_EVENTS_KEY] || [];
        const prime = data?.[STORE_PRIMARY_EVENTS_KEY] || [];
        const events = all.length ? all : prime;
        cb(events);
      });
    } catch (e) {
      warn('chrome.storage unavailable?', e);
      cb([]);
    }
  }

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
        window._imported_google_events = events;
      }
    } catch (e) {
      warn('Mapper threw:', e);
    }
    repaintWhenReady();
  }

  function pullAndRender() {
    readEventsFromStorage((events) => {
      log(`Loaded ${events.length} events from storage`);
      deliverToMapperAndRepaint(events);
    });
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
      log('refreshNow →', res, chrome.runtime.lastError);
    });
  };

  // ---- Wire up buttons ----
  $(document).on('click', '#connect_google_calendar_button', function (e) {
    e.preventDefault();
    const $btn = $(this);
    if ($btn.data('busy')) return;

    $btn.data('busy', true);
    log('Connect clicked');

    chrome.runtime.sendMessage({ type: 'gcal:connect' }, (res) => {
      log('gcal:connect response →', res, chrome.runtime.lastError);
      $btn.data('busy', false);
      pullAndRender(); // show whatever is present; fresh data arrives via gcal:updated
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
      log('gcal:updated message received', msg?.counts || {});
      pullAndRender();
    }
    if (msg?.type === 'gcal:disconnected') {
      log('gcal:disconnected message received');
      window._imported_google_events = [];
      repaintWhenReady();
    }
  });

  // ---- On load: if background already synced earlier, render immediately ----
  pullAndRender();

  // ---- Optional: auto-start polling ----
  // window.start_google_calendar_sync();

  // ---- Environment sanity check ----
  if (!chrome?.runtime?.id) warn('Not running in an extension page (chrome.runtime.id missing).');
  if (typeof $ !== 'function') warn('jQuery is not loaded before google_calendar_import.js.');
})();
