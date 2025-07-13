function checkbox_removal(){
    $('#wsi_1_checkbox_on').hide()
    $('#wsi_1_checkbox_off').show()
    $('#wsi_2_checkbox_on').hide()
    $('#wsi_2_checkbox_off').show()
    $('#wsi_3_checkbox_on').hide()
    $('#wsi_3_checkbox_off').show()
    $('#wsi_4_checkbox_on').hide()
    $('#wsi_4_checkbox_off').show()
    $('#wsi_5_checkbox_on').hide()
    $('#wsi_5_checkbox_off').show()
    $('#wsi_6_checkbox_on').hide()
    $('#wsi_6_checkbox_off').show()
}

window.bottom_dock_style_reset = function bottom_dock_style_reset(){
    $('#bd_1').css('font-weight','normal')
    $('#bd_2').css('font-weight','normal')
    $('#bd_3').css('font-weight','normal')
    $('#bd_4').css('font-weight','normal')
    $('#bd_5').css('font-weight','normal')
    $('#bd_6').css('font-weight','normal')

    $('#bd_1').css('font-size','1em')
    $('#bd_2').css('font-size','1em')
    $('#bd_3').css('font-size','1em')
    $('#bd_4').css('font-size','1em')
    $('#bd_5').css('font-size','1em')
    $('#bd_6').css('font-size','1em')

    $('#bd_1').css('padding','25px')
    $('#bd_2').css('padding','25px')
    $('#bd_3').css('padding','25px')
    $('#bd_4').css('padding','25px')
    $('#bd_5').css('padding','25px')
    $('#bd_6').css('padding','25px')
}

function change_checkbox(){
    checkbox_removal()
    bottom_dock_style_reset()
    if(wsi_current_selection==1){
        $('#wsi_1_checkbox_on').show()
        $('#bd_1').css('font-weight','bold')
        $('#bd_1').css('font-size','1.5em')
        $('#bd_1').css('padding','18px')
    }
    if(wsi_current_selection==2){
        $('#wsi_2_checkbox_on').show()
        $('#bd_2').css('font-weight','bold')
        $('#bd_2').css('font-size','1.5em')
        $('#bd_2').css('padding','18px')
    }
    if(wsi_current_selection==3){
        $('#wsi_3_checkbox_on').show()
        $('#bd_3').css('font-weight','bold')
        $('#bd_3').css('font-size','1.5em')
        $('#bd_3').css('padding','18px')
    }
    if(wsi_current_selection==4){
        $('#wsi_4_checkbox_on').show()
        $('#bd_4').css('font-weight','bold')
        $('#bd_4').css('font-size','1.5em')
        $('#bd_4').css('padding','18px')
    }
    if(wsi_current_selection==5){
        $('#wsi_5_checkbox_on').show()
        $('#bd_5').css('font-weight','bold')
        $('#bd_5').css('font-size','1.5em')
        $('#bd_5').css('padding','18px')
    }
    if(wsi_current_selection==6){
        $('#wsi_6_checkbox_on').show()
        $('#bd_6').css('font-weight','bold')
        $('#bd_6').css('font-size','1.5em')
        $('#bd_6').css('padding','18px')
    }
}

$('#wsi_1_checkbox_off').click(function(){
    wsi_current_selection=1
    change_checkbox()
    web_search_updater()
})

$('#wsi_2_checkbox_off').click(function(){
    wsi_current_selection=2
    change_checkbox()
    web_search_updater()
})

$('#wsi_3_checkbox_off').click(function(){
    wsi_current_selection=3
    change_checkbox()
    web_search_updater()
})

$('#wsi_4_checkbox_off').click(function(){
    wsi_current_selection=4
    change_checkbox()
    web_search_updater()
})

$('#wsi_5_checkbox_off').click(function(){
    wsi_current_selection=5
    change_checkbox()
    web_search_updater()
})

$('#wsi_6_checkbox_off').click(function(){
    wsi_current_selection=6
    change_checkbox()
    web_search_updater()
})

// bottom dock click functionality
$(function () {
  for (let i = 1; i <= 6; i++) {
    $('#bd_' + i).click(function () {
      $('#wsi_' + i + '_checkbox_off').click();
      update_search_box_text();
      save_data();
    });
  }
});


function update_search_box_text(){
    if(wsi_current_selection==1){
        $('#search_bar').attr('placeholder', ws_1_website+' search')
        search_url=$('#ws_1_url_input').val()
    }
    else if(wsi_current_selection==2){
        $('#search_bar').attr('placeholder', ws_2_website+' search')
        search_url=$('#ws_2_url_input').val()
    }
    else if(wsi_current_selection==3){
        $('#search_bar').attr('placeholder', ws_3_website+' search')
        search_url=$('#ws_3_url_input').val()
    }
    else if(wsi_current_selection==4){
        $('#search_bar').attr('placeholder', ws_4_website+' search')
        search_url=$('#ws_4_url_input').val()
    }
    else if(wsi_current_selection==5){
        $('#search_bar').attr('placeholder', ws_5_website+' search')
        search_url=$('#ws_5_url_input').val()
    }
    else if(wsi_current_selection==6){
        $('#search_bar').attr('placeholder', ws_6_website+' search')
        search_url=$('#ws_6_url_input').val()
    }
}


// Google search
function Google_Search(){
    // google_url = "https://www.google.com/search?q="
    // search_url=''
    search = $('#search_bar').val()
    search_url+=search // concatenate
    window.location.replace(search_url); // websearch
}