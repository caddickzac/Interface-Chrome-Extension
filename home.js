//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

window.onload = function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////
// Set Environmental Variables //
/////////////////////////////////


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

// Contra Animation
contra_rdy='yes' // variable used as a gate so duplicate animations are not simultaneously run

// used for up/down arrow functions within color scheme input
let pickrIsOpen = false;


//////////////////////////////////////////////////////////////////////////////////////////////////////

$('#theme_choice').click(function () {
    window.change_preset_theme();
    window.update_css_coloring();
});

// Submit custom color scheme
$('#color_scheme_custom_submit').click(function () {
    window.hex();
    window.change_preset_theme();
    window.update_css_coloring();
    // window.use_custom_hex(); // Uncomment if needed
});

// Click events for hex buttons (hex_1, hex_2, hex_3)
['#hex_1', '#hex_2', '#hex_3'].forEach(function (selector) {
    $(selector).click(function () {
        window.theme = 'custom';
        $('#theme_choice').val('custom');
    });
});


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// Disable Scroll bars from browser
window.unloadScrollBars = function unloadScrollBars(){
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
window.width_check = function width_check(){
    current_window_width = window.outerWidth;
}

window.top_dock_small_screen_view = function top_dock_small_screen_view(){
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

window.onresize = function(){
    top_dock_small_screen_view()
}

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


const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function timeToDecimalHours(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours + minutes / 60;
}




function showTime(){
    date = new Date();
    year = date.getFullYear(); // 2020
    $('#top_dock_year_label').text(year)
    $('#month_view_year_label').text(year)    
    month = date.getMonth(); // 1-12
    const monthName = monthNames[month];
    $('#month_view_month_label').text(monthName)
    var h = date.getHours(); // 0 - 23
    var h_m = h; // military time
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "am";
    Time_Decimal = timeToDecimalHours('18:02')
    Date_Num = date.getDate() // Date (#)
    DOW = date.getDay()
    weekday_array = Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
    DOW_Text = weekday_array[DOW]

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

    present_timeline_width_adj = ((m+(s/60))*11.11)/60
    present_timeline_width_input = '-'+present_timeline_width_adj+'%'
    $('#present_moving_timeline').css('margin-left', present_timeline_width_input)
    present_timeline_tick_time_labeler() // top dock: present view: tick time labels
    
    h = (h < 10) ? h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    $('#pct_of_day_tracker_time').text(h+':'+m)
    $('#pct_of_day_tracker_time_meridies').text(session.toUpperCase())

    $('#pct_of_day_tracker_time_early_only').text(h+':'+m)
    $('#pct_of_day_tracker_time_early_only_meridies').text(session.toUpperCase())
    
    var time = h + ":" + m; // + " " + session;
    var time_with_sec = h + ":" + m + ":" + s;// + " " + session;
    // document.getElementById("MyClockDisplay").innerText = time;
    $('#MyClockDisplay').text(time)

    $('#present_time_span').text(time_with_sec)
    $('#present_time_meridies_span').text(session)

    $('#top_dock_year_label').text(year)
    $('#month_view_year_label').text(year)


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
    // New Day Function
    if(h==0 & m==0 & s>0 && s<10){ // run at midnight
        new_day_clock_functions()
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

top_dock_configure_time_display()

focus_check = ''
name_input_focused = ''
current_display_temp=''




/////////////////////////////
/////////////////////////////
// "Main Display" Settings //
/////////////////////////////
/////////////////////////////

///////////////////
// Initial Setup //
///////////////////

window.sd_settings_setup = function sd_settings_setup(){
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

window.mt_settings_setup = function mt_settings_setup(){
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

window.sg_settings_setup = function sg_settings_setup(){
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

window.ld_link_override_settings_setup = function ld_link_override_settings_setup(){
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
window.Change_Display_Settings = function Change_Display_Settings(){

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

// Close Top Dock Input Window
$('#top_dock_input_finished').click(function(){
    save_data()
    current_display='settings'
    View_Changer()
    // Display_Main_Screen()
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
window.ldi_case_toggle = function ldi_case_toggle(){
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

window.ldi_case_input_toggle = function ldi_case_input_toggle(){
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


// this code creates "listening" function that runs when window size is changed. 
document.getElementsByTagName("BODY")[0].onresize = function(){top_dock_resize_events()};


// Top Dock Timeline
function timeline_tracker(){

    // view granularity: day
    $('#pct_of_day_tracker').css('width', (pct_of_day+'%'))
    $('#pct_of_day_tracker').css('max-width', (pct_of_day+'%'))
    $('#pct_of_day_tracker').css('min-width', (pct_of_day+'%'))

    $('#pct_of_day_tracker_time_early_div').css('margin-left', (pct_of_day+'%'))
    // $('#pct_of_day_tracker_time_early_only_meridies').css('margin-left', (pct_of_day+5+'%'))
    // console.log('pct_of_day:' + pct_of_day)

    // view granularity: week
    $('#week_view_time_tracker_circle').css('margin-left', (pct_of_day+'%'))

    $('#week_view_time_tracker_line').css('width', (pct_of_day+'%'))
    $('#week_view_time_tracker_line').css('max-width', (pct_of_day+'%'))
    $('#week_view_time_tracker_line').css('min-width', (pct_of_day+'%'))
    $('#week_view_time_tracker_line_background').css('width', (pct_of_day+'%'))
    $('#week_view_time_tracker_line_background').css('max-width', (pct_of_day+'%'))
    $('#week_view_time_tracker_line_background').css('min-width', (pct_of_day+'%'))

    
    
}


// month labeler
function month_labeler(){
    Month_List = ['January', 'February', 'March', ' April', 'May', 'June', 'Juy', 'August', 'September', 'October', 'November', 'December']
    temp_month = Month_List[month]
    $('#month_view_month_label').text(temp_month)
}

// present moving timeline
// relabel tick marks based on current time

function time_fixer(input){
    // input = hour (integer)
    h = input
    
    if(h>=24){
        h=h-24
    }
    else if(h>=12){
        h=h-12
    }
    if(h==12 || h==0){
        h=12
    }
    // return(h)
    h_plus = h+':00'
    return(h_plus)
}

function present_timeline_tick_time_labeler(){
    var h2 = date.getHours();

    if(h2==0){
        var pmt_0_temp =11 
    }
    else{
        var pmt_0_temp = h2-1
    }
    $('#pmt_0_text').text(time_fixer(pmt_0_temp))
    $('#pmt_1_text').text(time_fixer(h2))
    $('#pmt_2_text').text(time_fixer(h2+1))
    $('#pmt_3_text').text(time_fixer(h2+2))
    $('#pmt_4_text').text(time_fixer(h2+3))
    $('#pmt_5_text').text(time_fixer(h2+4))
    $('#pmt_6_text').text(time_fixer(h2+5))
    $('#pmt_7_text').text(time_fixer(h2+6))
    $('#pmt_8_text').text(time_fixer(h2+7))
    $('#pmt_9_text').text(time_fixer(h2+8))
}

function update_date_labels_on_new_day(){
    //zcc
    $('#top_dock_date_DoW').text() // 
    $('#top_dock_date_MDY').text()
    $('#present_view_date_DoW').text() // 
    $('#present_view_date_MDY').text()

}



// Top Dock: Week View header date range

// zccc
function week_view_header_date_change(){
    check_if_date_crosses_two_months()
    if(week_date_range_crosses_two_months=="yes_current_future"){
        var output = month_array_abr[month] + " " + getSunday() + " – " + month_array_abr[month+1] + " " + getSaturday()
    }
    else if(week_date_range_crosses_two_months=='yes_past_current'){
        var output = month_array_abr[month-1] + " " + getSunday() + " – " + month_array_abr[month] + " " + getSaturday()
    }
    else{
        var output = month_array_abr[month] + " " + getSunday() + " – " + getSaturday()
    }

    $('#top_dock_date_DoW_range').text(output)
}

/////////////////////////////////////////////////


////////////////////////
//  Hot Key commands  //
////////////////////////

page_ready = 'no' // initially lock things until page loads. 
control_mod = 'no' // inital setting (used for blocking commands when pressed)
shift_mod = 'no' // inital setting (used for blocking commands when pressed)
disable_arrow_keys = 'no' // inital setting. values: 'yes, no'
paused='no'

window.disable_arrow_keys_function = function disable_arrow_keys_function() {
    if (document.hasFocus() === false) {
        disable_arrow_keys = 'no';
        console.log('disable_arrow_keys: no');
    }
};

// Key press comands
document.body.onkeydown = function(e){

    // When control is held, create modifer that disable other single key commands
    if(e.keyCode == 17){
        control_mod = 'yes'
        console.log('control_mod: yes')
    }

    // When shift is held, create modifer that enables combination key commands
    if(e.keyCode == 16){
        shift_mod = 'yes';
        console.log('control_mod: yes');
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

        active = document.activeElement; // what part of the interface is active

        // top arrow key command
        if(e.keyCode == 38){
            // ✅ Don't interfere if Pickr is open
            if ($('.pcr-app').is(':visible')) {
                return;
            }
            if (!$(e.target).is('input, textarea, select')) {
                e.preventDefault();
            }

            setTimeout(function(){
                change_preset_theme()
                update_css_coloring()
            }, 10);             
            console.log('bottom arrow key')
        }

        // bottom arrow key command
        if(e.keyCode == 40){
            // ✅ Don't interfere if Pickr is open
            if ($('.pcr-app').is(':visible')) {
                return;
            }
            if (!$(e.target).is('input, textarea, select')) {
                e.preventDefault();
            }

            setTimeout(function(){
                change_preset_theme()
                update_css_coloring()
            }, 10);             
            console.log('bottom arrow key')
        }
    }
    else if(current_display=='left_dock_config'){   
    }
    else if(current_display=='right_dock_config'){
        // 1 | 
        if(e.keyCode == 49){
            right_dock_input_focus_decision()
            if(rdi_focus_status=='open'){
                $('#nr_1').click()
            }
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
    else if(current_display=='top_dock'){
        if(current_top_dock_tool=='none'){
            if(e.keyCode == 37){ // arrow left
                top_dock_view_array_number_change_down()
                top_dock_view_changer()
            }
            if(e.keyCode == 39){ // arrow right
                top_dock_view_array_number_change_up()
                top_dock_view_changer()
            }
            if(e.keyCode == 68){ // d |
                // show day calendar view
                current_top_dock_module='day'
                top_dock_module_changer()
            }
            if(e.keyCode == 77){ // m | 
                // show month calendar view
                current_top_dock_module='month'
                top_dock_module_changer()
            }
            if(e.keyCode == 80){ // p |
                // show present calendar view
                current_top_dock_module='present'
                top_dock_module_changer()
            }
            if(e.keyCode == 87){ // w | 
                // show week calendar view
                current_top_dock_module='week'
                top_dock_module_changer()
            }
            if(e.keyCode == 89){ // y | 
                // show year calendar view
                current_top_dock_module='year'
                top_dock_module_changer()
            } 
        }
    }
}



// Key release commands
document.body.onkeyup = function(e){
    if(page_ready=='yes'){ // blocks any keys from working if 'no'

        if(current_display=='left_dock_config'){
            text_input_grey_out_function()

            const letter_key = e.keyCode;
    
            // A–Z key codes
            if (letter_key >= 65 && letter_key <= 90) {
                const letter = String.fromCharCode(letter_key);
                left_dock_input_focus_decision();

                if (ldi_focus_status === 'open') {
                    if (ldi_case === 'lower') {
                        $('#ld_' + letter.toLowerCase() + '_label_input').focus();
                    } else if (ldi_case === 'upper') {
                        $('#ld_' + letter.toUpperCase() + '_label_input').focus();
                    }
                }
            }
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
            if(current_display=='left_dock_config'){
                left_dock_input_focus_decision()
                if(ldi_focus_status=='open'){
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
                }
            }
            else{
                shift_mod = 'no';
                console.log('shift_mod: no');
            }

            // setTimeout(function(){
            //      shift_mod = 'no'
            //      console.log('shift_mod: no')
            // }, 25);        
        }

        // capslock
        if(e.keyCode == 20){
            if(current_display=='left_dock_config'){
                left_dock_input_focus_decision()
                if(ldi_focus_status=='open'){
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
                }
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
            if(current_display=='search'){
                if($('#search_bar').val()==""){
                }
                else{
                    Google_Search()
                    'searching internet'
                }
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
            else if(current_display=='top_dock_config'){
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
                current_display='top_dock'
                View_Changer()
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
                    if(current_display=='top_dock'){
                    }
                    else{
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
                    if(current_display=='top_dock'){
                    }
                    else{
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
                    if(current_display=='top_dock'){
                    }
                    else{
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
                    if(current_display=='top_dock'){
                    }
                    else{
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
                    if(current_display=='top_dock'){
                    }
                    else{
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
                        contra_animation_loop() // easter egg animation
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
            else if(current_display=='top_dock_config'){
                current_display='main'
                save_data()
                update_website_names()
            }
            else if(current_display=='color_scheme'){
                current_display='main'
                save_data()
                update_website_names()
                web_search_updater()
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


// $(document).on('click', '#top_dock_view_header_year', function() {
//     current_top_dock_module = 'year';
//     top_dock_module_changer();
//     console.log('clicked top dock: year');
// });


$('#top_dock_view_header_year').click(function(){
    current_top_dock_module='year'
    top_dock_module_changer()
    console.log('clicked top dock: year')
})


$('#top_dock_view_header_month').click(function(){
    current_top_dock_module='month'
    top_dock_module_changer()
})

$('#top_dock_view_header_week').click(function(){
    current_top_dock_module='week'
    top_dock_module_changer()
})

$('#top_dock_view_header_day').click(function(){
    current_top_dock_module='day'
    top_dock_module_changer()
})

$('#top_dock_view_header_present').click(function(){
    current_top_dock_module='present'
    top_dock_module_changer()
})

// Arrow Keyboard Buttons
$('#top_arr_sett').click(function(){
    console.log('top arrow')
    setTimeout(function(){
        document.getElementById("top_arr_sett").style.color = color_accent_2;
        document.getElementById("top_arr_sett").style.border = "1.5px solid ";
        document.getElementById("top_arr_sett").style.borderColor = color_accent_1;
    }, 500);
    document.getElementById("top_arr_sett").style.color = color_accent_1;
    current_display='top_dock_config'
    View_Changer()
    // console.log('color_accent_1, log 8: '+ color_accent_1)
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


function run_setup__functions(){
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
        initializeColorPickers(color_background, color_accent_1, color_accent_2)
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