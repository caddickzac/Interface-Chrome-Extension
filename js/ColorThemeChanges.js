window.update_css_coloring = function update_css_coloring(){ // functions like this one, that are run in run_setup__functions(), need to be in this script. 
    color_background=$('#hex_1').val()
    color_accent_1=$('#hex_2').val()
    color_accent_2=$('#hex_3').val()

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

window.change_preset_theme = function change_preset_theme(){
    if($('#theme_choice').val()=='night'){
        // Default colors
        color_background="#242424" // darkest
        color_accent_1 = "#808080" // medium
        color_accent_2 = "#BFBFBF" // lightest
        theme='night'
    }
    else if($('#theme_choice').val()=='cotton candy'){
        color_background = "#DE9097"
        color_accent_1 = "#B4E3E0" 
        color_accent_2 = "#8EF3ED"
        theme='cotton candy'
    }
    else if($('#theme_choice').val()=='greens'){
        color_background = "#1A362A"
        color_accent_1 = "#21B577" 
        color_accent_2 = "#178256"
        theme='greens'
    }
    else if($('#theme_choice').val()=='sandstone'){
        color_background = "#F4cc70"
        color_accent_1 = "#de7a22" 
        color_accent_2 = "#20948b"
        theme='sandstone'
    }
    else if($('#theme_choice').val()=='seaside'){
        color_background = "#38908F"
        color_accent_1 = "#FFBFA3" 
        color_accent_2 = "#B2EBE0"
        theme='seaside'
    }
    else if($('#theme_choice').val()=='pittsburgh'){
        color_background = "#040205"
        color_accent_1 = "#FCFEFB" 
        color_accent_2 = "#FBBE04"
        theme='pittsburgh'
    }
    else if($('#theme_choice').val()=='americana'){
        color_background = "#F1FAEE"
        color_accent_1 = "#E63946" 
        color_accent_2 = "#457B9D"
        theme='americana'
    }
    else if($('#theme_choice').val()=='emerald'){ 
        color_background = "#000000"
        color_accent_1 = "#EDF5E1" 
        color_accent_2 = "#8EE4AF"
        theme='emerald'
    }
    else if($('#theme_choice').val()=='blues'){ 
        color_background = "#05386B"
        color_accent_1 = "#8DBFF2" 
        color_accent_2 = "#EDF5E1"
        theme='blues'
    }
    else if($('#theme_choice').val()=='riddler'){ 
        color_background = "#490652"
        color_accent_1 = "#2C5206" 
        color_accent_2 = "#4F9E00"
        theme='riddler'
    }
    else if($('#theme_choice').val()=='kiwi'){ 
        color_background = "#AFD275"
        color_accent_1 = "#7E685A" 
        color_accent_2 = "#80624C"
        theme='kiwi'
    }

    else if($('#theme_choice').val()=='coastline'){ 
        color_background = "#66A5AD"
        color_accent_1 = "#C4DFE6" 
        color_accent_2 = "#003B46"
        theme='coastline'
    }

    else if($('#theme_choice').val()=='dusk'){ 
        color_background = "#314455"
        color_accent_1 = "#9e5a63" 
        color_accent_2 = "#c96567"
        theme='dusk'
    }

    else if($('#theme_choice').val()=='berries'){ 
        color_background = "#7E444B"
        color_accent_1 = "#ec96a4" 
        color_accent_2 = "#9a9eab"
        theme='berries'
    }

    else if($('#theme_choice').val()=='strawberry'){ 
        color_background = "#659353"
        color_accent_1 = "#3f6c45" 
        color_accent_2 = "#cb0000"
        theme='strawberry'
    }

    else if($('#theme_choice').val()=='clay'){ 
        color_background = "#1e0000"
        color_accent_1 = "#9d331f" 
        color_accent_2 = "#bc6d4f"
        theme='clay'
    }
    else if($('#theme_choice').val()=='light'){ 
        color_background = "#F1FAEE"
        color_accent_1 = "#989898" 
        color_accent_2 = "#000000"
        theme='light'
    }

    else if($('#theme_choice').val()=='custom'){ 
        if(hexes_ready=='yes'){
            color_background = $('#hex_1').val()
            color_accent_1 = $('#hex_2').val()
            color_accent_2 = $('#hex_3').val()
            theme='custom'
        }
    }
    // if(hexes_ready=='yes'){
    //     color_background = $('#hex_1').val()
    //     color_accent_1 = $('#hex_2').val()
    //     color_accent_2 = $('#hex_3').val()
    // }

    $('#hex_1').attr('placeholder', color_background)
    $('#hex_2').attr('placeholder', color_accent_1)
    $('#hex_3').attr('placeholder', color_accent_2)

    $('#hex_1').val(color_background)
    $('#hex_2').val(color_accent_1)
    $('#hex_3').val(color_accent_2)
}

// Make sure the functions you're calling are globally available
window.hex = window.hex || function() {};
window.change_preset_theme = window.change_preset_theme || function() {};
window.update_css_coloring = window.update_css_coloring || function() {};



// $('#color_scheme_custom_submit').click(function(){
//     hex()
//     change_preset_theme()
//     update_css_coloring()
//     // use_custom_hex()
// })

// $('#theme_choice').click(function(){
//     change_preset_theme()
//     update_css_coloring()
// })

// $('#hex_1').click(function(){
//     theme='custom'
//     $('#theme_choice').val(theme)
// })

// $('#hex_2').click(function(){
//     theme='custom'
//     $('#theme_choice').val(theme)
// })

// $('#hex_3').click(function(){
//     theme='custom'
//     $('#theme_choice').val(theme)
// })

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
}

// window.update_css_coloring = function update_css_coloring(){

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
    $('#top_dock_input').css('color', color_accent_2)
    $('#connect_google_calendar_button').css('color', color_accent_2)


}