// ===== WeekViewFromGoogle.js =====
// Positions events inside your actual time grid band, handles timezones,
// paints all-day events full-width, and shows a custom hover tooltip.
//
// Optional: set window.APP_TIME_ZONE = 'America/New_York' before this loads.

(() => {
  const DAY_IDS = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  const DAY_NODE_IDS = DAY_IDS.map(d => `#week_view_${d}`);
  const HEADER_ID = '#top_dock_date_DoW_range';
  const STYLE_TAG_ID = 'wv-event-style';

  // ---------- Timezone helpers ----------
  const APP_TZ = window.APP_TIME_ZONE || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';

  const fYMD = new Intl.DateTimeFormat('en-CA', { // "YYYY-MM-DD"
    timeZone: APP_TZ, year: 'numeric', month: '2-digit', day: '2-digit'
  });
  const fHM = new Intl.DateTimeFormat('en-US', {
    timeZone: APP_TZ, hour: '2-digit', minute: '2-digit', hour12: false
  });

  function ymdKey(dateLike) { return fYMD.format(new Date(dateLike)); }
  function minutesInTz(dateLike) {
    const parts = fHM.formatToParts(new Date(dateLike));
    const h = +parts.find(p => p.type === 'hour').value;
    const m = +parts.find(p => p.type === 'minute').value;
    return h * 60 + m;
  }
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
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  function textColorFor(bgHex, fallback = '#111') {
    try {
      const hex = (bgHex || '').replace('#', '');
      if (hex.length !== 6) return fallback;
      const r = parseInt(hex.slice(0,2), 16);
      const g = parseInt(hex.slice(2,4), 16);
      const b = parseInt(hex.slice(4,6), 16);
      const L = 0.299*r + 0.587*g + 0.114*b;
      return L > 160 ? '#111111' : '#FFFFFF';
    } catch { return fallback; }
  }

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
        z-index: 3000;          /* only pills sit above */
        opacity:.98;
        cursor:default;
        pointer-events: auto;
      }
      .wv-all-day { height:18px; line-height:18px; }

      .wv-tooltip {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        background: rgba(0,0,0,0.85);
        color: #fff;
        border: 1px solid #ffffff22;
        border-radius: 6px;
        padding: 6px 8px;
        font-size: 12px;
        line-height: 1.3;
        box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        transform: translate(-50%, -110%);
        white-space: pre-line;
        display: none;
      }
      .wv-tip-time { font-weight: 600; }
      .wv-tip-title { opacity: .95; }
    `;
    document.head.appendChild(s);
  }

  // Measure grid band (between weekday labels and right edge)
  function getGridMetrics() {
    try {
      const row = document.querySelector('#week_view_sunday');
      const leftHalf = document.getElementById('week_view_left_half_div');
      const rightHalf = document.getElementById('week_view_right_half_div');
      if (!row || !leftHalf || !rightHalf) throw new Error('missing nodes');

      const rowRect = row.getBoundingClientRect();
      const leftRect = leftHalf.getBoundingClientRect();
      const rightRect = rightHalf.getBoundingClientRect();

      const gridStartPx = leftRect.left - rowRect.left;
      const gridEndPx = (rightRect.left + rightRect.width) - rowRect.left;
      const gridWidthPx = gridEndPx - gridStartPx;

      const offsetPct = (gridStartPx / rowRect.width) * 100;
      const widthPct  = (gridWidthPx  / rowRect.width) * 100;

      return { offsetPct, widthPct };
    } catch {
      // fallback to your Bootstrap fractions
      return { offsetPct: 16.67, widthPct: 83.33 };
    }
  }

  // ---------- All-day date helpers (avoid timezone drift) ----------
  function shiftYmd(ymd, days) {
    const dt = new Date(ymd + 'T00:00:00Z'); // work in UTC
    dt.setUTCDate(dt.getUTCDate() + days);
    return dt.toISOString().slice(0, 10); // YYYY-MM-DD
  }

  // ---------- Event normalization / splitting ----------
  function normalizeEvent(ev) {
    const isAllDay = !!(ev?.start?.date && !ev?.start?.dateTime);
    const s = ev?.start?.dateTime || ev?.start?.date;
    const e = ev?.end?.dateTime   || ev?.end?.date;
    if (!s || !e) return null;

    const color = (ev._calendarBg || ev.color) || (window.color_accent_2 || '#3b82f6');

    if (isAllDay) {
      // Keep YMDs as strings; make end inclusive by shifting -1 day (end is exclusive).
      const startYmd = ev.start.date;
      const endYmd   = shiftYmd(ev.end.date, -1);
      return {
        id: ev.id || ev.iCalUID || Math.random().toString(36).slice(2),
        title: ev.summary || '(no title)',
        isAllDay: true,
        color,
        startYmd,
        endYmd,
        raw: ev
      };
    } else {
      const start = new Date(s);
      const end   = new Date(e);
      return {
        id: ev.id || ev.iCalUID || Math.random().toString(36).slice(2),
        title: ev.summary || '(no title)',
        isAllDay: false,
        color,
        start, end,
        raw: ev
      };
    }
  }

  function splitEventByWeekKeys(evt, weekKeys) {
    const segs = [];

    if (evt.isAllDay) {
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const k = weekKeys[dayIndex];
        if (k >= evt.startYmd && k <= evt.endYmd) {
          segs.push({
            id: evt.id, title: evt.title, color: evt.color, isAllDay: true,
            dayIndex, startMin: 0, endMin: 24 * 60
          });
        }
      }
      return segs;
    }

    const startKey = ymdKey(evt.start);
    const endKey   = ymdKey(evt.end);

    for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
      const k = weekKeys[dayIndex];
      if (k < startKey || k > endKey) continue;

      const onStart = (k === startKey);
      const onEnd   = (k === endKey);
      let startMin  = onStart ? minutesInTz(evt.start) : 0;
      let endMin    = onEnd   ? minutesInTz(evt.end)   : 24 * 60;

      if (endMin <= startMin) continue; // skip zero-width fragments
      segs.push({
        id: evt.id, title: evt.title, color: evt.color, isAllDay: false,
        dayIndex, startMin, endMin
      });
    }
    return segs;
  }

  function assignLanes(daySegs) {
    if (!daySegs || daySegs.length === 0) return [];
    daySegs.sort((a,b) =>
      (b.isAllDay - a.isAllDay) ||
      (a.startMin - b.startMin) ||
      ((b.endMin - b.startMin) - (a.endMin - a.startMin))
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

  function displayRange(weekKeys) {
    try {
      const parse = k => new Date(k + 'T12:00:00');
      const s = parse(weekKeys[0]), e = parse(weekKeys[6]);
      const fmt = d => d.toLocaleString(undefined, { month: 'short', day: 'numeric' });
      return `${fmt(s)} \u2013 ${fmt(e)}`;
    } catch { return ''; }
  }

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
  function formatTime(mins) {
    const m = Math.max(0, Math.min(1439, Math.round(mins)));
    let h = Math.floor(m / 60);
    const mm = (m % 60).toString().padStart(2, '0');
    const am = h < 12;
    const h12 = (h % 12) || 12;
    return `${h12}:${mm}${am ? 'am' : 'pm'}`;
  }
  function setTooltipContent(el, seg) {
    if (seg.isAllDay) {
      el.innerHTML = `<span class="wv-tip-time">All day</span>\n<span class="wv-tip-title">${escapeHtml(seg.title || '')}</span>`;
    } else {
      const start = formatTime(seg.startMin);
      const end   = formatTime(seg.endMin);
      el.innerHTML = `<span class="wv-tip-time">${start} \u2013 ${end}</span>\n<span class="wv-tip-title">${escapeHtml(seg.title || '')}</span>`;
    }
  }
  function positionTooltip(el, x, y) {
    el.style.left = `${x}px`;
    el.style.top  = `${y}px`;
  }
  function escapeHtml(s) {
    return String(s)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  // ---------- Render ----------
  function renderWeekWithTz(anchorDate = new Date(), events = []) {
    ensureStyles();

    // Make rows positioned containers & clear old pills; DO NOT change z-index/positioning of your grid/labels.
    DAY_NODE_IDS.forEach(sel => {
      const $row = $(sel);
      if ($row.css('position') === 'static') $row.css('position', 'relative');
      $row.find('.wv-event').remove();
    });

    // Week keys (Sunday..Saturday) in APP_TZ
    const startKey = startOfWeekSunKey(anchorDate);
    const weekKeys = Array.from({length:7}, (_, i) => addDaysKey(startKey, i));

    // Header label
    const header = $(HEADER_ID);
    if (header.length) header.text(displayRange(weekKeys));

    // Normalize + split
    const norm = (events || []).map(normalizeEvent).filter(Boolean);
    const byDay = Array.from({length:7}, () => []);
    for (const ev of norm) {
      for (const seg of splitEventByWeekKeys(ev, weekKeys)) byDay[seg.dayIndex].push(seg);
    }

    // Grid metrics (important!)
    const { offsetPct, widthPct: gridWidthPct } = getGridMetrics();

    // Theme defaults
    const defaultBg = (window.color_accent_2 || '#3b82f6').toString();
    const laneHeight = 18, topPadding = 4, totalMinutes = 24 * 60;

    // Layout & paint
    for (let d = 0; d < 7; d++) {
      const $row = $(DAY_NODE_IDS[d]);
      if (!$row.length) continue;

      const segs = assignLanes(byDay[d]);
      for (const seg of segs) {
        const isAllDay = !!seg.isAllDay;
        const bg = seg.color || defaultBg;
        const fg = textColorFor(bg, (window.color_background || '#111').toString());

        const leftPct  = isAllDay
          ? offsetPct
          : offsetPct + (seg.startMin / totalMinutes) * gridWidthPct;

        const widthPct = isAllDay
          ? gridWidthPct
          : ((clamp(seg.endMin, seg.startMin, totalMinutes) - seg.startMin) / totalMinutes) * gridWidthPct;

        const $pill = $('<div class="wv-event"></div>');
        if (isAllDay) $pill.addClass('wv-all-day');

        // Tooltip data
        $pill.data('seg', { title: seg.title, startMin: seg.startMin, endMin: seg.endMin, isAllDay: seg.isAllDay });

        $pill
          .text(seg.title)
          .css({
            left: `${leftPct}%`,
            width: `${Math.max(widthPct, 1.2)}%`,
            top: `${topPadding + seg.lane * laneHeight}px`,
            backgroundColor: bg,
            color: fg,
            border: `1px solid ${fg}22`
          });

        $row.append($pill);
      }
    }

    // Wire tooltip handlers once (delegated)
    if (!renderWeekWithTz._tipsWired) {
      renderWeekWithTz._tipsWired = true;

      const $doc = $(document);
      let tipEl = null;

      $doc.on('mouseenter', '.wv-event', function (e) {
        const seg = $(this).data('seg');
        if (!seg) return;
        tipEl = ensureTooltip();
        const bg = window.color_background || '#111';
        const bd = (window.color_accent_2 || '#fff') + '22';
        tipEl.style.background = bg;
        tipEl.style.borderColor = bd;
        tipEl.style.color = textColorFor(bg, '#fff');
        setTooltipContent(tipEl, seg);
        tipEl.style.display = 'block';
        positionTooltip(tipEl, e.clientX, e.clientY);
      });

      $doc.on('mousemove', '.wv-event', function (e) {
        if (!tipEl) return;
        positionTooltip(tipEl, e.clientX, e.clientY);
      });

      $doc.on('mouseleave', '.wv-event', function () {
        if (tipEl) tipEl.style.display = 'none';
      });
    }
  }

  // Public entry
  async function render_week_from_google(date = new Date()) {
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
      renderWeekWithTz(date, events);
    } catch (e) {
      console.warn('[WeekView] render error:', e);
    }
  }

  window.render_week_from_google = render_week_from_google;

  // Repaint on updates & resizes (so the measured grid stays correct)
  chrome?.runtime?.onMessage?.addListener((msg) => {
    if (msg?.type === 'gcal:updated') render_week_from_google();
  });
  window.addEventListener('resize', () => render_week_from_google(), { passive: true });
})();
