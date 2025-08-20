// ===== DayViewFromGoogle.js =====
// Paints Google Calendar events into your Day view under the tracker.

// ---- Back-compat shim to stop spinner + queue early calls ----
window.__DAY_RENDER_QUEUE__ ||= [];
if (!window.render_day_from_google) {
  // Queue args; the real function will drain this.
  window.render_day_from_google = (...args) => window.__DAY_RENDER_QUEUE__.push(args);
}


// Optional knobs (set before this file loads, or set + call render_day_from_google()):
window.DAY_PILL_OPACITY = 0.7;     // 0..1, applied to BG/border only (default 0.85)
//   window.DAY_FONT_FAMILY  = "'Lexend Deca', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
//   window.APP_TIME_ZONE    = 'America/New_York'

(() => {
  'use strict';

  const DAY_ROOT        = '#top_dock_day';
  const RULER_ID        = '#top_dock_ruler';
  const TRACKER_AFTER   = '#pct_of_day_tracker_time_early_div'; // insert events after this
  const BAND_ID         = 'day_events_band';
  const STYLE_TAG_ID    = 'dv-event-style';

  // ---------- knobs ----------
  const DAY_PILL_OPACITY = (typeof window.DAY_PILL_OPACITY === 'number')
    ? Math.max(0, Math.min(1, window.DAY_PILL_OPACITY))
    : 0.85;

  const DAY_FONT_FAMILY =
    window.DAY_FONT_FAMILY ||
    window.WEEK_FONT_FAMILY ||
    window.PRESENT_FONT_FAMILY ||
    "'Lexend Deca', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";

  // ---------- TZ helpers ----------
  const APP_TZ =
    window.APP_TIME_ZONE ||
    Intl.DateTimeFormat().resolvedOptions().timeZone ||
    'UTC';

  const fYMD = new Intl.DateTimeFormat('en-CA', { timeZone: APP_TZ, year: 'numeric', month: '2-digit', day: '2-digit' });
  const fHM  = new Intl.DateTimeFormat('en-US', { timeZone: APP_TZ, hour: '2-digit', minute: '2-digit', hour12: false });

  const ymdKey = (dLike) => fYMD.format(new Date(dLike));
  const minutesInTz = (dLike) => {
    const parts = fHM.formatToParts(new Date(dLike));
    const h = +parts.find(p => p.type === 'hour').value;
    const m = +parts.find(p => p.type === 'minute').value;
    return h * 60 + m;
  };
  const decOneDayKey = (ymd) => { const d = new Date(ymd + 'T12:00:00'); d.setDate(d.getDate() - 1); return fYMD.format(d); };

  // ---------- utils ----------
  const clamp = (x,a,b) => Math.max(a, Math.min(b, x));
  function hexToRgba(hex, a = 1) {
    let h = String(hex || '').replace('#','').trim();
    if (h.length === 3) h = h.split('').map(c=>c+c).join('');
    const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }

  // ---------- styles ----------
  function ensureStyles() {
    // Update if exists so knob changes take effect
    let s = document.getElementById(STYLE_TAG_ID);
    if (!s) { s = document.createElement('style'); s.id = STYLE_TAG_ID; document.head.appendChild(s); }
    s.textContent = `
      #${BAND_ID} {
        position: relative;
        width: 100%;
        margin-top: 10px;
        min-height: 28px;
      }
      .dv-event {
        position:absolute;
        height:16px;
        line-height:16px;
        font-size:12px;
        border-radius:4px;
        padding:0 6px;
        overflow:hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
        z-index: 3500;
        cursor:default;
        pointer-events:auto;
        font-family: ${DAY_FONT_FAMILY};
      }
      .dv-all-day { height:18px; line-height:18px; }

      .dv-tooltip {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        border: 1px solid transparent;
        border-radius: 6px;
        padding: 6px 8px;
        font-size: 12px;
        line-height: 1.3;
        box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        transform: translate(-50%, -110%);
        white-space: pre-line;
        display: none;
        font-family: ${DAY_FONT_FAMILY};
      }
      .dv-tip-time  { font-weight: 600; }
      .dv-tip-title { opacity: .95; }
    `;
  }

  function ensureBand() {
    let band = document.getElementById(BAND_ID);
    if (!band) {
      const anchor =
        document.querySelector(TRACKER_AFTER) ||
        document.querySelector(DAY_ROOT);
      if (!anchor || !anchor.parentNode) return null;
      band = document.createElement('div');
      band.id = BAND_ID;
      anchor.parentNode.insertBefore(band, anchor.nextSibling);
    }
    return band;
  }

  // Measure actual hour-grid start/width from the ruler’s two halves
  function getDayGridMetrics() {
    const ruler  = document.querySelector(RULER_ID);
    const halves = ruler ? ruler.querySelectorAll(':scope > .col-sm-6') : null;
    if (!ruler || !halves || halves.length < 2) return null;

    const rRect    = ruler.getBoundingClientRect();
    const leftRect = halves[0].getBoundingClientRect();
    const rightRect= halves[1].getBoundingClientRect();

    const gridStartPx = leftRect.left - rRect.left;
    const gridEndPx   = (rightRect.left + rightRect.width) - rRect.left;
    const gridWidthPx = gridEndPx - gridStartPx;

    if (rRect.width <= 0 || gridWidthPx <= 0) return null;

    return {
      offsetPct: (gridStartPx / rRect.width) * 100,
      widthPct:  (gridWidthPx  / rRect.width) * 100
    };
  }

  // Wait for measurable/stable grid (fixes “aligns only after DevTools opens”)
  function waitForStableDayGrid(maxFrames = 60) {
    return new Promise(resolve => {
      let prev = null, frames = 0;
      const eps = 0.5;
      const step = () => {
        const m = getDayGridMetrics();
        const ok = !!(m && m.widthPct > 1);
        const cur = ok ? m : null;

        let stable = false;
        if (prev && cur) {
          stable =
            Math.abs(cur.offsetPct - prev.offsetPct) < eps &&
            Math.abs(cur.widthPct  - prev.widthPct)  < eps;
        }

        frames++;
        if (ok && (stable || frames >= maxFrames)) {
          resolve(cur || m);
        } else {
          prev = cur;
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    });
  }

  // ---------- normalization ----------
  function normalizeEvent(ev) {
    const isAllDay = !!(ev?.start?.date && !ev?.start?.dateTime);
    const s = ev?.start?.dateTime || ev?.start?.date;
    const e = ev?.end?.dateTime   || ev?.end?.date;
    if (!s || !e) return null;

    let start = new Date(s);
    let end   = new Date(e);

    const startDateRaw = ev?.start?.date || null; // 'YYYY-MM-DD'
    const endDateRaw   = ev?.end?.date   || null; // exclusive

    if (isAllDay) end = new Date(end.getTime() - 1); // inclusive display

    return {
      id: ev.id || ev.iCalUID || Math.random().toString(36).slice(2),
      title: ev.summary || '(no title)',
      start, end, isAllDay,
      startDateRaw, endDateRaw,
      raw: ev
    };
  }

  function segmentForDay(evt, targetKey) {
    if (evt.isAllDay && evt.startDateRaw && evt.endDateRaw) {
      const sRaw = evt.startDateRaw;
      const eInc = decOneDayKey(evt.endDateRaw);
      if (targetKey < sRaw || targetKey > eInc) return null;
      return { id: evt.id, title: evt.title, isAllDay: true, startMin: 0, endMin: 24*60 };
    }

    const sKey = ymdKey(evt.start);
    const eKey = ymdKey(evt.end);
    if (targetKey < sKey || targetKey > eKey) return null;

    const onStart = (targetKey === sKey);
    const onEnd   = (targetKey === eKey);
    let startMin  = onStart ? minutesInTz(evt.start) : 0;
    let endMin    = onEnd   ? minutesInTz(evt.end)   : 24*60;
    if (endMin <= startMin) return null;

    return { id: evt.id, title: evt.title, isAllDay: false, startMin, endMin };
  }

  function assignLanes(segs) {
    if (!segs?.length) return [];
    segs.sort((a,b) =>
      (b.isAllDay - a.isAllDay) ||
      (a.startMin - b.startMin) ||
      ((b.endMin-b.startMin) - (a.endMin-a.startMin))
    );
    const laneEnds = [];
    for (const s of segs) {
      let lane = 0;
      while (lane < laneEnds.length && !s.isAllDay && s.startMin < laneEnds[lane]) lane++;
      s.lane = lane;
      laneEnds[lane] = Math.max(laneEnds[lane] || 0, s.isAllDay ? 24*60 : s.endMin);
    }
    const total = laneEnds.length;
    for (const s of segs) s.maxLanes = total;
    return segs;
  }

  // ---------- tooltip ----------
  function ensureTooltip() {
    let el = document.querySelector('.dv-tooltip');
    if (!el) { el = document.createElement('div'); el.className = 'dv-tooltip'; document.body.appendChild(el); }
    return el;
  }
  const formatTime = (mins) => {
    const m = Math.max(0, Math.min(1439, Math.round(mins)));
    const h = Math.floor(m/60), mm = String(m%60).padStart(2,'0');
    const am = h < 12, h12 = (h % 12) || 12;
    return `${h12}:${mm}${am?'am':'pm'}`;
  };
  const escapeHtml = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  function setTooltipContent(el, seg) {
    const bg  = String(window.color_background || '#111');
    const acc = String(window.color_accent_2 || '#3b82f6');
    el.style.background  = bg;
    el.style.borderColor = acc;
    el.style.color       = acc;
    el.innerHTML = seg.isAllDay
      ? `<span class="dv-tip-time">All day</span>\n<span class="dv-tip-title">${escapeHtml(seg.title||'')}</span>`
      : `<span class="dv-tip-time">${formatTime(seg.startMin)} \u2013 ${formatTime(seg.endMin)}</span>\n<span class="dv-tip-title">${escapeHtml(seg.title||'')}</span>`;
  }
  const positionTooltip = (el, x, y) => { el.style.left = `${x}px`; el.style.top = `${y}px`; };

  // ---------- render ----------
  function renderDayWithTz(date = new Date(), events = [], metrics) {
    const $root  = $(DAY_ROOT);
    const $ruler = $(RULER_ID);
    if (!$root.length || !$ruler.length || !metrics) return;

    ensureStyles();
    const band = ensureBand();
    if (!band) return;

    const $band = $(band);
    if ($band.css('position') === 'static') $band.css('position','relative');
    $band.find('.dv-event').remove();

    const dayKey       = ymdKey(date);
    const normSegs     = [];
    for (const ev of (events || [])) {
      const n = normalizeEvent(ev); if (!n) continue;
      const s = segmentForDay(n, dayKey); if (s) normSegs.push(s);
    }
    const laid = assignLanes(normSegs);

    const { offsetPct, widthPct: gridW } = metrics;
    const laneHeight   = 18;
    const topBase      = 0;
    const totalMinutes = 24 * 60;

    const pillBg = String(window.color_accent_2 || '#3b82f6');
    const pillFg = String(window.color_background || '#111');

    let maxLane = -1;
    for (const s of laid) {
      if (s.lane > maxLane) maxLane = s.lane;

      const leftPct = s.isAllDay
        ? offsetPct
        : offsetPct + (s.startMin / totalMinutes) * gridW;

      const wPct = s.isAllDay
        ? gridW
        : ((clamp(s.endMin, s.startMin, totalMinutes) - s.startMin) / totalMinutes) * gridW;

      const $pill = $('<div class="dv-event"></div>');
      if (s.isAllDay) $pill.addClass('dv-all-day');
      $pill.data('seg', s);

      $pill.text(s.title).css({
        left: `${leftPct}%`,
        width: `${Math.max(wPct, 1.2)}%`,
        top: `${topBase + s.lane * laneHeight}px`,
        backgroundColor: hexToRgba(pillBg, DAY_PILL_OPACITY),
        border: `1px solid ${hexToRgba(pillFg, Math.min(1, DAY_PILL_OPACITY * 0.6))}`,
        color: pillFg
      });

      $band.append($pill);
    }

    const needed = (maxLane + 1) * laneHeight + topBase + 2;
    $band.css('min-height', `${Math.max(28, needed)}px`);

    if (!renderDayWithTz._tipsWired) {
      renderDayWithTz._tipsWired = true;
      let tipEl = null;
      $(document)
        .on('mouseenter', '.dv-event', function (e) {
          const seg = $(this).data('seg'); if (!seg) return;
          tipEl = ensureTooltip();
          setTooltipContent(tipEl, seg);
          tipEl.style.display = 'block';
          positionTooltip(tipEl, e.clientX, e.clientY);
        })
        .on('mousemove', '.dv-event', function (e) {
          if (tipEl) positionTooltip(tipEl, e.clientX, e.clientY);
        })
        .on('mouseleave', '.dv-event', function () {
          if (tipEl) tipEl.style.display = 'none';
        });
    }
  }

  // Public entry (waits for stable grid before painting)
  async function render_day_from_google(date = new Date()) {
    try {
      let events = window._imported_google_events;
      if (!Array.isArray(events)) {
        events = await new Promise(resolve => {
          chrome.storage?.local?.get(['gcal_events_all','gcal_events_primary'], data =>
            resolve(data?.gcal_events_all || data?.gcal_events_primary || [])
          );
        });
      }

      // If grid isn't measurable yet, wait briefly (fixes initial misalignment)
      let metrics = getDayGridMetrics();
      if (!metrics || metrics.widthPct <= 1) {
        metrics = await waitForStableDayGrid(60); // ~1s max
      }
      renderDayWithTz(date, events, metrics);
    } catch (e) {
      console.warn('[DayView] render error:', e);
    }
  }

  // Expose real function and flush any queued calls from the shim
  window.render_day_from_google = render_day_from_google;
  if (Array.isArray(window.__DAY_RENDER_QUEUE__)) {
    try {
      for (const args of window.__DAY_RENDER_QUEUE__) render_day_from_google(...args);
    } finally {
      window.__DAY_RENDER_QUEUE__.length = 0;
    }
  }


  // Repaint on updates & resizes
  chrome?.runtime?.onMessage?.addListener((msg) => {
    if (msg?.type === 'gcal:updated') render_day_from_google();
  });
  window.addEventListener('resize', () => render_day_from_google(), { passive: true });

})();
