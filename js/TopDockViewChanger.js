// top dock variables
top_dock_mt='no'
// top_dock_view_array_number = 0
top_dock_view_array = ['present', 'day', 'week', 'month', 'year']


// top dock settings input
window.update_top_dock_input_settings = function update_top_dock_input_settings(){
    // default calendar view
    if($('#top_dock_calendar_view_choice').val()=='last open'){
        top_dock_calendar_view_choice = 'last open'
    }
    else if($('#top_dock_calendar_view_choice').val()=='present'){
        top_dock_calendar_view_choice = 'present'
    }
    else if($('#top_dock_calendar_view_choice').val()=='day'){
        top_dock_calendar_view_choice = 'day'
    }
    else if($('#top_dock_calendar_view_choice').val()=='week'){
        top_dock_calendar_view_choice = 'week'
    }
    else if($('#top_dock_calendar_view_choice').val()=='month'){
        top_dock_calendar_view_choice = 'month'
    }
    else if($('#top_dock_calendar_view_choice').val()=='year'){
        top_dock_calendar_view_choice = 'year'
    }

    // default home screen
    if($('#default_home_screen_view_choice').val()=='clock'){
        default_home_screen = 'clock'
    }
    else if($('#default_home_screen_view_choice').val()=='calendar'){
        default_home_screen = 'calendar'
    }
    else if($('#default_home_screen_view_choice').val()=='quick launch'){
        default_home_screen = 'quick launch'
    }

    // top dock hotkey settings
    if($('#top_dock_hotkey_choice').val()=='clock'){
        top_dock_hotkey_choice = 'calendar'
    }
    else if($('#top_dock_hotkey_choice').val()=='calendar'){
        top_dock_hotkey_choice = 'left & right docks'
    }

}


window.update_top_dock_view_array_number = function update_top_dock_view_array_number(){
    if(top_dock_calendar_view_choice=='present'){
        top_dock_view_array_number=0
    }
    else if(top_dock_calendar_view_choice=='day'){
        top_dock_view_array_number=1
    }
    else if(top_dock_calendar_view_choice=='week'){
        top_dock_view_array_number=2
    }
    else if(top_dock_calendar_view_choice=='month'){
        top_dock_view_array_number=3
    }
    else if(top_dock_calendar_view_choice=='year'){
        top_dock_view_array_number=4
    }
}


///////////////////////////////////////////////////////////



// Header formatting
$.fn.td_view_item_selected = function(){
    return this.each(function(e){
        $(this).css({
            'color': color_accent_2,
            'font-weight': 'bold',
            'font-size': '1.3em',
            'top': '-5px',
            'left':'-2px',
            'opacity': 1,
            'animation': 'fadeIn ease .05s'
        })
    })
}
$.fn.td_view_item_not_selected_close = function(){
    return this.each(function(e){
        $(this).css({
            'color': color_accent_2,
            'font-weight': 'normal',
            'font-size': '1em',
            'top': '0px',
            'left':'0px',
            'opacity': .6,
            'animation': 'fadeIn ease .05s'
        })
    })
}
$.fn.td_view_item_not_selected_distant = function(){
    return this.each(function(e){
        $(this).css({
            'color': color_accent_2,
            'font-weight': 'normal',
            'font-size': '1em',
            'opacity': .3,
            'left':'0px',
            'top': '0px',
            'animation': 'fadeIn ease .05s'
        })
    })
}

// top dock width check
window.width_check = function width_check(){
    current_window_width = window.outerWidth;
    console.log("current_window_width: ", current_window_width)
}

window.height_check = function height_check(){
    current_window_height = window.outerHeight;
}

// top dock day view
window.top_dock_small_screen_view = function top_dock_small_screen_view(){
    width_check()
    if(current_window_width <590){
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



window.main_display_screen_window_scaling = function main_display_screen_window_scaling(){
    height_check()

    if(current_window_height<250){
        $('#screen1').css('padding-top', '0%')
    }
    else if(current_window_height<300){
        $('#screen1').css('padding-top', '1%')
    }
    else if(current_window_height<350){
        $('#screen1').css('padding-top', '2%')
    }
    else if(current_window_height<400){
        $('#screen1').css('padding-top', '3%')
        $('#Clock_Div').css('padding-top', '0%')
    }
    else if(current_window_height<450){
        $('#screen1').css('padding-top', '4%')
        $('#Clock_Div').css('padding-top', '0%')
    }
    else if(current_window_height<500){
        $('#screen1').css('padding-top', '5%')
        $('#Clock_Div').css('padding-top', '0%')
    }
    else if(current_window_height<550){
        $('#screen1').css('padding-top', '6%')
        $('#Clock_Div').css('padding-top', '0%')
    }
    else if(current_window_height<600){
        $('#screen1').css('padding-top', '7%')
        $('#Clock_Div').css('padding-top', '0%')
    }
    else if(current_window_height<650){
        $('#screen1').css('padding-top', '7%')
        $('#Clock_Div').css('padding-top', '0%')
    }
    else if(current_window_height<700){
        $('#screen1').css('padding-top', '8%')
        $('#Clock_Div').css('padding-top', '1%')
    }
    else if(current_window_height<750){
        $('#screen1').css('padding-top', '10%')
        $('#Clock_Div').css('padding-top', '1%')
    }
    else if(current_window_height<800){
        $('#screen1').css('padding-top', '12%')
        $('#Clock_Div').css('padding-top', '3%')
    }
    else if(current_window_height<850){
        $('#screen1').css('padding-top', '13%')
        $('#Clock_Div').css('padding-top', '3%')
    }
    else{
        $('#screen1').css('padding-top', '14%')
        $('#Clock_Div').css('padding-top', '4%')
    }
}


window.top_dock_week_view_resize_rows = function top_dock_week_view_resize_rows(input){
    var input = input
    $('#week_view_sunday').css('height', input)
    $('#week_view_monday').css('height', input)
    $('#week_view_tuesday').css('height', input)
    $('#week_view_wednesday').css('height', input)
    $('#week_view_thursday').css('height', input)
    $('#week_view_friday').css('height', input)
    $('#week_view_saturday').css('height', input)
}



window.top_dock_week_view_resize_minor_lines = function top_dock_week_view_resize_minor_lines(input){
    var input = input
    $('#week_view_1').css('height', input)
    $('#week_view_2').css('height', input)
    $('#week_view_3').css('height', input)
    $('#week_view_4').css('height', input)
    $('#week_view_5').css('height', input)
    $('#week_view_6').css('height', input)
    $('#week_view_7').css('height', input)
    $('#week_view_8').css('height', input)
    $('#week_view_9').css('height', input)
    $('#week_view_10').css('height', input)
    $('#week_view_11').css('height', input)
    $('#week_view_12').css('height', input)
    $('#week_view_13').css('height', input)
    $('#week_view_14').css('height', input)
    $('#week_view_15').css('height', input)
    $('#week_view_16').css('height', input)
    $('#week_view_17').css('height', input)
    $('#week_view_18').css('height', input)
    $('#week_view_19').css('height', input)
    $('#week_view_20').css('height', input)
    $('#week_view_21').css('height', input)
    $('#week_view_22').css('height', input)
    $('#week_view_23').css('height', input)
    $('#week_view_24').css('height', input)
}




// zc
window.top_dock_week_view_resize = function top_dock_week_view_resize(){
    height_check()
    // zc
    if(current_window_height<640){
        top_dock_week_view_row_resize_input=44
        top_dock_week_view_resize_rows('44px')
        top_dock_week_view_resize_minor_lines('316px') // formula for this value (x) is uses above value (y); x=y*7+8
        hide_week_date_text()
    }
    else if(current_window_height<740){
        top_dock_week_view_row_resize_input=65
        top_dock_week_view_resize_rows('65px')
        top_dock_week_view_resize_minor_lines('463px') // formula for this value (x) is uses above value (y); x=y*7+8
        hide_week_date_text()
    }
    else if(current_window_height<840){
        top_dock_week_view_row_resize_input=75
        top_dock_week_view_resize_rows('75px')
        top_dock_week_view_resize_minor_lines('533px') // formula for this value (x) is uses above value (y); x=y*7+8
        show_week_date_text()
    }
    else if(current_window_height<920){
        top_dock_week_view_row_resize_input=90
        top_dock_week_view_resize_rows('90px')
        top_dock_week_view_resize_minor_lines('638px') // formula for this value (x) is uses above value (y); x=y*7+8
        show_week_date_text()
    }
    else{
        top_dock_week_view_row_resize_input=100
        top_dock_week_view_resize_rows('100px')
        top_dock_week_view_resize_minor_lines('708px')
        show_week_date_text()
    }
    
}


window.top_dock_weekview_resize_time_tracker = function top_dock_weekview_resize_time_tracker(){
    $('#week_view_time_tracker').css('margin-top', DOW*top_dock_week_view_row_resize_input)
    $('#week_view_time_tracker_line_background').css('height', top_dock_week_view_row_resize_input.toString().concat('px'))
    $('#week_view_time_tracker_line').css('height', top_dock_week_view_row_resize_input.toString().concat('px'))

}

window.top_dock_week_view_resize_events = function top_dock_week_view_resize_events(){

    // monday
    // $('#wv_mon_event_1').css('margin-top', top_dock_week_view_row_resize_input.toString().concat('px'))

    // tuesday
    // $('#wv_tue_event_1').css('margin-top', (top_dock_week_view_row_resize_input*2).toString().concat('px'))

    // wednesday
    // $('#wv_wed_event_1').css('margin-top', (top_dock_week_view_row_resize_input*3).toString().concat('px'))

    // thursday
    // $('#wv_thu_event_1').css('margin-top', (top_dock_week_view_row_resize_input*4).toString().concat('px'))

    // friday
    // $('#wv_fri_event_1').css('margin-top', (top_dock_week_view_row_resize_input*5).toString().concat('px'))
    // $('#wv_fri_event_2').css('margin-top', (top_dock_week_view_row_resize_input*5).toString().concat('px'))
}


// 

window.top_dock_month_view_resize_row_headers = function top_dock_month_view_resize_row_headers(input){
    var input = input
    $('#td_month_row_1_sub').css('height', input)
    $('#td_month_row_2_sub').css('height', input)
    $('#td_month_row_3_sub').css('height', input)
    $('#td_month_row_4_sub').css('height', input)
    $('#td_month_row_5_sub').css('height', input)
    $('#td_month_row_6_sub').css('height', input)
}

window.top_dock_month_view_resize_rows = function top_dock_month_view_resize_rows(input){
    var input = input
    $('#td_month_cell_1').css('min-height', input)
    $('#td_month_cell_2').css('min-height', input)
    $('#td_month_cell_3').css('min-height', input)
    $('#td_month_cell_4').css('min-height', input)
    $('#td_month_cell_5').css('min-height', input)
    $('#td_month_cell_6').css('min-height', input)
    $('#td_month_cell_7').css('min-height', input)
    $('#td_month_cell_8').css('min-height', input)
    $('#td_month_cell_9').css('min-height', input)
    $('#td_month_cell_10').css('min-height', input)
    $('#td_month_cell_11').css('min-height', input)
    $('#td_month_cell_12').css('min-height', input)
    $('#td_month_cell_13').css('min-height', input)
    $('#td_month_cell_14').css('min-height', input)
    $('#td_month_cell_15').css('min-height', input)
    $('#td_month_cell_16').css('min-height', input)
    $('#td_month_cell_17').css('min-height', input)
    $('#td_month_cell_18').css('min-height', input)
    $('#td_month_cell_19').css('min-height', input)
    $('#td_month_cell_20').css('min-height', input)
    $('#td_month_cell_21').css('min-height', input)
    $('#td_month_cell_22').css('min-height', input)
    $('#td_month_cell_23').css('min-height', input)
    $('#td_month_cell_24').css('min-height', input)
    $('#td_month_cell_25').css('min-height', input)
    $('#td_month_cell_26').css('min-height', input)
    $('#td_month_cell_27').css('min-height', input)
    $('#td_month_cell_28').css('min-height', input)
    $('#td_month_cell_29').css('min-height', input)
    $('#td_month_cell_30').css('min-height', input)
    $('#td_month_cell_31').css('min-height', input)
    $('#td_month_cell_32').css('min-height', input)
    $('#td_month_cell_33').css('min-height', input)
    $('#td_month_cell_34').css('min-height', input)
    $('#td_month_cell_35').css('min-height', input)
    $('#td_month_cell_36').css('min-height', input)
    $('#td_month_cell_37').css('min-height', input)
    $('#td_month_cell_38').css('min-height', input)
    $('#td_month_cell_39').css('min-height', input)
    $('#td_month_cell_40').css('min-height', input)
    $('#td_month_cell_41').css('min-height', input)
    $('#td_month_cell_42').css('min-height', input)
}


window.top_dock_month_view_resize = function top_dock_month_view_resize(){
    // zc
    height_check()
    if(current_week_span<6){
        if(current_window_height<470){
            top_dock_month_view_resize_row_headers('44px')
            top_dock_month_view_resize_rows('44px')
        }
        else if(current_window_height<520){
            top_dock_month_view_resize_row_headers('50px')
            top_dock_month_view_resize_rows('50px')
        }
        else if(current_window_height<570){
            top_dock_month_view_resize_row_headers('60px')
            top_dock_month_view_resize_rows('60px')
        }
        else if(current_window_height<620){
            top_dock_month_view_resize_row_headers('70px')
            top_dock_month_view_resize_rows('70px')
        }
        else if(current_window_height<670){
            top_dock_month_view_resize_row_headers('80px')
            top_dock_month_view_resize_rows('80px')
        }
        else if(current_window_height<720){
            top_dock_month_view_resize_row_headers('90px')
            top_dock_month_view_resize_rows('90px')
        }
        else if(current_window_height<770){
            top_dock_month_view_resize_row_headers('100px')
            top_dock_month_view_resize_rows('100px')
        }
        else if(current_window_height<820){
            top_dock_month_view_resize_row_headers('110px')
            top_dock_month_view_resize_rows('110px')
        }
        else if(current_window_height<870){
            top_dock_month_view_resize_row_headers('120px')
            top_dock_month_view_resize_rows('120px')
        }
        else if(current_window_height<920){
            top_dock_month_view_resize_row_headers('130px')
            top_dock_month_view_resize_rows('120px')
        }
        else if(current_window_height<970){
            top_dock_month_view_resize_row_headers('140px')
            top_dock_month_view_resize_rows('120px')
        }
        else{
            top_dock_month_view_resize_row_headers('150px')
            top_dock_month_view_resize_rows('120px')  
        }

    }
    else if(current_week_span=6){
        if(current_window_height<470){
            top_dock_month_view_resize_row_headers('24px')
            top_dock_month_view_resize_rows('24px')
        }
        else if(current_window_height<520){
            top_dock_month_view_resize_row_headers('30px')
            top_dock_month_view_resize_rows('30px')
        }
        else if(current_window_height<570){
            top_dock_month_view_resize_row_headers('40px')
            top_dock_month_view_resize_rows('40px')
        }
        else if(current_window_height<620){
            top_dock_month_view_resize_row_headers('50px')
            top_dock_month_view_resize_rows('50px')
        }
        else if(current_window_height<670){ // started here (drop by 10)
            top_dock_month_view_resize_row_headers('60px')
            top_dock_month_view_resize_rows('60px')
        }
        else if(current_window_height<720){
            top_dock_month_view_resize_row_headers('70px')
            top_dock_month_view_resize_rows('70px')
        }
        else if(current_window_height<770){
            top_dock_month_view_resize_row_headers('80px')
            top_dock_month_view_resize_rows('80px')
        }
        else if(current_window_height<820){
            top_dock_month_view_resize_row_headers('85px')
            top_dock_month_view_resize_rows('85px')
        }
        else if(current_window_height<870){
            top_dock_month_view_resize_row_headers('95px')
            top_dock_month_view_resize_rows('95px')
        }
        else if(current_window_height<920){
            top_dock_month_view_resize_row_headers('105px')
            top_dock_month_view_resize_rows('110px')
        }
        else if(current_window_height<970){
            top_dock_month_view_resize_row_headers('115px')
            top_dock_month_view_resize_rows('120px')
        }
        else{
            top_dock_month_view_resize_row_headers('120px')
            top_dock_month_view_resize_rows('120px')  
        }

    }
    

}


window.top_dock_week_view_window_scaling = function top_dock_week_view_window_scaling(){
    width_check()
    if(current_window_width <590){
        $('#top_dock_week_ruler').hide()
    }
    else if(current_window_width < 700){
        $('#top_dock_week_ruler').css('font-size','.9em')
        $('#top_dock_week_ruler').show()
    }
    else if(current_window_width < 1000){
        week_view_hide_meridies_top_dock()
        $('#top_dock_week_ruler').show()
    }
    else if(current_window_width < 1100){
        $('#top_dock_week_ruler').css('font-size','.97em')
        $('#top_dock_week_ruler').show()
    }
    else{
        week_view_show_meridies_top_dock()
        $('#top_dock_week_ruler').show()
    }
}

window.hide_top_dock_modules = function hide_top_dock_modules(){
    $('#top_dock_year').hide()
    $('#top_dock_month').hide()
    $('#top_dock_week').hide()
    $('#top_dock_day').hide()
    $('#top_dock_present').hide()
}

window.top_dock_module_changer = function top_dock_module_changer(){
    hide_top_dock_modules()
    if(current_top_dock_module=='present'){
        // top_dock_view_array_number=0
        $('#top_dock_present').show()
        $('#top_dock_view_header_present').td_view_item_selected()
        $('#top_dock_view_header_day').td_view_item_not_selected_close() 
        $('#top_dock_view_header_week').td_view_item_not_selected_distant() 
        $('#top_dock_view_header_month').td_view_item_not_selected_distant()
        $('#top_dock_view_header_year').td_view_item_not_selected_distant()
    }
    else if(current_top_dock_module=='day'){
        // top_dock_view_array_number=1
        $('#top_dock_day').show()
        $('#top_dock_view_header_present').td_view_item_not_selected_close() // zc
        $('#top_dock_view_header_day').td_view_item_selected() 
        $('#top_dock_view_header_week').td_view_item_not_selected_close() 
        $('#top_dock_view_header_month').td_view_item_not_selected_distant()
        $('#top_dock_view_header_year').td_view_item_not_selected_distant()
    }
    else if(current_top_dock_module=='week'){
        // top_dock_view_array_number=2
        $('#top_dock_week').show()
        $('#top_dock_view_header_present').td_view_item_not_selected_distant()
        $('#top_dock_view_header_day').td_view_item_not_selected_close() 
        $('#top_dock_view_header_week').td_view_item_selected() 
        $('#top_dock_view_header_month').td_view_item_not_selected_close()
        $('#top_dock_view_header_year').td_view_item_not_selected_distant()
    }
    else if(current_top_dock_module=='month'){
        // top_dock_view_array_number=3
        current_top_dock_module='month'
        $('#top_dock_month').show()
        $('#top_dock_view_header_present').td_view_item_not_selected_distant()
        $('#top_dock_view_header_day').td_view_item_not_selected_distant() 
        $('#top_dock_view_header_week').td_view_item_not_selected_close() 
        $('#top_dock_view_header_month').td_view_item_selected()
        $('#top_dock_view_header_year').td_view_item_not_selected_close()
    }
    else if(current_top_dock_module=='year'){
        // top_dock_view_array_number=4
        current_top_dock_module='year'
        $('#top_dock_year').show()
        $('#top_dock_view_header_present').td_view_item_not_selected_distant()
        $('#top_dock_view_header_day').td_view_item_not_selected_distant() 
        $('#top_dock_view_header_week').td_view_item_not_selected_distant() 
        $('#top_dock_view_header_month').td_view_item_not_selected_close()
        $('#top_dock_view_header_year').td_view_item_selected()
    }
    // console.log('top dock view changed')
    // console.log('4. current_top_dock_module: ', current_top_dock_module)
}

window.top_dock_view_array_number_change_up = function top_dock_view_array_number_change_up(){
    if(top_dock_view_array_number<4){
        top_dock_view_array_number+=1
    }
    else{
        top_dock_view_array_number=0
    }
}

window.top_dock_view_array_number_change_down = function top_dock_view_array_number_change_down(){
    if(top_dock_view_array_number>0)
        top_dock_view_array_number-=1
    else{
        top_dock_view_array_number=4
    }
}

window.top_dock_view_changer = function top_dock_view_changer(){
    current_top_dock_module = top_dock_view_array[top_dock_view_array_number]
    hide_top_dock_modules()
    top_dock_module_changer()    
}


window.top_dock_resize_events = function top_dock_resize_events(){
    top_dock_month_view_resize() // window scaling for top dock
    top_dock_week_view_resize() // window scaling
    top_dock_week_view_resize_events()
    top_dock_weekview_resize_time_tracker()
    top_dock_small_screen_view()
    top_dock_week_view_window_scaling()
    top_dock_week_view_resize()
    top_dock_week_view_resize_events()
}


// Top Dock Timeline
window.timeline_tracker = function timeline_tracker(){

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
window.month_labeler = function month_labeler(){
    Month_List = ['January', 'February', 'March', ' April', 'May', 'June', 'Juy', 'August', 'September', 'October', 'November', 'December']
    temp_month = Month_List[month]
    $('#month_view_month_label').text(temp_month)
}

// present moving timeline
// relabel tick marks based on current time

window.time_fixer = function time_fixer(input){
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

window.present_timeline_tick_time_labeler = function present_timeline_tick_time_labeler(){
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

window.update_date_labels_on_new_day = function update_date_labels_on_new_day(){
    //zcc
    $('#top_dock_date_DoW').text() // 
    $('#top_dock_date_MDY').text()
    $('#present_view_date_DoW').text() // 
    $('#present_view_date_MDY').text()

}



// Top Dock: Week View header date range
window.week_view_header_date_change = function week_view_header_date_change() {
    const today = new Date(); // You can replace this with a selected date if needed
    const dow = today.getDay(); // 0 = Sunday

    const sunday = new Date(today);
    sunday.setDate(today.getDate() - dow);

    const saturday = new Date(today);
    saturday.setDate(today.getDate() + (6 - dow));

    const sundayMonth = sunday.getMonth();
    const saturdayMonth = saturday.getMonth();

    const sundayDay = sunday.getDate();
    const saturdayDay = saturday.getDate();

    let output = '';

    if (sundayMonth !== saturdayMonth) {
        // Week crosses into a new month
        output = `${month_array_abr[sundayMonth]} ${sundayDay} – ${month_array_abr[saturdayMonth]} ${saturdayDay}`;
    } else {
        // Same month: only show month once
        output = `${month_array_abr[sundayMonth]} ${sundayDay} – ${saturdayDay}`;
    }

    $('#top_dock_date_DoW_range').text(output);
};


// abstraction for week view, day highlight 
$.fn.highlight_wk_day = function(){
    return this.each(function(e){
        $(this).css({
            'font-size': '1.7em',
            'color': color_accent_2,
            'font-weight': 'bold'
        })
    })
}

$.fn.no_highlight_wk_day = function(){
    return this.each(function(e){
        $(this).css({
            'font-size': '1em',
            'color': color_accent_1,
            'font-weight': 'normal'
        })
    })
}

// abstraction for week view, day highlight 
$.fn.highlight_wk_day_date = function(){
    return this.each(function(e){
        $(this).css({
            'position': 'relative',
            'margin': '0px',
            'top': '0px',
            'font-size': '1.3em',
            'background-color': color_accent_2,
            'padding-left': '2px',
            'padding-right': '2px',
            'color': color_background,
            'font-weight': 'bold',
            'height': '27px',
        })
    })
}

$.fn.no_highlight_wk_day_date = function(){
    return this.each(function(e){
        $(this).css({
            'font-size': '1em',
            'background-color': color_background,
            'color': color_accent_1,
            'font-weight': 'normal'
        })
    })
}

window.hide_week_date_text = function hide_week_date_text(){
    $('#week_view_sunday_date_text').hide()
    $('#week_view_monday_date_text').hide()
    $('#week_view_tuesday_date_text').hide()
    $('#week_view_wednesday_date_text').hide()
    $('#week_view_thursday_date_text').hide()
    $('#week_view_friday_date_text').hide()
    $('#week_view_saturday_date_text').hide()
}

window.show_week_date_text = function show_week_date_text(){
    $('#week_view_sunday_date_text').show()
    $('#week_view_monday_date_text').show()
    $('#week_view_tuesday_date_text').show()
    $('#week_view_wednesday_date_text').show()
    $('#week_view_thursday_date_text').show()
    $('#week_view_friday_date_text').show()
    $('#week_view_saturday_date_text').show()
}


window.week_view_timeline_shift_reset = function week_view_timeline_shift_reset(){
    // day of week text
    $('#week_view_sunday_text').no_highlight_wk_day()
    $('#week_view_monday_text').no_highlight_wk_day()
    $('#week_view_tuesday_text').no_highlight_wk_day()
    $('#week_view_wednesday_text').no_highlight_wk_day()
    $('#week_view_thursday_text').no_highlight_wk_day()
    $('#week_view_friday_text').no_highlight_wk_day()
    $('#week_view_saturday_text').no_highlight_wk_day()
    // date text
    $('#week_view_sunday_date_text').no_highlight_wk_day_date()
    $('#week_view_monday_date_text').no_highlight_wk_day_date()
    $('#week_view_tuesday_date_text').no_highlight_wk_day_date()
    $('#week_view_wednesday_date_text').no_highlight_wk_day_date()
    $('#week_view_thursday_date_text').no_highlight_wk_day_date()
    $('#week_view_friday_date_text').no_highlight_wk_day_date()
    $('#week_view_saturday_date_text').no_highlight_wk_day_date()

}

window.week_view_timeline_shift_by_DOW = function week_view_timeline_shift_by_DOW(){
    // info: move 'week view' time tracker up and down to the 
    // right day of week, based on date

    week_view_timeline_shift_reset()

    if(DOW_Text=='Sunday'){
        // zc
        $('#week_view_time_tracker').css('margin-top', '0px')
        $('#week_view_sunday_text').highlight_wk_day()
        $('#week_view_sunday_date_text').highlight_wk_day_date()
    }
    else if(DOW_Text=='Monday'){
        $('#week_view_time_tracker').css('margin-top', '100px')
        $('#week_view_monday_text').highlight_wk_day()
        $('#week_view_monday_date_text').highlight_wk_day_date()
    }
    else if(DOW_Text=='Tuesday'){
        $('#week_view_time_tracker').css('margin-top', '200px')
        $('#week_view_tuesday_text').highlight_wk_day()
        $('#week_view_tuesday_date_text').highlight_wk_day_date()
    }
    else if(DOW_Text=='Wednesday'){
        $('#week_view_time_tracker').css('margin-top', '300px')
        $('#week_view_wednesday_text').highlight_wk_day()
        $('#week_view_wednesday_date_text').highlight_wk_day_date()
    }
    else if(DOW_Text=='Thursday'){
        $('#week_view_time_tracker').css('margin-top', '400px')
        $('#week_view_thursday_text').highlight_wk_day()
        $('#week_view_thursday_date_text').highlight_wk_day_date()
    }
    else if(DOW_Text=='Friday'){
        $('#week_view_time_tracker').css('margin-top', '500px')
        $('#week_view_friday_text').highlight_wk_day()
        $('#week_view_friday_date_text').highlight_wk_day_date()
    }
    else if(DOW_Text=='Saturday'){
        $('#week_view_time_tracker').css('margin-top', '600px')
        $('#week_view_saturday_text').highlight_wk_day()
        $('#week_view_saturday_date_text').highlight_wk_day_date()
    }
}


// run this function right at midnight to 'turn page' on new day and relabel/format things as necessary
window.new_day_clock_functions = function new_day_clock_functions(){
    month_view_calendar_labeler() // top dock: month view
    year_view_calendar_labeler() // top dock: year view
    year_view_calendar_highlight_today() // top dock: year view highlighter
    week_view_meridies_top_dock_format() // top dock: week view time format
    week_view_timeline_shift_by_DOW() // shift week view time track by day of week
    month_labeler() // update top dock, month view, month header
    updateWeekViewDateText() // update week view day-dates 
    year_view_month_highlight() // format current month within year view
    // Update Display text with concatenate
    $('#dayofweek_placeholder').text([DOW_Text+', '+Month_Text+' '+Date_Num+', '+Year])   
    $('#top_dock_date_MDY').text([Month_Text_abr+' '+Date_Num+', '+Year]) // update top dock text
    $('#present_view_date_MDY').text([Month_Text_abr+' '+Date_Num+', '+Year]) // update top dock text
    $('#top_dock_date_DoW').text(DOW_Text)
    $('#present_view_date_DoW').text(DOW_Text)
    week_view_header_date_change()
}

window.scheduleMidnightFunction = function scheduleMidnightFunction() {
  const now = new Date();
  const midnight = new Date();

  // Set midnight to the next day at 00:00:00
  midnight.setHours(24, 0, 0, 0); // 24:00:00 is equivalent to 00:00:00 the next day

  const timeUntilMidnight = midnight.getTime() - now.getTime();

  // First run at next midnight
  setTimeout(() => {
    new_day_clock_functions();

    // Then repeat every 24 hours
    setInterval(new_day_clock_functions, 24 * 60 * 60 * 1000);
  }, timeUntilMidnight);
  console.log("It's a beautiful new day!")
}



window.hide_meridies_top_dock = function hide_meridies_top_dock(){
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


window.week_view_hide_meridies_top_dock = function week_view_hide_meridies_top_dock(){
    $('#week_view_text_1_meridies').hide()
    $('#week_view_text_2_meridies').hide()
    $('#week_view_text_3_meridies').hide()
    $('#week_view_text_4_meridies').hide()
    $('#week_view_text_5_meridies').hide()
    $('#week_view_text_6_meridies').hide()
    $('#week_view_text_7_meridies').hide()
    $('#week_view_text_8_meridies').hide()
    $('#week_view_text_9_meridies').hide()
    $('#week_view_text_10_meridies').hide()
    $('#week_view_text_11_meridies').hide()
    $('#week_view_text_12_meridies').hide()
    $('#week_view_text_13_meridies').hide()
    $('#week_view_text_14_meridies').hide()
    $('#week_view_text_15_meridies').hide()
    $('#week_view_text_16_meridies').hide()
    $('#week_view_text_17_meridies').hide()
    $('#week_view_text_18_meridies').hide()
    $('#week_view_text_19_meridies').hide()
    $('#week_view_text_20_meridies').hide()
    $('#week_view_text_21_meridies').hide()
    $('#week_view_text_22_meridies').hide()
    $('#week_view_text_23_meridies').hide()
    $('#week_view_text_24_meridies').hide()
}

window.week_view_meridies_top_dock_format = function week_view_meridies_top_dock_format(){
    // if(military time){}
    $('#week_view_text_14').text('1')
    $('#week_view_text_15').text('2')
    $('#week_view_text_16').text('3')
    $('#week_view_text_17').text('4')
    $('#week_view_text_18').text('5')
    $('#week_view_text_19').text('6')
    $('#week_view_text_20').text('7')
    $('#week_view_text_21').text('8')
    $('#week_view_text_22').text('9')
    $('#week_view_text_23').text('10')
    $('#week_view_text_24').text('11')
}

window.week_view_show_meridies_top_dock = function week_view_show_meridies_top_dock(){
    $('#week_view_text_1_meridies').show()
    $('#week_view_text_2_meridies').show()
    $('#week_view_text_3_meridies').show()
    $('#week_view_text_4_meridies').show()
    $('#week_view_text_5_meridies').show()
    $('#week_view_text_6_meridies').show()
    $('#week_view_text_7_meridies').show()
    $('#week_view_text_8_meridies').show()
    $('#week_view_text_9_meridies').show()
    $('#week_view_text_10_meridies').show()
    $('#week_view_text_11_meridies').show()
    $('#week_view_text_12_meridies').show()
    $('#week_view_text_13_meridies').show()
    $('#week_view_text_14_meridies').show()
    $('#week_view_text_15_meridies').show()
    $('#week_view_text_16_meridies').show()
    $('#week_view_text_17_meridies').show()
    $('#week_view_text_18_meridies').show()
    $('#week_view_text_19_meridies').show()
    $('#week_view_text_20_meridies').show()
    $('#week_view_text_21_meridies').show()
    $('#week_view_text_22_meridies').show()
    $('#week_view_text_23_meridies').show()
    $('#week_view_text_24_meridies').show() 
}


window.top_dock_configure_time_display = function top_dock_configure_time_display(){
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