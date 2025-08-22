// ===== YearViewClickPopover.js =====
(() => {
  'use strict';

  // ---------------- Knobs ----------------
  const MAX_ITEMS = Number.isFinite(window.YEAR_MAX_ITEMS) ? window.YEAR_MAX_ITEMS : 8;
  const APP_TZ    = window.APP_TIME_ZONE || (Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC');
  const FETCH_TYPES = ['gcal:fetchRange', 'gcal:ensureRange'];

  // ---------------- CSS ----------------
  const STYLE_ID = 'yv-click-popover-style';
  function yv_ensureStyles(){
    if (document.getElementById(STYLE_ID)) return;
    const s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = `
      /* ensure the year cells are always clickable */
      #top_dock_year, #top_dock_year [id^="td_year_"] { pointer-events:auto !important; }
      #top_dock_year [id^="td_year_"]{ cursor:pointer; }

      .yv-pop{
        position:fixed;z-index:2147483647;width:260px;max-height:280px;display:none;
        background:var(--yv-bg,#111);color:var(--yv-text,#e5e7eb);
        border:1px solid var(--yv-border,rgba(59,130,246,.45));
        border-radius:10px;box-shadow:0 12px 32px rgba(0,0,0,.45);
        padding:12px 10px 10px 12px;box-sizing:border-box;user-select:none
      }
      .yv-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;gap:8px}
      .yv-title{font-size:14px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .yv-close{
        display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:6px;
        font-size:16px;line-height:1;border:1px solid var(--yv-border,rgba(59,130,246,.45));
        color:var(--yv-accent,#3b82f6);background:transparent;cursor:pointer
      }
      .yv-close:hover{background:var(--yv-accent-weak,rgba(59,130,246,.15))}
      .yv-list{overflow-y:auto;max-height:220px;padding-right:4px}
      .yv-item{
        font-size:12px;line-height:1.35;padding:6px 8px;margin:4px 0;border-radius:6px;
        border:1px solid var(--yv-accent-weak,rgba(59,130,246,.15));
        background:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
        color: var(--yv-accent) !important; /* force accent */
      }
    `;
    document.head.appendChild(s);
  }

  function yv_parseHex(hex, fallback='#3b82f6'){
    let h = String(hex||fallback).trim();
    if (!h) h = fallback;
    if (h[0] === '#') h = h.slice(1);
    if (h.length === 3) h = h.split('').map(c => c + c).join('');
    const r = parseInt(h.slice(0,2),16); const g = parseInt(h.slice(2,4),16); const b = parseInt(h.slice(4,6),16);
    return { r: (isFinite(r)?r:59), g: (isFinite(g)?g:130), b: (isFinite(b)?b:246) };
  }
  function yv_syncThemeVars(targetEl){
    const accent = String(window.color_accent_2 || '#3b82f6');
    const bg     = String(window.color_background || '#111');
    const { r, g, b } = yv_parseHex(accent);

    const apply = (el) => {
      if (!el || !el.style) return;
      el.style.setProperty('--yv-accent', accent);                     // accent
      el.style.setProperty('--yv-bg', bg);
      el.style.setProperty('--yv-text', '#e5e7eb');                    // readable neutral
      el.style.setProperty('--yv-border', `rgba(${r},${g},${b},0.45)`);
      el.style.setProperty('--yv-accent-weak', `rgba(${r},${g},${b},0.15)`);
    };

    apply(document.documentElement);
    if (targetEl) apply(targetEl);
  }

  window.addEventListener('theme:changed', () => yv_syncThemeVars(_pop), { passive:true });
  new MutationObserver(() => yv_syncThemeVars(_pop))
    .observe(document.documentElement, { attributes:true, attributeFilter:['class','style','data-theme'] });

  yv_ensureStyles();
  yv_syncThemeVars();

  // ---------------- Date helpers ----------------
  const fYMD = new Intl.DateTimeFormat('en-CA', { timeZone: APP_TZ, year:'numeric', month:'2-digit', day:'2-digit' }); // YYYY-MM-DD
  const fHM  = new Intl.DateTimeFormat('en-US', { timeZone: APP_TZ, hour:'2-digit', minute:'2-digit', hour12:true });
  const MONTH_ABBR = ['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'];
  const MONTH_INDEX = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
  const yv_ymdKey     = (d)=> fYMD.format(new Date(d));
  const yv_startOfDay = (d)=>{ const x=new Date(d); x.setHours(0,0,0,0); return x; };
  const yv_endOfDay   = (d)=>{ const x=new Date(d); x.setHours(23,59,59,999); return x; };
  const yv_monthStart = (y,m)=> new Date(y, m, 1, 0,0,0,0);
  const yv_monthEndEx = (y,m)=> new Date(y, m+1, 1, 0,0,0,0);
  const yv_startOfYear = (y)=> new Date(y,0,1,0,0,0,0);
  const yv_startOfNextYear = (y)=> new Date(y+1,0,1,0,0,0,0);
  function yv_ordinal(n){ const v=n%100; if(v>=11&&v<=13) return `${n}th`; switch(n%10){case 1:return`${n}st`;case 2:return`${n}nd`;case 3:return`${n}rd`;default:return`${n}th`;} }
  function yv_fmtTimeInline(d){
    const parts = fHM.formatToParts(new Date(d));
    const h = String(+parts.find(p=>p.type==='hour').value);
    const m = parts.find(p=>p.type==='minute').value;
    const ap= parts.find(p=>p.type==='dayPeriod').value.toLowerCase();
    return m==='00' ? `${h}${ap}` : `${h}:${m}${ap}`;
  }
  function yv_yearFromDom(){
    const candidates = [
      document.getElementById('top_dock_year_label'),
      document.getElementById('year_view_year_label'),
      document.getElementById('month_view_year_label')
    ].filter(Boolean);
    for (const el of candidates){
      const m = String(el.textContent || '').match(/\b(19|20)\d{2}\b/);
      if (m) return +m[0];
    }
    if (Number.isFinite(window.current_year)) return +window.current_year;
    return new Date().getFullYear();
  }

  // ---------------- Events ----------------
  function yv_normalizeEvent(ev){
    const isAllDay = !!(ev?.start?.date && !ev?.start?.dateTime);
    if (isAllDay){
      return {
        id: ev.id || ev.iCalUID || Math.random().toString(36).slice(2),
        title: ev.summary || '(no title)',
        isAllDay: true,
        startDateStr: ev.start.date,
        endDateStrExcl: ev.end?.date || ev.start.date,
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

  function yv_itemsForDate(events, dayDate){
    const ds = yv_startOfDay(dayDate);
    const de = yv_endOfDay(dayDate);
    const key = yv_ymdKey(ds);
    const out = [];
    const norm = (events || []).map(yv_normalizeEvent).filter(Boolean);

    for (const ev of norm){
      if (ev.isAllDay){
        if (key >= ev.startDateStr && key < ev.endDateStrExcl) {
          out.push({ isAllDay: true, title: ev.title });
        }
        continue;
      }
      if (ev.end >= ds && ev.start <= de){
        const segStart = ev.start < ds ? ds : ev.start;
        out.push({ isAllDay:false, title: ev.title, start: segStart });
      }
    }

    out.sort((a,b) => {
      if (a.isAllDay !== b.isAllDay) return b.isAllDay - a.isAllDay;
      if (!a.isAllDay && !b.isAllDay) return a.start - b.start;
      return String(a.title).localeCompare(String(b.title));
    });
    return out;
  }

  async function yv_getAllEvents(){
    if (Array.isArray(window._imported_google_events)) return window._imported_google_events;
    if (Array.isArray(window.events)) return window.events;
    try {
      return await new Promise(resolve => {
        chrome?.storage?.local?.get(['gcal_events_all','gcal_events_primary'], data =>
          resolve(data?.gcal_events_all || data?.gcal_events_primary || []));
      });
    } catch { return []; }
  }

  window.seedYearViewEvents = function(arr){
    window._imported_google_events = Array.isArray(arr) ? arr : [];
    try { chrome?.runtime?.sendMessage?.({type:'gcal:updated'}); } catch {}
  };
  if (Array.isArray(window.events)) window.seedYearViewEvents(window.events);

  function yv_eventsIntersectingRange(events, start, endEx){
    const sMs = +start, eMs = +endEx;
    const wantStart = yv_ymdKey(start);
    const wantEndEx = yv_ymdKey(endEx);
    const res = [];
    for (const raw of (events || [])){
      const n = yv_normalizeEvent(raw);
      if (!n) continue;
      if (n.isAllDay){
        if (n.startDateStr < wantEndEx && n.endDateStrExcl > wantStart) res.push(raw);
      } else {
        const rs = +n.start;
        const re = +n.end;
        if (re > sMs && rs < eMs) res.push(raw);
      }
    }
    return res;
  }

  function yv_waitForUpdateOnce(timeoutMs=600){
    return new Promise(resolve => {
      let done = false;
      const cleanup = () => {
        done = true;
        try { chrome?.runtime?.onMessage?.removeListener(handler); } catch {}
      };
      const timer = setTimeout(() => { if (!done){ cleanup(); resolve(false); } }, timeoutMs);
      function handler(msg){
        if (msg?.type === 'gcal:updated'){
          clearTimeout(timer);
          cleanup();
          resolve(true);
        }
      }
      try { chrome?.runtime?.onMessage?.addListener(handler); } catch {}
    });
  }

  async function yv_requestRange(start, endEx){
    const payload = { startISO: start.toISOString(), endISO: endEx.toISOString(), source: 'yearView' };
    try {
      for (const type of FETCH_TYPES){
        try { chrome?.runtime?.sendMessage?.({ type, ...payload }); } catch {}
      }
      try { window.requestGoogleCalendarRange?.(payload.startISO, payload.endISO); } catch {}
    } catch {}
    await yv_waitForUpdateOnce(3000);
  }

  // --- FULL YEAR PRELOAD ---
  let _preloadedYear = null;
  function _minStart(all){
    let m = null;
    for (const ev of (all||[])) {
      const s = ev?.start?.dateTime || (ev?.start?.date ? ev.start.date + 'T00:00:00' : null);
      if (!s) continue;
      const t = +new Date(s);
      m = (m == null || t < m) ? t : m;
    }
    return m;
  }
  function _maxEnd(all){
    let m = null;
    for (const ev of (all||[])) {
      const e = ev?.end?.dateTime || (ev?.end?.date ? ev.end.date + 'T00:00:00' : null);
      if (!e) continue;
      const t = +new Date(e);
      m = (m == null || t > m) ? t : m;
    }
    return m;
  }
  async function yv_ensureYearPreloaded(year){
    if (_preloadedYear === year) return;
    const s = yv_startOfYear(year);
    const e = yv_startOfNextYear(year);
    const DAY = 864e5;
    const coverageOk = (arr) => {
      const min = _minStart(arr), max = _maxEnd(arr);
      return min != null && max != null && (min <= (+s + 14*DAY)) && (max >= (+e - 14*DAY));
    };

    let all = await yv_getAllEvents();
    if (coverageOk(all)) { _preloadedYear = year; return; }

    await yv_requestRange(s, e);
    all = await yv_getAllEvents();
    if (coverageOk(all)) { _preloadedYear = year; return; }

    const min = _minStart(all), max = _maxEnd(all);
    if (min == null || new Date(min).getFullYear() === year){
      const stopM = (min == null) ? 11 : new Date(min).getMonth() - 1;
      for (let m = 0; m <= stopM; m++) {
        await yv_requestRange(yv_monthStart(year, m), yv_monthEndEx(year, m));
      }
    }
    if (max == null || new Date(max).getFullYear() === year){
      const startM = (max == null) ? 0 : new Date(max).getMonth() + 1;
      for (let m = startM; m < 12; m++) {
        await yv_requestRange(yv_monthStart(year, m), yv_monthEndEx(year, m));
      }
    }
    _preloadedYear = year;
  }

  async function yv_getMonthEvents(dateObj){
    await yv_ensureYearPreloaded(dateObj.getFullYear());
    const y = dateObj.getFullYear();
    const m = dateObj.getMonth();
    const s = yv_monthStart(y, m);
    const e = yv_monthEndEx(y, m);
    const all = await yv_getAllEvents();
    return yv_eventsIntersectingRange(all, s, e);
  }

  // ---------------- Popover UI ----------------
  let _pop, _list, _title, _openAnchor = null, _outsideCloserInstalled = false;

  function yv_ensurePop(){
    if (_pop) return _pop;
    _pop = document.createElement('div');
    _pop.className = 'yv-pop';
    _pop.innerHTML = `
      <div class="yv-head">
        <div class="yv-title" data-yv-title>Jan. 1st</div>
        <button class="yv-close" type="button" aria-label="Close" data-yv-close>×</button>
      </div>
      <div class="yv-list" data-yv-list></div>
    `;
    document.body.appendChild(_pop);
    _list  = _pop.querySelector('[data-yv-list]');
    _title = _pop.querySelector('[data-yv-title]');
    _pop.querySelector('[data-yv-close]').addEventListener('click', yv_closePop, { passive:true });
    yv_syncThemeVars(_pop);
    return _pop;
  }
  function yv_setHeader(dateObj){
    _title.textContent = `${MONTH_ABBR[dateObj.getMonth()]} ${yv_ordinal(dateObj.getDate())}`;
  }
  function yv_setItems(items){
    _list.innerHTML = '';
    const limit = Math.min(items.length, MAX_ITEMS);
    for (let i=0; i<limit; i++){
      const it = items[i];
      const txt = it.isAllDay
        ? `All Day ${it.title || '(no title)'}`
        : `${yv_fmtTimeInline(it.start)} ${it.title || ''}`.trim();
      const div = document.createElement('div');
      div.className = 'yv-item';
      div.textContent = txt;
      _list.appendChild(div);
    }
    if (limit === 0){
      const empty = document.createElement('div');
      empty.className = 'yv-item';
      empty.textContent = 'No events';
      _list.appendChild(empty);
    }
  }
  function yv_positionNearAnchor(anchor){
    const pop = yv_ensurePop();
    yv_syncThemeVars(pop);
    pop.style.display = 'block';
    pop.style.left = '-9999px';
    pop.style.top  = '-9999px';

    const pw = pop.offsetWidth || 260;
    const ph = pop.offsetHeight || 220;
    const r = anchor.getBoundingClientRect();
    const vx = window.innerWidth, vy = window.innerHeight;

    let x = r.left + r.width/2 - pw/2;
    let y = r.bottom + 8;
    if (y + ph + 8 > vy) y = r.top - ph - 8;
    x = Math.max(8, Math.min(x, vx - pw - 8));
    y = Math.max(8, Math.min(y, vy - ph - 8));
    pop.style.left = `${x}px`;
    pop.style.top  = `${y}px`;
  }
  function yv_closePop(){
    if (!_pop) return;
    _pop.style.display = 'none';
    _openAnchor = null;
  }
  window.close_all_year_popovers = yv_closePop;

  function yv_installOutsideClose(){
    if (_outsideCloserInstalled) return;
    _outsideCloserInstalled = true;
    document.addEventListener('pointerdown', (e) => {
      if (!_pop || _pop.style.display === 'none') return;
      if (_pop.contains(e.target)) return;
      if (_openAnchor && _openAnchor.contains?.(e.target)) return;
      yv_closePop();
    }, true);
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Backquote' || e.key === '`' || e.key === '~') yv_closePop();
      if (e.key === 'Escape') yv_closePop();
    }, { passive:true });
    const tryBindHam = () => {
      const ham = document.getElementById('ham_icon');
      if (!ham) return false;
      ham.removeEventListener?.('click', yv_closePop);
      ham.addEventListener?.('click', yv_closePop, { passive:true });
      return true;
    };
    if (!tryBindHam()){
      setTimeout(tryBindHam, 150);
      setTimeout(tryBindHam, 500);
      new MutationObserver(() => tryBindHam())
        .observe(document.body, { childList:true, subtree:true });
    }
  }

  // ---------------- Click binding (delegated) ----------------
  function yv_parseYearCellId(id){
    const m=/^td_year_([a-z]{3})_(\d{1,2})$/i.exec(id||'');
    return m?{monKey:m[1].toLowerCase(), slot:+m[2]}:null;
  }
  function yv_findDateFromCell(el){
    const info = yv_parseYearCellId(el?.id); if (!info) return null;
    const dayText = (el.textContent || '').trim(); const day = Number(dayText);
    if (!Number.isFinite(day) || day <= 0) return null;
    const month = MONTH_INDEX[info.monKey]; const year = yv_yearFromDom();
    return new Date(year, month, day);
  }
  async function yv_onYearCellClick(el){
    const dateObj = yv_findDateFromCell(el);
    if (!dateObj) { yv_closePop(); return; }
    if (_openAnchor === el && _pop && _pop.style.display !== 'none'){ yv_closePop(); return; }

    await yv_ensureYearPreloaded(dateObj.getFullYear());
    const monthEvents = await yv_getMonthEvents(dateObj);
    const items  = yv_itemsForDate(monthEvents, dateObj);

    yv_ensurePop();
    yv_setHeader(dateObj);
    yv_setItems(items);
    yv_positionNearAnchor(el);
    _openAnchor = el;
  }

  let _delegatedBound = false;
  function yv_delegatedYearClick(e){
    const root = document.getElementById('top_dock_year');
    const el = e.target.closest?.('[id^="td_year_"]');
    if (!el || !root || !root.contains(el)) return;
    yv_onYearCellClick(el);
  }

  function yv_bindYearCells(){
    const root = document.getElementById('top_dock_year');
    if (!root) return;
    root.querySelectorAll('[id^="td_year_"]').forEach(el => {
      el.removeEventListener('click', yv_delegatedYearClick, true);
    });
    if (_delegatedBound) root.removeEventListener('click', yv_delegatedYearClick, true);
    root.addEventListener('click', yv_delegatedYearClick, true); // capture
    _delegatedBound = true;
    console.debug('[YearView] delegated binding active');
    yv_installOutsideClose();
  }

  // ---------------- Init ----------------
  function yv_observeYearLabel(){
    const yEl = document.getElementById('top_dock_year_label')
            || document.getElementById('year_view_year_label')
            || document.getElementById('month_view_year_label');
    if (!yEl) return;
    new MutationObserver(async () => {
      const y = yv_yearFromDom();
      await yv_ensureYearPreloaded(y);
    }).observe(yEl, { characterData:true, childList:true, subtree:true });
  }

  async function yv_initialPreload(){
    const y = yv_yearFromDom();
    await yv_ensureYearPreloaded(y);
  }

  window.init_year_view_click_popover = yv_bindYearCells;

  function onReady(){
    yv_bindYearCells();
    setTimeout(yv_bindYearCells,200);
    setTimeout(yv_bindYearCells,800);
    yv_observeYearLabel();
    yv_initialPreload();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady, { once:true });
  } else {
    onReady();
  }

  // live refresh while popover open
  chrome?.runtime?.onMessage?.addListener((msg) => {
    if (msg?.type === 'gcal:updated' && _pop && _pop.style.display !== 'none' && _openAnchor){
      const dateObj = yv_findDateFromCell(_openAnchor);
      if (!dateObj) return;
      yv_getMonthEvents(dateObj).then(monthEvents => {
        const items = yv_itemsForDate(monthEvents, dateObj);
        yv_setItems(items);
        yv_positionNearAnchor(_openAnchor);
      });
    }
  });
})();
