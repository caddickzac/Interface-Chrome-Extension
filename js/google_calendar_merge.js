// === google_calendar_merge.js ===
// Map GCAL events into your month dictionaries + render simple badges.
// Safe to load early; rendering waits until the month grid exists.

(() => {
  const MONTH_INDEX = {
    January:1, February:2, March:3, April:4, May:5, June:6,
    July:7, August:8, September:9, October:10, November:11, December:12
  };
  const MONTH_NAMES = Object.keys(MONTH_INDEX);

  function pad2(n){ return n < 10 ? '0' + n : '' + n; }
  function dateKey(y,m,d){ return `${y}-${pad2(m)}-${pad2(d)}`; }

  // ---- Core mapper: fills m.events_by_cell[42] and m.event_counts[42]
  window.map_calendar_events_into_dictionary = function map_calendar_events_into_dictionary() {
    const g = window.gcal_events_by_date || {};
    const libs = window.dictionary_library_array || [];
    for (const yearLib of libs) {
      for (const m of yearLib) {
        const year   = Array.isArray(m.year)  ? m.year[0]  : m.year;
        const mName  = Array.isArray(m.month) ? m.month[0] : m.month;
        const mIndex = MONTH_INDEX[mName];
        const cells  = Array.isArray(m.day_of_month_array) ? m.day_of_month_array[0] : m.day_of_month_array;

        const eventsByCell = new Array(42).fill(null).map(() => []);
        for (let i = 0; i < 42; i++) {
          const day = cells?.[i];
          if (day === "" || day == null) continue;
          const key = dateKey(year, mIndex, day);
          if (g[key]) eventsByCell[i] = g[key].slice();
        }
        m.events_by_cell = eventsByCell;
        m.event_counts   = eventsByCell.map(arr => arr.length);
      }
    }
  };

  // ---- Badge renderer into #td_month_cell_[1..42]
  window.render_month_event_badges = function render_month_event_badges(year, monthName) {
    const allMonths = (window.dictionary_library_array || []).flat();
    const m = allMonths.find(x =>
      (Array.isArray(x.year)?x.year[0]:x.year)   === year &&
      (Array.isArray(x.month)?x.month[0]:x.month) === monthName
    );
    if (!m || !m.events_by_cell) return;

    for (let i = 0; i < 42; i++) {
      const count = m.events_by_cell[i]?.length || 0;
      const $cell = $(`#td_month_cell_${i+1}`);
      if (!$cell.length) continue;

      if ($cell.css('position') === 'static') $cell.css('position', 'relative');
      let $badge = $cell.find('.event-badge');
      if (!$badge.length) $badge = $('<span class="event-badge"></span>').appendTo($cell);
      $badge.text(count ? String(count) : '').toggle(!!count);
    }
  };

  window.render_current_month_badges = function render_current_month_badges(){
    const now = new Date();
    const y   = now.getFullYear();
    const m   = MONTH_NAMES[now.getMonth()];
    window.render_month_event_badges(y, m);
  };

  // ---- Safe, manual entry point you can call whenever:
  window.gcal_merge_refresh = function gcal_merge_refresh() {
    if (typeof window.map_calendar_events_into_dictionary === 'function') {
      window.map_calendar_events_into_dictionary();
    }
    // Only render if the month grid exists in DOM
    if (document.getElementById('td_month_cell_1')) {
      if (typeof window.render_current_month_badges === 'function') {
        window.render_current_month_badges();
      }
    }
  };

  // Optional: attempt an auto-run after DOM is ready, but only if the month grid exists.
  function tryAutoRender() {
    if (document.getElementById('td_month_cell_1')) {
      window.gcal_merge_refresh();
      return true;
    }
    return false;
  }

  // Run after DOMContentLoaded; if grid not mounted yet, retry a few times.
  document.addEventListener('DOMContentLoaded', () => {
    let tries = 0;
    const maxTries = 30;
    const tick = () => {
      if (tryAutoRender()) return;
      if (++tries < maxTries) setTimeout(tick, 150);
    };
    tick();
  });

  // Also listen for live updates from the background fetcher (optional redundancy)
  if (chrome?.runtime?.onMessage) {
    chrome.runtime.onMessage.addListener((msg) => {
      if (msg?.type === 'gcal:updated') {
        window.gcal_merge_refresh();
      }
    });
  }
})();
