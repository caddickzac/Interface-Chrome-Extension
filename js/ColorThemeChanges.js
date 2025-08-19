
themes = {
  "night":        { background: "#242424", accent1: "#808080", accent2: "#BFBFBF" },
  "cotton candy": { background: "#DE9097", accent1: "#B4E3E0", accent2: "#8EF3ED" },
  "greens":       { background: "#1A362A", accent1: "#21B577", accent2: "#178256" },
  "sandstone":    { background: "#F4cc70", accent1: "#de7a22", accent2: "#20948b" },
  "seaside":      { background: "#38908F", accent1: "#FFBFA3", accent2: "#B2EBE0" },
  "pittsburgh":   { background: "#040205", accent1: "#FCFEFB", accent2: "#FBBE04" },
  "americana":    { background: "#F1FAEE", accent1: "#E63946", accent2: "#457B9D" },
  "emerald":      { background: "#000000", accent1: "#EDF5E1", accent2: "#8EE4AF" },
  "blues":        { background: "#05386B", accent1: "#8DBFF2", accent2: "#EDF5E1" },
  "riddler":      { background: "#490652", accent1: "#2C5206", accent2: "#4F9E00" },
  "kiwi":         { background: "#AFD275", accent1: "#7E685A", accent2: "#80624C" },
  "coastline":    { background: "#66A5AD", accent1: "#C4DFE6", accent2: "#003B46" },
  "dusk":         { background: "#314455", accent1: "#9e5a63", accent2: "#c96567" },
  "berries":      { background: "#7E444B", accent1: "#ec96a4", accent2: "#9a9eab" },
  "strawberry":   { background: "#659353", accent1: "#3f6c45", accent2: "#cb0000" },
  "clay":         { background: "#1e0000", accent1: "#9d331f", accent2: "#bc6d4f" },
  "light":        { background: "#F1FAEE", accent1: "#989898", accent2: "#000000" },
  "morning":      { background: "#5B9BD5", accent1: "#FFFFFF", accent2: "#FFD300" },
  "salmon":       { background: "#FFCACE", accent1: "#B28D90", accent2: "#191919" },
  "vapor wave":   { background: "#0D0D64", accent1: "#FB69DA", accent2: "#FF904B" },
  "black & gold": { background: "#21221D", accent1: "#A7894A", accent2: "#E5D5B9" },
  "big foot":     { background: "#BB6653", accent1: "#FFF8E8", accent2: "#F08B51" },
  "sunshine":     { background: "#00809D", accent1: "#FCF8DD", accent2: "#FFD700" },
  "netflix":      { background: "#231F20", accent1: "#E0E0E0", accent2: "#E50913" },
  "scarlet":      { background: "#680021", accent1: "#FFFAEC", accent2: "#000000" },
  "spotify":      { background: "#191414", accent1: "#1DB954", accent2: "#1DB954" },
  "uber":         { background: "#09091A", accent1: "#C0C0C8", accent2: "#1FBAD6" },
  "heineken":     { background: "#205527", accent1: "#008200", accent2: "#FF2B00" },
  "lego":         { background: "#000000", accent1: "#D11013", accent2: "#F6EC35" },
  "linkedin-dark":{ background: "#000000", accent1: "#CACCCE", accent2: "#0077B5" },
  "linkedin-light":{ background: "#F4F2EE", accent1: "#000000", accent2: "#0077B5" },
  "nasa":         { background: "#FFFFFF", accent1: "#FC3D21", accent2: "#0B3D91" },
  "natgeo":       { background: "#FFCC00", accent1: "#FFFFFF", accent2: "#000000" },
  "tiffany":      { background: "#222831", accent1: "#EEEEEE", accent2: "#00ADB5" },
  "xanadu":       { background: "#798777", accent1: "#A2B29F", accent2: "#1D221C" },
  "sunset":       { background: "#C06C84", accent1: "#6C5B7B", accent2: "#355C7D" },
  "earth-light":  { background: "#E5D9B6", accent1: "#5F8D4E", accent2: "#285430" },
  "earth-dark":   { background: "#285430", accent1: "#E5D9B6", accent2: "#A4BE7B" },
  "charcoal & sunlight": { background: "#222831", accent1: "#EEEEEE", accent2: "#FFD369" },
  "timberline":   { background: "#395144", accent1: "#AA8B56", accent2: "#F0EBCE" },
  "creamsicle":   { background: "#FDEEDC", accent1: "#F1A661", accent2: "#E38B29" },
  "rust horizon": { background: "#521C0D", accent1: "#FF9B45", accent2: "#D5451B" },
  "industrial glow": { background: "#1B1A17", accent1: "#A35709", accent2: "#FF8303" },
  "ash & bone":   { background: "#1A120B", accent1: "#D5CEA3", accent2: "#E5E5CB" },
  "greenstone":   { background: "#12372A", accent1: "#436850", accent2: "#FBFADA" },
  "maritime fade":{ background: "#B1D0E0", accent1: "#6998AB", accent2: "#1A374D" },
  "summerline":   { background: "#155263", accent1: "#FF6F3C", accent2: "#FFC93C" },
  "military":     { background: "#4D784E", accent1: "#675645", accent2: "#E1D798" }
};



theme_list = ['night','cotton candy','greens','sandstone','seaside','pittsburgh',
'americana','emerald','blues', //'riddler',
'kiwi','coastline','dusk','berries','strawberry',
'clay','light','morning','salmon',//'vapor wave',
'black & gold','big foot','sunshine','netflix',
'scarlet','spotify','uber','heineken','lego','linkedin-dark','linkedin-light','nasa','natgeo',
'tiffany','xanadu','sunset','earth-light','earth-dark','charcoal & sunlight','timberline',
'creamsicle','rust horizon','industrial glow','ash & bone','greenstone','maritime fade',
'summerline','military']

window.get_random_theme = function get_random_theme(themes){
    const randomTheme = Math.floor(Math.random() * themes.length);
    return themes[randomTheme];
}

window.update_css_coloring = function update_css_coloring(){ // functions like this one, that are run in run_setup__functions(), need to be in this script. 
    
    if(theme_mode==='random'){
        change_preset_theme()
    }
    else if(theme_mode==='circadian'){
        change_preset_theme()
    }
    else if(theme_mode==='fixed'){
        color_background=$('#hex_1').val()
        color_accent_1=$('#hex_2').val()
        color_accent_2=$('#hex_3').val()
    }  

    // CHANGE BACKGROUND
    update_css_background_color()

    // CHANGE ACCENT 1
    update_css_color_accent_1()

    // CHANGE ACCENT 2
    update_css_color_accent_2()

    // Settings Screen Colors
    home_display_settings()

    // hamburger icon
    hamburger_color_changer()

    // quick launch bookmark icon
    initBookmarkIconHover()
}

window.hex_empty_check = function hex_empty_check(){
    if($('#hex_1').val()==""){
        hex_1_empty='yes'
    }
    else{
         hex_1_empty='no'
    }

    if($('#hex_2').val()==""){
        hex_2_empty='yes'
    }
    else{
         hex_2_empty='no'
    }  

    if($('#hex_3').val()==""){
        hex_3_empty='yes'
    }
    else{
         hex_3_empty='no'
    }

    if(hex_1_empty.length+hex_2_empty.length+hex_3_empty.length==6){
        hexes_all_have_text='yes'
    }
    else{
        hexes_all_have_text='no'
    }
}


window.hex_length_check = function hex_length_check(){
    if($('#hex_1').val().length==7){
        hex_1_length_check='good'
    }
    else{
        hex_1_length_check='no'
    }

    if($('#hex_2').val().length==7){
        hex_2_length_check='good'
    }
    else{
        hex_2_length_check='no'
    }

    if($('#hex_3').val().length==7){
        hex_3_length_check='good'
    }
    else{
        hex_3_length_check='no'
    }

    if(hex_1_length_check.length+hex_2_length_check.length+hex_3_length_check.length==12){
        hexes_all_proper_length='yes'
    }
    else{
        hexes_all_proper_length='no'
    }
}

window.hex_symbol_check = function hex_symbol_check(){
    if($('#hex_1').val().indexOf('#') == 0 ){
        hex_1_symbol_check='good'
    }
    else{
        hex_1_symbol_check='no'
    }

    if($('#hex_2').val().indexOf('#') == 0 ){
        hex_2_symbol_check='good'
    }
    else{
        hex_2_symbol_check='no'
    }

    if($('#hex_3').val().indexOf('#') == 0 ){
        hex_3_symbol_check='good'
    }
    else{
        hex_3_symbol_check='no'
    }
    if(hex_1_symbol_check.length+
        hex_2_symbol_check.length+
        hex_3_symbol_check.length==12){
        hexes_all_have_symbol='yes'
    }
    else{
        hexes_all_have_symbol='no'
    }
}

window.hex = function hex(){
    hex_empty_check()
    hex_length_check()
    hex_symbol_check()
    if(hexes_all_have_text.length+
        hexes_all_proper_length.length+
        hexes_all_have_symbol.length==9){
        hexes_ready='yes'

    }
    else{
        hexes_ready='no'
    }
}

window.change_theme_mode = function change_theme_mode(){
    theme_mode = $('#theme_mode').val();
}

window.change_preset_theme = function change_preset_theme() {
  let choice = $('#theme_choice').val();
  
  if (theme_mode === 'random') {
    choice = get_random_theme(Object.keys(themes));
    // theme = choice;
  }
  else if(theme_mode === 'circadian') {
    const date = new Date();
    const hour = date.getHours();
    if(hour < 6){ // midnight to 6am
        choice = 'night'
    }
    else if(hour >= 6 && hour < 12){ // 7am to noon
        choice = 'morning'
    }
    else if(hour >= 12 && hour < 14){ // noon to 2pm
        choice = 'sandstone'
    }
    else if(hour >= 14 && hour < 17){ // 2pm to 5pm
        choice = 'kiwi'
    }
    else if(hour >= 17 && hour < 19){ // 5pm to 7pm
        choice = 'sunset'
    }  
    else if(hour >= 19 && hour < 21){ // 7pm to 9pm
        choice = 'dusk'
    }
    else if(hour >= 21 && hour < 22){ // 9pm to 10pm
        choice = 'ash & bone'
    }    
    else if(hour >= 22 && hour < 24){ // 10pm to midnight
        choice = 'night'
    }
  }

  if (choice === 'custom') {
    if (hexes_ready === 'yes') {
      color_background = $('#hex_1').val();
      color_accent_1   = $('#hex_2').val();
      color_accent_2   = $('#hex_3').val();
      theme = 'custom';
    }
  } else if (themes[choice]) {
    color_background = themes[choice].background;
    color_accent_1   = themes[choice].accent1;
    color_accent_2   = themes[choice].accent2;
    theme = choice;
  }

  $('#hex_1').attr('placeholder', color_background).val(color_background);
  $('#hex_2').attr('placeholder', color_accent_1).val(color_accent_1);
  $('#hex_3').attr('placeholder', color_accent_2).val(color_accent_2);

  setTimeout(() => syncPickrsWithInputs(), 10);
}

window.theme_choice_label_fix = function theme_choice_label_fix(){
    if(theme=='americana'){$('#theme_choice').val('americana')}
    else if(theme=='berries'){$('#theme_choice').val('berries')}
    else if(theme=='blues'){$('#theme_choice').val('blues')}
    else if(theme=='clay'){$('#theme_choice').val('clay')}
    else if(theme=='coastline'){$('#theme_choice').val('coastline')}
    else if(theme=='cotton candy'){$('#theme_choice').val('cotton candy')}
    else if(theme=='dusk'){$('#theme_choice').val('dusk')}
    else if(theme=='emerald'){$('#theme_choice').val('emerald')}
    else if(theme=='greens'){$('#theme_choice').val('greens')}
    else if(theme=='kiwi'){$('#theme_choice').val('kiwi')}
    else if(theme=='light'){$('#theme_choice').val('light')}
    else if(theme=='morning'){$('#theme_choice').val('morning')}
    else if(theme=='night'){$('#theme_choice').val('night')}
    else if(theme=='pittsburgh'){$('#theme_choice').val('pittsburgh')}
    else if(theme=='riddler'){$('#theme_choice').val('riddler')}
    else if(theme=='salmon'){$('#theme_choice').val('salmon')}
    else if(theme=='sandstone'){$('#theme_choice').val('sandstone')}
    else if(theme=='seaside'){$('#theme_choice').val('seaside')}
    else if(theme=='strawberry'){$('#theme_choice').val('strawberry')}
    else if(theme=='vapor wave'){$('#theme_choice').val('vapor wave')}
    else if(theme=='black & gold'){$('#theme_choice').val('black & gold')}
    else if(theme=='big foot'){$('#theme_choice').val('big foot')}
    else if(theme=='sunshine'){$('#theme_choice').val('sunshine')}
    else if(theme=='netflix'){$('#theme_choice').val('netflix')}
    else if(theme=='scarlet'){$('#theme_choice').val('scarlet')}
    else if(theme=='spotify'){$('#theme_choice').val('spotify')}
    else if(theme=='uber'){$('#theme_choice').val('uber')}
    else if(theme=='heineken'){$('#theme_choice').val('heineken')}
    else if(theme=='lego'){$('#theme_choice').val('lego')}
    else if(theme=='linkedin-dark'){$('#theme_choice').val('linkedin-dark')}
    else if(theme=='linkedin-light'){$('#theme_choice').val('linkedin-light')}
    else if(theme=='nasa'){$('#theme_choice').val('nasa')}
    else if(theme=='natgeo'){$('#theme_choice').val('natgeo')}
    else if(theme=='tiffany'){$('#theme_choice').val('tiffany')}
    else if(theme=='xanadu'){$('#theme_choice').val('xanadu')}
    else if(theme=='sunset'){$('#theme_choice').val('sunset')}
    else if(theme=='earth-light'){$('#theme_choice').val('earth-light')}
    else if(theme=='earth-dark'){$('#theme_choice').val('earth-dark')}
    else if(theme=='charcoal & sunlight'){$('#theme_choice').val('charcoal & sunlight')}
    else if(theme=='timberline'){$('#theme_choice').val('timberline')}
    else if(theme=='creamsicle'){$('#theme_choice').val('creamsicle')}
    else if(theme=='rust horizon'){$('#theme_choice').val('rust horizon')}
    else if(theme=='industrial glow'){$('#theme_choice').val('industrial glow')}
    else if(theme=='ash & bone'){$('#theme_choice').val('ash & bone')}
    else if(theme=='greenstone'){$('#theme_choice').val('greenstone')}
    else if(theme=='maritime fade'){$('#theme_choice').val('maritime fade')}
    else if(theme=='summerline'){$('#theme_choice').val('summerline')}
    else if(theme=='military'){$('#theme_choice').val('military')}
    else{}
}

// Make sure the functions you're calling are globally available
window.hex = window.hex || function() {};
window.change_preset_theme = window.change_preset_theme || function() {};
window.update_css_coloring = window.update_css_coloring || function() {};

window.update_css_background_color = function update_css_background_color(){
    $('#body_id').css("background-color", color_background)
    $('#settings_screen_main').css("background-color", color_background)
    $('#Search_Greeting').css("background-color", color_background)
    $('#screen2').css("background-color", color_background)
    $('left_dock').css("background-color", color_background)
    $('#left_dock_lowercase').css("background-color", color_background)
    $('#left_dock_uppercase').css("background-color", color_background)
    $('#left_docker_state1').css("background-color", color_background)
    $('#left_docker_state2').css("background-color", color_background)
    $('#right_docker_state1').css("background-color", color_background)
    $('#right_docker_state2').css("background-color", color_background)
    $('#right_dock_table').css("background-color", color_background)
    $('#about_screen').css("background-color", color_background)
    $('#swatch_background').css('color', color_background)
    $('#left_arr_sett').css('background-color', color_background)
    $('#right_arr_sett').css('background-color', color_background)
    $('#top_arr_sett').css('background-color', color_background)
    $('#bottom_arr_sett').css('background-color', color_background)
    $('#nr_1').css("background-color", color_background)
    $('#nr_2').css("background-color", color_background)
    $('#nr_3').css("background-color", color_background)
    $('#nr_4').css("background-color", color_background)
    $('#nr_5').css("background-color", color_background)
    $('#nr_6').css("background-color", color_background)
    $('#nr_7').css("background-color", color_background)
    $('#nr_8').css("background-color", color_background)
    $('#nr_9').css("background-color", color_background)
    $('#nr_0').css("background-color", color_background)
    $('#bottom_dock').css('background-color', color_background)
    $('#pct_of_day_tracker_time').css('color', color_background)
    $('#pct_of_day_tracker_time_meridies').css('color', color_background)
    $('#top_dock_date_DoW').css('color', color_background)
    $('#present_view_date_DoW').css('color', color_background)
    $('#top_dock_date_DoW_range').css('color', color_background)
    $('#wv_mon_event_1').css('color', color_background)
    $('#wv_tue_event_1').css('color', color_background)
    $('#wv_wed_event_1').css('color', color_background)
    $('#wv_thu_event_1').css('color', color_background)
    $('#wv_fri_event_1').css('color', color_background)
    $('#wv_fri_event_2').css('color', color_background)
    $('#week_view_grid_overlay').css('background-color', color_background)
    $('#present_time_div').css('background-color', color_background)
    $('#present_view_left_side_rail').css('background-color', color_background)
    $('#present_view_right_side_rail').css('background-color', color_background)
    $('#month_view_month_label').css('color', color_background)
    $('#week_view_time_tracker_circle_background').css('color', color_background)
    $('#week_view_time_tracker_line_background').css('border-color', color_background)
    $('#week_view_friday_date').css('color', color_background)
    $('#config_import_message').css('color', color_background)
    $('#bookmark_1_favicon').css('background-color', color_background);
    $('#bookmark_2_favicon').css('background-color', color_background);
    $('#bookmark_3_favicon').css('background-color', color_background);
    $('#bookmark_4_favicon').css('background-color', color_background);
    $('#bookmark_5_favicon').css('background-color', color_background);
    $('#bookmark_6_favicon').css('background-color', color_background);
    $('#bookmark_7_favicon').css('background-color', color_background);
    $('#bookmark_8_favicon').css('background-color', color_background);
    $('#bookmark_9_favicon').css('background-color', color_background);
    $('#bookmark_10_favicon').css('background-color', color_background);
    $('#bookmark_11_favicon').css('background-color', color_background);
    $('#bookmark_12_favicon').css('background-color', color_background);
    $('#bookmark_13_favicon').css('background-color', color_background);
    $('#bookmark_14_favicon').css('background-color', color_background);
    $('#bookmark_15_favicon').css('background-color', color_background);
    $('#bookmark_16_favicon').css('background-color', color_background);
    $('#bookmark_17_favicon').css('background-color', color_background);
    $('#bookmark_18_favicon').css('background-color', color_background);
    $('#bookmark_19_favicon').css('background-color', color_background);
    $('#bookmark_20_favicon').css('background-color', color_background);
}


window.update_css_color_accent_1 = function update_css_color_accent_1(){
    $('#left_docker_state1').css("border-color", color_accent_1)
    $('#left_docker_state2').css("border-color", color_accent_1)
    $('#left_dock').css("border-color", color_accent_1)
    $('#right_docker_state1').css("border-color", color_accent_1)
    $('#right_docker_state2').css("border-color", color_accent_1)
    $('#right_dock').css("border-color", color_accent_1)
    $('#bd_1').css("border-color", color_accent_1)
    $('#bd_2').css("border-color", color_accent_1)
    $('#bd_3').css("border-color", color_accent_1)
    $('#bd_4').css("border-color", color_accent_1)
    $('#bd_5').css("border-color", color_accent_1)
    $('#bd_6').css("border-color", color_accent_1)
    $('#left_docker_state1').css("box-shadow-color", color_accent_1)
    $('#settings_screen_main').css("border-color", color_accent_1)
    $('#dayofweek_placeholder').css("color", color_accent_1)
    $('#Date_Display').css("color", color_accent_1)
    $('#settings_screen_title_border').css("border-color", color_accent_1)
    $('#settings_screen_subtitle_border').css("border-color", color_accent_1)
    $('#about_screen').css("color", color_accent_1)
    $('#left_arr_sett').css("border-color", color_accent_1)
    $('#top_arr_sett').css("border-color", color_accent_1)
    $('#right_arr_sett').css("border-color", color_accent_1)
    $('#bottom_arr_sett').css("border-color", color_accent_1)
    $('#config_import_button').css("border-color", color_accent_1)
    $('#config_export_button').css("border-color", color_accent_1)
    $('#nr_1').css("border-color", color_accent_1)
    $('#nr_2').css("border-color", color_accent_1)
    $('#nr_3').css("border-color", color_accent_1)
    $('#nr_4').css("border-color", color_accent_1)
    $('#nr_5').css("border-color", color_accent_1)
    $('#nr_6').css("border-color", color_accent_1)
    $('#nr_7').css("border-color", color_accent_1)
    $('#nr_8').css("border-color", color_accent_1)
    $('#nr_9').css("border-color", color_accent_1)
    $('#nr_0').css("border-color", color_accent_1)
    $('#settings_screen_title_border').css("border-color", color_accent_1)
    $('#settings_finished').css("border-color", color_accent_1)
    $('#left_dock_input').css("border-color", color_accent_1)
    $('#right_dock_input').css("border-color", color_accent_1)
    $('#ldi_finished').css("border-color", color_accent_1)
    $('#rdi_finished').css("border-color", color_accent_1)
    // $('#rdi_header').css("border-color", color_accent_1)
    $('#left_dock_input_table_heading').css("border-color", color_accent_1)
    $('#ldi_lc_0').css("border-color", color_accent_1)
    $('#ldi_lc_0a').css("border-color", color_accent_1)
    $('#ldi_uc_0').css("border-color", color_accent_1)
    $('#ldi_uc_0a').css("border-color", color_accent_1)
    $('#swatch_accent1').css('color', color_accent_1)
    $('#color_scheme_change').css('border-color', color_accent_1)
    $('#left_dock_input_instructions_underline').css('border-color', color_accent_1)
    $('#right_dock_input_underline').css('border-color', color_accent_1)
    $('#right_dock_input_instructions_id').css('border-color', color_accent_1)
    $('#color_scheme_input').css('border-color', color_accent_1)
    $('#web_search_input_instructions_id').css('border-color', color_accent_1)
    $('#web_search_input_underline').css('border-color', color_accent_1) 
    $('#web_search_input_finished').css('border-color', color_accent_1)
    $('#wsi_header').css("border-color", color_accent_1)
    $('#csi_h1').css('border-color', color_accent_1)
    $('#csi_h2').css('border-color', color_accent_1)
    $('#color_scheme_input_finished').css('border-color', color_accent_1)
    $('#csi_underline').css('border-color', color_accent_1)
    $('#Greeting_Message').css('color', color_accent_1)
    $('#color_scheme_custom_submit').css('border-color', color_accent_1) 
    $('#color_scheme_input_underline').css('border-color', color_accent_1)
    $('#left_dock_lowercase').css('border-color', color_accent_1)
    $('#author_website').css("color", color_accent_1)
    $('#top_dock').css("color", color_accent_1)
    $('#ld_override_settings').css("border-color", color_accent_1)

    // timeline notches
    $('#tl_1').css("border-color", color_accent_1)
    $('#tl_2').css("border-color", color_accent_1)
    $('#tl_3').css("border-color", color_accent_1)
    $('#tl_4').css("border-color", color_accent_1)
    $('#tl_5').css("border-color", color_accent_1)
    $('#tl_6').css("border-color", color_accent_1)
    $('#tl_7').css("border-color", color_accent_1)
    $('#tl_8').css("border-color", color_accent_1)
    $('#tl_9').css("border-color", color_accent_1)
    $('#tl_10').css("border-color", color_accent_1)
    $('#tl_11').css("border-color", color_accent_1)
    $('#tl_12').css("border-color", color_accent_1)
    $('#tl_13').css("border-color", color_accent_1)
    $('#tl_14').css("border-color", color_accent_1)
    $('#tl_15').css("border-color", color_accent_1)
    $('#tl_16').css("border-color", color_accent_1)
    $('#tl_17').css("border-color", color_accent_1)
    $('#tl_18').css("border-color", color_accent_1)
    $('#tl_19').css("border-color", color_accent_1)
    $('#tl_20').css("border-color", color_accent_1)
    $('#tl_21').css("border-color", color_accent_1)
    $('#tl_22').css("border-color", color_accent_1)
    $('#tl_23').css("border-color", color_accent_1)
    $('#tl_24').css("border-color", color_accent_1)

    $('#tp_m1').css('color', color_accent_1)
    $('#tp_m2').css('color', color_accent_1)
    $('#tp_m3').css('color', color_accent_1)
    $('#tp_m4').css('color', color_accent_1)
    $('#tp_m5').css('color', color_accent_1)
    $('#tp_m6').css('color', color_accent_1)
    $('#tp_m7').css('color', color_accent_1)
    $('#tp_m8').css('color', color_accent_1)
    $('#tp_m9').css('color', color_accent_1)
    $('#tp_m10').css('color', color_accent_1)
    $('#tp_m11').css('color', color_accent_1)
    $('#tp_m12').css('color', color_accent_1)
    $('#td_month_header').css('color', color_accent_1)
    $('#td_month_row_1').css('color', color_accent_1)
    $('#td_month_row_2').css('color', color_accent_1)
    $('#td_month_row_3').css('color', color_accent_1)
    $('#td_month_row_4').css('color', color_accent_1)
    $('#td_month_row_5').css('color', color_accent_1)
    $('#td_month_row_6').css('color', color_accent_1)
    $('#td_month_cell_1').css('border-color', color_accent_1)
    $('#td_month_cell_2').css('border-color', color_accent_1)
    $('#td_month_cell_3').css('border-color', color_accent_1)
    $('#td_month_cell_4').css('border-color', color_accent_1)
    $('#td_month_cell_5').css('border-color', color_accent_1)
    $('#td_month_cell_6').css('border-color', color_accent_1)
    $('#td_month_cell_7').css('border-color', color_accent_1)
    $('#td_month_cell_8').css('border-color', color_accent_1)
    $('#td_month_cell_9').css('border-color', color_accent_1)
    $('#td_month_cell_10').css('border-color', color_accent_1)
    $('#td_month_cell_11').css('border-color', color_accent_1)
    $('#td_month_cell_12').css('border-color', color_accent_1)
    $('#td_month_cell_13').css('border-color', color_accent_1)
    $('#td_month_cell_14').css('border-color', color_accent_1)
    $('#td_month_cell_15').css('border-color', color_accent_1)
    $('#td_month_cell_16').css('border-color', color_accent_1)
    $('#td_month_cell_17').css('border-color', color_accent_1)
    $('#td_month_cell_18').css('border-color', color_accent_1)
    $('#td_month_cell_19').css('border-color', color_accent_1)
    $('#td_month_cell_20').css('border-color', color_accent_1)
    $('#td_month_cell_21').css('border-color', color_accent_1)
    $('#td_month_cell_22').css('border-color', color_accent_1)
    $('#td_month_cell_23').css('border-color', color_accent_1)
    $('#td_month_cell_24').css('border-color', color_accent_1)
    $('#td_month_cell_25').css('border-color', color_accent_1)
    $('#td_month_cell_26').css('border-color', color_accent_1)
    $('#td_month_cell_27').css('border-color', color_accent_1)
    $('#td_month_cell_28').css('border-color', color_accent_1)
    $('#td_month_cell_29').css('border-color', color_accent_1)
    $('#td_month_cell_30').css('border-color', color_accent_1)
    $('#td_month_cell_31').css('border-color', color_accent_1)
    $('#td_month_cell_32').css('border-color', color_accent_1)
    $('#td_month_cell_33').css('border-color', color_accent_1)
    $('#td_month_cell_34').css('border-color', color_accent_1)
    $('#td_month_cell_35').css('border-color', color_accent_1)
    $('#td_month_cell_36').css('border-color', color_accent_1)
    $('#td_month_cell_37').css('border-color', color_accent_1)
    $('#td_month_cell_38').css('border-color', color_accent_1)
    $('#td_month_cell_39').css('border-color', color_accent_1)
    $('#td_month_cell_40').css('border-color', color_accent_1)
    $('#td_month_cell_41').css('border-color', color_accent_1)
    $('#td_month_cell_42').css('border-color', color_accent_1)
    $('#week_view_sunday').css('border-color', color_accent_1)
    $('#week_view_monday').css('border-color', color_accent_1)
    $('#week_view_tuesday').css('border-color', color_accent_1)
    $('#week_view_wednesday').css('border-color', color_accent_1)
    $('#week_view_thursday').css('border-color', color_accent_1)
    $('#week_view_friday').css('border-color', color_accent_1)
    $('#week_view_saturday').css('border-color', color_accent_1)
    $('#week_view_1').css('border-color', color_accent_1)
    $('#week_view_2').css('border-color', color_accent_1)
    $('#week_view_3').css('border-color', color_accent_1)
    $('#week_view_4').css('border-color', color_accent_1)
    $('#week_view_5').css('border-color', color_accent_1)
    $('#week_view_6').css('border-color', color_accent_1)
    $('#week_view_7').css('border-color', color_accent_1)
    $('#week_view_8').css('border-color', color_accent_1)
    $('#week_view_9').css('border-color', color_accent_1)
    $('#week_view_10').css('border-color', color_accent_1)
    $('#week_view_11').css('border-color', color_accent_1)
    $('#week_view_12').css('border-color', color_accent_1)
    $('#week_view_13').css('border-color', color_accent_1)
    $('#week_view_14').css('border-color', color_accent_1)
    $('#week_view_15').css('border-color', color_accent_1)
    $('#week_view_16').css('border-color', color_accent_1)
    $('#week_view_17').css('border-color', color_accent_1)
    $('#week_view_18').css('border-color', color_accent_1)
    $('#week_view_19').css('border-color', color_accent_1)
    $('#week_view_20').css('border-color', color_accent_1)
    $('#week_view_21').css('border-color', color_accent_1)
    $('#week_view_22').css('border-color', color_accent_1)
    $('#week_view_23').css('border-color', color_accent_1)
    $('#week_view_24').css('border-color', color_accent_1)
    $('#present_view_left_side_rail').css("border-color", color_accent_1)
    $('#present_view_right_side_rail').css("border-color", color_accent_1)
    $('#present_view_top_side_rail_1').css('border-color', color_accent_1)
    $('#present_view_top_side_rail_2').css('border-color', color_accent_1)
    $('#present_view_bottom_side_rail').css('border-color', color_accent_1)
    $('#pmt_0').css("border-color", color_accent_1)
    $('#pmt_1').css("border-color", color_accent_1)
    $('#pmt_2').css("border-color", color_accent_1)
    $('#pmt_3').css("border-color", color_accent_1)
    $('#pmt_4').css("border-color", color_accent_1)
    $('#pmt_5').css("border-color", color_accent_1)
    $('#pmt_6').css("border-color", color_accent_1)
    $('#pmt_7').css("border-color", color_accent_1)
    $('#pmt_8').css("border-color", color_accent_1)
    $('#pmt_0_minor_tick_a').css('border-color', color_accent_1)
    $('#pmt_0_minor_tick_b').css('border-color', color_accent_1)
    $('#pmt_0_minor_tick_c').css('border-color', color_accent_1)
    $('#pmt_1_minor_tick_a').css('border-color', color_accent_1)
    $('#pmt_1_minor_tick_b').css('border-color', color_accent_1)
    $('#pmt_1_minor_tick_c').css('border-color', color_accent_1)
    $('#pmt_2_minor_tick_a').css('border-color', color_accent_1)
    $('#pmt_2_minor_tick_b').css('border-color', color_accent_1)
    $('#pmt_2_minor_tick_c').css('border-color', color_accent_1)
    $('#pmt_3_minor_tick_a').css('border-color', color_accent_1)
    $('#pmt_3_minor_tick_b').css('border-color', color_accent_1)
    $('#pmt_3_minor_tick_c').css('border-color', color_accent_1)
    $('#pmt_4_minor_tick_a').css('border-color', color_accent_1)
    $('#pmt_4_minor_tick_b').css('border-color', color_accent_1)
    $('#pmt_4_minor_tick_c').css('border-color', color_accent_1)
    $('#pmt_5_minor_tick_a').css('border-color', color_accent_1)
    $('#pmt_5_minor_tick_b').css('border-color', color_accent_1)
    $('#pmt_5_minor_tick_c').css('border-color', color_accent_1)
    $('#pmt_6_minor_tick_a').css('border-color', color_accent_1)
    $('#pmt_6_minor_tick_b').css('border-color', color_accent_1)
    $('#pmt_6_minor_tick_c').css('border-color', color_accent_1)
    $('#pmt_7_minor_tick_a').css('border-color', color_accent_1)
    $('#pmt_7_minor_tick_b').css('border-color', color_accent_1)
    $('#pmt_7_minor_tick_c').css('border-color', color_accent_1)
    $('#pmt_8_minor_tick_a').css('border-color', color_accent_1)
    $('#pmt_8_minor_tick_b').css('border-color', color_accent_1)
    $('#pmt_8_minor_tick_c').css('border-color', color_accent_1)
    $('#top_dock_input').css('border-color', color_accent_1)
    $('#connect_google_calendar_button').css('border-color', color_accent_1)
    $('#top_dock_input_underline').css('border-color', color_accent_1)
    $('#top_dock_input_finished').css('border-color', color_accent_1)
    $('#edit_quick_launch_bookmarks').css('color', color_accent_1)
    $('#quick_launch_bookmark_settings').css('border-color', color_accent_1)
    $('#bk_finished').css('border-color', color_accent_1)
    

}

window.update_css_color_accent_2 = function update_css_color_accent_2(){
    $('#left_dock_lowercase').css("color", color_accent_2)
    $('#left_dock_uppercase').css("color", color_accent_2)
    $('#right_dock_table').css("color", color_accent_2)
    $('#MyClockDisplay').css("color", color_accent_2)
    $('#meridies').css("color", color_accent_2)
    $('#settings_screen').css("color", color_accent_2)
    $('#clock').css("color", color_accent_2)
    $('#clock_meridies').css("color", color_accent_2)
    $('#MyClockDisplay_MT').css("color", color_accent_2)
    $('#clock_MT').css("color", color_accent_2)
    $('span#author_name').css("color", color_accent_2)
    $('#settings_screen_main').css("color", color_accent_2)
    $('#left_arr_sett').css("color", color_accent_2)
    $('#nr_1').css("color", color_accent_2)
    $('#nr_2').css("color", color_accent_2)
    $('#nr_3').css("color", color_accent_2)
    $('#nr_4').css("color", color_accent_2)
    $('#nr_5').css("color", color_accent_2)
    $('#nr_6').css("color", color_accent_2)
    $('#nr_7').css("color", color_accent_2)
    $('#nr_8').css("color", color_accent_2)
    $('#nr_9').css("color", color_accent_2)
    $('#nr_0').css("color", color_accent_2)
    $('#top_arr_sett').css("color", color_accent_2)
    $('#right_arr_sett').css("color", color_accent_2)
    $('#bottom_arr_sett').css("color", color_accent_2)
    $('#left_dock_input').css("color", color_accent_2)
    $('#right_dock_input').css("color", color_accent_2)
    $('#swatch_accent2').css('color', color_accent_2)
    $('#left_dock_input_instructions').css("color", color_accent_2)
    $('#Search_Greeting').css("color", color_accent_2)
    $('#right_dock_input_instructions_id').css('color', color_accent_2)
    $('#hex_link').css('color', color_accent_2)
    $('#color_scheme_input').css('color', color_accent_2)
    $('#color_scheme_input_instructions_id').css('color', color_accent_2)
    $('#color_scheme_input_table').css('color', color_accent_2)
    $('#csi_1').css('color', color_accent_2)
    $('#csi_2').css('color', color_accent_2)
    $('#csi_3').css('color', color_accent_2)
    $('#color_scheme_custom_submit').css('color', color_accent_2)
    $('#web_search_input').css('color', color_accent_2)
    $('#web_search_input').css('border-color', color_accent_2)
    $('#bottom_dock').css('color', color_accent_2)
    $('#wsi_1_checkbox_outline').css('border-color', color_accent_2)
    $('#wsi_2_checkbox_outline').css('border-color', color_accent_2)
    $('#wsi_3_checkbox_outline').css('border-color', color_accent_2)
    $('#wsi_4_checkbox_outline').css('border-color', color_accent_2)
    $('#wsi_5_checkbox_outline').css('border-color', color_accent_2)
    $('#wsi_6_checkbox_outline').css('border-color', color_accent_2)
    $('#information_link').css('color', color_accent_2)
    $('#pct_of_day_tracker').css('background-color', color_accent_2)
    $('#top_dock_date_DoW').css('background-color', color_accent_2)
    $('#top_dock_date_MDY').css('color', color_accent_2)
    $('#pct_of_day_tracker_time_early_only').css('color', color_accent_2)
    $('#pct_of_day_tracker_time_early_only_meridies').css('color', color_accent_2)
    $('#top_dock_date_DoW_range').css('background-color', color_accent_2)
    $('#month_view_month_label').css('background-color', color_accent_2)
    $('#author_website').css("color", color_accent_2)
    $('#wv_mon_event_1').css('background-color', color_accent_2)
    $('#wv_tue_event_1').css('background-color', color_accent_2)
    $('#wv_wed_event_1').css('background-color', color_accent_2)
    $('#wv_thu_event_1').css('background-color', color_accent_2)
    $('#wv_fri_event_1').css('background-color', color_accent_2)
    $('#wv_fri_event_2').css('background-color', color_accent_2)
    $('#present_tick_line').css('background-color', color_accent_2)
    $('#present_time_div').css('color', color_accent_2)
    $('#present_time_meridies_span').css('color', color_accent_2)
    $('#week_view_time_tracker_line').css('border-color', color_accent_2)
    $('#week_view_time_tracker_line').css('color', color_accent_2)
    // $('#week_view_time_tracker_line').css('background-color', color_accent_2)
    $('#week_view_time_tracker_line_background').css('background-color', color_accent_2)
    $('#week_view_time_tracker_circle').css('color', color_accent_2)
    $('#week_view_friday_text').css('color', color_accent_2)    
    $('#week_view_friday_date').css('background-color', color_accent_2)
    $('#month_view_year_label').css('color', color_accent_2)
    $('#top_dock_year_label').css('color', color_accent_2)
    $('#present_view_date_DoW').css('background-color', color_accent_2)    
    $('#present_view_date_MDY').css('color', color_accent_2)
    $('#top_dock_input').css('color', color_accent_2)
    $('#connect_google_calendar_button').css('color', color_accent_2)
    $('#config_import_message').css('background-color', color_accent_2)

    // quick bookmarks
    $('#bookmark_1_text').css('color', color_accent_2)
    $('#bookmark_2_text').css('color', color_accent_2)
    $('#bookmark_3_text').css('color', color_accent_2)
    $('#bookmark_4_text').css('color', color_accent_2)
    $('#bookmark_5_text').css('color', color_accent_2)
    $('#bookmark_6_text').css('color', color_accent_2)
    $('#bookmark_7_text').css('color', color_accent_2)
    $('#bookmark_8_text').css('color', color_accent_2)
    $('#bookmark_9_text').css('color', color_accent_2)
    $('#bookmark_10_text').css('color', color_accent_2)
    $('#bookmark_11_text').css('color', color_accent_2);
    $('#bookmark_12_text').css('color', color_accent_2);
    $('#bookmark_13_text').css('color', color_accent_2);
    $('#bookmark_14_text').css('color', color_accent_2);
    $('#bookmark_15_text').css('color', color_accent_2);
    $('#bookmark_16_text').css('color', color_accent_2);
    $('#bookmark_17_text').css('color', color_accent_2);
    $('#bookmark_18_text').css('color', color_accent_2);
    $('#bookmark_19_text').css('color', color_accent_2);
    $('#bookmark_20_text').css('color', color_accent_2);
    $('#bookmark_1_favicon').css('border-color', color_accent_2);
    $('#bookmark_2_favicon').css('border-color', color_accent_2);
    $('#bookmark_3_favicon').css('border-color', color_accent_2);
    $('#bookmark_4_favicon').css('border-color', color_accent_2);
    $('#bookmark_5_favicon').css('border-color', color_accent_2);
    $('#bookmark_6_favicon').css('border-color', color_accent_2);
    $('#bookmark_7_favicon').css('border-color', color_accent_2);
    $('#bookmark_8_favicon').css('border-color', color_accent_2);
    $('#bookmark_9_favicon').css('border-color', color_accent_2);
    $('#bookmark_10_favicon').css('border-color', color_accent_2);
    $('#bookmark_11_favicon').css('border-color', color_accent_2);
    $('#bookmark_12_favicon').css('border-color', color_accent_2);
    $('#bookmark_13_favicon').css('border-color', color_accent_2);
    $('#bookmark_14_favicon').css('border-color', color_accent_2);
    $('#bookmark_15_favicon').css('border-color', color_accent_2);
    $('#bookmark_16_favicon').css('border-color', color_accent_2);
    $('#bookmark_17_favicon').css('border-color', color_accent_2);
    $('#bookmark_18_favicon').css('border-color', color_accent_2);
    $('#bookmark_19_favicon').css('border-color', color_accent_2);
    $('#bookmark_20_favicon').css('border-color', color_accent_2);
    $('#quick_launch_bookmark_settings').css('color', color_accent_2)

}