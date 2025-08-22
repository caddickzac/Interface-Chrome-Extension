// ===== MonthViewFromGoogle.js =====
// Stacks pills per day in the month grid (cells 1..42). Limits overflow with "+N more".
// Theme: pill bg = color_accent_2 (with opacity knob), pill text = color_background.
// All-day events use date strings (no timezone drift). Timed events respect APP_TZ.

// early guards so calls don't explode if month file isn't loaded yet
window.month_view_apply_theme ||= function(){};
window.syncMonthThemeVars     ||= window.month_view_apply_theme;


// Knobs (set these BEFORE this file loads, or set them and call render_month_from_google()):
//   window.MONTH_MAX_PER_DAY   = 4
//   window.MONTH_SHOW_TIMES    = true
window.MONTH_PILL_OPACITY  = 0.6;      // 0..1 (applied to bg only)
//   window.MONTH_FONT_FAMILY   = "'Lexend Deca', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif"
//   window.APP_TIME_ZONE       = "America/New_York"

// ---- Early global stub so View_Changer calls don't explode even before this file defines the real fn ----
window.__MONTH_RENDER_QUEUE__ = window.__MONTH_RENDER_QUEUE__ || [];
if (typeof window.render_month_from_google !== 'function') {
  window.render_month_from_google = (...args) => window.__MONTH_RENDER_QUEUE__.push(args);
}

(() => {
  'use strict';

  const STYLE_ID = 'mv-style';

  // ---- knobs ----
  const MAX_PER_DAY = (typeof window.MONTH_MAX_PER_DAY === 'number') ? Math.max(1, window.MONTH_MAX_PER_DAY|0) : 4;
  const SHOW_TIMES  = (typeof window.MONTH_SHOW_TIMES === 'boolean') ? window.MONTH_SHOW_TIMES : true;
  const PILL_OPA    = (typeof window.MONTH_PILL_OPACITY === 'number') ? Math.max(0, Math.min(1, window.MONTH_PILL_OPACITY)) : 0.8;

  const FONT_FAMILY =
    window.MONTH_FONT_FAMILY ||
    window.WEEK_FONT_FAMILY  ||
    window.PRESENT_FONT_FAMILY ||
    "'Lexend Deca', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif";

  // ---- theme ----
  const ACCENT = String(window.color_accent_2 || '#3b82f6');
  const FG     = String(window.color_background || '#111');

  // ---- helpers ----
  // --- THEME SYNC ----
  function syncMonthThemeVars() {
    const accent = String(window.color_accent_2 || '#3b82f6'); // brand color
    const fg     = String(window.color_background || '#111');  // surface bg
    const opa    = (typeof window.MONTH_PILL_OPACITY === 'number')
                     ? Math.max(0, Math.min(1, window.MONTH_PILL_OPACITY))
                     : 0.8;
    const borderOpa = Math.max(0, Math.min(1, opa * 0.7));

    const setVars = (el) => {
      if (!el) return;
      el.style.setProperty('--mv-accent', accent);
      el.style.setProperty('--mv-fg', fg);
      el.style.setProperty('--mv-accent-bg', `rgba(${parseInt(accent.slice(1,3),16)},${parseInt(accent.slice(3,5),16)},${parseInt(accent.slice(5,7),16)},${opa})`);
      el.style.setProperty('--mv-accent-border', `rgba(${parseInt(accent.slice(1,3),16)},${parseInt(accent.slice(3,5),16)},${parseInt(accent.slice(5,7),16)},${borderOpa})`);
    };

    // write on :root so tooltip under <body> can see them
    setVars(document.documentElement);

    // also write on the month container (keeps local overrides working)
    const scope = document.getElementById('top_dock_month');
    if (scope) setVars(scope);
  }

  // publish both names so existing call sites work
  window.month_view_apply_theme = syncMonthThemeVars;
  window.syncMonthThemeVars     = syncMonthThemeVars;



  // optional: listen for a broadcast when your app theme flips
  window.addEventListener('theme:changed', syncMonthThemeVars, { passive: true });

  const clamp = (x,a,b)=>Math.max(a,Math.min(b,x));
  function hexToRgba(hex, a=1){
    let h = String(hex||'').replace('#','').trim();
    if (h.length===3) h = h.split('').map(c=>c+c).join('');
    const r=parseInt(h.slice(0,2),16), g=parseInt(h.slice(2,4),16), b=parseInt(h.slice(4,6),16);
    return `rgba(${r},${g},${b},${a})`;
  }
  const escapeHtml = (s)=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

  const isElementVisible = (el) => !!(el && (el.offsetWidth || el.offsetHeight || el.getClientRects().length));

  // ---- active check ----
  function isMonthActive() {
    const el = document.getElementById('top_dock_month');
    const visible = isElementVisible(el);
    const stateHint =
      String(window.current_display) === 'top_dock' &&
      /month/i.test(String(window.current_top_dock_module || ''));
    return visible || stateHint;
  }

  // ---- tz helpers (for timed events only) ----
  const APP_TZ =
    window.APP_TIME_ZONE ||
    Intl.DateTimeFormat().resolvedOptions().timeZone ||
    'UTC';

  const fYMD = new Intl.DateTimeFormat('en-CA', { timeZone: APP_TZ, year:'numeric', month:'2-digit', day:'2-digit' }); // YYYY-MM-DD
  const fHM  = new Intl.DateTimeFormat('en-US', { timeZone: APP_TZ, hour:'2-digit', minute:'2-digit', hour12:true });

  const ymdKey    = (dLike) => fYMD.format(new Date(dLike));
  const startOfDay= (d)=>{ const x=new Date(d); x.setHours(0,0,0,0); return x; };
  const endOfDay  = (d)=>{ const x=new Date(d); x.setHours(23,59,59,999); return x; };
  const fmtTime   = (d) => {
    const parts = fHM.formatToParts(new Date(d));
    const h = parts.find(p=>p.type==='hour').value;
    const m = parts.find(p=>p.type==='minute').value;
    const dM = parts.find(p=>p.type==='dayPeriod').value.toLowerCase(); // am/pm
    return `${String(+h)}:${m}${dM}`; // strip leading zero from hour
  };

  // ---- styles (update if already injected so knob/theme tweaks take effect) ----
  function ensureStyles(){
    let s = document.getElementById(STYLE_ID);
    if (!s) { s = document.createElement('style'); s.id = STYLE_ID; document.head.appendChild(s); }
    s.textContent = `
      #td_month_header,
      #td_month_row_1, #td_month_row_2, #td_month_row_3,
      #td_month_row_4, #td_month_row_5, #td_month_row_6 { table-layout: fixed; width: 100%; }
      #td_month_header td,
      #td_month_row_1 td, #td_month_row_2 td, #td_month_row_3 td,
      #td_month_row_4 td, #td_month_row_5 td, #td_month_row_6 td { vertical-align: top; overflow: hidden; }

      .mv-list { margin-top: 4px; text-align: left; width: 100%; overflow: hidden; }

      .mv-pill {
        display: block; position: relative;
        height: 16px; line-height: 16px; font-size: 12px;
        border-radius: 4px; padding: 0 6px; margin: 2px 4px 2px 2px;
        overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
        box-sizing: border-box; width: 100%; max-width: 100%;
        cursor: default; user-select: none;
        font-family: ${FONT_FAMILY};
        color: var(--mv-fg, #111);
        background: var(--mv-accent-bg, rgba(59,130,246,0.8));
        border: 1px solid var(--mv-accent-border, rgba(59,130,246,0.56));
      }

      .mv-more {
        display: inline-block; padding: 0 6px; margin: 2px 4px 2px 2px;
        height: 16px; line-height: 16px; font-size: 12px;
        border-radius: 4px; font-weight: 600;
        color: var(--mv-accent, #3b82f6);
        border: 1px dashed var(--mv-accent, #3b82f6);
        background: transparent; cursor: pointer;
        font-family: ${FONT_FAMILY};
      }

      .mv-tooltip {
        position: fixed; z-index: 2147483647; pointer-events: none;
        border-radius: 6px; padding: 6px 8px; font-size: 12px; line-height: 1.3;
        white-space: pre-line; box-shadow: 0 4px 12px rgba(0,0,0,0.35);
        background: var(--mv-fg, #111);
        color: var(--mv-accent, #3b82f6);
        border: 1px solid var(--mv-accent, #3b82f6);
        display: none; transform: translate(-50%, -110%);
        font-family: ${FONT_FAMILY};
        will-change: transform, left, top;
      }
    `;
    // ensure vars exist before first hover
    syncMonthThemeVars();
  }



  // ---- month grid helpers ----
  const CELL_IDS = Array.from({length:42}, (_,i)=>`td_month_cell_${i+1}`);

  function monthInfoFromDom(dateFallback = new Date()){
    const months = [
      'january','february','march','april','may','june',
      'july','august','september','october','november','december'
    ];

    const mEl   = document.getElementById('month_view_month_label');
    const yEl   = document.getElementById('month_view_year_label');
    const mText = (mEl?.textContent || '').toLowerCase();
    const yText = (yEl?.textContent || '');

    // Find any month name anywhere in the label (handles "For example: September")
    let monthIdx = -1;
    for (let i = 0; i < months.length; i++) {
      if (mText.includes(months[i])) { monthIdx = i; break; }
    }
    if (monthIdx < 0) monthIdx = (typeof window.month === 'number') ? window.month : dateFallback.getMonth();

    // Extract a 4-digit year from the label; fallback to window.year or current year
    const yMatch = yText.match(/\b(19|20)\d{2}\b/);
    const year = yMatch ? Number(yMatch[0])
                        : (typeof window.year === 'number' ? window.year : dateFallback.getFullYear());

    return { year, month: monthIdx };
  }

  function visibleGridDates(year, month){
    // 6x7 grid starting on Sunday. Fill with prev/next spillover.
    const first = new Date(year, month, 1);
    const startOffset = first.getDay(); // 0=Sun
    const startDate = new Date(year, month, 1 - startOffset);
    return Array.from({length:42}, (_,i)=> new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()+i));
  }

  // ---- event normalization/splitting ----
  function normalizeEvent(ev){
    const isAllDay = !!(ev?.start?.date && !ev?.start?.dateTime);
    if (isAllDay){
      const sStr = ev.start.date;             // 'YYYY-MM-DD' inclusive start
      const eStrExcl = ev.end?.date || sStr;  // exclusive end
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

  function* splitIntoDaySegments(evt, gridStart, gridEnd){
    if (evt.isAllDay){
      // days where startDateStr <= k < endDateStrExcl
      let d = startOfDay(gridStart);
      while (d <= gridEnd){
        const k = ymdKey(d);
        if (k >= evt.startDateStr && k < evt.endDateStrExcl){
          yield { key:k, title: evt.title, isAllDay:true };
        }
        d = new Date(d.getTime() + 86400000);
      }
      return;
    }
    // Timed: include every day intersected by [start..end)
    let d = startOfDay(gridStart);
    while (d <= gridEnd){
      const dayStart = startOfDay(d);
      const dayEnd   = endOfDay(d);
      if (evt.end >= dayStart && evt.start <= dayEnd){
        const key = ymdKey(dayStart);
        const title = SHOW_TIMES ? `${fmtTime(evt.start)} ${evt.title || ''}`.trim() : (evt.title || '(no title)');
        yield { key, title, isAllDay:false, start: evt.start, end: evt.end };
      }
      d = new Date(d.getTime() + 86400000);
    }
  }

  // ---- tooltip ----
  function ensureTooltip(){
    let el = document.querySelector('.mv-tooltip');
    if (!el){
      el = document.createElement('div');
      el.className = 'mv-tooltip';
      document.body.appendChild(el);
    }
    return el;
  }
  function showTooltip(html, x, y){
    const tip = ensureTooltip();
    tip.innerHTML = html;
    tip.style.display = 'block';
    tip.style.left = `${x}px`;
    tip.style.top  = `${y}px`;
  }
  function hideTooltip(){
    const tip = document.querySelector('.mv-tooltip');
    if (tip) tip.style.display = 'none';
  }

  // ---- render ----
  function clearOldLists(){
    for (const id of CELL_IDS){
      const cell = document.getElementById(id);
      if (!cell) continue;
      cell.querySelectorAll('.mv-list').forEach(n => n.remove());
    }
  }

  function renderMonth(date = new Date(), events = []){
    ensureStyles();

    const { year, month } = monthInfoFromDom(date);
    const cells = visibleGridDates(year, month);
    const firstDate = startOfDay(cells[0]);
    const lastDate  = endOfDay(cells[cells.length-1]);

    // Map dayKey -> list of items
    const byDay = new Map();
    const norm = (events || []).map(normalizeEvent).filter(Boolean);

    for (const ev of norm){
      for (const seg of splitIntoDaySegments(ev, firstDate, lastDate)){
        if (!byDay.has(seg.key)) byDay.set(seg.key, []);
        byDay.get(seg.key).push(seg);
      }
    }

    // Sort entries per day: all-day first, then timed by start time/title
    for (const [k, arr] of byDay){
      arr.sort((a,b) => {
        if (a.isAllDay !== b.isAllDay) return b.isAllDay - a.isAllDay;
        if (!a.isAllDay && !b.isAllDay && a.start && b.start) return a.start - b.start;
        return String(a.title).localeCompare(String(b.title));
      });
    }

    // Clear old and paint
    clearOldLists();

    cells.forEach((d, idx) => {
      const cell = document.getElementById(CELL_IDS[idx]);
      if (!cell) return;

      // 👉 Only show events for the current month (hide prev/next month spillover)
      if (d.getMonth() !== month) return;

      const dayKey = ymdKey(d);
      const items = byDay.get(dayKey) || [];
      if (items.length === 0) return;

      const list = document.createElement('div');
      list.className = 'mv-list';
      cell.appendChild(list);

      const max = MAX_PER_DAY;
      const visible = items.slice(0, max);
      const overflow = items.length - visible.length;

      for (const it of visible){
        const pill = document.createElement('div');
        pill.className = 'mv-pill';
        pill.textContent = it.title || '(no title)';

        // Tooltip on hover
        pill.addEventListener('mouseenter', (e) => {
          const lines = [];
          if (it.isAllDay){
            lines.push('<b>All day</b>');
          } else {
            const s = fmtTime(it.start);
            const eTxt = fmtTime(it.end);
            lines.push(`<b>${escapeHtml(s)} – ${escapeHtml(eTxt)}</b>`);
          }
          lines.push(escapeHtml(it.title || ''));
          showTooltip(lines.join('\n'), e.clientX, e.clientY);
        });
        pill.addEventListener('mousemove', (e) => {
          const tip = document.querySelector('.mv-tooltip');
          if (tip && tip.style.display === 'block'){
            tip.style.left = `${e.clientX}px`;
            tip.style.top  = `${e.clientY}px`;
          }
        });
        pill.addEventListener('mouseleave', hideTooltip);

        list.appendChild(pill);
      }

      if (overflow > 0){
        // "+N more" with tooltip that lists the hidden ones
        const more = document.createElement('span');
        more.className = 'mv-more';
        more.textContent = `+${overflow} more`;
        more.title = ''; // avoid native tooltip
        more.addEventListener('mouseenter', (e) => {
          const hidden = items.slice(max);
          const lines = hidden.map(seg => {
            if (seg.isAllDay) return `• ${escapeHtml(seg.title || '')}`;
            const s = fmtTime(seg.start);
            return `• ${escapeHtml(s)} ${escapeHtml(seg.title || '')}`;
          });
          showTooltip(lines.join('\n'), e.clientX, e.clientY);
        });
        more.addEventListener('mousemove', (e) => {
          const tip = document.querySelector('.mv-tooltip');
          if (tip && tip.style.display === 'block'){
            tip.style.left = `${e.clientX}px`;
            tip.style.top  = `${e.clientY}px`;
          }
        });
        more.addEventListener('mouseleave', hideTooltip);

        list.appendChild(more);
      }
    });
  }

  // ---- data fetch helpers ----
  async function getEvents(){
    if (Array.isArray(window._imported_google_events)) return window._imported_google_events;
    try {
      return await new Promise(resolve => {
        chrome.storage?.local?.get(['gcal_events_all','gcal_events_primary'], data =>
          resolve(data?.gcal_events_all || data?.gcal_events_primary || []));
      });
    } catch { return []; }
  }

  // ---- readiness / observers ----
  function labelsReady() {
    const { year, month } = monthInfoFromDom();
    return Number.isFinite(year) && year > 1900 && year < 2100 && Number.isFinite(month) && month >= 0 && month <= 11;
  }
  function gridReady() {
    return !!document.getElementById('td_month_cell_1');
  }
  function viewVisible() {
    const el = document.getElementById('top_dock_month');
    return isElementVisible(el);
  }

  function debounce(fn, wait=50) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), wait);
    };
  }

  async function waitForMonthUiReady(maxMs = 4000) {
    const start = Date.now();
    while (Date.now() - start < maxMs) {
      if (gridReady() && labelsReady() && viewVisible()) return true;
      await new Promise(r => setTimeout(r, 50));
    }
    // even if not all conditions satisfied, proceed (failsafe)
    return true;
  }

  // Public entry (rate-limited; clears/hides when not active)
  async function render_month_from_google(date = new Date()){
    if (render_month_from_google._running) { render_month_from_google._pending = true; return; }
    render_month_from_google._running = true;

    try {
      if (!isMonthActive()) { clearOldLists(); hideTooltip(); return; }

      await waitForMonthUiReady();

      const { year, month } = monthInfoFromDom(date);
      const events = await getEvents();
      renderMonth(new Date(year, month, 1), events);
    } catch (e) {
      console.warn('[MonthView] render error:', e);
    } finally {
      render_month_from_google._running = false;
      if (render_month_from_google._pending) {
        render_month_from_google._pending = false;
        render_month_from_google(date);
      }
    }
  }

  // Expose real function and flush any queued calls from the early stub
  window.render_month_from_google = render_month_from_google;
  if (Array.isArray(window.__MONTH_RENDER_QUEUE__)) {
    try { for (const args of window.__MONTH_RENDER_QUEUE__) render_month_from_google(...args); }
    finally { window.__MONTH_RENDER_QUEUE__.length = 0; }
  }

  // Observe: month becomes visible OR labels change -> repaint (fixes "only after console open")
  const reRenderDebounced = debounce(() => render_month_from_google(), 80);

  function installObservers(){
    // 1) Visibility/style changes on the month container
    const cont = document.getElementById('top_dock_month');
    if (cont) {
      const mo = new MutationObserver(reRenderDebounced);
      mo.observe(cont, { attributes: true, attributeFilter: ['style', 'class'] });
    }

    // 2) Text changes on month/year labels
    const mEl = document.getElementById('month_view_month_label');
    const yEl = document.getElementById('month_view_year_label');
    const observeText = (el) => {
      if (!el) return;
      const mo = new MutationObserver(reRenderDebounced);
      mo.observe(el, { characterData: true, subtree: true, childList: true });
    };
    observeText(mEl);
    observeText(yEl);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { installObservers(); render_month_from_google(); }, { once:true });
  } else {
    installObservers();
    render_month_from_google();
  }

  // Repaint on updates & resizes
  chrome?.runtime?.onMessage?.addListener((msg) => {
    if (msg?.type === 'gcal:updated') render_month_from_google();
  });
  window.addEventListener('resize', reRenderDebounced, { passive:true });
  window.addEventListener('orientationchange', reRenderDebounced, { passive:true });

})();
