// ================= circadian_theme_mode.js =================
// Re-applies the circadian theme on the top of each hour and when the tab regains focus.
// Integrates with your existing theme functions and #theme_mode control.

(function () {
  const ns = window;

  ns._circadianTimer = null;
  ns._circadianLastHourApplied = null;
  ns._circadianVisListener = null;

  function nextTopOfHourDelayMs() {
    const now = new Date();
    const next = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      now.getHours() + 1,
      0, 0, 0
    );
    return Math.max(0, next - now);
  }

  function applyCircadianIfNeeded() {
    // Only act in circadian mode
    if (ns.theme_mode !== 'circadian') return;

    const nowHour = new Date().getHours();
    if (ns._circadianLastHourApplied !== nowHour) {

      // If your CSS depends on color_* globals, refresh it here
      if (typeof ns.update_css_coloring === 'function') ns.update_css_coloring();

      ns._circadianLastHourApplied = nowHour;
    }
  }

  function scheduleNextTopOfHour() {
    clearTimeout(ns._circadianTimer);
    ns._circadianTimer = setTimeout(() => {
      applyCircadianIfNeeded();
      scheduleNextTopOfHour(); // reschedule after applying
    }, nextTopOfHourDelayMs());
  }

  function attachVisibilityListener() {
    if (ns._circadianVisListener) return; // already attached
    ns._circadianVisListener = function () {
      if (document.visibilityState === 'visible' && ns.theme_mode === 'circadian') {
        // If we crossed an hour boundary while hidden/asleep, apply immediately
        applyCircadianIfNeeded();
        // Realign the timer to the next top of hour
        scheduleNextTopOfHour();
      }
    };
    document.addEventListener('visibilitychange', ns._circadianVisListener);
  }

  function detachVisibilityListener() {
    if (!ns._circadianVisListener) return;
    document.removeEventListener('visibilitychange', ns._circadianVisListener);
    ns._circadianVisListener = null;
  }

  // Public: start (or restart) the hourly circadian updates
  ns.start_circadian_theme_timer = function start_circadian_theme_timer(runNow = true) {
    clearTimeout(ns._circadianTimer);

    if (ns.theme_mode !== 'circadian') {
      detachVisibilityListener();
      return;
    }

    attachVisibilityListener();

    if (runNow) applyCircadianIfNeeded();
    scheduleNextTopOfHour();
  };

  // Public: stop the hourly updates (e.g., leaving circadian mode)
  ns.stop_circadian_theme_timer = function stop_circadian_theme_timer() {
    clearTimeout(ns._circadianTimer);
    ns._circadianTimer = null;
    detachVisibilityListener();
  };

  // Convenience: call this after you change theme_mode
  ns.circadian_timer_maybe_restart = function circadian_timer_maybe_restart() {
    if (ns.theme_mode === 'circadian') {
      ns.start_circadian_theme_timer(true);
    } else {
      ns.stop_circadian_theme_timer();
    }
  };

  // Auto-hook into your #theme_mode control without changing your function names
  if (typeof jQuery !== 'undefined') {
    $(document).on('change', '#theme_mode', function () {
      if (typeof ns.change_theme_mode === 'function') ns.change_theme_mode(); // keeps your existing behavior
      ns.circadian_timer_maybe_restart();
    });
  }

  // Kick off once after app initializes (idle-safe; no invalid IdleRequestOptions)
  function runSoon(cb) {
    if (typeof ns.requestIdleCallback === 'function') {
      ns.requestIdleCallback(cb, { timeout: 1000 });
    } else {
      setTimeout(cb, 0);
    }
  }

  runSoon(() => {
    // If the user landed already in circadian mode, start the timer now
    if (ns.theme_mode === 'circadian') ns.start_circadian_theme_timer(true);
  });

})();
