// ===== PresentViewFromGoogle.js =====
// Present view pills use real times for X/width. Vertical position is:
//   baseline (auto: just below time chip) + USER OFFSET (persisted, adjustable).

(() => {
  'use strict';

  const STYLE_ID   = 'present-view-style';
  const OVERLAY_ID = 'present_events_overlay';

  // ---------- knobs ----------
  const BASE_GAP_DEFAULT      = 66;    // base gap below the time chip
  const PILL_H                = 32;
  const PILL_FONT_SIZE        = 18;
  const PILL_GAP              = 8;
  const PILL_BG_ALPHA         = .9;
  const PILL_BORDER_ALPHA     = 0.35;
  const FUTURE_OPACITY        = .9;
  const ONGOING_OPACITY       = .70;
  const PAST_FADE_MIN         = 120;   // minutes to completely fade
  const MAX_PILLS             = 6;
  const LS_KEY_OFFSET         = 'present_view_user_y_offset'; // persistent offset key

  // Allow optional global override of the base gap
  const BASE_GAP = (typeof window.PRESENT_VIEW_BASE_GAP === 'number')
    ? window.PRESENT_VIEW_BASE_GAP
    : BASE_GAP_DEFAULT;

  // ---------- helpers ----------
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));

  function hexToRgba(hex, a = 1) {
    try {
      let h = String(hex || '').replace('#','').trim();
      if (h.length === 3) h = h.split('').map(c=>c+c).join('');
      const r = parseInt(h.slice(0,2),16), g = parseInt(h.slice(2,4),16), b = parseInt(h.slice(4,6),16);
      return `rgba(${r},${g},${b},${a})`;
    } catch { return `rgba(0,0,0,${a})`; }
  }
  function escapeHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }
  function fmt12(d) {
    const h = d.getHours(), m = d.getMinutes();
    const am = h < 12, h12 = (h % 12) || 12, mm = String(m).padStart(2,'0');
    return `${h12}:${mm}${am ? 'am' : 'pm'}`;
  }
  function startOfDay(d){ const x=new Date(d); x.setHours(0,0,0,0); return x; }
  function endOfDay(d){ const x=new Date(d); x.setHours(23,59,59,999); return x; }

  function normalizeEvent(ev){
    const isAllDay = !!(ev?.start?.date && !ev?.start?.dateTime);
    const s = ev?.start?.dateTime || ev?.start?.date;
    const e = ev?.end?.dateTime   || ev?.end?.date;
    if (!s || !e) return null;
    let start = new Date(s);
    let end   = new Date(e);
    if (isAllDay) end = new Date(end.getTime() - 1);
    return {
      id: ev.id || ev.iCalUID || Math.random().toString(36).slice(2),
      title: ev.summary || '(no title)',
      start, end, isAllDay, raw: ev
    };
  }

  // ---------- styles ----------
  function ensureStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = `
      #${OVERLAY_ID} {
        position: absolute;
        left: 0; right: 0;
        pointer-events: none;    /* lets underlying UI receive clicks */
        z-index: 3000;
      }
      .pv-event {
        position: absolute;
        height: ${PILL_H}px;
        line-height: ${PILL_H}px;
        font-size: ${PILL_FONT_SIZE}px;
        font-weight: 700;
        border-radius: 10px;
        padding: 0 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        pointer-events: auto;    /* enables hover on the pills themselves */
        z-index: 2600;
      }
      .pv-tooltip {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        border-radius: 8px;
        padding: 8px 10px;
        font-size: 13px;
        line-height: 1.35;
        white-space: pre-line;
        display: none;
        box-shadow: 0 6px 18px rgba(0,0,0,.35);
        transform: translate(-50%, -110%);
      }
    `;
    document.head.appendChild(s);
  }

  function emphasizeNowTick() {
    const accent = String(window.color_accent_2 || '#3b82f6');
    $('#present_tick_line').css({
      width: '4px',
      backgroundColor: accent,
      boxShadow: 'none',
      zIndex: 4000
    });
  }

  // ---------- persistent vertical offset ----------
  function getUserOffset() {
    if (typeof window.PRESENT_VIEW_Y_OFFSET === 'number') return window.PRESENT_VIEW_Y_OFFSET|0;
    try {
      const v = localStorage.getItem(LS_KEY_OFFSET);
      return v ? (parseInt(v,10) || 0) : 0;
    } catch { return 0; }
  }
  function setUserOffset(px) {
    try { localStorage.setItem(LS_KEY_OFFSET, String(px|0)); } catch {}
  }

  // ---------- geometry ----------
  function computeOverlayTop() {
    const host = document.getElementById('top_dock_present');
    const chip = document.getElementById('present_time_div'); // moving time text
    const user = getUserOffset();

    if (host && chip) {
      const h = host.getBoundingClientRect();
      const c = chip.getBoundingClientRect();
      return Math.max(0, (c.bottom - h.top) + BASE_GAP + user);
    }
    const band = document.getElementById('present_moving_timeline');
    if (host && band) {
      const h = host.getBoundingClientRect();
      const b = band.getBoundingClientRect();
      return Math.max(0, (b.top - h.top) + 10 + BASE_GAP + user);
    }
    return 56 + user;
  }

  function ensureOverlay() {
    let el = document.getElementById(OVERLAY_ID);
    if (!el) {
      const host =
        document.getElementById('top_dock_present') ||
        document.body ||
        document.documentElement;   // last resort

      if (!host) return null;       // DOM not ready yet

      el = document.createElement('div');
      el.id = OVERLAY_ID;
      host.appendChild(el);
    }
    const top = computeOverlayTop();
    if (top != null) el.style.top = `${top}px`;
    el.style.left = '0';
    el.style.right = '0';
    return el;
  }

  function currentTickLeftPx(overlayEl) {
    const tick = document.getElementById('present_tick_line');
    if (!tick) return 0;
    const t = tick.getBoundingClientRect();
    const o = overlayEl.getBoundingClientRect();
    return t.left - o.left;
  }

  // minutes → pixels using the 1-hour span between #pmt_1 and #pmt_2
  function pxPerMinute(overlayEl) {
    const p1 = document.getElementById('pmt_1');
    const p2 = document.getElementById('pmt_2');
    if (p1 && p2) {
      const r1 = p1.getBoundingClientRect();
      const r2 = p2.getBoundingClientRect();
      const hourWidth = Math.abs(r2.left - r1.left);
      if (hourWidth > 0) return hourWidth / 60;
    }
    const band = document.getElementById('present_moving_timeline');
    const o = overlayEl.getBoundingClientRect();
    const w = band ? band.getBoundingClientRect().width : o.width;
    return w / (8 * 60); // fallback: ~8h visible
  }

  // ---------- data ----------
  async function getEvents() {
    if (Array.isArray(window._imported_google_events)) return window._imported_google_events;
    try {
      return await new Promise(resolve => {
        chrome.storage?.local?.get(['gcal_events_all','gcal_events_primary'], data =>
          resolve(data?.gcal_events_all || data?.gcal_events_primary || []));
      });
    } catch { return []; }
  }
  async function getTodaysEvents() {
    const raw = await getEvents();
    const norm = raw.map(normalizeEvent).filter(Boolean);
    const now = new Date();
    const sod = startOfDay(now), eod = endOfDay(now);
    const todays = norm.filter(ev => ev.end >= sod && ev.start <= eod);
    todays.sort((a,b) => a.start - b.start || a.end - b.end);
    return todays;
  }

  // ---------- tooltip ----------
  function ensureTooltip() {
    let el = document.querySelector('.pv-tooltip');
    if (!el) {
      el = document.createElement('div');
      el.className = 'pv-tooltip';
      document.body.appendChild(el);
    }
    return el;
  }
  function showTooltip(seg, x, y) {
    const tip = ensureTooltip();
    const accent = String(window.color_accent_2 || '#3b82f6');
    const bg     = String(window.color_background || '#0f172a');
    tip.style.background = bg;
    tip.style.border = `1px solid ${accent}`;
    tip.style.color = accent;
    const head = seg.isAllDay ? 'All day' : `${fmt12(seg.start)} – ${fmt12(seg.end)}`;
    tip.innerHTML = `<span style="font-weight:700">${head}</span>\n${escapeHtml(seg.title || '')}`;
    tip.style.display = 'block';
    tip.style.left = `${x}px`;
    tip.style.top  = `${y}px`;
  }
  function hideTooltip() {
    const tip = document.querySelector('.pv-tooltip');
    if (tip) tip.style.display = 'none';
  }

  function opacityFor(ev, now) {
    if (now >= ev.start && now <= ev.end) return ONGOING_OPACITY;
    if (now < ev.start) return FUTURE_OPACITY;
    const ageMin = (now - ev.end) / 60000;
    const k = clamp(1 - (ageMin / PAST_FADE_MIN), 0, 1);
    return FUTURE_OPACITY * k;
  }

  // ---------- layout ----------
  async function renderPresent() {
    ensureStyles();
    emphasizeNowTick();

    const overlay = ensureOverlay();
    if (!overlay) {
      // DOM not ready yet; try once shortly but don't spin
      if (!renderPresent._retry) {
        renderPresent._retry = setTimeout(() => {
          renderPresent._retry = null;
          renderPresent();
        }, 50);
      }
      return;
    }

    const $overlay = $(overlay).empty();

    const accent = String(window.color_accent_2 || '#3b82f6');
    const bg     = String(window.color_background || '#0f172a');

    const now = new Date();
    const allToday = await getTodaysEvents();

    const fadeCutoff = new Date(now.getTime() - PAST_FADE_MIN*60000);
    const visible = allToday.filter(ev => ev.end >= fadeCutoff).slice(0, MAX_PILLS);

    // X mapping
    const nowX = currentTickLeftPx(overlay);
    const ppm  = pxPerMinute(overlay);

    const oRect = overlay.getBoundingClientRect();
    const leftBound  = 0;
    const rightBound = oRect.width;

    let y = 0;
    for (const ev of visible) {
      const startMinFromNow = (ev.start - now) / 60000;
      const endMinFromNow   = (ev.end   - now) / 60000;

      let x1 = nowX + startMinFromNow * ppm;
      let x2 = nowX + endMinFromNow   * ppm;

      // offscreen cull
      if (x2 <= leftBound || x1 >= rightBound) continue;

      const x1c = clamp(x1, leftBound, rightBound);
      const x2c = clamp(x2, leftBound, rightBound);
      const width = Math.max(8, x2c - x1c);

      const $pill = $('<div class="pv-event"></div>')
        .text(ev.title || '(no title)')
        .css({
          left:  `${x1c}px`,
          top:   `${y}px`,
          width: `${width}px`,
          height:`${PILL_H}px`,
          backgroundColor: hexToRgba(accent, PILL_BG_ALPHA),
          border: `1px solid ${hexToRgba(accent, PILL_BORDER_ALPHA)}`,
          color: bg,
          opacity: opacityFor(ev, now)
        });

      $pill.data('seg', { title: ev.title, start: ev.start, end: ev.end, isAllDay: ev.isAllDay });
      $overlay.append($pill);
      y += PILL_H + PILL_GAP;
    }

    // Hover (delegated once)
    if (!renderPresent._hoverBound) {
      renderPresent._hoverBound = true;
      $(document)
        .on('mouseenter', '.pv-event', function(e){
          const seg = $(this).data('seg'); if (!seg) return;
          showTooltip(seg, e.clientX, e.clientY);
        })
        .on('mousemove', '.pv-event', function(e){
          const tip = document.querySelector('.pv-tooltip');
          if (tip && tip.style.display === 'block') {
            tip.style.left = `${e.clientX}px`;
            tip.style.top  = `${e.clientY}px`;
          }
        })
        .on('mouseleave', '.pv-event', hideTooltip);
    }
  }

  // Public API: vertical adjustment
  window.set_present_view_y_offset = function set_present_view_y_offset(px){
    setUserOffset(px|0);
    renderPresent();
  };
  window.bump_present_view_y_offset = function bump_present_view_y_offset(delta){
    const v = getUserOffset() + (delta|0);
    setUserOffset(v);
    renderPresent();
  };

  // Public hook for your showTime() tick
  async function present_view_relayout() { try { renderPresent(); } catch {} }
  window.present_view_relayout = present_view_relayout;

  // Repaint triggers
  chrome?.runtime?.onMessage?.addListener((msg) => {
    if (msg?.type === 'gcal:updated') present_view_relayout();
  });
  window.addEventListener('resize', () => present_view_relayout(), { passive: true });
  document.addEventListener('visibilitychange', () => { if (!document.hidden) present_view_relayout(); });

  // Initial paint — only after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => present_view_relayout(), { once: true });
  } else {
    present_view_relayout();
  }
})();

// Back-compat for older View_Changer calls:
if (!window.render_present_from_google) {
  window.render_present_from_google = function () {
    if (typeof window.present_view_relayout === 'function') {
      window.present_view_relayout();
    }
  };
}
