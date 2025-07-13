////////////////////////////
// View Changing Behavior // 
////////////////////////////

window.Display_Main_Screen = function Display_Main_Screen(){
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

window.Show_Settings_Screen = function Show_Settings_Screen(){
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

window.Show_Search_Screen = function Show_Search_Screen(){
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

window.show_top_dock = function show_top_dock(){
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

window.hide_top_dock = function hide_top_dock(){
    // current_display='main'
    $('#top_dock').hide()
    $('#top_dock').removeClass('top_docker_state2')
    $('#top_dock').addClass('top_docker_state1')
    setTimeout(function(){
        $('#top_dock').show()
    },150)

}

window.View_Changer = function View_Changer(){
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
