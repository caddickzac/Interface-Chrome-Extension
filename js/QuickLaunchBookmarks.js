

window.update_quick_launch_bookmark_labels = function update_quick_launch_bookmark_labels(){
	$('#bookmark_1_text').text(bk_1_label)
	$('#bookmark_2_text').text(bk_2_label)
	$('#bookmark_3_text').text(bk_3_label)
	$('#bookmark_4_text').text(bk_4_label)
	$('#bookmark_5_text').text(bk_5_label)
	$('#bookmark_6_text').text(bk_6_label)
	$('#bookmark_7_text').text(bk_7_label)
	$('#bookmark_8_text').text(bk_8_label)
	$('#bookmark_9_text').text(bk_9_label)
	$('#bookmark_10_text').text(bk_10_label)
	$('#bookmark_11_text').text(bk_11_label)
	$('#bookmark_12_text').text(bk_12_label)
	$('#bookmark_13_text').text(bk_13_label)
	$('#bookmark_14_text').text(bk_14_label)
	$('#bookmark_15_text').text(bk_15_label)
	$('#bookmark_16_text').text(bk_16_label)
	$('#bookmark_17_text').text(bk_17_label)
	$('#bookmark_18_text').text(bk_18_label)
	$('#bookmark_19_text').text(bk_19_label)
	$('#bookmark_20_text').text(bk_20_label)
}

// ================== FAVICON LOADER (fast + cached + robust) ==================

// ---- tunables ---------------------------------------------------------------
const DIRECT_MIN_ICON_SIZE = 16; // accept 16x16 from site
const S2_MIN_ICON_SIZE     = 32; // ignore tiny S2 (prevents generic globe)
const CACHE_TTL_MS         = 1000*60*60*24*14; // 14 days

// Optional per-host preference (suffix match). Leave empty if you like.
// Values: "prefer_s2" | "prefer_direct"
window.FAVICON_HOST_PREFS = {
  "nytimes.com": "prefer_s2",
  "github.com":  "prefer_s2",
};

// ---- utils: storage ---------------------------------------------------------
function storage_get(keys){ return new Promise(res => chrome.storage.local.get(keys, res)); }
function storage_set(obj){ return new Promise(res => chrome.storage.local.set(obj, res)); }
function storage_remove(keys){ return new Promise(res => chrome.storage.local.remove(keys, res)); }

// ---- helpers: url & candidates ---------------------------------------------
window.normalize_website_for_icon = function normalize_website_for_icon(raw) {
  const s = String(raw || "").trim();
  if (!s) return null;
  try {
    const url = new URL(/^https?:\/\//i.test(s) ? s : "https://" + s);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url;
  } catch { return null; }
};

function s2Candidates(origin, host) {
  return [
    `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(origin)}`,
    `https://www.google.com/s2/favicons?sz=128&domain=${encodeURIComponent(host)}`,
    `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&size=128&url=${encodeURIComponent(origin)}`,
    `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&size=128&origin=${encodeURIComponent(origin)}`
  ];
}

window.favicon_sources_for_site = function favicon_sources_for_site(website) {
  const url = window.normalize_website_for_icon(website);
  if (!url) return [];
  const origin = url.origin;
  const host   = url.hostname;

  return [
    // site-local first
    { src: `${origin}/favicon.ico`,                      kind: "direct" },
    { src: `${origin}/favicon.png`,                      kind: "direct" },
    { src: `${origin}/apple-touch-icon.png`,             kind: "direct" },
    { src: `${origin}/apple-touch-icon-precomposed.png`, kind: "direct" },
    // then S2 variants
    ...s2Candidates(origin, host).map(u => ({ src: u, kind: "s2" })),
  ];
};

// ---- letter badge (uses your theme color_accent_2) --------------------------
function isHex6(h){ return typeof h === "string" && /^#[0-9A-Fa-f]{6}$/.test(h); }
function hexToRgb(h){ return { r:parseInt(h.slice(1,3),16), g:parseInt(h.slice(3,5),16), b:parseInt(h.slice(5,7),16) }; }
function pickTextColor(bgHex){
  const {r,g,b}=hexToRgb(bgHex); const L=(0.299*r+0.587*g+0.114*b)/255;
  return L>0.6 ? "#000000" : "#FFFFFF";
}

window.generate_fallback_favicon = function generate_fallback_favicon(website) {
  const url = window.normalize_website_for_icon(website);
  const host = url ? url.hostname : (String(website||'').trim() || '?');
  const letter = (host.replace(/^www\./,'')[0] || '?').toUpperCase();

  const bgHex = isHex6(window.color_accent_2) ? window.color_accent_2 : "#777777";
  const fgHex = pickTextColor(bgHex);

  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width=size; canvas.height=size;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bgHex; ctx.fillRect(0,0,size,size);
  ctx.fillStyle = fgHex; ctx.font = 'bold 84px system-ui, -apple-system, Segoe UI, Roboto, Arial';
  ctx.textAlign='center'; ctx.textBaseline='middle';
  ctx.fillText(letter, size/2, size/2 + 6);
  return canvas.toDataURL('image/png');
};

// ---- preload + scoring ------------------------------------------------------
window.preload_favicon_candidate = function preload_favicon_candidate(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload  = () => resolve({ ok:true,  w:img.naturalWidth, h:img.naturalHeight });
    img.onerror = () => resolve({ ok:false, w:0,               h:0 });
    img.src = src;
  });
};

function hostPref(host){
  const entry = Object.entries(window.FAVICON_HOST_PREFS||{}).find(([suffix]) =>
    host === suffix || host.endsWith("."+suffix)
  );
  return entry ? entry[1] : null;
}

function scoreCandidate(result, cand, host){
  if (!result.ok) return -1;
  const area = result.w * result.h;
  const pref = hostPref(host);
  let bias = 0;
  if (cand.kind === "direct") {
    if (result.w < DIRECT_MIN_ICON_SIZE || result.h < DIRECT_MIN_ICON_SIZE) return -1;
    if (pref === "prefer_direct") bias += 5000;
  } else { // s2
    if (result.w < S2_MIN_ICON_SIZE || result.h < S2_MIN_ICON_SIZE) return -1;
    if (pref === "prefer_s2") bias += 5000;
  }
  return area + bias;
}

window.pick_favicon_src = async function pick_favicon_src(website) {
  const url = window.normalize_website_for_icon(website);
  if (!url) return { src: window.generate_fallback_favicon(website), kind: "letter", w:128, h:128 };

  const host = url.hostname;
  const candidates = window.favicon_sources_for_site(website);

  // Preload all candidates concurrently, pick the highest score
  const results = await Promise.all(candidates.map(c => window.preload_favicon_candidate(c.src)));
  let best = null, bestScore = -1;

  for (let i=0;i<candidates.length;i++){
    const cand = candidates[i], res = results[i];
    const score = scoreCandidate(res, cand, host);
    if (score > bestScore) { bestScore = score; best = { src:cand.src, kind:cand.kind, w:res.w, h:res.h }; }
  }

  return best || { src: window.generate_fallback_favicon(website), kind:"letter", w:128, h:128 };
};

// ---- cache (stale-while-revalidate) ----------------------------------------
function cacheKeyFor(website){
  const url = window.normalize_website_for_icon(website);
  const host = url ? url.hostname : String(website||'').trim();
  return `faviconCache::${host}`;
}

async function get_cached_favicon(website){
  const key = cacheKeyFor(website);
  const { [key]:entry } = await storage_get([key]);
  if (!entry) return null;
  if ((Date.now() - entry.ts) > CACHE_TTL_MS) return null;
  // Ignore cached tiny S2 (likely generic globe)
  if (entry.kind === "s2" && (entry.w < S2_MIN_ICON_SIZE || entry.h < S2_MIN_ICON_SIZE)) return null;
  return entry; // {src, kind, w, h, ts}
}

async function set_cached_favicon(website, record){
  const key = cacheKeyFor(website);
  await storage_set({ [key]: { ...record, ts: Date.now() } });
}

// ---- main updater -----------------------------------------------------------
window.update_quick_launch_bookmark_icons = function update_quick_launch_bookmark_icons(indices) {
  const list = Array.isArray(indices) ? indices : Array.from({ length: 20 }, (_, i) => i + 1);

  for (const i of list) {
    const website = (window[`bk_${i}_website`] || "").trim();
    if (!website) continue;
    const $img = $(`#bookmark_${i}_icon`);

    (async () => {
      // 1) show cached immediately (no flicker), else letter once
      const cached = await get_cached_favicon(website);
      if (cached && cached.src) {
        $img.attr('src', cached.src);
      } else {
        $img.attr('src', window.generate_fallback_favicon(website));
      }

      // 2) revalidate in background and swap only if better/different
      const best = await window.pick_favicon_src(website);
      if (!cached || cached.src !== best.src) {
        $img.attr('src', best.src);
        await set_cached_favicon(website, best);
      }
    })();
  }
};

// window.update_quick_launch_bookmark_icons = function update_quick_launch_bookmark_icons() {
//   const prefix = "https://www.google.com/s2/favicons?domain=";
//   const suffix = "&sz=128";

//   for (let i = 1; i <= 20; i++) {
//     const website = window[`bk_${i}_website`]; // e.g., "example.com"
//     if (!website) continue;

//     const src = `${prefix}${website}${suffix}`;
//     $(`#bookmark_${i}_icon`).attr("src", src);
//   }
// }

window.show_hide_quick_launch_bookmarks = function show_hide_quick_launch_bookmarks(){
	// _1
	if(bk_1_website==''){
		$('#bookmark_1').hide()
	}
	else{
		$('#bookmark_1').show()
	}
	// _2
	if(bk_2_website==''){
		$('#bookmark_2').hide()
	}
	else{
		$('#bookmark_2').show()
	}
	// _3
	if(bk_3_website==''){
		$('#bookmark_3').hide()
	}
	else{
		$('#bookmark_3').show()
	}
	// _4
	if(bk_4_website==''){
		$('#bookmark_4').hide()
	}
	else{
		$('#bookmark_4').show()
	}
	// _5
	if(bk_5_website==''){
		$('#bookmark_5').hide()
	}
	else{
		$('#bookmark_5').show()
	}
	// _6
	if(bk_6_website==''){
		$('#bookmark_6').hide()
	}
	else{
		$('#bookmark_6').show()
	}
	// _7
	if(bk_7_website==''){
		$('#bookmark_7').hide()
	}
	else{
		$('#bookmark_7').show()
	}
	// _8
	if(bk_8_website==''){
		$('#bookmark_8').hide()
	}
	else{
		$('#bookmark_8').show()
	}
	// _9
	if(bk_9_website==''){
		$('#bookmark_9').hide()
	}
	else{
		$('#bookmark_9').show()
	}
	// _10
	if(bk_10_website==''){
		$('#bookmark_10').hide()
	}
	else{
		$('#bookmark_10').show()
	}
	// _11
	if(bk_11_website==''){
		$('#bookmark_11').hide()
	}
	else{
		$('#bookmark_11').show()
	}
	// _12
	if(bk_12_website==''){
		$('#bookmark_12').hide()
	}
	else{
		$('#bookmark_12').show()
	}
	// _13
	if(bk_13_website==''){
		$('#bookmark_13').hide()
	}
	else{
		$('#bookmark_13').show()
	}
	// _14
	if(bk_14_website==''){
		$('#bookmark_14').hide()
	}
	else{
		$('#bookmark_14').show()
	}
	// _15
	if(bk_15_website==''){
		$('#bookmark_15').hide()
	}
	else{
		$('#bookmark_15').show()
	}
	// _16
	if(bk_16_website==''){
		$('#bookmark_16').hide()
	}
	else{
		$('#bookmark_16').show()
	}
	// _17
	if(bk_17_website==''){
		$('#bookmark_17').hide()
	}
	else{
		$('#bookmark_17').show()
	}
	// _18
	if(bk_18_website==''){
		$('#bookmark_18').hide()
	}
	else{
		$('#bookmark_18').show()
	}
	// _19
	if(bk_19_website==''){
		$('#bookmark_19').hide()
	}
	else{
		$('#bookmark_19').show()
	}
	// _20
	if(bk_20_website==''){
		$('#bookmark_20').hide()
	}
	else{
		$('#bookmark_20').show()
	}
}

window.update_quick_launch_bookmarks = function update_quick_launch_bookmarks(){
	update_quick_launch_bookmark_labels()
	update_quick_launch_bookmark_icons()
	show_hide_quick_launch_bookmarks()
}

