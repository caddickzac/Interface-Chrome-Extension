// resources :
// https://medium.com/@ryanfarney/creating-a-chrome-extension-that-will-open-in-a-new-tab-bc06b7eb54aa
// https://developer.chrome.com/extensions/background_pages
// https://developer.chrome.com/extensions/user_interface
// https://developer.chrome.com/extensions/background_pages
// https://scotch.io/@dongido/how-to-build-a-google-chrome-extension
// https://stackoverflow.com/questions/14432675/chrome-extension-blank-new-tab-address-bar-focus

// https://stackoverflow.com/questions/38088604/chrome-not-setting-local-storage
// https://stackoverflow.com/questions/28060616/properly-storing-an-object-in-chrome-storage
// https://developer.chrome.com/extensions/storage#method-StorageArea-clear
// https://stackoverflow.com/questions/14531102/saving-and-retrieving-from-chrome-storage-sync
// https://www.youtube.com/watch?v=fDERPeXGzPY
// https://developer.chrome.com/extensions/storage#property-managed
// https://stackoverflow.com/questions/5364062/how-can-i-save-information-locally-in-my-chrome-extension

// https://stackoverflow.com/questions/17598778/how-to-steal-focus-from-the-omnibox-in-a-chrome-extension-on-the-new-tab-page
// https://stackoverflow.com/questions/42178723/chrome-extension-creating-new-tab-and-taking-focus-to-page

// https://www.color-hex.com/color-palettes/
// https://coolors.co/palettes/trending


// https://developer.chrome.com/webstore/get_started_simple#step5
// 
// https://developer.chrome.com/webstore/images#icons

// https://developer.chrome.com/extensions/storage

// https://developer.chrome.com/extensions/themes // style theme
// https://developer.chrome.com/extensions/samples#search:tabs
// https://jsonlint.com/
// https://developer.chrome.com/extensions/override
// https://chrome.google.com/webstore/devconsole/0d61ecf9-38ac-4994-accb-5a246241acc7?hl=en
// chrome://extensions/

// https://developer.chrome.com/apps/app_identity   // authenticate google user to use google calendar API 


window.onload = function(){


///////////////////////////////////////////////////////////////////////////////////

// chrome.tabs.create({ url: chrome.extension.getURL("home.html") });
// window.close();

// Called when the user clicks on the browser action (extension icon)
// chrome.browserAction.onClicked.addListener(function newtab(){
//     chrome.tabs.create({'url':"home.html"});
//     // chrome.tabs.create({'url':"chrome://newtab"});
// })

//   // Send a message to the active tab
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
//   });
// });

// This block is new!
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "open_new_tab" ) {
//      chrome.tabs.create({'url':"chrome://newtab"});
//     }
//   }
// );

/////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////
// Set Environmental Variables //
/////////////////////////////////

// Data Storage 
top_dock_mt='no' // zc

// Custom Color Scheme 
hex_1_empty =""
hex_2_empty =""
hex_3_empty =""
hexes_all_have_text =""
hex_1_length_check=''
hex_2_length_check=''
hex_3_length_check=''
hexes_all_proper_length=''
hex_1_symbol_check=''
hex_2_symbol_check=''
hex_3_symbol_check=''
hexes_all_have_symbol=''
hexes_ready=''

// configure right dock variable
crd_current_selection='' 

// variable that interacts with "View_Changer()" function
current_display='main' // (values: main, search, settings, left_dock_config, right_dock_config)


/////////////////////////////////////////////////////////////////////////////////////

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



function hex_empty_check(){
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


function hex_length_check(){
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

function hex_symbol_check(){
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

function hex(){
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

function change_preset_theme(){
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

$('#color_scheme_custom_submit').click(function(){
    hex()
    change_preset_theme()
    update_css_coloring()
    // use_custom_hex()
})

$('#theme_choice').click(function(){
    change_preset_theme()
    update_css_coloring()
})

$('#hex_1').click(function(){
    theme='custom'
    $('#theme_choice').val(theme)
})

$('#hex_2').click(function(){
    theme='custom'
    $('#theme_choice').val(theme)
})

$('#hex_3').click(function(){
    theme='custom'
    $('#theme_choice').val(theme)
})

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
}


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///////////////////////////////////
// Hamburger Icon Color Changing //
///////////////////////////////////
    
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function hamburger_color_changer(){
    // http://jsfiddle.net/loktar/qduSR/1/
    var canvas= document.getElementById('canvas'),
        ctx = canvas.getContext('2d', { willReadFrequently: true }),
        image = document.getElementById("testImage");

    ctx.drawImage(image,0,0);

    var imgd = ctx.getImageData(0, 0, 128, 128),
    pix = imgd.data,
    uniqueColor = hexToRgb(color_accent_2) // converts hex to rgb

    uniqueColor_temp = Array(uniqueColor.r, uniqueColor.b, uniqueColor.g)

    // Loops through all of the pixels and modifies the components.
    for (var i = 0, n = pix.length; i <n; i += 4) {
        pix[i] = uniqueColor_temp[0] // red
        pix[i+1] = uniqueColor_temp[2] // green
        pix[i+2] = uniqueColor_temp[1] // blue
    }

    ctx.putImageData(imgd, 0, 0);
    var savedImageData = document.getElementById("imageData");
    // $('#testImage').css('opacity', '.5')
    $("#ham_icon").addClass("hi_off")
}

///////////////////////////////////////////////////////////////////////////////////////


// Disable Scroll bars from browser
function unloadScrollBars(){
    if(current_display=='left_dock_config'){
        // if($(window).height()<1000){
        document.documentElement.style.overflowY ='scroll';// firefox, chrome
        // document.documentElement.style.overflow = 'scroll';  
        document.body.scroll = "yes"; // ie only  
        // }  
    }
    else{
        document.documentElement.style.overflow = 'hidden';  // firefox, chrome
        document.body.scroll = "no"; // ie only        
    }
}
// unloadScrollBars()

// top dock width check
function width_check(){
    current_window_width = window.outerWidth;
}
function top_dock_small_screen_view(){
    width_check()
    if(current_window_width <550){
        $('#top_dock_ruler').hide()
    }
    else if(current_window_width < 800){
        $('#top_dock_ruler').css('font-size','.8em')
        hide_meridies_top_dock()
        $('#top_dock_ruler').show()
    }
    else if(current_window_width < 1100){
        $('#top_dock_ruler').css('font-size','1em')
        hide_meridies_top_dock()
        $('#top_dock_ruler').show()
    }
    else{
        top_dock_configure_time_display()
        $('#top_dock_ruler').show()
    }
}

// window.onresize = function(){
//     top_dock_small_screen_view()
// }

document.getElementsByTagName("BODY")[0].onresize = function(){top_dock_small_screen_view()};
document.getElementById('top_dock').onresize = function(){top_dock_small_screen_view()};
document.getElementById('body_id').addEventListener("resize", top_dock_small_screen_view());
document.getElementById('body_id').onresize = function(){top_dock_small_screen_view()};
document.getElementsByTagName("BODY")[0].onresize = function() {top_dock_small_screen_view()};
// Top Dock Timeline
function timeline_tracker(){
    $('#pct_of_day_tracker').css('width', (pct_of_day+'%'))
    $('#pct_of_day_tracker').css('max-width', (pct_of_day+'%'))
    $('#pct_of_day_tracker').css('min-width', (pct_of_day+'%'))

    $('#pct_of_day_tracker_time_early_only').css('margin-left', (pct_of_day+'%'))
    $('#pct_of_day_tracker_time_early_only_meridies').css('margin-left', (pct_of_day+.2+'%'))
    // console.log('pct_of_day:' + pct_of_day)
}


function showTime(){
    date = new Date();
    var h = date.getHours(); // 0 - 23
    var h_m = h; // military time
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "am";

    pct_of_day= ((h+(m/60)+(s/3600))/24)*100
    timeline_tracker()

    if(pct_of_day<5.5){
        $('#pct_of_day_tracker_time').hide()
        $('#pct_of_day_tracker_time_meridies').hide()
        $('#pct_of_day_tracker_time_early_only').show()
        $('#pct_of_day_tracker_time_early_only_meridies').show()
    }
    else{
        $('#pct_of_day_tracker_time_early_only').hide()
        $('#pct_of_day_tracker_time_early_only_meridies').hide()
        $('#pct_of_day_tracker_time').show()
        $('#pct_of_day_tracker_time_meridies').show()
    }
    if(h >= 12){
        h = h - 12;
        session = "PM";
    }
    else{
        session = "AM";
    }
    $('#meridies').text(session)
    
    // Display midnight with a 12 instead of a 0. 
    if(h == 0){
        h = 12;
    }
    
    h = (h < 10) ? h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    $('#pct_of_day_tracker_time').text(h+':'+m)
    $('#pct_of_day_tracker_time_meridies').text(session.toUpperCase())

    $('#pct_of_day_tracker_time_early_only').text(h+':'+m)
    $('#pct_of_day_tracker_time_early_only_meridies').text(session.toUpperCase())
    
    var time = h + ":" + m; // + " " + session;
    // document.getElementById("MyClockDisplay").innerText = time;
    $('#MyClockDisplay').text(time)

    // document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);

    // Military time version

    var time_MT = h_m + ":" + m;
    $('#MyClockDisplay_MT').text(time_MT)
    // document.getElementById("MyClockDisplay_MT").innerText = time_MT;
    // document.getElementById("MyClockDisplay_MT").textContent = time_MT;

    ///////////////////////
    // Greeting Messages //
    ///////////////////////

    $('#Greeting_Message').text("Sample Greeting")
    if(h_m > 17){
        if(name==""){
            $('#Greeting_Message').text("Good evening")
        }
        else{
            $('#Greeting_Message').text("Good evening, " + name)
        }        
    }
    else if(h_m<4){
        if(name==""){
            $('#Greeting_Message').text("Good evening")
        }
        else{
            $('#Greeting_Message').text("Good evening, " + name)
        }
    }
    else if(h_m>3 & h_m <12){
        if(name==""){
            $('#Greeting_Message').text("Good morning")
        }
        else{
            $('#Greeting_Message').text("Good morning, " + name)
        }
    }
    else if(h_m>11 & h_m<18){
        if(name==""){
            $('#Greeting_Message').text("Good afternoon")
        }
        else{
            $('#Greeting_Message').text("Good afternoon, " + name)
        }        
    }
}
// showTime()

// Day of Week Function
function DoW(){
    // Week Day
    showTime()
    DOW = date.getDay()
    weekday_array = Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
    DOW_Text = weekday_array[DOW]

    // Month
    Month = date.getMonth()
    month_array = Array("January","February","March","April","May","June","July","August","September","October","November","December")
    Month_Text = month_array[Month]

    month_array_abr = Array("Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sept.","Oct.","Nov.","Dec.")
    Month_Text_abr = month_array_abr[Month]

    // Date (#)
    Date_Num = date.getDate()

    // Year 
    Year = date.getFullYear()

    // Update Display text with concatenate
    $('#dayofweek_placeholder').text([DOW_Text+', '+Month_Text+' '+Date_Num+', '+Year])

    // update top dock text
    $('#top_dock_date_MDY').text([Month_Text_abr+' '+Date_Num+', '+Year])

    $('#top_dock_date_DoW').text(DOW_Text)
}
// DoW()

function hide_meridies_top_dock(){
    $('#t1_text_1_meridies').hide()
    $('#t1_text_2_meridies').hide()
    $('#t1_text_3_meridies').hide()
    $('#t1_text_4_meridies').hide()
    $('#t1_text_5_meridies').hide()
    $('#t1_text_6_meridies').hide()
    $('#t1_text_7_meridies').hide()
    $('#t1_text_8_meridies').hide()
    $('#t1_text_9_meridies').hide()
    $('#t1_text_10_meridies').hide()
    $('#t1_text_11_meridies').hide()
    $('#t1_text_12_meridies').hide()
    $('#t1_text_13_meridies').hide()
    $('#t1_text_14_meridies').hide()
    $('#t1_text_15_meridies').hide()
    $('#t1_text_16_meridies').hide()
    $('#t1_text_17_meridies').hide()
    $('#t1_text_18_meridies').hide()
    $('#t1_text_19_meridies').hide()
    $('#t1_text_20_meridies').hide()
    $('#t1_text_21_meridies').hide()
    $('#t1_text_22_meridies').hide()
    $('#t1_text_23_meridies').hide()
    $('#t1_text_24_meridies').hide() 
}


function top_dock_configure_time_display(){
    if(top_dock_mt=='no'){
        // non-military time
        $('#tl_text_1').text('')
        $('#tl_text_2').text('1')
        $('#tl_text_3').text('2')
        $('#tl_text_4').text('3')
        $('#tl_text_5').text('4')
        $('#tl_text_6').text('5')
        $('#tl_text_7').text('6')
        $('#tl_text_8').text('7')
        $('#tl_text_9').text('8')
        $('#tl_text_10').text('9')
        $('#tl_text_11').text('10')
        $('#tl_text_12').text('11')
        $('#tl_text_13').text('12')
        $('#tl_text_14').text('1')
        $('#tl_text_15').text('2')
        $('#tl_text_16').text('3')
        $('#tl_text_17').text('4')
        $('#tl_text_18').text('5')
        $('#tl_text_19').text('6')
        $('#tl_text_20').text('7')
        $('#tl_text_21').text('8')
        $('#tl_text_22').text('9')
        $('#tl_text_23').text('10')
        $('#tl_text_24').text('11')

        $('#t1_text_1_meridies').show()
        $('#t1_text_2_meridies').show()
        $('#t1_text_3_meridies').show()
        $('#t1_text_4_meridies').show()
        $('#t1_text_5_meridies').show()
        $('#t1_text_6_meridies').show()
        $('#t1_text_7_meridies').show()
        $('#t1_text_8_meridies').show()
        $('#t1_text_9_meridies').show()
        $('#t1_text_10_meridies').show()
        $('#t1_text_11_meridies').show()
        $('#t1_text_12_meridies').show()
        $('#t1_text_13_meridies').show()
        $('#t1_text_14_meridies').show()
        $('#t1_text_15_meridies').show()
        $('#t1_text_16_meridies').show()
        $('#t1_text_17_meridies').show()
        $('#t1_text_18_meridies').show()
        $('#t1_text_19_meridies').show()
        $('#t1_text_20_meridies').show()
        $('#t1_text_21_meridies').show()
        $('#t1_text_22_meridies').show()
        $('#t1_text_23_meridies').show()
        $('#t1_text_24_meridies').show()
    }
    
    // military time
    if(top_dock_mt=='yes'){
        hide_meridies_top_dock()
    }
}

top_dock_configure_time_display()


focus_check = ''
name_input_focused = ''
current_display_temp=''

////////////////////////////
// View Changing Behavior // 
////////////////////////////

function Display_Main_Screen(){
    unloadScrollBars()
    $('#Greeting_Message').show()
    $('#MyClockDisplay').show()
    $('#MyClockDisplay_MT').show()
    $('#Date_Display').show()
    $('#meridies').show()
    $('#settings_screen_main').hide()
    $('#left_dock_input').hide()
    $('#right_dock_input').hide()
    $('#color_scheme_input').hide()
    $('#web_search_input').hide()
    $('#screen2').hide()
    $('#screen1').show()
    $('#left_dock').show()
    $('#right_dock').show()
    name = $("#name_input").val()
    hide_top_dock()
    disable_arrow_keys='no'
    Change_Display_Settings()
    text_input_grey_out_function() // update greying out dock input labels
}

function Show_Settings_Screen(){
    unloadScrollBars()
    Change_Display_Settings()
    $('#Greeting_Message').hide()
    $('#MyClockDisplay').hide()
    $('#Date_Display').hide()
    $('#meridies').hide()
    $('#screen1').hide()
    $('#screen2').hide()
    $('#left_dock').hide()
    $('#right_dock').hide()
    $('#left_dock_input').hide()
    $('#right_dock_input').hide() 
    $('#about_screen').hide()
    $('#color_scheme_input').hide()
    $('#web_search_input').hide()
    // $('#top_dock').hide()
    ldi_case='lower'
    ldi_case_toggle()
    ldi_case_input_toggle() 
    disable_arrow_keys='no'
    $('#settings_screen_main').show()
    name = $("#name_input").val()
}

function Show_Search_Screen(){
    $('#MyClockDisplay').hide()
    $('#MyClockDisplay_MT').hide()           
    $('#Greeting_Message').hide()
    $('#Date_Display').hide()
    $('#meridies').hide()
    $('#screen1').hide() 
    $('#settings_screen_main').hide()
    $('#left_dock').hide()
    $('#right_dock').hide()
    $('#about_screen').hide()
    $('#web_search_input').hide()
    $('#Search_Greeting').show()
    $('#screen2').show()
    $('#search_bar').show()
    $('#search_bar').focus()
}

function show_top_dock(){
    $('#top_dock').show()
    current_display='top_dock'
    $('#Greeting_Message').hide()
    $('#MyClockDisplay').hide()
    $('#Date_Display').hide()
    $('#meridies').hide()
    $('#screen1').hide()
    $('#screen2').hide()
    $('#left_dock').hide()
    $('#right_dock').hide()
    $('#left_dock_input').hide()
    $('#right_dock_input').hide() 
    $('#about_screen').hide()
    $('#color_scheme_input').hide()
    $('#web_search_input').hide()

    $('#top_dock').removeClass('top_docker_state1')
    $('#top_dock').addClass('top_docker_state2') 
}

function hide_top_dock(){
    // current_display='main'
    $('#top_dock').hide()
    $('#top_dock').removeClass('top_docker_state2')
    $('#top_dock').addClass('top_docker_state1')
    setTimeout(function(){
        $('#top_dock').show()
    },150)

}

function View_Changer(){
    current_display_temp=current_display
    if(current_display_temp=='main'){
        console.log('display: main')
        $('#bottom_dock').show()
        // hide_top_dock()

        update_search_box_text()
        web_search_updater()
        Display_Main_Screen()
        save_data()
    }
    else if(current_display_temp=='search'){
        console.log('display: search')
        Show_Search_Screen()
        // hide_top_dock()
    }
    else if(current_display_temp=='settings'){
        console.log('display: settings')
        unloadScrollBars()
        hide_top_dock()
        Show_Settings_Screen()

    }
    else if(current_display_temp=='left_dock_config'){
        console.log('display: left dock')
        ldi_case='lower'
        ldi_case_toggle()
        ldi_case_input_toggle() 
        unloadScrollBars()
        $('#bottom_dock').hide()
        $('#settings_screen_main').hide() // hide settings
        $('#left_dock_input').show() 
        $('#left_dock_lowercase_input').show() 
    }
    else if(current_display_temp=='right_dock_config'){
        console.log('display: right dock')
        // unloadScrollBars()
        $('#settings_screen_main').hide() // hide settings
        $('#right_dock_input').show() 
    }
    else if(current_display_temp=='color_scheme'){
        console.log('display: color scheme')
        $('#settings_screen_main').hide() // hide settings
        $('#color_scheme_input').show()
    }
    else if(current_display_temp=='web_search'){
        console.log('display: web_search')
        $('#settings_screen_main').hide() // hide settings
        $('#web_search_input').show()
    }
    else if(current_display_temp=='top_dock'){
        top_dock_small_screen_view()
        show_top_dock()
    }

    disable_arrow_keys_function()
}






/////////////////////////////
/////////////////////////////
// "Main Display" Settings //
/////////////////////////////
/////////////////////////////

///////////////////
// Initial Setup //
///////////////////

function sd_settings_setup(){
    if(sd_settings=="no"){
        $('#sd_settings_yes').css("font-weight", "normal")
        $('#sd_settings_yes').css("color", color_accent_2)
        $('#sd_settings_yes').css("background-color", color_background)
        $('#sd_settings_no').css("font-weight", "bold")
        $('#sd_settings_no').css("color", color_background)
        $('#sd_settings_no').css("background-color", color_accent_2)  
    }
    if(sd_settings=="yes"){
        $('#sd_settings_no').css("font-weight", "normal")
        $('#sd_settings_no').css("color", color_accent_2)
        $('#sd_settings_no').css("background-color", color_background)
        $('#sd_settings_yes').css("font-weight", "bold")
        $('#sd_settings_yes').css("color", color_background)  
        $('#sd_settings_yes').css("background-color", color_accent_2)
    }
}

function mt_settings_setup(){
    if(mt_settings=="no"){
        $('#mt_settings_yes').css("font-weight", "normal")
        $('#mt_settings_yes').css("color", color_accent_2)
        $('#mt_settings_yes').css("background-color", color_background)
        $('#mt_settings_no').css("font-weight", "bold")
        $('#mt_settings_no').css("color", color_background)
        $('#mt_settings_no').css("background-color", color_accent_2)  
    }
    if(mt_settings=="yes"){
        $('#mt_settings_no').css("font-weight", "normal")
        $('#mt_settings_no').css("color", color_accent_2)
        $('#mt_settings_no').css("background-color", color_background)
        $('#mt_settings_yes').css("font-weight", "bold")
        $('#mt_settings_yes').css("color", color_background)  
        $('#mt_settings_yes').css("background-color", color_accent_2)
    }
}

function sg_settings_setup(){
    if(sg_settings=="no"){
        $('#sg_settings_yes').css("font-weight", "normal")
        $('#sg_settings_yes').css("color", color_accent_2)
        $('#sg_settings_yes').css("background-color", color_background)
        $('#sg_settings_no').css("font-weight", "bold")
        $('#sg_settings_no').css("color", color_background)
        $('#sg_settings_no').css("background-color", color_accent_2)  
    }
    if(sg_settings=="yes"){
        $('#sg_settings_no').css("font-weight", "normal")
        $('#sg_settings_no').css("color", color_accent_2)
        $('#sg_settings_no').css("background-color", color_background)
        $('#sg_settings_yes').css("font-weight", "bold")
        $('#sg_settings_yes').css("color", color_background)  
        $('#sg_settings_yes').css("background-color", color_accent_2)
    }
}

function ld_link_override_settings_setup(){
    if(ld_link_override=="no"){
        $('#ld_newtab_settings_yes').css("font-weight", "normal")
        $('#ld_newtab_settings_yes').css("color", color_accent_2)
        $('#ld_newtab_settings_yes').css("background-color", color_background)
        $('#ld_newtab_settings_no').css("font-weight", "bold")
        $('#ld_newtab_settings_no').css("color", color_background)
        $('#ld_newtab_settings_no').css("background-color", color_accent_2)  
    }
    if(ld_link_override=="yes"){
        $('#ld_newtab_settings_no').css("font-weight", "normal")
        $('#ld_newtab_settings_no').css("color", color_accent_2)
        $('#ld_newtab_settings_no').css("background-color", color_background)
        $('#ld_newtab_settings_yes').css("font-weight", "bold")
        $('#ld_newtab_settings_yes').css("color", color_background)  
        $('#ld_newtab_settings_yes').css("background-color", color_accent_2)
    }
}


window.home_display_settings = function home_display_settings(){
    sd_settings_setup()
    mt_settings_setup()
    sg_settings_setup()
    ld_link_override_settings_setup()
}

// Run Display setting configuration at start

//////////////////////////////
// Button Clicking Behavior //
//////////////////////////////

// show date: 'yes' button click (effect: change display settings)
$('#sd_settings_yes').click(function(){
    if(sd_settings=="no"){
        $('#sd_settings_no').css("font-weight", "normal")
        $('#sd_settings_no').css("color", color_accent_2)
        $('#sd_settings_no').css("background-color", color_background)
        $('#sd_settings_yes').css("font-weight", "bold")
        $('#sd_settings_yes').css("color", color_background)  
        $('#sd_settings_yes').css("background-color", color_accent_2)
        sd_settings="yes"
    }
})

// show date: 'no' button click (effect: change display settings)
$('#sd_settings_no').click(function(){
    if(sd_settings=="yes"){
        $('#sd_settings_yes').css("font-weight", "normal")
        $('#sd_settings_yes').css("color", color_accent_2)
        $('#sd_settings_yes').css("background-color", color_background)
        $('#sd_settings_no').css("font-weight", "bold")
        $('#sd_settings_no').css("color", color_background)
        $('#sd_settings_no').css("background-color", color_accent_2)
        sd_settings="no"
    }
})

// Military time: 'yes' button click (effect: change display settings)
$('#mt_settings_yes').click(function(){
    if(mt_settings=="no"){
        $('#mt_settings_no').css("font-weight", "normal")
        $('#mt_settings_no').css("color", color_accent_2)
        $('#mt_settings_no').css("background-color", color_background)
        $('#mt_settings_yes').css("font-weight", "bold")
        $('#mt_settings_yes').css("color", color_background)  
        $('#mt_settings_yes').css("background-color", color_accent_2)
        mt_settings="yes"
    }
})

// Military time: 'no' button click (effect: change display settings)
$('#mt_settings_no').click(function(){
    if(mt_settings=="yes"){
        $('#mt_settings_yes').css("font-weight", "normal")
        $('#mt_settings_yes').css("color", color_accent_2)
        $('#mt_settings_yes').css("background-color", color_background)
        $('#mt_settings_no').css("font-weight", "bold")
        $('#mt_settings_no').css("color", color_background)
        $('#mt_settings_no').css("background-color", color_accent_2)
        mt_settings="no"
    }
})

// show greetings: 'yes' button click (effect: change display settings)
$('#sg_settings_yes').click(function(){
    if(sg_settings=="no"){
        $('#sg_settings_no').css("font-weight", "normal")
        $('#sg_settings_no').css("color", color_accent_2)
        $('#sg_settings_no').css("background-color", color_background)
        $('#sg_settings_yes').css("font-weight", "bold")
        $('#sg_settings_yes').css("color", color_background)  
        $('#sg_settings_yes').css("background-color", color_accent_2)
        sg_settings="yes"
    }
})

// show greetings: 'no' button click (effect: change display settings)
$('#sg_settings_no').click(function(){
    if(sg_settings=="yes"){
        $('#sg_settings_yes').css("font-weight", "normal")
        $('#sg_settings_yes').css("color", color_accent_2)
        $('#sg_settings_yes').css("background-color", color_background)
        $('#sg_settings_no').css("font-weight", "bold")
        $('#sg_settings_no').css("color", color_background)
        $('#sg_settings_no').css("background-color", color_accent_2)
        sg_settings="no"
    }
})

// left dock new tab override
$('#ld_newtab_settings_yes').click(function(){
    if(ld_link_override=='no'){
        console.log('yes clicked!')
        ld_link_override='yes'
        ld_link_override_settings_setup()
    }
})
$('#ld_newtab_settings_no').click(function(){
    if(ld_link_override=='yes'){
        console.log('no clicked!')
        ld_link_override='no'
        ld_link_override_settings_setup()
    }
})

// Setting Screen Effects //
function Change_Display_Settings(){

    name = $("#name_input").val()

    // show date
    if(sd_settings=='no'){
        $('#Date_Display').hide()
    }
    if(sd_settings=='yes'){
        $('#Date_Display').show()
    }

    // military time
    if(mt_settings=='no'){
        $('#clock_box_MT').hide()
        $('#clock_box').show()
    }
    if(mt_settings=='yes'){
        $('#clock_box').hide()
        $('#clock_box_MT').show()
    }


    // show greeting
    if(sg_settings=='no'){
        $('#Greeting_Message').hide()
    }
    if(sg_settings=='yes'){
        $('#Greeting_Message').show()
    }
}



/////////////////////////////////////////////////////////////////

// only include letters, numbers and '#' characters in hex input
$("#hex_1").keyup(function(e) {
  var regex = /^[a-zA-Z]+$/;
  if (regex.test(this.value) !== true)
    this.value = this.value.replace(/[`~!@$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
});

$("#hex_2").keyup(function(e) {
  var regex = /^[a-zA-Z]+$/;
  if (regex.test(this.value) !== true)
    this.value = this.value.replace(/[`~!@$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
});

$("#hex_3").keyup(function(e) {
  var regex = /^[a-zA-Z]+$/;
  if (regex.test(this.value) !== true)
    this.value = this.value.replace(/[`~!@$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
});

$("#name_input").keyup(function(e) {
  // Our regex
  // a-z => allow all lowercase alphabets
  // A-Z => allow all uppercase alphabets
  // 0-9 => allow all numbers
  // @ => allow @ symbol
  var regex = /^[a-zA-Z]+$/;
  // This is will test the value against the regex
  // Will return True if regex satisfied
  if (regex.test(this.value) !== true)
  //alert if not true
  //alert("Invalid Input");

  // You can replace the invalid characters by:
    this.value = this.value.replace(/[^a-zA-Z0-9@]+/, '');

});

$("#name_input").focus(function(){
    if(document.hasFocus()==true){
        disable_arrow_keys='yes' // disable arrow keys so user can move cursor around when typing
    }
})

$("#name_input").keydown(function(e){
    name = $("#name_input").val()
});

$('#settings_screen_main').click(function(){
    disable_arrow_keys_function()
})

// Close settings window
$('#settings_finished').click(function(){
    save_data()
    update_website_names()
    current_display='main'
    View_Changer()
    // Display_Main_Screen()
})

// Close Left Dock Input Window
$('#ldi_finished').click(function(){
    current_display='settings'
    View_Changer()
})

// Close Right Dock Input Window
$('#rdi_finished').click(function(){
    current_display='settings'
    View_Changer()
})

// show color scheme input 
$('#color_scheme_change').click(function(){
    current_display='color_scheme'
    View_Changer()
})

// close color scheme input
$('#color_scheme_input_finished').click(function(){
    current_display='settings'
    View_Changer()
})

$('#web_search_input_finished').click(function(){
    current_display='settings'
    View_Changer()
})


// Left Dock Input Table: Toggle lowercase/uppercase tables
ldi_case="lower"
function ldi_case_toggle(){
    if(ldi_case=="lower"){
        $('#ldi_UPPERCASE_toggle').css("color", color_accent_2)
        $('#ldi_UPPERCASE_toggle').css("background-color", color_background)
        $('#ldi_UPPERCASE_toggle').css("border-width", "1.5px")
        $('#ldi_UPPERCASE_toggle').css("border-color", color_accent_1)
        $('#ldi_lowercase_toggle').css("color", color_background)
        $('#ldi_lowercase_toggle').css("background-color", color_accent_2)
        $('#ldi_lowercase_toggle').css("border-color", color_accent_2)
        $('#ldi_lowercase_toggle').css("border-width", "0px")
    } 
    if(ldi_case=="upper"){
        $('#ldi_lowercase_toggle').css("color", color_accent_2)
        $('#ldi_lowercase_toggle').css("background-color", color_background)
        $('#ldi_lowercase_toggle').css("border-bottom", "1.5px solid")
        $('#ldi_lowercase_toggle').css("border-color", color_accent_1)
        $('#ldi_UPPERCASE_toggle').css("color", color_background)
        $('#ldi_UPPERCASE_toggle').css("background-color", color_accent_2)
        $('#ldi_UPPERCASE_toggle').css("border-color", color_accent_2)
        $('#ldi_UPPERCASE_toggle').css("border-width", "0px")
    }
}
// ldi_case_toggle()

function ldi_case_input_toggle(){
    if(ldi_case=="upper"){
        // hide lowercase inputs
        $('#ldi_lc_0').hide()
        $('#ldi_lc_1').hide()
        $('#ldi_lc_2').hide()
        $('#ldi_lc_3').hide()
        $('#ldi_lc_4').hide()
        $('#ldi_lc_5').hide()
        $('#ldi_lc_6').hide()
        $('#ldi_lc_7').hide()
        $('#ldi_lc_8').hide()
        $('#ldi_lc_9').hide()
        $('#ldi_lc_10').hide()
        $('#ldi_lc_11').hide()
        $('#ldi_lc_12').hide()
        $('#ldi_lc_13').hide()
        $('#ldi_lc_14').hide()
        $('#ldi_lc_15').hide()
        $('#ldi_lc_16').hide()
        $('#ldi_lc_17').hide()
        $('#ldi_lc_18').hide()
        $('#ldi_lc_19').hide()
        $('#ldi_lc_20').hide()
        $('#ldi_lc_21').hide()
        $('#ldi_lc_22').hide()
        $('#ldi_lc_23').hide()
        $('#ldi_lc_24').hide()
        $('#ldi_lc_25').hide()
        $('#ldi_lc_26').hide()
        // show uppercase inputs
        $('#ldi_uc_0').show()
        $('#ldi_uc_1').show()
        $('#ldi_uc_2').show()
        $('#ldi_uc_3').show()
        $('#ldi_uc_4').show()
        $('#ldi_uc_5').show()
        $('#ldi_uc_6').show()
        $('#ldi_uc_7').show()
        $('#ldi_uc_8').show()
        $('#ldi_uc_9').show()
        $('#ldi_uc_10').show()
        $('#ldi_uc_11').show()
        $('#ldi_uc_12').show()
        $('#ldi_uc_13').show()
        $('#ldi_uc_14').show()
        $('#ldi_uc_15').show()
        $('#ldi_uc_16').show()
        $('#ldi_uc_17').show()
        $('#ldi_uc_18').show()
        $('#ldi_uc_19').show()
        $('#ldi_uc_20').show()
        $('#ldi_uc_21').show()
        $('#ldi_uc_22').show()
        $('#ldi_uc_23').show()
        $('#ldi_uc_24').show()
        $('#ldi_uc_25').show()
        $('#ldi_uc_26').show()
    }
    else{
        // hide uppercase inputs
        $('#ldi_uc_0').hide()
        $('#ldi_uc_1').hide()
        $('#ldi_uc_2').hide()
        $('#ldi_uc_3').hide()
        $('#ldi_uc_4').hide()
        $('#ldi_uc_5').hide()
        $('#ldi_uc_6').hide()
        $('#ldi_uc_7').hide()
        $('#ldi_uc_8').hide()
        $('#ldi_uc_9').hide()
        $('#ldi_uc_10').hide()
        $('#ldi_uc_11').hide()
        $('#ldi_uc_12').hide()
        $('#ldi_uc_13').hide()
        $('#ldi_uc_14').hide()
        $('#ldi_uc_15').hide()
        $('#ldi_uc_16').hide()
        $('#ldi_uc_17').hide()
        $('#ldi_uc_18').hide()
        $('#ldi_uc_19').hide()
        $('#ldi_uc_20').hide()
        $('#ldi_uc_21').hide()
        $('#ldi_uc_22').hide()
        $('#ldi_uc_23').hide()
        $('#ldi_uc_24').hide()
        $('#ldi_uc_25').hide()
        $('#ldi_uc_26').hide()
        // show lowercase inputs
        $('#ldi_lc_0').show()
        $('#ldi_lc_1').show()
        $('#ldi_lc_2').show()
        $('#ldi_lc_3').show()
        $('#ldi_lc_4').show()
        $('#ldi_lc_5').show()
        $('#ldi_lc_6').show()
        $('#ldi_lc_7').show()
        $('#ldi_lc_8').show()
        $('#ldi_lc_9').show()
        $('#ldi_lc_10').show()
        $('#ldi_lc_11').show()
        $('#ldi_lc_12').show()
        $('#ldi_lc_13').show()
        $('#ldi_lc_14').show()
        $('#ldi_lc_15').show()
        $('#ldi_lc_16').show()
        $('#ldi_lc_17').show()
        $('#ldi_lc_18').show()
        $('#ldi_lc_19').show()
        $('#ldi_lc_20').show()
        $('#ldi_lc_21').show()
        $('#ldi_lc_22').show()
        $('#ldi_lc_23').show()
        $('#ldi_lc_24').show()
        $('#ldi_lc_25').show()
        $('#ldi_lc_26').show()
    }
}

$('#ldi_UPPERCASE_toggle').click(function(){
    ldi_case="upper"
    ldi_case_toggle()
    ldi_case_input_toggle()
})

$('#ldi_lowercase_toggle').click(function(){
    ldi_case="lower"
    ldi_case_toggle()
    ldi_case_input_toggle()
})





// function test(){
//     window.open("https://mail.google.com/mail/ca/u/0/#inbox", 'gmail')
//     window.open("https://play.hbomax.com/", 'hbo')
// }

/////////////////////
//  Hamburger icon //
/////////////////////

$('#ham_icon').click(function(){
    if(current_display=='main'){
        current_display='settings'
    }
    else if(current_display=='settings'){
        current_display='main'
    }
    else if(current_display=='search'){
        current_display='settings'
    }
    else if(current_display=='left_dock_config'){
        current_display='main'
    }
    else if(current_display=='right_dock_config'){
        current_display='main'
    }

    else if(current_display=='web_search'){
        current_display='main'
    }
    else if(current_display=='color_scheme'){
        current_display='main'
    }
    else if(current_display=='top_dock'){
        current_display='settings'
    }

    View_Changer()
})

// add/remove hamburger icon classes
function HI_Hover_Highlight(){
    $("#ham_icon").removeClass("hi_off")
    $("#ham_icon").addClass("hi_on")
}

function HI_Hover_No_Highlight(){
    $("#ham_icon").removeClass("hi_on")
    $("#ham_icon").addClass("hi_off")
}

// Hamburger icon: hover functionality
$(".ham_class").mouseover(function(){
    HI_Hover_Highlight()
}).mouseout(function(){
    HI_Hover_No_Highlight()
});




//////////////////////
// Contra Animation //
//////////////////////

contra_rdy='yes' // variable used as a gate so duplicate animations are not simultaneously run
function contra_animation(){
    if(contra_rdy!='no'){
        setTimeout(function(){
            $('#contra_img_1').hide()
            $('#contra_img_7').hide()
            $('#contra_img_2').show()
        },125)
        setTimeout(function(){
            $('#contra_img_2').hide()
            $('#contra_img_3').show()
        },250)
        setTimeout(function(){
            $('#contra_img_3').hide()
            $('#contra_img_4').show()
        },375)
        setTimeout(function(){
            $('#contra_img_4').hide()
            $('#contra_img_5').show()
        },500)
        setTimeout(function(){
            $('#contra_img_5').hide()
            $('#contra_img_6').show()
        },625)
        setTimeout(function(){
            $('#contra_img_6').hide()
            $('#contra_img_7').show()
        },750)
        setTimeout(function(){
            // $('#contra_img_7').hide()
        },800)
    }    
}

function contra_animation_loop(){
    if(contra_rdy=='yes'){
        contra_rdy='standby'
        $('#contra_img_1').show()
        contra_animation()
        setTimeout(function(){
            contra_animation()
        },800)
        setTimeout(function(){
            contra_animation()
        },1600)
        setTimeout(function(){
            contra_animation()
        },2400)
        setTimeout(function(){
            contra_animation()
        },3200)
        setTimeout(function(){
            contra_animation()
        },4000)
        setTimeout(function(){
            contra_animation()
        },4800)
        setTimeout(function(){
            contra_animation()
        },5600)
        setTimeout(function(){
            contra_animation()
        },6400)
        setTimeout(function(){
            $('#contra_img_7').hide()
            // contra_rdy='yes'
        },7200)
        setTimeout(function(){
            // $('#contra_img_7').hide()
            contra_rdy='yes'
        },8000)

    }   
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


// // example: 
// focus_check = document.getElementById('name_input');
// name_input_focused = (document.activeElement == focus_check)
// // check is name input box is focused, if not, open color settings
// // note: this is to avoid opening the color settings when someone is inputting their name. 
// if(name_input_focused==false){
//     $('#color_scheme_change').click()
// }

function right_dock_input_focus_check(){
    // get focus status from below elements. 
    rd_1_label_input_focused = document.getElementById('rd_1_label_input');
    rd_2_label_input_focused = document.getElementById('rd_2_label_input');
    rd_3_label_input_focused = document.getElementById('rd_3_label_input');
    rd_4_label_input_focused = document.getElementById('rd_4_label_input');
    rd_5_label_input_focused = document.getElementById('rd_5_label_input');
    rd_6_label_input_focused = document.getElementById('rd_6_label_input');
    rd_7_label_input_focused = document.getElementById('rd_7_label_input');
    rd_8_label_input_focused = document.getElementById('rd_8_label_input');
    rd_9_label_input_focused = document.getElementById('rd_9_label_input');
    rd_0_label_input_focused = document.getElementById('rd_0_label_input');
    rd_1_input_1_focused = document.getElementById('rd_1_input_1');
    rd_1_input_2_focused = document.getElementById('rd_1_input_2');
    rd_1_input_3_focused = document.getElementById('rd_1_input_3');
    rd_1_input_4_focused = document.getElementById('rd_1_input_4');
    rd_1_input_5_focused = document.getElementById('rd_1_input_5');
    rd_1_input_6_focused = document.getElementById('rd_1_input_6');
    rd_1_input_7_focused = document.getElementById('rd_1_input_7');
    rd_1_input_8_focused = document.getElementById('rd_1_input_8');
    rd_1_input_9_focused = document.getElementById('rd_1_input_9');
    rd_1_input_10_focused = document.getElementById('rd_1_input_10');
    rd_2_input_1_focused = document.getElementById('rd_2_input_1');
    rd_2_input_2_focused = document.getElementById('rd_2_input_2');
    rd_2_input_3_focused = document.getElementById('rd_2_input_3');
    rd_2_input_4_focused = document.getElementById('rd_2_input_4');
    rd_2_input_5_focused = document.getElementById('rd_2_input_5');
    rd_2_input_6_focused = document.getElementById('rd_2_input_6');
    rd_2_input_7_focused = document.getElementById('rd_2_input_7');
    rd_2_input_8_focused = document.getElementById('rd_2_input_8');
    rd_2_input_9_focused = document.getElementById('rd_2_input_9');
    rd_2_input_10_focused = document.getElementById('rd_2_input_10');
    rd_3_input_1_focused = document.getElementById('rd_3_input_1');
    rd_3_input_2_focused = document.getElementById('rd_3_input_2');
    rd_3_input_3_focused = document.getElementById('rd_3_input_3');
    rd_3_input_4_focused = document.getElementById('rd_3_input_4');
    rd_3_input_5_focused = document.getElementById('rd_3_input_5');
    rd_3_input_6_focused = document.getElementById('rd_3_input_6');
    rd_3_input_7_focused = document.getElementById('rd_3_input_7');
    rd_3_input_8_focused = document.getElementById('rd_3_input_8');
    rd_3_input_9_focused = document.getElementById('rd_3_input_9');
    rd_3_input_10_focused = document.getElementById('rd_3_input_10');
    rd_4_input_1_focused = document.getElementById('rd_4_input_1');
    rd_4_input_2_focused = document.getElementById('rd_4_input_2');
    rd_4_input_3_focused = document.getElementById('rd_4_input_3');
    rd_4_input_4_focused = document.getElementById('rd_4_input_4');
    rd_4_input_5_focused = document.getElementById('rd_4_input_5');
    rd_4_input_6_focused = document.getElementById('rd_4_input_6');
    rd_4_input_7_focused = document.getElementById('rd_4_input_7');
    rd_4_input_8_focused = document.getElementById('rd_4_input_8');
    rd_4_input_9_focused = document.getElementById('rd_4_input_9');
    rd_4_input_10_focused = document.getElementById('rd_4_input_10');
    rd_5_input_1_focused = document.getElementById('rd_5_input_1');
    rd_5_input_2_focused = document.getElementById('rd_5_input_2');
    rd_5_input_3_focused = document.getElementById('rd_5_input_3');
    rd_5_input_4_focused = document.getElementById('rd_5_input_4');
    rd_5_input_5_focused = document.getElementById('rd_5_input_5');
    rd_5_input_6_focused = document.getElementById('rd_5_input_6');
    rd_5_input_7_focused = document.getElementById('rd_5_input_7');
    rd_5_input_8_focused = document.getElementById('rd_5_input_8');
    rd_5_input_9_focused = document.getElementById('rd_5_input_9');
    rd_5_input_10_focused = document.getElementById('rd_5_input_10');
    rd_6_input_1_focused = document.getElementById('rd_6_input_1');
    rd_6_input_2_focused = document.getElementById('rd_6_input_2');
    rd_6_input_3_focused = document.getElementById('rd_6_input_3');
    rd_6_input_4_focused = document.getElementById('rd_6_input_4');
    rd_6_input_5_focused = document.getElementById('rd_6_input_5');
    rd_6_input_6_focused = document.getElementById('rd_6_input_6');
    rd_6_input_7_focused = document.getElementById('rd_6_input_7');
    rd_6_input_8_focused = document.getElementById('rd_6_input_8');
    rd_6_input_9_focused = document.getElementById('rd_6_input_9');
    rd_6_input_10_focused = document.getElementById('rd_6_input_10');
    rd_7_input_1_focused = document.getElementById('rd_7_input_1');
    rd_7_input_2_focused = document.getElementById('rd_7_input_2');
    rd_7_input_3_focused = document.getElementById('rd_7_input_3');
    rd_7_input_4_focused = document.getElementById('rd_7_input_4');
    rd_7_input_5_focused = document.getElementById('rd_7_input_5');
    rd_7_input_6_focused = document.getElementById('rd_7_input_6');
    rd_7_input_7_focused = document.getElementById('rd_7_input_7');
    rd_7_input_8_focused = document.getElementById('rd_7_input_8');
    rd_7_input_9_focused = document.getElementById('rd_7_input_9');
    rd_7_input_10_focused = document.getElementById('rd_7_input_10');
    rd_8_input_1_focused = document.getElementById('rd_8_input_1');
    rd_8_input_2_focused = document.getElementById('rd_8_input_2');
    rd_8_input_3_focused = document.getElementById('rd_8_input_3');
    rd_8_input_4_focused = document.getElementById('rd_8_input_4');
    rd_8_input_5_focused = document.getElementById('rd_8_input_5');
    rd_8_input_6_focused = document.getElementById('rd_8_input_6');
    rd_8_input_7_focused = document.getElementById('rd_8_input_7');
    rd_8_input_8_focused = document.getElementById('rd_8_input_8');
    rd_8_input_9_focused = document.getElementById('rd_8_input_9');
    rd_8_input_10_focused = document.getElementById('rd_8_input_10');
    rd_9_input_1_focused = document.getElementById('rd_9_input_1');
    rd_9_input_2_focused = document.getElementById('rd_9_input_2');
    rd_9_input_3_focused = document.getElementById('rd_9_input_3');
    rd_9_input_4_focused = document.getElementById('rd_9_input_4');
    rd_9_input_5_focused = document.getElementById('rd_9_input_5');
    rd_9_input_6_focused = document.getElementById('rd_9_input_6');
    rd_9_input_7_focused = document.getElementById('rd_9_input_7');
    rd_9_input_8_focused = document.getElementById('rd_9_input_8');
    rd_9_input_9_focused = document.getElementById('rd_9_input_9');
    rd_9_input_10_focused = document.getElementById('rd_9_input_10');
    rd_0_input_1_focused = document.getElementById('rd_0_input_1');
    rd_0_input_2_focused = document.getElementById('rd_0_input_2');
    rd_0_input_3_focused = document.getElementById('rd_0_input_3');
    rd_0_input_4_focused = document.getElementById('rd_0_input_4');
    rd_0_input_5_focused = document.getElementById('rd_0_input_5');
    rd_0_input_6_focused = document.getElementById('rd_0_input_6');
    rd_0_input_7_focused = document.getElementById('rd_0_input_7');
    rd_0_input_8_focused = document.getElementById('rd_0_input_8');
    rd_0_input_9_focused = document.getElementById('rd_0_input_9');
    rd_0_input_10_focused = document.getElementById('rd_0_input_10');
}

function right_dock_input_focus_decision(){
    right_dock_input_focus_check()
    rdi_focused = (
        document.activeElement == rd_1_label_input_focused ||
        document.activeElement == rd_2_label_input_focused ||
        document.activeElement == rd_3_label_input_focused ||
        document.activeElement == rd_4_label_input_focused ||
        document.activeElement == rd_5_label_input_focused ||
        document.activeElement == rd_6_label_input_focused ||
        document.activeElement == rd_7_label_input_focused ||
        document.activeElement == rd_8_label_input_focused ||
        document.activeElement == rd_9_label_input_focused ||
        document.activeElement == rd_0_label_input_focused ||
        document.activeElement == rd_1_input_1_focused ||
        document.activeElement == rd_1_input_2_focused ||
        document.activeElement == rd_1_input_3_focused ||
        document.activeElement == rd_1_input_4_focused ||
        document.activeElement == rd_1_input_5_focused ||
        document.activeElement == rd_1_input_6_focused ||
        document.activeElement == rd_1_input_7_focused ||
        document.activeElement == rd_1_input_8_focused ||
        document.activeElement == rd_1_input_9_focused ||
        document.activeElement == rd_1_input_10_focused ||
        document.activeElement == rd_2_input_1_focused ||
        document.activeElement == rd_2_input_2_focused ||
        document.activeElement == rd_2_input_3_focused ||
        document.activeElement == rd_2_input_4_focused ||
        document.activeElement == rd_2_input_5_focused ||
        document.activeElement == rd_2_input_6_focused ||
        document.activeElement == rd_2_input_7_focused ||
        document.activeElement == rd_2_input_8_focused ||
        document.activeElement == rd_2_input_9_focused ||
        document.activeElement == rd_2_input_10_focused ||
        document.activeElement == rd_3_input_1_focused ||
        document.activeElement == rd_3_input_2_focused ||
        document.activeElement == rd_3_input_3_focused ||
        document.activeElement == rd_3_input_4_focused ||
        document.activeElement == rd_3_input_5_focused ||
        document.activeElement == rd_3_input_6_focused ||
        document.activeElement == rd_3_input_7_focused ||
        document.activeElement == rd_3_input_8_focused ||
        document.activeElement == rd_3_input_9_focused ||
        document.activeElement == rd_3_input_10_focused ||
        document.activeElement == rd_4_input_1_focused ||
        document.activeElement == rd_4_input_2_focused ||
        document.activeElement == rd_4_input_3_focused ||
        document.activeElement == rd_4_input_4_focused ||
        document.activeElement == rd_4_input_5_focused ||
        document.activeElement == rd_4_input_6_focused ||
        document.activeElement == rd_4_input_7_focused ||
        document.activeElement == rd_4_input_8_focused ||
        document.activeElement == rd_4_input_9_focused ||
        document.activeElement == rd_4_input_10_focused ||
        document.activeElement == rd_5_input_1_focused ||
        document.activeElement == rd_5_input_2_focused ||
        document.activeElement == rd_5_input_3_focused ||
        document.activeElement == rd_5_input_4_focused ||
        document.activeElement == rd_5_input_5_focused ||
        document.activeElement == rd_5_input_6_focused ||
        document.activeElement == rd_5_input_7_focused ||
        document.activeElement == rd_5_input_8_focused ||
        document.activeElement == rd_5_input_9_focused ||
        document.activeElement == rd_5_input_10_focused ||
        document.activeElement == rd_6_input_1_focused ||
        document.activeElement == rd_6_input_2_focused ||
        document.activeElement == rd_6_input_3_focused ||
        document.activeElement == rd_6_input_4_focused ||
        document.activeElement == rd_6_input_5_focused ||
        document.activeElement == rd_6_input_6_focused ||
        document.activeElement == rd_6_input_7_focused ||
        document.activeElement == rd_6_input_8_focused ||
        document.activeElement == rd_6_input_9_focused ||
        document.activeElement == rd_6_input_10_focused ||
        document.activeElement == rd_7_input_1_focused ||
        document.activeElement == rd_7_input_2_focused ||
        document.activeElement == rd_7_input_3_focused ||
        document.activeElement == rd_7_input_4_focused ||
        document.activeElement == rd_7_input_5_focused ||
        document.activeElement == rd_7_input_6_focused ||
        document.activeElement == rd_7_input_7_focused ||
        document.activeElement == rd_7_input_8_focused ||
        document.activeElement == rd_7_input_9_focused ||
        document.activeElement == rd_7_input_10_focused ||
        document.activeElement == rd_8_input_1_focused ||
        document.activeElement == rd_8_input_2_focused ||
        document.activeElement == rd_8_input_3_focused ||
        document.activeElement == rd_8_input_4_focused ||
        document.activeElement == rd_8_input_5_focused ||
        document.activeElement == rd_8_input_6_focused ||
        document.activeElement == rd_8_input_7_focused ||
        document.activeElement == rd_8_input_8_focused ||
        document.activeElement == rd_8_input_9_focused ||
        document.activeElement == rd_8_input_10_focused ||
        document.activeElement == rd_9_input_1_focused ||
        document.activeElement == rd_9_input_2_focused ||
        document.activeElement == rd_9_input_3_focused ||
        document.activeElement == rd_9_input_4_focused ||
        document.activeElement == rd_9_input_5_focused ||
        document.activeElement == rd_9_input_6_focused ||
        document.activeElement == rd_9_input_7_focused ||
        document.activeElement == rd_9_input_8_focused ||
        document.activeElement == rd_9_input_9_focused ||
        document.activeElement == rd_9_input_10_focused ||
        document.activeElement == rd_0_input_1_focused ||
        document.activeElement == rd_0_input_2_focused ||
        document.activeElement == rd_0_input_3_focused ||
        document.activeElement == rd_0_input_4_focused ||
        document.activeElement == rd_0_input_5_focused ||
        document.activeElement == rd_0_input_6_focused ||
        document.activeElement == rd_0_input_7_focused ||
        document.activeElement == rd_0_input_8_focused ||
        document.activeElement == rd_0_input_9_focused ||
        document.activeElement == rd_0_input_10_focused
        )

    // if focus 
    if(rdi_focused==false){
        rdi_focus_status='open'
    }
    else{
        rdi_focus_status='closed'
    }
    console.log('rdi_focus_status: ' + rdi_focus_status)
}

// zc





/////////////////////////////////////////////////




////////////////////////
//  Hot Key commands  //
////////////////////////

page_ready = 'no' // initially lock things until page loads. 
control_mod = 'no' // inital setting (used for blocking commands when pressed)
shift_mod = 'no' // inital setting (used for blocking commands when pressed)
disable_arrow_keys = 'no' // inital setting. values: 'yes, no'
paused='no'

function disable_arrow_keys_function(){
    if(document.hasFocus()==false){
        disable_arrow_keys='no'
        console.log('disable_arrow_keys: no')
    }
}

function shift_disable(){
    shift_mod='yes'
    console.log('shift_mod: yes')
    setTimeout(function(){
        shift_mod='no'
        console.log('shift_mod: no')
    },500)
}



// Key press comands
document.body.onkeydown = function(e){

    // When control is held, create modifer that disable other single key commands
    if(e.keyCode == 17){
        control_mod = 'yes'
        console.log('control_mod: yes')
    }

    // When shift is held, create modifer that enables combination key commands
    if(e.keyCode == 16){
        shift_disable()
    }

    // Hotkeys allowed? 
    if(current_display=='main'){
    // if(current_display=='main' || current_display=='top_dock'){ // allow docks to appear in top dock view

        // When left arrow is held, left dock appears
        if(e.keyCode == 37){
            $('#left_dock').show()
            $('#left_dock').removeClass('left_docker_state1')
            $('#left_dock').addClass('left_docker_state2') 
            if(shift_mod=='yes'){ // shift key also pressed...
                $('#left_dock_lowercase').hide()
                $('#left_dock_uppercase').show()
                console.log('show UPPERCASE left dock')
            }
            else{
                $('#left_dock_uppercase').hide()
                $('#left_dock_lowercase').show()
                console.log('show lowercase left dock')
            }
        }

        // When right arrow is held, right dock appears 
        if(e.keyCode==39){
            $('#right_dock').show()
            $('#right_dock').removeClass('right_docker_state1')
            $('#right_dock').addClass('right_docker_state2')
            // console.log('right_docker_state2')      
        }

        // When bottom arrow is held, right dock appears 
        if(e.keyCode==40){
            $('#bottom_dock').show()
            $('#bottom_dock').removeClass('bottom_docker_state1')
            $('#bottom_dock').addClass('bottom_docker_state2')
            console.log('bottom_docker_state2')      
        }
    }
    else if(current_display=='settings'){

        // top arrow key command
        if(e.keyCode == 38){
            disable_arrow_keys_function()
            if(disable_arrow_keys=='no'){
                console.log('top arrow key')
                $('#top_arr_sett').click()
            }                         
        }

        // left arrow key command
        if(e.keyCode == 37){
            disable_arrow_keys_function()
            if(disable_arrow_keys=='no'){
                console.log('left arrow key')
                $('#left_arr_sett').click()
            }
        }

        // bottom arrow key command
        if(e.keyCode == 40){
            disable_arrow_keys_function()
            if(disable_arrow_keys=='no'){
                console.log('bottom arrow key')
                $('#bottom_arr_sett').click()
            }
        }

        // right arrow key command
        if(e.keyCode == 39){
            disable_arrow_keys_function()
            if(disable_arrow_keys=='no'){
                console.log('right arrow key')
                $('#right_arr_sett').click()
            }
        }
    }
    else if(current_display=='color_scheme'){

        // top arrow key command
        if(e.keyCode == 38){
            setTimeout(function(){
                change_preset_theme()
                update_css_coloring()
            }, 10); 
            console.log('top arrow key')
        }

        // bottom arrow key command
        if(e.keyCode == 40){
            setTimeout(function(){
                change_preset_theme()
                update_css_coloring()
            }, 10); 
            console.log('bottom arrow key')
        }
    }
    else if(current_display=='right_dock_config'){
        // 1 | 
        if(e.keyCode == 49){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_1').click()
            }
            // zc
        }

        // 2 | 
        if(e.keyCode == 50){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_2').click()
            }
        }
        // 3 | 
        if(e.keyCode == 51){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_3').click()
            }
        }
        // 4 | 
        if(e.keyCode == 52){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_4').click()
            }
        }
        // 5 | 
        if(e.keyCode == 53){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_5').click()
            }
        }
        // 6 | 
        if(e.keyCode == 54){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_6').click()
            }
        }
        // 7 | 
        if(e.keyCode == 55){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_7').click()
            }
        }
        // 8 | 
        if(e.keyCode == 56){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_8').click()
            }
        }
        // 9 | 
        if(e.keyCode == 57){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_9').click()
            }
        }
        // 0 | 
        if(e.keyCode == 48){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_0').click()
            }
        }
    }
}



// Key release commands
document.body.onkeyup = function(e){
    if(page_ready=='yes'){ // blocks any keys from working if 'no'

        if(current_display=='left_dock_config'){
            text_input_grey_out_function()
        }

        if(current_display=='right_dock_config'){
            text_input_grey_out_function()
        }

        if(current_display=='web_search'){
            text_input_grey_out_function()
        }

        // Control modifer off
        if(e.keyCode == 17){
            setTimeout(function(){
                 control_mod = 'no'
                 console.log('control_mod: no')
            }, 1000);        
        }

        // Shift modifer off
        if(e.keyCode == 16){
            if(ldi_case=='lower'){
                ldi_case='upper'
                // ldi_case_toggle()
                // ldi_case_input_toggle()
            }
            else{
                ldi_case='lower'
                // ldi_case_toggle()
                // ldi_case_input_toggle()
            }
            setTimeout(function(){
                 shift_mod = 'no'
                 console.log('shift_mod: no')
            }, 25);        
        }

        // capslock
        if(e.keyCode == 20){
            if(ldi_case=='lower'){
                ldi_case='upper'
                ldi_case_toggle()
                ldi_case_input_toggle()

            }
            else{
                ldi_case='lower'
                ldi_case_toggle()
                ldi_case_input_toggle()
            }
            console.log('capslock')
        }

        // Spacebar commands
        if(e.keyCode == 32){
            if(current_display=='main' || current_display=='top_dock'){
                current_display='search'
                View_Changer()            
            }        
        }

        // Enter key command (Google Search)
        if(e.keyCode == 13){
            console.log('enterkey')
            if($('#search_bar').val()==""){
            }
            else{
                Google_Search()
            }
            if(current_display=='color_scheme'){
                $('#color_scheme_custom_submit').click()
            }
        }

        // escape key
        if(e.keyCode == 27){

            if(current_display=='main'){}
            else if(current_display=='settings'){
                save_data()
                update_website_names()
                current_display='main'
            }
            else if(current_display=='search'){
                current_display='main'
            }
            else if(current_display=='left_dock_config'){
                save_data()
                update_website_names()
                current_display='settings'
            }
            else if(current_display=='right_dock_config'){
                save_data()
                update_website_names()
                current_display='settings'
            }
            else if(current_display=='color_scheme'){
                save_data()
                update_website_names()
                current_display='settings'
            }
            else if(current_display=='web_search'){
                save_data()
                update_website_names()
                current_display='settings'
            }
            View_Changer()
        }

        // When left arrow is let go, left dock disappears
        if(e.keyCode == 37){
            setTimeout(function(){
                $('#left_dock').removeClass('left_docker_state2')
                $('#left_dock').addClass('left_docker_state1') 
            }, 300);              
        }

        // When top arrow 
        if(e.keyCode == 38){
            if(current_display=='top_dock'){
                current_display='main'
                View_Changer()
            }
            else if(current_display=='main'){
                // current_display='top_dock'
                // View_Changer()
            }         
        }

        // When right arrow is let go"," right dock disappears
        if(e.keyCode == 39){
            setTimeout(function(){
                $('#right_dock').removeClass('right_docker_state2')
                $('#right_dock').addClass('right_docker_state1')
                console.log('right_docker_state1')
            }, 300);
        }

        // When bottom arrow is let go"," bottom dock disappears
        if(e.keyCode == 40){
            setTimeout(function(){
                $('#bottom_dock').removeClass('bottom_docker_state2')
                $('#bottom_dock').addClass('bottom_docker_state1')
                console.log('bottom_docker_state1')      
            }, 300);
        }

        // If control key is not pressed...
        if(control_mod == 'no'){
            if(current_display=='main' || current_display=='top_dock'){
                // 0 | 
                if(e.keyCode == 48){
                    open_rd_0_group()
                }
                // 1 | 
                if (e.keyCode == 49){
                    open_rd_1_group()
                }
                // 2 | 
                if(e.keyCode == 50){
                    open_rd_2_group()
                }
                // 3 | 
                if(e.keyCode == 51){
                    open_rd_3_group()
                }
                // 4 | 
                if(e.keyCode == 52){
                    open_rd_4_group()
                }
                // 5 | 
                if(e.keyCode == 53){
                    open_rd_5_group()
                }
                // 6 | 
                if(e.keyCode == 54){
                    open_rd_6_group()
                }
                // 7 | 
                if(e.keyCode == 55){
                    open_rd_7_group()
                }
                // 8 | 
                if(e.keyCode == 56){
                    open_rd_8_group()
                }        
                // 9 | 
                if(e.keyCode == 57){
                    open_rd_9_group()
                } 
                // a | 
                if(e.keyCode == 65){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_a){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_a);   
                            }
                            else{window.open(website_a,'')}                    
                        }
                    }                    
                }
                // b | 
                if(e.keyCode == 66){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_b){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_b);   
                            }
                            else{window.open(website_b,'')} 
                        }
                    }
                }
                // c | 
                if(e.keyCode == 67){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_c){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_c);   
                            }
                            else{window.open(website_c,'')}
                        }
                    }
                }
                // d | 
                if(e.keyCode == 68){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_d){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_d);   
                            }
                            else{window.open(website_d,'')}
                        }
                    }
                }
                // e | 
                if(e.keyCode == 69){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_e){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_e);   
                            }
                            else{window.open(website_e,'')}
                        }
                    }
                }
                // f | 
                if(e.keyCode == 70){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_f){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_f);   
                            }
                            else{window.open(website_f,'')}
                        }
                    }
                }
                // g | 
                if(e.keyCode == 71){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_g){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_g);   
                            }
                            else{window.open(website_g,'')}
                        }
                    }
                }
                //  h | 
                if(e.keyCode == 72){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_h){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_h);   
                            }
                            else{window.open(website_h,'')}
                        }
                    }
                }
                //  i | 
                if(e.keyCode == 73){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_i){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_i);   
                            }
                            else{window.open(website_i,'')}
                        }
                    }
                }
                // j | 
                if(e.keyCode == 74){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_j){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_j);   
                            }
                            else{window.open(website_j,'')}
                        }
                    }
                }
                // k | 
                if(e.keyCode == 75){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_k){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_k);   
                            }
                            else{window.open(website_k,'')}
                        }
                    }
                }
                // l | 
                if(e.keyCode == 76){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_l){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_l);   
                            }
                            else{window.open(website_l,'')}
                        }
                    }
                }
                // m | 
                if(e.keyCode == 77){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_m){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_m);   
                            }
                            else{window.open(website_m,'')}
                        }
                    }
                }
                // n | 
                if(e.keyCode == 78){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_n){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_n);   
                            }
                            else{window.open(website_n,'')}
                        }   
                    }
                        }         
                // o | 
                if(e.keyCode == 79){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_o){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_o);   
                            }
                            else{window.open(website_o,'')}
                        }
                    }
                }
                // p | 
                if(e.keyCode == 80){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_p){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_p);   
                            }
                            else{window.open(website_p,'')}
                        }
                    }
                }
                // q | 
                if(e.keyCode == 81){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_q){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_q);   
                            }
                            else{window.open(website_q,'')}
                        }   
                    }
                        }         
                // r | 
                if(e.keyCode == 82){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_r){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_r);   
                            }
                            else{window.open(website_r,'')}
                        }
                    }
                }
                // s | 
                if(e.keyCode == 83){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_s){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_s);   
                            }
                            else{window.open(website_s,'')}
                        }   
                    }
                        }         
                // t | 
                if(e.keyCode == 84){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_t){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_t);   
                            }
                            else{window.open(website_t,'')}
                        }
                    }
                }
                // u | 
                if(e.keyCode == 85){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_u){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_u);   
                            }
                            else{window.open(website_u,'')}
                        }
                    }
                }
                // v | 
                if(e.keyCode == 86){
                    if(!website_v){}
                    else{
                        if(ld_link_override=='no'){
                            window.location.replace(website_v);   
                        }
                        else{window.open(website_v,'')}
                    }
                }
                // w | 
                if(e.keyCode == 87){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_w){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_w);   
                            }
                            else{window.open(website_w,'')}
                        }                    
                    }
                }
                // x | 
                if(e.keyCode == 88){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_x){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_x);   
                            }
                            else{window.open(website_x,'')}
                        }
                    }
                }
                // y | 
                if(e.keyCode == 89){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_y){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_y);   
                            }
                            else{window.open(website_y,'')}
                        }
                    }
                }
                // z | 
                if(e.keyCode == 90){
                    if(shift_mod=='yes'){}
                    else{
                        if(!website_z){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_z);   
                            }
                            else{window.open(website_z,'')}
                        }
                    }
                }

                ////////////////////////////
                // Shift key combinations //
                ////////////////////////////
                if(shift_mod == 'yes'){ // shift + 

                    // forward slash
                    if(e.keyCode == 191){
                        console.log("shift+forwardslash")
                        $('#about_screen').show()
                        $('#screen1').hide()
                        contra_animation_loop()
                        setTimeout(function(){
                             $('#about_screen').hide()
                             $('#screen1').show()
                             console.log("about screen hide")
                        }, 8000);
                    }

                    // _A | 
                    if(e.keyCode == 65){
                        if(!website_A){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_A);   
                            }
                            else{window.open(website_A,'')}                    
                        }
                    }

                    // _B | 
                    if(e.keyCode == 66){
                        if(!website_B){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_B);   
                            }
                            else{window.open(website_B,'')} 
                        }
                    }
                    // _C | 
                    if(e.keyCode == 67){
                        if(!website_C){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_C);   
                            }
                            else{window.open(website_C,'')}
                        }
                    }
                    // _D | 
                    if(e.keyCode == 68){
                        if(!website_D){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_D);   
                            }
                            else{window.open(website_D,'')}
                        }
                    }
                    // _E | 
                    if(e.keyCode == 69){
                        if(!website_E){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_E);   
                            }
                            else{window.open(website_E,'')}
                        }
                    }
                    // _F | 
                    if(e.keyCode == 70){
                        if(!website_F){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_F);   
                            }
                            else{window.open(website_F,'')}
                        }
                    }
                    // _G | 
                    if(e.keyCode == 71){
                        if(!website_G){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_G);   
                            }
                            else{window.open(website_G,'')}
                        }
                    }
                    // _H | 
                    if(e.keyCode == 72){
                        if(!website_H){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_H);   
                            }
                            else{window.open(website_H,'')}
                        }
                    }
                    // _I | 
                    if(e.keyCode == 73){
                        if(!website_I){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_I);   
                            }
                            else{window.open(website_I,'')}
                        }
                    }
                    // _J | 
                    if(e.keyCode == 74){
                        if(!website_J){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_J);   
                            }
                            else{window.open(website_J,'')}
                        }
                    }
                    // _K | 
                    if(e.keycode == 75){
                        if(!website_K){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_K);   
                            }
                            else{window.open(website_K,'')}
                        }
                    }
                    // _L | 
                    if(e.keyCode == 76){
                        if(!website_L){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_L);   
                            }
                            else{window.open(website_L,'')}
                        }
                    }
                    // _M | 
                    if(e.keycode == 77){
                        if(!website_M){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_M);   
                            }
                            else{window.open(website_M,'')}
                        }
                    }
                    // _N | 
                    if(e.keyCode == 78){
                        if(!website_N){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_N);   
                            }
                            else{window.open(website_N,'')}
                        }
                            }            
                    // _O | 
                    if(e.keyCode == 79){
                        if(!website_O){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_O);   
                            }
                            else{window.open(website_O,'')}
                        }
                    }
                    // _P | 
                    if(e.keyCode == 80){
                        if(!website_P){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_P);   
                            }
                            else{window.open(website_P,'')}
                        }
                    }
                    // _Q | 
                    if(e.keyCode == 81){
                        if(!website_Q){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_Q);   
                            }
                            else{window.open(website_Q,'')}
                        }
                            }            
                    // _R | 
                    if(e.keyCode == 82){
                        if(!website_R){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_R);   
                            }
                            else{window.open(website_R,'')}
                        }
                    }
                    // _S | 
                    if(e.keyCode == 83){
                        if(!website_S){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_S);   
                            }
                            else{window.open(website_S,'')}
                        }
                            }            
                    // _T | 
                    if(e.keyCode == 84){
                        if(!website_T){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_T);   
                            }
                            else{window.open(website_T,'')}
                        }
                    }
                    // _U | 
                    if(e.keyCode == 85){
                        if(!website_U){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_U);   
                            }
                            else{window.open(website_U,'')}
                        }
                    }
                    // _V | 
                    if(e.keyCode == 86){
                        if(!website_V){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_V);   
                            }
                            else{window.open(website_V,'')}
                        }
                    }
                    // _W | 
                    if(e.keyCode == 87){
                        if(!website_W){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_W);   
                            }
                            else{window.open(website_W,'')}
                        }
                    }
                    // _X | 
                    if(e.keyCode == 88){
                        if(!website_X){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_X);   
                            }
                            else{window.open(website_X,'')}
                        }
                    }
                    // _Y | 
                    if(e.keyCode == 89){
                        if(!website_Y){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_Y);   
                            }
                            else{window.open(website_Y,'')}
                        }
                    }
                    // _Z | 
                    if(e.keyCode == 90){
                        if(!website_Z){}
                        else{
                            if(ld_link_override=='no'){
                                window.location.replace(website_Z);   
                            }
                            else{window.open(website_Z,'')}
                        }
                    }
                }
            }
            if(current_display=='settings'){
                // c | 
                if(e.keyCode == 67){
                    focus_check = document.getElementById('name_input');
                    name_input_focused = (document.activeElement == focus_check)
                    // check is name input box is focused, if not, open color settings
                    // note: this is to avoid opening the color settings when someone is inputting their name. 
                    if(name_input_focused==false){
                        $('#color_scheme_change').click()
                    }                
                }            
            }
        }

        // Tilde (~) | 
        if(e.keyCode == 192){
            console.log('tilde!')
            if(current_display=='main'){
                current_display='settings'
            }
            else if(current_display=='settings'){
                current_display='main'
                save_data()
                update_website_names()
            }
            else if(current_display=='search'){
                current_display='settings'
            }
            else if(current_display=='left_dock_config'){
                current_display='main'
                save_data()
                update_website_names()
            }
            else if(current_display=='right_dock_config'){
                current_display='main'
                save_data()
                update_website_names()
            }
            else if(current_display=='color_scheme'){
                current_display='main'
                save_data()
                update_website_names()
            }
            else if(current_display=='web_search'){
                current_display='main'
                save_data()
                update_website_names()
            }
            else if(current_display=='top_dock'){
                current_display='settings'
            }
            setTimeout(function(){
                View_Changer()
            },5)            
        }
    }
}

// Arrow Keyboard Buttons
$('#top_arr_sett').click(function(){
    console.log('top arrow')
    setTimeout(function(){
        document.getElementById("top_arr_sett").style.color = color_accent_2;
        document.getElementById("top_arr_sett").style.border = "1.5px solid ";
        document.getElementById("top_arr_sett").style.borderColor = color_accent_1;
    }, 500);
    document.getElementById("top_arr_sett").style.color = color_accent_1;
    console.log('color_accent_1, log 8: '+ color_accent_1)
})

$('#left_arr_sett').click(function(){
    setTimeout(function(){
        document.getElementById("left_arr_sett").style.color = color_accent_2;
        document.getElementById("left_arr_sett").style.border = "1.5px solid ";
        document.getElementById("left_arr_sett").style.borderColor = color_accent_1;
    }, 500);
    document.getElementById("left_arr_sett").style.color = color_accent_1;
    current_display='left_dock_config'
    View_Changer()
    console.log('left arrow')
})

$('#bottom_arr_sett').click(function(){
    console.log('bottom arrow')
    setTimeout(function(){
        document.getElementById("bottom_arr_sett").style.color = color_accent_2;
        document.getElementById("bottom_arr_sett").style.border = "1.5px solid ";
        document.getElementById("bottom_arr_sett").style.borderColor = color_accent_1;
    }, 500);
    document.getElementById("bottom_arr_sett").style.color = color_accent_1;
    current_display='web_search'
    View_Changer()
    console.log('bottom arrow')
})

$('#right_arr_sett').click(function(){
    setTimeout(function(){
        document.getElementById("right_arr_sett").style.color = color_accent_2;
        document.getElementById("right_arr_sett").style.border = "1.5px solid ";
        document.getElementById("right_arr_sett").style.borderColor = color_accent_1;
    }, 500);
    document.getElementById("right_arr_sett").style.color = color_accent_1;
    current_display='right_dock_config'
    View_Changer()
    crd_hide_all_inputs()
    crd_number_selector()
    $('#nr_1').click()
    console.log('right arrow')
})





function web_search_updater(){
    // search bar 
    $('#ws_1_website_input').val('google')
    $('#ws_1_website_input').prop("disabled", true);
    $('#ws_1_url_input').val('https://www.google.com/search?q=')
    $('#ws_1_url_input').prop("disabled", true);
    $('#ws_2_url_input').val('https://duckduckgo.com/?q=')
    $('#ws_2_url_input').prop("disabled", true);
    $('#ws_2_website_input').val('duckduckgo')
    $('#ws_2_website_input').prop("disabled", true);

    if(ws_3_website==''){
        $('#bd_3').text('[empty]')
    }
    else{
        $('#bd_3').val(ws_3_website)
    }

    if(ws_4_website==''){
        $('#bd_4').text('[empty]')
    }
    else{
        $('#bd_4').val(ws_4_website)
    }

    if(ws_5_website==''){
        $('#bd_5').text('[empty]')
    }
    else{
        $('#bd_5').val(ws_5_website)
    }

    if(ws_6_website==''){
        $('#bd_6').text('[empty]')
    }
    else{
        $('#bd_6').val(ws_6_website)
    }

}


function run_setup__functions(){
    get_data()

    setTimeout(function(){
        update_css_coloring()
        unloadScrollBars()
        Change_Display_Settings()
        DoW()    
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
        setTimeout(function(){
            hamburger_color_changer() 
            page_ready='yes'
        },20)
        
        
    },20)
    // },0)
    
}
run_setup__functions()



document.dispatchEvent(
  new KeyboardEvent("keydown", {
    key: "tab",
    keyCode: 9, // example values.
    code: "KeyTab", // put everything you need in this object.
    which: 9,
    shiftKey: false, // you don't need to include values
    ctrlKey: false,  // if you aren't going to use them.
    metaKey: false   // these are here for example's sake.
  })
);


// refocus_browser ='yes'
// function focus_on_browser_window(){
//     if(refocus_browser=='yes'){
//         refocus_browser='no'
//         chrome.tabs.create({ url: chrome.extension.getURL("home.html") });
//         window.close();
//     }
// }
// focus_on_browser_window()


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// Displays page after everything is loaded
$(document).ready(function(){
    setTimeout(function(){
        
        // $('#Exp_Table').show() // comment out when not testing
        $("#Main").show()
        }, 0)
 })

} // not stranded // closes function that wraps all code. 