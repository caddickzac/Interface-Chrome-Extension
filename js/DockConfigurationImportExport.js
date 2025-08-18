// 🔠 Auto-generate all keys: label_* and website_*
const dockKeys = [];
const charRanges = [...'abcdefghijklmnopqrstuvwxyz', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', ...'0123456789'];

charRanges.forEach(char => {
  dockKeys.push(`label_${char}`, `website_${char}`);
});

// Add numeric combinations (e.g., website_1_1)
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 10; j++) {
    dockKeys.push(`website_${i}_${j}`);
  }
}

// Manually add additional known keys
dockKeys.push(
  'ws_1_website', 'ws_2_website', 'ws_3_website', 'ws_4_website', 'ws_5_website', 'ws_6_website',
  'ws_1_url', 'ws_2_url', 'ws_3_url', 'ws_4_url', 'ws_5_url', 'ws_6_url',

  'bk_1_label','bk_2_label','bk_3_label','bk_4_label','bk_5_label',
  'bk_6_label','bk_7_label','bk_8_label','bk_9_label','bk_10_label',
  'bk_11_label','bk_12_label','bk_13_label','bk_14_label','bk_15_label',
  'bk_16_label','bk_17_label','bk_18_label','bk_19_label','bk_20_label',

  'bk_1_website','bk_2_website','bk_3_website','bk_4_website','bk_5_website',
  'bk_6_website','bk_7_website','bk_8_website','bk_9_website','bk_10_website',
  'bk_11_website','bk_12_website','bk_13_website','bk_14_website','bk_15_website',
  'bk_16_website','bk_17_website','bk_18_website','bk_19_website','bk_20_website',

  'wsi_current_selection',
  'mt_settings', 'sd_settings', 'sg_settings',
  'theme_mode', 'theme', 
  'color_background', 'color_accent_1', 'color_accent_2',
  'name',
  'default_home_screen', 'top_dock_calendar_view_choice', 'top_dock_hotkey_choice',
  'page_count' 
);

// 🧨 EXPORT
$('#config_export_button').on('click', function () {
  console.log('📤 Export Dock Configuration');
  const rows = [['key', 'value']];

  dockKeys.forEach(key => {
    if (typeof window[key] !== 'undefined') {
      rows.push([key, window[key]]);
    }
  });

  const csvContent = rows.map(r => r.join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'dock_config.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

window.validateHexColors = function validateHexColors(bg, accent1, accent2) {
  const isValidHex = (color) => /^#[0-9A-Fa-f]{6}$/.test(color);

  if (!isValidHex(bg) || !isValidHex(accent1) || !isValidHex(accent2)) {
    console.warn("Invalid hex detected. Falling back to default 'dusk' colors.");
    return {
      color_background: "#314455",
      color_accent_1: "#9e5a63",
      color_accent_2: "#c96567"
    };
  }

  return {
    color_background: bg,
    color_accent_1: accent1,
    color_accent_2: accent2
  };
}

window.sanitizeImportedLabels = function sanitizeImportedLabels() {
  const keys = Object.keys(window);

  keys.forEach(key => {
    const value = window[key];

    if (typeof value === 'string') {
      // Label: a-z or A-Z → max 25
      if (/^label_[a-zA-Z]$/.test(key) && value.length > 25) {
        window[key] = value.slice(0, 25);
      }

      // Label: 0-9 → max 20
      else if (/^label_[0-9]$/.test(key) && value.length > 20) {
        window[key] = value.slice(0, 20);
      }

      // Bottom dock (e.g., ws_1_website) → max 17
      else if (/^ws_[1-6]_website$/.test(key) && value.length > 17) {
        window[key] = value.slice(0, 17);
      }

      // quick launch bookmark lables → max 15
      else if (/^bk_(?:[1-9]|1[0-9]|20)_label$/.test(key) && value.length > 15) {
        window[key] = value.slice(0, 15);
      }


      // website_* → no limit (ignored)
    }
  });
}


// fix broken import variables (if needed)
window.data_value_problem_checking = function data_value_problem_checking(){


  // yes/no flags
  if (sd_settings !== 'yes' && sd_settings !== 'no') sd_settings = 'yes'; // show date
  if (mt_settings !== 'yes' && mt_settings !== 'no') mt_settings = 'no'; // military time
  if (sg_settings !== 'yes' && sg_settings !== 'no') sg_settings = 'no'; // show greting


  const theme_mode_list = ['fixed', 'circadian', 'random']
  if (!theme_mode_list.includes(theme_mode)) theme_mode = 'fixed';

  // theme name strict check against theme_list
  if (!window.theme_list.includes(theme)) theme = 'dusk';

  // apply colors
  if (theme === 'custom') {
    const validated = validateHexColors(color_background, color_accent_1, color_accent_2);
    color_background = validated.color_background;
    color_accent_1   = validated.color_accent_1;
    color_accent_2   = validated.color_accent_2;
  } else if (window.themes && window.themes.hasOwnProperty(theme)) {
    color_background = window.themes[theme].background;
    color_accent_1   = window.themes[theme].accent1;
    color_accent_2   = window.themes[theme].accent2;
  } else {
    // hard fallback (shouldn’t happen if theme_list is synced)
    color_background = "#314455";
    color_accent_1   = "#9e5a63";
    color_accent_2   = "#c96567";
    theme            = 'dusk';
  }

  // top dock inputs
  const default_home_screen_list = ['calendar','clock','quick launch']
  if (!default_home_screen_list.includes(default_home_screen)) {
    default_home_screen = 'clock';
  }

  const top_dock_calendar_view_choice_list = ['last open','present','day','week','month','year']
  if (!top_dock_calendar_view_choice_list.includes(top_dock_calendar_view_choice)) {
    top_dock_calendar_view_choice = 'present';
  }

  if (top_dock_hotkey_choice != 'calendar' && top_dock_hotkey_choice != 'left & right docks') { // show date
    top_dock_hotkey_choice = 'calendar'
  }
  
  const wsi_current_selection_list = [
    1,2,3,4,5,6]
  if (!wsi_current_selection_list.includes(wsi_current_selection)) {
    wsi_current_selection = 1;
  }

  // trim characters off if labels too long
  sanitizeImportedLabels()
}

$('#config_import_button').on('click', function () {
  console.log('📥 Import Dock Configuration');
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.csv';

  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const lines = e.target.result.trim().split('\n');

      lines.slice(1).forEach(line => {
        const firstComma = line.indexOf(',');
        if (firstComma === -1) return; // Skip malformed lines

        const key = line.slice(0, firstComma).trim();
        const value = line.slice(firstComma + 1).trim(); // allow commas in value

        if (dockKeys.includes(key)) {
          // ✅ Always assign value, even if empty
          window[key] = value;
        } else {
          console.warn(`Unknown key skipped: ${key}`);
        }
      });

      console.log('✅ Configuration imported successfully!');
      $('#config_import_message').fadeIn().delay(2500).fadeOut();

      
      if (typeof window.data_value_problem_checking === 'function') {
        data_value_problem_checking();
      }

      if (typeof window.store_data === 'function') {
        store_data();
      }

      if (typeof window.get_data === 'function') {
        get_data();
      }

      if (typeof window.run_setup__functions === 'function') {
        get_data()

        setTimeout(function(){
          main_display_screen_window_scaling()
          update_css_coloring()
          unloadScrollBars()
          Change_Display_Settings()
          DoW()
          top_dock_resize_events()
          showTime()
          grab_data()
          hex()
          home_display_settings() // settings display screen appearence for date, military time, greeting
          ldi_case_toggle()
          text_input_grey_out_function()
          change_checkbox() // search box check mark
          update_search_box_text()
          web_search_updater()
          $('#body_id').show()
          new_day_clock_functions()
          View_Changer()
          update_css_coloring()
          // Display_Main_Screen()
          setTimeout(function(){
              tryInitializeColorPickers(color_background, color_accent_1, color_accent_2) // zc
          },1000)
          scheduleMidnightFunction() // re-run calendar setup at midnight
          setTimeout(function(){
              hamburger_color_changer() 
              page_ready='yes'
              // View_Changer()
              top_dock_resize_events()
          },20)          
        })
      }
    };

    reader.readAsText(file);
  };


  input.click();
});
