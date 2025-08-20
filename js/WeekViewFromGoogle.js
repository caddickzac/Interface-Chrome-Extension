// ===== WeekViewFromGoogle.js =====
// Theme: pill text uses window.color_background exactly.
// All-day events use date strings (no TZ drift). Timed events respect APP_TZ.
// Tooltip background = color_background; border & text = color_accent_2.
//
// Knobs (set these *before* this file loads, or set and call render_week_from_google()):
  // window.WEEK_PILL_OPACITY =.7   // 0..1 (default 0.85)
//   window.WEEK_FONT_FAMILY    // e.g. "'Lexend Deca', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
//   window.APP_TIME_ZONE       // e.g. "America/New_York"
window.WEEK_FONT_FAMILY = '"Helvetica Neue", Helvetica, Arial, sans-serif' // "system-ui" //"'Lexend Deca'" // system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";
window.WEEK_PILL_OPACITY = 0.7; // more transparent; try 0.9 for more opaque

(() => {
  'use strict';

  const DAY_IDS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const DAY_NODE_IDS = DAY_IDS.map(d => `#week_view_${d}`);
  const HEADER_ID = '#top_dock_date_DoW_range';
  const STYLE_TAG_ID = 'wv-event-style';

  // ---------- knobs ----------
  const WEEK_PILL_OPACITY = (typeof window.WEEK_PILL_OPACITY === 'number')
    ? Math.max(0, Math.min(1, window.WEEK_PILL_OPACITY))
    : 0.85;

  const WEEK_FONT_FAMILY =
    window.WEEK_FONT_FAMILY ||
    window.PRESENT_FONT_FAMILY ||
    "'Lexend Deca', 'Book Antiqua', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";

  // ---------- Timezone helpers (for timed events only) ----------
  const APP_TZ =
    window.APP_TIME_ZONE ||
    Intl.DateTimeFormat().resolvedOptions().timeZone ||
    'UTC';

  const fYMD = new Intl.DateTimeFormat('en-CA', { // "YYYY-MM-DD"
    timeZone: APP_TZ, year: 'numeric', month: '2-digit', day: '2-digit'
  });
  const fHM = new Intl.DateTimeFormat('en-US', {
    timeZone: APP_TZ, hour: '2-digit', minute: '2-digit', hour12: false
  });

  const ymdKey = (dLike) => fYMD.format(new Date(dLike));
  const minutesInTz = (dLike) => {
    const parts = fHM.formatToParts(new Date(dLike));
    const h = +parts.find(p => p.type === 'hour').value;
    const m = +parts.find(p => p.type === 'minute').value;
    return h * 60 + m;
  };

  function startOfWeekSunKey(anchor = new Date()) {
    const dowShort = new Date(anchor).toLocaleString('en-US', { weekday: 'short', timeZone: APP_TZ });
    const map = { Sun:0, Mon:1, Tue:2, Wed:3, Thu:4, Fri:5, Sat:6 };
    const diff = map[dowShort] ?? 0;
    const back = new Date(anchor.getTime() - diff * 86400000);
    return ymdKey(back);
  }
  function addDaysKey(ymd, n) {
    const d = new Date(ymd + 'T12:00:00'); // midday avoids DST edges
    d.setDate(d.getDate() + n);
    return ymdKey(d);
  }

  // ---------- Visual helpers ----------
  function hexToRgba(hex, a = 1) {
    const h = String(hex || '').replace('#','').trim();
    const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }


  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

  function ensureStyles() {
    if (document.getElementById(STYLE_TAG_ID)) return;
    const s = document.createElement('style');
    s.id = STYLE_TAG_ID;
    s.textContent = `
      .wv-event {
        position:absolute;
        height:16px;
        line-height:16px;
        font-size:12px;
        border-radius:4px;
        padding:0 6px;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        z-index: 3000;
        cursor:default;
        pointer-events:auto;
        font-family: ${WEEK_FONT_FAMILY};
        /* no hard-coded opacity here */
      }
      .wv-all-day { height:18px; line-height:18px; }

      .wv-tooltip {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        background: rgba(0,0,0,0.85); /* runtime overrides to color_background */
        color: #fff;                  /* runtime overrides to color_accent_2 */
        border: 1px solid #ffffff22;  /* runtime overrides to color_accent_2 */
        border-radius: 6px;
        padding: 6px 8px;
        font-size: 12px;
        line-height: 1.3;
        box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        transform: translate(-50%, -110%);
        white-space: pre-line;
        display: none;
        font-family: ${WEEK_FONT_FAMILY};
      }
      .wv-tip-time { font-weight: 600; }
      .wv-tip-title { opacity: .95; }
    `;
    document.head.appendChild(s);
  }

  // Measure the real left offset + width of the 24h grid (between labels and right edge)
  function getGridMetrics() {
    const row = document.querySelector('#week_view_sunday');
    const leftHalf = document.getElementById('week_view_left_half_div');
    const rightHalf = document.getElementById('week_view_right_half_div');
    if (!row || !leftHalf || !rightHalf) return null;

    const rowRect = row.getBoundingClientRect();
    const leftRect = leftHalf.getBoundingClientRect();
    const rightRect = rightHalf.getBoundingClientRect();

    if (rowRect.width <= 0 || leftRect.width <= 0 || rightRect.width <= 0) return null;

    const gridStartPx = leftRect.left - rowRect.left;
    const gridEndPx = (rightRect.left + rightRect.width) - rowRect.left;
    const gridWidthPx = gridEndPx - gridStartPx;
    if (gridWidthPx <= 0) return null;

    const offsetPct = (gridStartPx / rowRect.width) * 100;
    const widthPct  = (gridWidthPx  / rowRect.width) * 100;
    return { offsetPct, widthPct };
  }

  // ---------- Event normalization / splitting ----------
  function normalizeEvent(ev) {
    const isAllDay = !!(ev?.start?.date && !ev?.start?.dateTime);
    if (isAllDay) {
      const sStr = ev.start.date; // 'YYYY-MM-DD'
      const eStrExcl = ev.end?.date || sStr; // exclusive
      return {
        id: ev.id || ev.iCalUID || Math.random().toString(36).slice(2),
        title: ev.summary || '(no title)',
        isAllDay: true,
        startDateStr: sStr,
        endDateStrExcl: eStrExcl,
        raw: ev
      };
    }

    const s = ev?.start?.dateTime;
    const e = ev?.end?.dateTime;
    if (!s || !e) return null;

    return {
      id: ev.id || ev.iCalUID || Math.random().toString(36).slice(2),
      title: ev.summary || '(no title)',
      isAllDay: false,
      start: new Date(s),
      end:   new Date(e),
      raw: ev
    };
  }

  function splitEventByWeekKeys(evt, weekKeys) {
    const segs = [];

    if (evt.isAllDay) {
      // Include days where startDateStr <= k < endDateStrExcl
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const k = weekKeys[dayIndex];
        if (k >= evt.startDateStr && k < evt.endDateStrExcl) {
          segs.push({ id: evt.id, title: evt.title, isAllDay: true, dayIndex, startMin: 0, endMin: 24*60 });
        }
      }
      return segs;
    }

    // Timed events: compare by local week keys
    const startK = ymdKey(evt.start);
    const endK   = ymdKey(evt.end);

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const k = weekKeys[dayIndex];
      if (k < startK || k > endK) continue;

      const onStart = (k === startK);
      const onEnd   = (k === endK);
      let startMin = onStart ? minutesInTz(evt.start) : 0;
      let endMin   = onEnd   ? minutesInTz(evt.end)   : 24*60;

      if (endMin <= startMin) continue; // ignore zero-width fragments
      segs.push({ id: evt.id, title: evt.title, isAllDay: false, dayIndex, startMin, endMin });
    }
    return segs;
  }

  function assignLanes(daySegs) {
    if (!daySegs || daySegs.length === 0) return [];
    daySegs.sort((a,b) =>
      (b.isAllDay - a.isAllDay) ||
      (a.startMin - b.startMin) ||
      ((b.endMin-b.startMin) - (a.endMin-a.startMin))
    );
    const laneEnds = [];
    for (const seg of daySegs) {
      let lane = 0;
      while (lane < laneEnds.length && !seg.isAllDay && seg.startMin < laneEnds[lane]) lane++;
      seg.lane = lane;
      laneEnds[lane] = Math.max(laneEnds[lane] || 0, seg.isAllDay ? 24*60 : seg.endMin);
    }
    const total = laneEnds.length;
    for (const s of daySegs) s.maxLanes = total;
    return daySegs;
  }

  const displayRange = (weekKeys) => {
    try {
      const parse = k => new Date(k + 'T12:00:00');
      const s = parse(weekKeys[0]), e = parse(weekKeys[6]);
      const fmt = d => d.toLocaleString(undefined, { month: 'short', day: 'numeric' });
      return `${fmt(s)} \u2013 ${fmt(e)}`;
    } catch { return ''; }
  };

  // ---------- Tooltip ----------
  function ensureTooltip() {
    let el = document.querySelector('.wv-tooltip');
    if (!el) {
      el = document.createElement('div');
      el.className = 'wv-tooltip';
      document.body.appendChild(el);
    }
    return el;
  }
  const escapeHtml = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  function fmtTime(mins) {
    const m = Math.max(0, Math.min(1439, Math.round(mins)));
    let h = Math.floor(m / 60);
    const mm = (m % 60).toString().padStart(2, '0');
    const am = h < 12;
    const h12 = (h % 12) || 12;
    return `${h12}:${mm}${am ? 'am' : 'pm'}`;
  }
  function setTip(el, seg) {
    if (seg.isAllDay) {
      el.innerHTML = `<span class="wv-tip-time">All day</span>\n<span class="wv-tip-title">${escapeHtml(seg.title || '')}</span>`;
    } else {
      el.innerHTML = `<span class="wv-tip-time">${fmtTime(seg.startMin)} \u2013 ${fmtTime(seg.endMin)}</span>\n<span class="wv-tip-title">${escapeHtml(seg.title || '')}</span>`;
    }
  }

  // ---------- Core render (with measured grid) ----------
  function renderWeekWithMetrics(anchorDate, events, metrics) {
    ensureStyles();

    // Make each row a positioning context & clear old pills
    DAY_NODE_IDS.forEach(sel => {
      const $row = $(sel);
      if ($row.css('position') === 'static') $row.css('position', 'relative');
      $row.find('.wv-event').remove();
    });

    // Week keys & header
    const startKey = startOfWeekSunKey(anchorDate);
    const weekKeys = Array.from({length:7}, (_, i) => addDaysKey(startKey, i));
    const header = $(HEADER_ID);
    if (header.length) header.text(displayRange(weekKeys));

    // Normalize/split
    const norm = (events || []).map(normalizeEvent).filter(Boolean);
    const byDay = Array.from({length:7}, () => []);
    for (const ev of norm) {
      for (const seg of splitEventByWeekKeys(ev, weekKeys)) byDay[seg.dayIndex].push(seg);
    }

    // Theme
    const pillBg = String(window.color_accent_2 || '#3b82f6');
    const pillFg = String(window.color_background || '#111');
    const laneHeight = 18, topPadding = 4, totalMinutes = 24 * 60;

    const { offsetPct, widthPct: gridWidthPct } = metrics;

    for (let d = 0; d < 7; d++) {
      const $row = $(DAY_NODE_IDS[d]);
      if (!$row.length) continue;

      const segs = assignLanes(byDay[d]);
      for (const seg of segs) {
        const isAllDay = !!seg.isAllDay;

        const leftPct  = isAllDay
          ? offsetPct
          : offsetPct + (seg.startMin / totalMinutes) * gridWidthPct;

        const widthPct = isAllDay
          ? gridWidthPct
          : ((clamp(seg.endMin, seg.startMin, totalMinutes) - seg.startMin) / totalMinutes) * gridWidthPct;

        const $pill = $('<div class="wv-event"></div>');
        if (isAllDay) $pill.addClass('wv-all-day');

        $pill
          .text(seg.title)
          .css({
            left: `${leftPct}%`,
            width: `${Math.max(widthPct, 1.2)}%`,
            top: `${topPadding + seg.lane * laneHeight}px`,
            // Apply opacity to bg/border only (keeps text crisp)
            backgroundColor: hexToRgba(pillBg, WEEK_PILL_OPACITY),
            border: `1px solid ${hexToRgba(pillFg, Math.min(1, WEEK_PILL_OPACITY * 0.6))}`,
            color: pillFg
          })
          .data('seg', seg);
        $row.append($pill);
      }
    }

    // Tooltips (delegated, wire once)
    if (!renderWeekWithMetrics._tipsWired) {
      renderWeekWithMetrics._tipsWired = true;
      let tipEl = null;

      $(document).on('mouseenter', '.wv-event', function (e) {
        const seg = $(this).data('seg');
        if (!seg) return;
        tipEl = ensureTooltip();
        const bg  = String(window.color_background || '#111');
        const acc = String(window.color_accent_2 || '#fff');
        tipEl.style.background  = bg;
        tipEl.style.borderColor = acc;
        tipEl.style.color       = acc;
        setTip(tipEl, seg);
        tipEl.style.display = 'block';
        tipEl.style.left = e.clientX + 'px';
        tipEl.style.top  = e.clientY + 'px';
      });

      $(document).on('mousemove', '.wv-event', function (e) {
        if (!tipEl) return;
        tipEl.style.left = e.clientX + 'px';
        tipEl.style.top  = e.clientY + 'px';
      });

      $(document).on('mouseleave', '.wv-event', function () {
        if (tipEl) tipEl.style.display = 'none';
      });
    }
  }

  // ---------- Wrapper that waits for grid readiness ----------
  async function render_week_from_google(anchorDate = new Date()) {
    try {
      // Prefer all calendars; fall back to primary
      let events = window._imported_google_events;
      if (!Array.isArray(events)) {
        events = await new Promise(resolve => {
          chrome.storage?.local?.get(['gcal_events_all','gcal_events_primary'], data =>
            resolve(data?.gcal_events_all || data?.gcal_events_primary || [])
          );
        });
      }

      // Wait for measurable grid (fixes left-aligned on view change)
      const MAX_TRIES = 60; // ~3s @50ms
      let metrics = null;
      for (let i = 0; i < MAX_TRIES; i++) {
        metrics = getGridMetrics();
        if (metrics && metrics.widthPct > 1) break;
        await new Promise(r => setTimeout(r, 50));
      }
      if (!metrics) metrics = { offsetPct: 16.67, widthPct: 83.33 }; // bootstrap fallback

      renderWeekWithMetrics(anchorDate, events, metrics);
    } catch (e) {
      console.warn('[WeekView] render error:', e);
    }
  }

  // Expose
  window.render_week_from_google = render_week_from_google;

  // Repaint on updates & resizes
  chrome?.runtime?.onMessage?.addListener((msg) => {
    if (msg?.type === 'gcal:updated') render_week_from_google();
  });
  window.addEventListener('resize', () => render_week_from_google(), { passive: true });
})();
