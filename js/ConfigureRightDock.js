// Configure Right Dock: Number Selection Functionality

function crd_number_selector(){
    update_css_coloring()// reset coloring
    crd_hide_all_inputs()// hide all number input divs

    if(crd_current_selection==1){
        $('#nr_1').css("background-color",color_accent_2)
        $('#nr_1').css("color", color_background)
        $('#nr_1a').css("background-color", color_background)
        $('#nr_1a').css("border-color", color_accent_1)
        $('#nr_1a').css("color", color_accent_2)        
        show_input_rdi_1()        
    }
    else if(crd_current_selection==2){
        $('#nr_2').css("background-color",color_accent_2)
        $('#nr_2').css("color", color_background)
        $('#nr_2a').css("background-color", color_background)
        $('#nr_2a').css("border-color", color_accent_1)
        $('#nr_2a').css("color", color_accent_2)        
        show_input_rdi_2() 
    }
    else if(crd_current_selection==3){
        $('#nr_3').css("background-color",color_accent_2)
        $('#nr_3').css("color", color_background)
        $('#nr_3a').css("background-color", color_background)
        $('#nr_3a').css("border-color", color_accent_1)
        $('#nr_3a').css("color", color_accent_2)        
        show_input_rdi_3()
    }
    else if(crd_current_selection==4){
        $('#nr_4').css("background-color",color_accent_2)
        $('#nr_4').css("color", color_background)
        $('#nr_4a').css("background-color", color_background)
        $('#nr_4a').css("border-color", color_accent_1)
        $('#nr_4a').css("color", color_accent_2)        
        show_input_rdi_4()
    }
    else if(crd_current_selection==5){
        $('#nr_5').css("background-color",color_accent_2)
        $('#nr_5').css("color", color_background)
        $('#nr_5a').css("background-color", color_background)
        $('#nr_5a').css("border-color", color_accent_1)
        $('#nr_5a').css("color", color_accent_2)        
        show_input_rdi_5()
    }
    else if(crd_current_selection==6){
        $('#nr_6').css("background-color",color_accent_2)
        $('#nr_6').css("color", color_background)
        $('#nr_6a').css("background-color", color_background)
        $('#nr_6a').css("border-color", color_accent_1)
        $('#nr_6a').css("color", color_accent_2)        
        show_input_rdi_6()
    }
    else if(crd_current_selection==7){
        $('#nr_7').css("background-color",color_accent_2)
        $('#nr_7').css("color", color_background)
        $('#nr_7a').css("background-color", color_background)
        $('#nr_7a').css("border-color", color_accent_1)
        $('#nr_7a').css("color", color_accent_2)        
        show_input_rdi_7()
    }
    else if(crd_current_selection==8){
        $('#nr_8').css("background-color",color_accent_2)
        $('#nr_8').css("color", color_background)
        $('#nr_8a').css("background-color", color_background)
        $('#nr_8a').css("border-color", color_accent_1)
        $('#nr_8a').css("color", color_accent_2)        
        show_input_rdi_8()
    }
    else if(crd_current_selection==9){
        $('#nr_9').css("background-color",color_accent_2)
        $('#nr_9').css("color", color_background)
        $('#nr_9a').css("background-color", color_background)
        $('#nr_9a').css("border-color", color_accent_1)
        $('#nr_9a').css("color", color_accent_2)        
        show_input_rdi_9()
    }
    else if(crd_current_selection==0){
        $('#nr_0').css("background-color",color_accent_2)
        $('#nr_0').css("color", color_background)
        $('#nr_0a').css("background-color", color_background)
        $('#nr_0a').css("border-color", color_accent_1)
        $('#nr_0a').css("color", color_accent_2)        
        show_input_rdi_0()
    }
}

function crd_hide_1(){
    // reset animation
    $('#rd_1_label_input').removeClass('input_animation_2');
    $('#rd_1_input_1').removeClass('input_animation_2');
    $('#rd_1_input_2').removeClass('input_animation_2');
    $('#rd_1_input_3').removeClass('input_animation_2');
    $('#rd_1_input_4').removeClass('input_animation_2');
    $('#rd_1_input_5').removeClass('input_animation_2');
    $('#rd_1_input_6').removeClass('input_animation_2');
    $('#rd_1_input_7').removeClass('input_animation_2');
    $('#rd_1_input_8').removeClass('input_animation_2');
    $('#rd_1_input_9').removeClass('input_animation_2');
    $('#rd_1_input_10').removeClass('input_animation_2');

    $('#rd_1_label_input').addClass('input_animation_1');
    $('#rd_1_input_1').addClass('input_animation_1');
    $('#rd_1_input_2').addClass('input_animation_1');
    $('#rd_1_input_3').addClass('input_animation_1');
    $('#rd_1_input_4').addClass('input_animation_1');
    $('#rd_1_input_5').addClass('input_animation_1');
    $('#rd_1_input_6').addClass('input_animation_1');
    $('#rd_1_input_7').addClass('input_animation_1');
    $('#rd_1_input_8').addClass('input_animation_1');
    $('#rd_1_input_9').addClass('input_animation_1');
    $('#rd_1_input_10').addClass('input_animation_1');

    $('#rd_1_label_input').fadeOut()
    $('#rd_1_input_1').fadeOut()
    $('#rd_1_input_2').fadeOut()
    $('#rd_1_input_3').fadeOut()
    $('#rd_1_input_4').fadeOut()
    $('#rd_1_input_5').fadeOut()
    $('#rd_1_input_6').fadeOut()
    $('#rd_1_input_7').fadeOut()
    $('#rd_1_input_8').fadeOut()
    $('#rd_1_input_9').fadeOut()
    $('#rd_1_input_10').fadeOut()

    $('#nr_1a').css('opacity', 0)

    $('#rd_1_label_input_label').css('opacity', 0)
    $('#rd_1_input_1_label').css('opacity', 0)
    $('#rd_1_input_2_label').css('opacity', 0)
    $('#rd_1_input_3_label').css('opacity', 0)
    $('#rd_1_input_4_label').css('opacity', 0)
    $('#rd_1_input_5_label').css('opacity', 0)
    $('#rd_1_input_6_label').css('opacity', 0)
    $('#rd_1_input_7_label').css('opacity', 0)
    $('#rd_1_input_8_label').css('opacity', 0)
    $('#rd_1_input_9_label').css('opacity', 0)
    $('#rd_1_input_10_label').css('opacity', 0)
}
function crd_hide_2(){
    // reset animation
    $('#rd_2_label_input').removeClass('input_animation_2');
    $('#rd_2_input_1').removeClass('input_animation_2');
    $('#rd_2_input_2').removeClass('input_animation_2');
    $('#rd_2_input_3').removeClass('input_animation_2');
    $('#rd_2_input_4').removeClass('input_animation_2');
    $('#rd_2_input_5').removeClass('input_animation_2');
    $('#rd_2_input_6').removeClass('input_animation_2');
    $('#rd_2_input_7').removeClass('input_animation_2');
    $('#rd_2_input_8').removeClass('input_animation_2');
    $('#rd_2_input_9').removeClass('input_animation_2');
    $('#rd_2_input_10').removeClass('input_animation_2');

    $('#rd_2_label_input').addClass('input_animation_1');
    $('#rd_2_input_1').addClass('input_animation_1');
    $('#rd_2_input_2').addClass('input_animation_1');
    $('#rd_2_input_3').addClass('input_animation_1');
    $('#rd_2_input_4').addClass('input_animation_1');
    $('#rd_2_input_5').addClass('input_animation_1');
    $('#rd_2_input_6').addClass('input_animation_1');
    $('#rd_2_input_7').addClass('input_animation_1');
    $('#rd_2_input_8').addClass('input_animation_1');
    $('#rd_2_input_9').addClass('input_animation_1');
    $('#rd_2_input_10').addClass('input_animation_1');

    $('#rd_2_label_input').fadeOut()
    $('#rd_2_input_1').fadeOut()
    $('#rd_2_input_2').fadeOut()
    $('#rd_2_input_3').fadeOut()
    $('#rd_2_input_4').fadeOut()
    $('#rd_2_input_5').fadeOut()
    $('#rd_2_input_6').fadeOut()
    $('#rd_2_input_7').fadeOut()
    $('#rd_2_input_8').fadeOut()
    $('#rd_2_input_9').fadeOut()
    $('#rd_2_input_10').fadeOut()

    $('#nr_2a').css('opacity', 0)

    $('#rd_2_label_input_label').css('opacity', 0)
    $('#rd_2_input_1_label').css('opacity', 0)
    $('#rd_2_input_2_label').css('opacity', 0)
    $('#rd_2_input_3_label').css('opacity', 0)
    $('#rd_2_input_4_label').css('opacity', 0)
    $('#rd_2_input_5_label').css('opacity', 0)
    $('#rd_2_input_6_label').css('opacity', 0)
    $('#rd_2_input_7_label').css('opacity', 0)
    $('#rd_2_input_8_label').css('opacity', 0)
    $('#rd_2_input_9_label').css('opacity', 0)
    $('#rd_2_input_10_label').css('opacity', 0)
}
function crd_hide_3(){
    // reset animation
    $('#rd_3_label_input').removeClass('input_animation_2');
    $('#rd_3_input_1').removeClass('input_animation_2');
    $('#rd_3_input_2').removeClass('input_animation_2');
    $('#rd_3_input_3').removeClass('input_animation_2');
    $('#rd_3_input_4').removeClass('input_animation_2');
    $('#rd_3_input_5').removeClass('input_animation_2');
    $('#rd_3_input_6').removeClass('input_animation_2');
    $('#rd_3_input_7').removeClass('input_animation_2');
    $('#rd_3_input_8').removeClass('input_animation_2');
    $('#rd_3_input_9').removeClass('input_animation_2');
    $('#rd_3_input_10').removeClass('input_animation_2');

    $('#rd_3_label_input').addClass('input_animation_1');
    $('#rd_3_input_1').addClass('input_animation_1');
    $('#rd_3_input_2').addClass('input_animation_1');
    $('#rd_3_input_3').addClass('input_animation_1');
    $('#rd_3_input_4').addClass('input_animation_1');
    $('#rd_3_input_5').addClass('input_animation_1');
    $('#rd_3_input_6').addClass('input_animation_1');
    $('#rd_3_input_7').addClass('input_animation_1');
    $('#rd_3_input_8').addClass('input_animation_1');
    $('#rd_3_input_9').addClass('input_animation_1');
    $('#rd_3_input_10').addClass('input_animation_1');

    $('#rd_3_label_input').fadeOut()
    $('#rd_3_input_1').fadeOut()
    $('#rd_3_input_2').fadeOut()
    $('#rd_3_input_3').fadeOut()
    $('#rd_3_input_4').fadeOut()
    $('#rd_3_input_5').fadeOut()
    $('#rd_3_input_6').fadeOut()
    $('#rd_3_input_7').fadeOut()
    $('#rd_3_input_8').fadeOut()
    $('#rd_3_input_9').fadeOut()
    $('#rd_3_input_10').fadeOut()

    $('#nr_3a').css('opacity', 0)

    $('#rd_3_label_input_label').css('opacity', 0)
    $('#rd_3_input_1_label').css('opacity', 0)
    $('#rd_3_input_2_label').css('opacity', 0)
    $('#rd_3_input_3_label').css('opacity', 0)
    $('#rd_3_input_4_label').css('opacity', 0)
    $('#rd_3_input_5_label').css('opacity', 0)
    $('#rd_3_input_6_label').css('opacity', 0)
    $('#rd_3_input_7_label').css('opacity', 0)
    $('#rd_3_input_8_label').css('opacity', 0)
    $('#rd_3_input_9_label').css('opacity', 0)
    $('#rd_3_input_10_label').css('opacity', 0)
}
function crd_hide_4(){
    // reset animation
    $('#rd_4_label_input').removeClass('input_animation_2');
    $('#rd_4_input_1').removeClass('input_animation_2');
    $('#rd_4_input_2').removeClass('input_animation_2');
    $('#rd_4_input_3').removeClass('input_animation_2');
    $('#rd_4_input_4').removeClass('input_animation_2');
    $('#rd_4_input_5').removeClass('input_animation_2');
    $('#rd_4_input_6').removeClass('input_animation_2');
    $('#rd_4_input_7').removeClass('input_animation_2');
    $('#rd_4_input_8').removeClass('input_animation_2');
    $('#rd_4_input_9').removeClass('input_animation_2');
    $('#rd_4_input_10').removeClass('input_animation_2');

    $('#rd_4_label_input').addClass('input_animation_1');
    $('#rd_4_input_1').addClass('input_animation_1');
    $('#rd_4_input_2').addClass('input_animation_1');
    $('#rd_4_input_3').addClass('input_animation_1');
    $('#rd_4_input_4').addClass('input_animation_1');
    $('#rd_4_input_5').addClass('input_animation_1');
    $('#rd_4_input_6').addClass('input_animation_1');
    $('#rd_4_input_7').addClass('input_animation_1');
    $('#rd_4_input_8').addClass('input_animation_1');
    $('#rd_4_input_9').addClass('input_animation_1');
    $('#rd_4_input_10').addClass('input_animation_1');

    $('#rd_4_label_input').fadeOut()
    $('#rd_4_input_1').fadeOut()
    $('#rd_4_input_2').fadeOut()
    $('#rd_4_input_3').fadeOut()
    $('#rd_4_input_4').fadeOut()
    $('#rd_4_input_5').fadeOut()
    $('#rd_4_input_6').fadeOut()
    $('#rd_4_input_7').fadeOut()
    $('#rd_4_input_8').fadeOut()
    $('#rd_4_input_9').fadeOut()
    $('#rd_4_input_10').fadeOut()

    $('#nr_4a').css('opacity', 0)

    $('#rd_4_label_input_label').css('opacity', 0)
    $('#rd_4_input_1_label').css('opacity', 0)
    $('#rd_4_input_2_label').css('opacity', 0)
    $('#rd_4_input_3_label').css('opacity', 0)
    $('#rd_4_input_4_label').css('opacity', 0)
    $('#rd_4_input_5_label').css('opacity', 0)
    $('#rd_4_input_6_label').css('opacity', 0)
    $('#rd_4_input_7_label').css('opacity', 0)
    $('#rd_4_input_8_label').css('opacity', 0)
    $('#rd_4_input_9_label').css('opacity', 0)
    $('#rd_4_input_10_label').css('opacity', 0)
}
function crd_hide_5(){
    // reset animation
    $('#rd_5_label_input').removeClass('input_animation_2');
    $('#rd_5_input_1').removeClass('input_animation_2');
    $('#rd_5_input_2').removeClass('input_animation_2');
    $('#rd_5_input_3').removeClass('input_animation_2');
    $('#rd_5_input_4').removeClass('input_animation_2');
    $('#rd_5_input_5').removeClass('input_animation_2');
    $('#rd_5_input_6').removeClass('input_animation_2');
    $('#rd_5_input_7').removeClass('input_animation_2');
    $('#rd_5_input_8').removeClass('input_animation_2');
    $('#rd_5_input_9').removeClass('input_animation_2');
    $('#rd_5_input_10').removeClass('input_animation_2');

    $('#rd_5_label_input').addClass('input_animation_1');
    $('#rd_5_input_1').addClass('input_animation_1');
    $('#rd_5_input_2').addClass('input_animation_1');
    $('#rd_5_input_3').addClass('input_animation_1');
    $('#rd_5_input_4').addClass('input_animation_1');
    $('#rd_5_input_5').addClass('input_animation_1');
    $('#rd_5_input_6').addClass('input_animation_1');
    $('#rd_5_input_7').addClass('input_animation_1');
    $('#rd_5_input_8').addClass('input_animation_1');
    $('#rd_5_input_9').addClass('input_animation_1');
    $('#rd_5_input_10').addClass('input_animation_1');

    $('#rd_5_label_input').fadeOut()
    $('#rd_5_input_1').fadeOut()
    $('#rd_5_input_2').fadeOut()
    $('#rd_5_input_3').fadeOut()
    $('#rd_5_input_4').fadeOut()
    $('#rd_5_input_5').fadeOut()
    $('#rd_5_input_6').fadeOut()
    $('#rd_5_input_7').fadeOut()
    $('#rd_5_input_8').fadeOut()
    $('#rd_5_input_9').fadeOut()
    $('#rd_5_input_10').fadeOut()

    $('#nr_5a').css('opacity', 0)

    $('#rd_5_label_input_label').css('opacity', 0)
    $('#rd_5_input_1_label').css('opacity', 0)
    $('#rd_5_input_2_label').css('opacity', 0)
    $('#rd_5_input_3_label').css('opacity', 0)
    $('#rd_5_input_4_label').css('opacity', 0)
    $('#rd_5_input_5_label').css('opacity', 0)
    $('#rd_5_input_6_label').css('opacity', 0)
    $('#rd_5_input_7_label').css('opacity', 0)
    $('#rd_5_input_8_label').css('opacity', 0)
    $('#rd_5_input_9_label').css('opacity', 0)
    $('#rd_5_input_10_label').css('opacity', 0)
}
function crd_hide_6(){
    // reset animation
    $('#rd_6_label_input').removeClass('input_animation_2');
    $('#rd_6_input_1').removeClass('input_animation_2');
    $('#rd_6_input_2').removeClass('input_animation_2');
    $('#rd_6_input_3').removeClass('input_animation_2');
    $('#rd_6_input_4').removeClass('input_animation_2');
    $('#rd_6_input_5').removeClass('input_animation_2');
    $('#rd_6_input_6').removeClass('input_animation_2');
    $('#rd_6_input_7').removeClass('input_animation_2');
    $('#rd_6_input_8').removeClass('input_animation_2');
    $('#rd_6_input_9').removeClass('input_animation_2');
    $('#rd_6_input_10').removeClass('input_animation_2');

    $('#rd_6_label_input').addClass('input_animation_1');
    $('#rd_6_input_1').addClass('input_animation_1');
    $('#rd_6_input_2').addClass('input_animation_1');
    $('#rd_6_input_3').addClass('input_animation_1');
    $('#rd_6_input_4').addClass('input_animation_1');
    $('#rd_6_input_5').addClass('input_animation_1');
    $('#rd_6_input_6').addClass('input_animation_1');
    $('#rd_6_input_7').addClass('input_animation_1');
    $('#rd_6_input_8').addClass('input_animation_1');
    $('#rd_6_input_9').addClass('input_animation_1');
    $('#rd_6_input_10').addClass('input_animation_1');

    $('#rd_6_label_input').fadeOut()
    $('#rd_6_input_1').fadeOut()
    $('#rd_6_input_2').fadeOut()
    $('#rd_6_input_3').fadeOut()
    $('#rd_6_input_4').fadeOut()
    $('#rd_6_input_5').fadeOut()
    $('#rd_6_input_6').fadeOut()
    $('#rd_6_input_7').fadeOut()
    $('#rd_6_input_8').fadeOut()
    $('#rd_6_input_9').fadeOut()
    $('#rd_6_input_10').fadeOut()

    $('#nr_6a').css('opacity', 0)

    $('#rd_6_label_input_label').css('opacity', 0)
    $('#rd_6_input_1_label').css('opacity', 0)
    $('#rd_6_input_2_label').css('opacity', 0)
    $('#rd_6_input_3_label').css('opacity', 0)
    $('#rd_6_input_4_label').css('opacity', 0)
    $('#rd_6_input_5_label').css('opacity', 0)
    $('#rd_6_input_6_label').css('opacity', 0)
    $('#rd_6_input_7_label').css('opacity', 0)
    $('#rd_6_input_8_label').css('opacity', 0)
    $('#rd_6_input_9_label').css('opacity', 0)
    $('#rd_6_input_10_label').css('opacity', 0)
}
function crd_hide_7(){
    // reset animation
    $('#rd_7_label_input').removeClass('input_animation_2');
    $('#rd_7_input_1').removeClass('input_animation_2');
    $('#rd_7_input_2').removeClass('input_animation_2');
    $('#rd_7_input_3').removeClass('input_animation_2');
    $('#rd_7_input_4').removeClass('input_animation_2');
    $('#rd_7_input_5').removeClass('input_animation_2');
    $('#rd_7_input_6').removeClass('input_animation_2');
    $('#rd_7_input_7').removeClass('input_animation_2');
    $('#rd_7_input_8').removeClass('input_animation_2');
    $('#rd_7_input_9').removeClass('input_animation_2');
    $('#rd_7_input_10').removeClass('input_animation_2');

    $('#rd_7_label_input').addClass('input_animation_1');
    $('#rd_7_input_1').addClass('input_animation_1');
    $('#rd_7_input_2').addClass('input_animation_1');
    $('#rd_7_input_3').addClass('input_animation_1');
    $('#rd_7_input_4').addClass('input_animation_1');
    $('#rd_7_input_5').addClass('input_animation_1');
    $('#rd_7_input_6').addClass('input_animation_1');
    $('#rd_7_input_7').addClass('input_animation_1');
    $('#rd_7_input_8').addClass('input_animation_1');
    $('#rd_7_input_9').addClass('input_animation_1');
    $('#rd_7_input_10').addClass('input_animation_1');

    $('#rd_7_label_input').fadeOut()
    $('#rd_7_input_1').fadeOut()
    $('#rd_7_input_2').fadeOut()
    $('#rd_7_input_3').fadeOut()
    $('#rd_7_input_4').fadeOut()
    $('#rd_7_input_5').fadeOut()
    $('#rd_7_input_6').fadeOut()
    $('#rd_7_input_7').fadeOut()
    $('#rd_7_input_8').fadeOut()
    $('#rd_7_input_9').fadeOut()
    $('#rd_7_input_10').fadeOut()

    $('#nr_7a').css('opacity', 0)

    $('#rd_7_label_input_label').css('opacity', 0)
    $('#rd_7_input_1_label').css('opacity', 0)
    $('#rd_7_input_2_label').css('opacity', 0)
    $('#rd_7_input_3_label').css('opacity', 0)
    $('#rd_7_input_4_label').css('opacity', 0)
    $('#rd_7_input_5_label').css('opacity', 0)
    $('#rd_7_input_6_label').css('opacity', 0)
    $('#rd_7_input_7_label').css('opacity', 0)
    $('#rd_7_input_8_label').css('opacity', 0)
    $('#rd_7_input_9_label').css('opacity', 0)
    $('#rd_7_input_10_label').css('opacity', 0)
}
function crd_hide_8(){
    // reset animation
    $('#rd_8_label_input').removeClass('input_animation_2');
    $('#rd_8_input_1').removeClass('input_animation_2');
    $('#rd_8_input_2').removeClass('input_animation_2');
    $('#rd_8_input_3').removeClass('input_animation_2');
    $('#rd_8_input_4').removeClass('input_animation_2');
    $('#rd_8_input_5').removeClass('input_animation_2');
    $('#rd_8_input_6').removeClass('input_animation_2');
    $('#rd_8_input_7').removeClass('input_animation_2');
    $('#rd_8_input_8').removeClass('input_animation_2');
    $('#rd_8_input_9').removeClass('input_animation_2');
    $('#rd_8_input_10').removeClass('input_animation_2');

    $('#rd_8_label_input').addClass('input_animation_1');
    $('#rd_8_input_1').addClass('input_animation_1');
    $('#rd_8_input_2').addClass('input_animation_1');
    $('#rd_8_input_3').addClass('input_animation_1');
    $('#rd_8_input_4').addClass('input_animation_1');
    $('#rd_8_input_5').addClass('input_animation_1');
    $('#rd_8_input_6').addClass('input_animation_1');
    $('#rd_8_input_7').addClass('input_animation_1');
    $('#rd_8_input_8').addClass('input_animation_1');
    $('#rd_8_input_9').addClass('input_animation_1');
    $('#rd_8_input_10').addClass('input_animation_1');

    $('#rd_8_label_input').fadeOut()
    $('#rd_8_input_1').fadeOut()
    $('#rd_8_input_2').fadeOut()
    $('#rd_8_input_3').fadeOut()
    $('#rd_8_input_4').fadeOut()
    $('#rd_8_input_5').fadeOut()
    $('#rd_8_input_6').fadeOut()
    $('#rd_8_input_7').fadeOut()
    $('#rd_8_input_8').fadeOut()
    $('#rd_8_input_9').fadeOut()
    $('#rd_8_input_10').fadeOut()

    $('#nr_8a').css('opacity', 0)

    $('#rd_8_label_input_label').css('opacity', 0)
    $('#rd_8_input_1_label').css('opacity', 0)
    $('#rd_8_input_2_label').css('opacity', 0)
    $('#rd_8_input_3_label').css('opacity', 0)
    $('#rd_8_input_4_label').css('opacity', 0)
    $('#rd_8_input_5_label').css('opacity', 0)
    $('#rd_8_input_6_label').css('opacity', 0)
    $('#rd_8_input_7_label').css('opacity', 0)
    $('#rd_8_input_8_label').css('opacity', 0)
    $('#rd_8_input_9_label').css('opacity', 0)
    $('#rd_8_input_10_label').css('opacity', 0)
}
function crd_hide_9(){
    // reset animation
    $('#rd_9_label_input').removeClass('input_animation_2');
    $('#rd_9_input_1').removeClass('input_animation_2');
    $('#rd_9_input_2').removeClass('input_animation_2');
    $('#rd_9_input_3').removeClass('input_animation_2');
    $('#rd_9_input_4').removeClass('input_animation_2');
    $('#rd_9_input_5').removeClass('input_animation_2');
    $('#rd_9_input_6').removeClass('input_animation_2');
    $('#rd_9_input_7').removeClass('input_animation_2');
    $('#rd_9_input_8').removeClass('input_animation_2');
    $('#rd_9_input_9').removeClass('input_animation_2');
    $('#rd_9_input_10').removeClass('input_animation_2');

    $('#rd_9_label_input').addClass('input_animation_1');
    $('#rd_9_input_1').addClass('input_animation_1');
    $('#rd_9_input_2').addClass('input_animation_1');
    $('#rd_9_input_3').addClass('input_animation_1');
    $('#rd_9_input_4').addClass('input_animation_1');
    $('#rd_9_input_5').addClass('input_animation_1');
    $('#rd_9_input_6').addClass('input_animation_1');
    $('#rd_9_input_7').addClass('input_animation_1');
    $('#rd_9_input_8').addClass('input_animation_1');
    $('#rd_9_input_9').addClass('input_animation_1');
    $('#rd_9_input_10').addClass('input_animation_1');

    $('#rd_9_label_input').fadeOut()
    $('#rd_9_input_1').fadeOut()
    $('#rd_9_input_2').fadeOut()
    $('#rd_9_input_3').fadeOut()
    $('#rd_9_input_4').fadeOut()
    $('#rd_9_input_5').fadeOut()
    $('#rd_9_input_6').fadeOut()
    $('#rd_9_input_7').fadeOut()
    $('#rd_9_input_8').fadeOut()
    $('#rd_9_input_9').fadeOut()
    $('#rd_9_input_10').fadeOut()

    $('#nr_9a').css('opacity', 0)

    $('#rd_9_label_input_label').css('opacity', 0)
    $('#rd_9_input_1_label').css('opacity', 0)
    $('#rd_9_input_2_label').css('opacity', 0)
    $('#rd_9_input_3_label').css('opacity', 0)
    $('#rd_9_input_4_label').css('opacity', 0)
    $('#rd_9_input_5_label').css('opacity', 0)
    $('#rd_9_input_6_label').css('opacity', 0)
    $('#rd_9_input_7_label').css('opacity', 0)
    $('#rd_9_input_8_label').css('opacity', 0)
    $('#rd_9_input_9_label').css('opacity', 0)
    $('#rd_9_input_10_label').css('opacity', 0)
}
function crd_hide_0(){
    // reset animation
    $('#rd_0_label_input').removeClass('input_animation_2');
    $('#rd_0_input_1').removeClass('input_animation_2');
    $('#rd_0_input_2').removeClass('input_animation_2');
    $('#rd_0_input_3').removeClass('input_animation_2');
    $('#rd_0_input_4').removeClass('input_animation_2');
    $('#rd_0_input_5').removeClass('input_animation_2');
    $('#rd_0_input_6').removeClass('input_animation_2');
    $('#rd_0_input_7').removeClass('input_animation_2');
    $('#rd_0_input_8').removeClass('input_animation_2');
    $('#rd_0_input_9').removeClass('input_animation_2');
    $('#rd_0_input_10').removeClass('input_animation_2');

    $('#rd_0_label_input').addClass('input_animation_1');
    $('#rd_0_input_1').addClass('input_animation_1');
    $('#rd_0_input_2').addClass('input_animation_1');
    $('#rd_0_input_3').addClass('input_animation_1');
    $('#rd_0_input_4').addClass('input_animation_1');
    $('#rd_0_input_5').addClass('input_animation_1');
    $('#rd_0_input_6').addClass('input_animation_1');
    $('#rd_0_input_7').addClass('input_animation_1');
    $('#rd_0_input_8').addClass('input_animation_1');
    $('#rd_0_input_9').addClass('input_animation_1');
    $('#rd_0_input_10').addClass('input_animation_1');

    $('#rd_0_label_input').fadeOut()
    $('#rd_0_input_1').fadeOut()
    $('#rd_0_input_2').fadeOut()
    $('#rd_0_input_3').fadeOut()
    $('#rd_0_input_4').fadeOut()
    $('#rd_0_input_5').fadeOut()
    $('#rd_0_input_6').fadeOut()
    $('#rd_0_input_7').fadeOut()
    $('#rd_0_input_8').fadeOut()
    $('#rd_0_input_9').fadeOut()
    $('#rd_0_input_10').fadeOut()

    $('#nr_0a').css('opacity', 0)

    $('#rd_0_label_input_label').css('opacity', 0)
    $('#rd_0_input_1_label').css('opacity', 0)
    $('#rd_0_input_2_label').css('opacity', 0)
    $('#rd_0_input_3_label').css('opacity', 0)
    $('#rd_0_input_4_label').css('opacity', 0)
    $('#rd_0_input_5_label').css('opacity', 0)
    $('#rd_0_input_6_label').css('opacity', 0)
    $('#rd_0_input_7_label').css('opacity', 0)
    $('#rd_0_input_8_label').css('opacity', 0)
    $('#rd_0_input_9_label').css('opacity', 0)
    $('#rd_0_input_10_label').css('opacity', 0)
}

function crd_hide_all_inputs(){
    // hide all main divs for numeric inputs
    $('#rdi_1').hide()
    $('#rdi_2').hide()
    $('#rdi_3').hide()
    $('#rdi_4').hide()
    $('#rdi_5').hide()
    $('#rdi_6').hide()
    $('#rdi_7').hide()
    $('#rdi_8').hide()
    $('#rdi_9').hide()
    $('#rdi_0').hide()

    crd_hide_1()
    crd_hide_2()
    crd_hide_3()
    crd_hide_4()
    crd_hide_5()
    crd_hide_6()
    crd_hide_7()
    crd_hide_8()
    crd_hide_9()
    crd_hide_0()
}
// crd_hide_all_inputs()

// Animation for #1
function slide_animation_rdi_1(){
    // row label
    setTimeout(function(){
        $('#rd_1_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_label_input').removeClass('input_animation_1');
            $('#rd_1_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_1_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_1').removeClass('input_animation_1');
            $('#rd_1_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_1_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_2').removeClass('input_animation_1');
            $('#rd_1_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_1_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_3').removeClass('input_animation_1');
            $('#rd_1_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_1_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_4').removeClass('input_animation_1');
            $('#rd_1_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_1_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_5').removeClass('input_animation_1');
            $('#rd_1_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_1_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_6').removeClass('input_animation_1');
            $('#rd_1_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_1_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_7').removeClass('input_animation_1');
            $('#rd_1_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_1_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_8').removeClass('input_animation_1');
            $('#rd_1_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_1_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_9').removeClass('input_animation_1');
            $('#rd_1_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_1_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_1_input_10').removeClass('input_animation_1');
            $('#rd_1_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_1(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_1_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_1_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_1_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_1_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_1_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_1_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_1_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_1_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_1_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_1_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_1_input_10').fadeIn()
    },250)
}
function label_text_rdi_1(){
    // row label
    setTimeout(function(){
        $('#rd_1_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_1_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_1_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_1_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_1_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_1_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_1_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_1_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_1_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_1_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_1_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_1(){
    setTimeout(function(){
        $('#nr_1a').animate({opacity: "1"})
    },100)
}

// Animation for #2
function slide_animation_rdi_2(){
    // row label
    setTimeout(function(){
        $('#rd_2_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_label_input').removeClass('input_animation_1');
            $('#rd_2_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_2_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_1').removeClass('input_animation_1');
            $('#rd_2_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_2_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_2').removeClass('input_animation_1');
            $('#rd_2_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_2_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_3').removeClass('input_animation_1');
            $('#rd_2_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_2_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_4').removeClass('input_animation_1');
            $('#rd_2_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_2_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_5').removeClass('input_animation_1');
            $('#rd_2_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_2_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_6').removeClass('input_animation_1');
            $('#rd_2_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_2_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_7').removeClass('input_animation_1');
            $('#rd_2_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_2_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_8').removeClass('input_animation_1');
            $('#rd_2_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_2_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_9').removeClass('input_animation_1');
            $('#rd_2_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_2_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_2_input_10').removeClass('input_animation_1');
            $('#rd_2_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_2(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_2_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_2_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_2_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_2_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_2_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_2_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_2_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_2_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_2_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_2_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_2_input_10').fadeIn()
    },250)
}
function label_text_rdi_2(){
    // row label
    setTimeout(function(){
        $('#rd_2_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_2_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_2_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_2_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_2_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_2_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_2_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_2_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_2_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_2_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_2_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_2(){
    setTimeout(function(){
        $('#nr_2a').animate({opacity: "1"})
    },100)
}

// Animation for #3
function slide_animation_rdi_3(){
    // row label
    setTimeout(function(){
        $('#rd_3_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_label_input').removeClass('input_animation_1');
            $('#rd_3_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_3_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_1').removeClass('input_animation_1');
            $('#rd_3_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_3_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_2').removeClass('input_animation_1');
            $('#rd_3_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_3_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_3').removeClass('input_animation_1');
            $('#rd_3_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_3_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_4').removeClass('input_animation_1');
            $('#rd_3_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_3_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_5').removeClass('input_animation_1');
            $('#rd_3_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_3_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_6').removeClass('input_animation_1');
            $('#rd_3_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_3_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_7').removeClass('input_animation_1');
            $('#rd_3_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_3_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_8').removeClass('input_animation_1');
            $('#rd_3_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_3_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_9').removeClass('input_animation_1');
            $('#rd_3_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_3_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_3_input_10').removeClass('input_animation_1');
            $('#rd_3_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_3(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_3_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_3_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_3_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_3_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_3_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_3_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_3_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_3_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_3_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_3_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_3_input_10').fadeIn()
    },250)
}
function label_text_rdi_3(){
    // row label
    setTimeout(function(){
        $('#rd_3_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_3_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_3_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_3_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_3_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_3_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_3_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_3_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_3_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_3_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_3_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_3(){
    setTimeout(function(){
        $('#nr_3a').animate({opacity: "1"})
    },100)
}

// Animation for #4
function slide_animation_rdi_4(){
    // row label
    setTimeout(function(){
        $('#rd_4_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_label_input').removeClass('input_animation_1');
            $('#rd_4_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_4_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_1').removeClass('input_animation_1');
            $('#rd_4_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_4_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_2').removeClass('input_animation_1');
            $('#rd_4_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_4_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_3').removeClass('input_animation_1');
            $('#rd_4_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_4_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_4').removeClass('input_animation_1');
            $('#rd_4_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_4_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_5').removeClass('input_animation_1');
            $('#rd_4_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_4_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_6').removeClass('input_animation_1');
            $('#rd_4_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_4_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_7').removeClass('input_animation_1');
            $('#rd_4_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_4_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_8').removeClass('input_animation_1');
            $('#rd_4_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_4_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_9').removeClass('input_animation_1');
            $('#rd_4_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_4_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_4_input_10').removeClass('input_animation_1');
            $('#rd_4_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_4(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_4_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_4_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_4_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_4_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_4_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_4_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_4_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_4_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_4_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_4_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_4_input_10').fadeIn()
    },250)
}
function label_text_rdi_4(){
    // row label
    setTimeout(function(){
        $('#rd_4_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_4_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_4_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_4_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_4_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_4_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_4_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_4_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_4_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_4_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_4_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_4(){
    setTimeout(function(){
        $('#nr_4a').animate({opacity: "1"})
    },100)
}

// Animation for #5
function slide_animation_rdi_5(){
    // row label
    setTimeout(function(){
        $('#rd_5_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_label_input').removeClass('input_animation_1');
            $('#rd_5_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_5_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_1').removeClass('input_animation_1');
            $('#rd_5_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_5_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_2').removeClass('input_animation_1');
            $('#rd_5_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_5_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_3').removeClass('input_animation_1');
            $('#rd_5_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_5_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_4').removeClass('input_animation_1');
            $('#rd_5_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_5_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_5').removeClass('input_animation_1');
            $('#rd_5_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_5_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_6').removeClass('input_animation_1');
            $('#rd_5_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_5_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_7').removeClass('input_animation_1');
            $('#rd_5_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_5_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_8').removeClass('input_animation_1');
            $('#rd_5_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_5_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_9').removeClass('input_animation_1');
            $('#rd_5_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_5_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_5_input_10').removeClass('input_animation_1');
            $('#rd_5_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_5(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_5_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_5_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_5_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_5_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_5_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_5_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_5_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_5_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_5_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_5_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_5_input_10').fadeIn()
    },250)
}
function label_text_rdi_5(){
    // row label
    setTimeout(function(){
        $('#rd_5_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_5_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_5_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_5_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_5_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_5_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_5_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_5_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_5_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_5_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_5_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_5(){
    setTimeout(function(){
        $('#nr_5a').animate({opacity: "1"})
    },100)
}

// Animation for #6
function slide_animation_rdi_6(){
    // row label
    setTimeout(function(){
        $('#rd_6_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_label_input').removeClass('input_animation_1');
            $('#rd_6_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_6_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_1').removeClass('input_animation_1');
            $('#rd_6_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_6_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_2').removeClass('input_animation_1');
            $('#rd_6_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_6_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_3').removeClass('input_animation_1');
            $('#rd_6_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_6_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_4').removeClass('input_animation_1');
            $('#rd_6_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_6_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_5').removeClass('input_animation_1');
            $('#rd_6_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_6_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_6').removeClass('input_animation_1');
            $('#rd_6_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_6_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_7').removeClass('input_animation_1');
            $('#rd_6_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_6_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_8').removeClass('input_animation_1');
            $('#rd_6_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_6_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_9').removeClass('input_animation_1');
            $('#rd_6_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_6_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_6_input_10').removeClass('input_animation_1');
            $('#rd_6_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_6(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_6_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_6_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_6_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_6_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_6_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_6_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_6_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_6_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_6_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_6_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_6_input_10').fadeIn()
    },250)
}
function label_text_rdi_6(){
    // row label
    setTimeout(function(){
        $('#rd_6_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_6_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_6_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_6_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_6_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_6_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_6_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_6_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_6_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_6_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_6_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_6(){
    setTimeout(function(){
        $('#nr_6a').animate({opacity: "1"})
    },100)
}

// Animation for #7
function slide_animation_rdi_7(){
    // row label
    setTimeout(function(){
        $('#rd_7_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_label_input').removeClass('input_animation_1');
            $('#rd_7_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_7_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_1').removeClass('input_animation_1');
            $('#rd_7_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_7_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_2').removeClass('input_animation_1');
            $('#rd_7_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_7_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_3').removeClass('input_animation_1');
            $('#rd_7_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_7_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_4').removeClass('input_animation_1');
            $('#rd_7_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_7_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_5').removeClass('input_animation_1');
            $('#rd_7_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_7_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_6').removeClass('input_animation_1');
            $('#rd_7_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_7_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_7').removeClass('input_animation_1');
            $('#rd_7_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_7_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_8').removeClass('input_animation_1');
            $('#rd_7_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_7_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_9').removeClass('input_animation_1');
            $('#rd_7_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_7_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_7_input_10').removeClass('input_animation_1');
            $('#rd_7_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_7(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_7_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_7_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_7_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_7_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_7_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_7_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_7_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_7_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_7_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_7_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_7_input_10').fadeIn()
    },250)
}
function label_text_rdi_7(){
    // row label
    setTimeout(function(){
        $('#rd_7_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_7_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_7_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_7_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_7_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_7_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_7_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_7_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_7_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_7_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_7_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_7(){
    setTimeout(function(){
        $('#nr_7a').animate({opacity: "1"})
    },100)
}

// Animation for #8
function slide_animation_rdi_8(){
    // row label
    setTimeout(function(){
        $('#rd_8_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_label_input').removeClass('input_animation_1');
            $('#rd_8_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_8_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_1').removeClass('input_animation_1');
            $('#rd_8_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_8_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_2').removeClass('input_animation_1');
            $('#rd_8_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_8_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_3').removeClass('input_animation_1');
            $('#rd_8_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_8_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_4').removeClass('input_animation_1');
            $('#rd_8_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_8_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_5').removeClass('input_animation_1');
            $('#rd_8_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_8_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_6').removeClass('input_animation_1');
            $('#rd_8_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_8_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_7').removeClass('input_animation_1');
            $('#rd_8_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_8_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_8').removeClass('input_animation_1');
            $('#rd_8_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_8_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_9').removeClass('input_animation_1');
            $('#rd_8_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_8_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_8_input_10').removeClass('input_animation_1');
            $('#rd_8_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_8(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_8_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_8_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_8_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_8_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_8_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_8_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_8_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_8_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_8_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_8_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_8_input_10').fadeIn()
    },250)
}
function label_text_rdi_8(){
    // row label
    setTimeout(function(){
        $('#rd_8_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_8_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_8_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_8_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_8_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_8_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_8_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_8_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_8_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_8_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_8_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_8(){
    setTimeout(function(){
        $('#nr_8a').animate({opacity: "1"})
    },100)
}

// Animation for #9
function slide_animation_rdi_9(){
    // row label
    setTimeout(function(){
        $('#rd_9_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_label_input').removeClass('input_animation_1');
            $('#rd_9_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_9_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_1').removeClass('input_animation_1');
            $('#rd_9_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_9_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_2').removeClass('input_animation_1');
            $('#rd_9_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_9_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_3').removeClass('input_animation_1');
            $('#rd_9_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_9_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_4').removeClass('input_animation_1');
            $('#rd_9_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_9_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_5').removeClass('input_animation_1');
            $('#rd_9_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_9_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_6').removeClass('input_animation_1');
            $('#rd_9_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_9_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_7').removeClass('input_animation_1');
            $('#rd_9_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_9_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_8').removeClass('input_animation_1');
            $('#rd_9_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_9_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_9').removeClass('input_animation_1');
            $('#rd_9_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_9_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_9_input_10').removeClass('input_animation_1');
            $('#rd_9_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_9(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_9_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_9_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_9_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_9_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_9_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_9_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_9_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_9_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_9_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_9_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_9_input_10').fadeIn()
    },250)
}
function label_text_rdi_9(){
    // row label
    setTimeout(function(){
        $('#rd_9_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_9_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_9_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_9_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_9_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_9_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_9_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_9_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_9_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_9_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_9_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_9(){
    setTimeout(function(){
        $('#nr_9a').animate({opacity: "1"})
    },100)
}

// Animation for #0
function slide_animation_rdi_0(){
    // row label
    setTimeout(function(){
        $('#rd_0_label_input').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_label_input').removeClass('input_animation_1');
            $('#rd_0_label_input').addClass('input_animation_2');
        },150)
    },0)
    // row 1
    setTimeout(function(){
        $('#rd_0_input_1').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_1').removeClass('input_animation_1');
            $('#rd_0_input_1').addClass('input_animation_2');
        },175)
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_0_input_2').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_2').removeClass('input_animation_1');
            $('#rd_0_input_2').addClass('input_animation_2');
        },175)
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_0_input_3').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_3').removeClass('input_animation_1');
            $('#rd_0_input_3').addClass('input_animation_2');
        },175)
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_0_input_4').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_4').removeClass('input_animation_1');
            $('#rd_0_input_4').addClass('input_animation_2');
        },175)
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_0_input_5').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_5').removeClass('input_animation_1');
            $('#rd_0_input_5').addClass('input_animation_2');
        },175)
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_0_input_6').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_6').removeClass('input_animation_1');
            $('#rd_0_input_6').addClass('input_animation_2');
        },175)
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_0_input_7').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_7').removeClass('input_animation_1');
            $('#rd_0_input_7').addClass('input_animation_2');
        },175)
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_0_input_8').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_8').removeClass('input_animation_1');
            $('#rd_0_input_8').addClass('input_animation_2');
        },175)
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_0_input_9').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_9').removeClass('input_animation_1');
            $('#rd_0_input_9').addClass('input_animation_2');
        },175)
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_0_input_10').addClass('input_animation_1');
        setTimeout(function(){
            $('#rd_0_input_10').removeClass('input_animation_1');
            $('#rd_0_input_10').addClass('input_animation_2');
        },175)
    },250)
}
function appear_animation_rdi_0(){
    // display all text boxes

    // row label
    setTimeout(function(){
        $('#rd_0_label_input').fadeIn()
    },0)

    // row 1
    setTimeout(function(){
        $('#rd_0_input_1').fadeIn()
    },25)
    // row 2
    setTimeout(function(){
        $('#rd_0_input_2').fadeIn()
    },50)
    // row 3
    setTimeout(function(){
        $('#rd_0_input_3').fadeIn()
    },75)
    // row 4
    setTimeout(function(){
        $('#rd_0_input_4').fadeIn()
    },100)
    // row 5
    setTimeout(function(){
        $('#rd_0_input_5').fadeIn()
    },125)
    // row 6
    setTimeout(function(){
        $('#rd_0_input_6').fadeIn()
    },150)
    // row 7
    setTimeout(function(){
        $('#rd_0_input_7').fadeIn()
    },175)
    // row 8
    setTimeout(function(){
        $('#rd_0_input_8').fadeIn()
    },200)
    // row 9
    setTimeout(function(){
        $('#rd_0_input_9').fadeIn()
    },225)
    // row 10
    setTimeout(function(){
        $('#rd_0_input_10').fadeIn()
    },250)
}
function label_text_rdi_0(){
    // row label
    setTimeout(function(){
        $('#rd_0_label_input_label').animate({opacity: "1"})
    },100)
    // row 1
    setTimeout(function(){
        $('#rd_0_input_1_label').animate({opacity: "1"})
    },125)
    // row 2
    setTimeout(function(){
        $('#rd_0_input_2_label').animate({opacity: "1"})
    },150)
    // row 3
    setTimeout(function(){
        $('#rd_0_input_3_label').animate({opacity: "1"})
    },175)
    // row 4
    setTimeout(function(){
        $('#rd_0_input_4_label').animate({opacity: "1"})
    },200)
    // row 5
    setTimeout(function(){
        $('#rd_0_input_5_label').animate({opacity: "1"})
    },225)
    // row 6
    setTimeout(function(){
        $('#rd_0_input_6_label').animate({opacity: "1"})
    },250)
    // row 7
    setTimeout(function(){
        $('#rd_0_input_7_label').animate({opacity: "1"})
    },275)
    // row 8
    setTimeout(function(){
        $('#rd_0_input_8_label').animate({opacity: "1"})
    },300)
    // row 9
    setTimeout(function(){
        $('#rd_0_input_9_label').animate({opacity: "1"})
    },325)
    // row 10
    setTimeout(function(){
        $('#rd_0_input_10_label').animate({opacity: "1"})
    },350)
}
function numeric_symbol_changer_rdi_0(){
    setTimeout(function(){
        $('#nr_0a').animate({opacity: "1"})
    },100)
}

// Display individual inputs
function show_input_rdi_1(){
    $('#rdi_1').show() // show div
    appear_animation_rdi_1()
    slide_animation_rdi_1()
    label_text_rdi_1()
    numeric_symbol_changer_rdi_1() 
}
function show_input_rdi_2(){
    $('#rdi_2').show() // show div
    appear_animation_rdi_2()
    slide_animation_rdi_2()
    label_text_rdi_2()
    numeric_symbol_changer_rdi_2() 
}
function show_input_rdi_3(){
    $('#rdi_3').show() // show div
    appear_animation_rdi_3()
    slide_animation_rdi_3()
    label_text_rdi_3()
    numeric_symbol_changer_rdi_3() 
}
function show_input_rdi_4(){
    $('#rdi_4').show() // show div
    appear_animation_rdi_4()
    slide_animation_rdi_4()
    label_text_rdi_4()
    numeric_symbol_changer_rdi_4() 
}
function show_input_rdi_5(){
    $('#rdi_5').show() // show div
    appear_animation_rdi_5()
    slide_animation_rdi_5()
    label_text_rdi_5()
    numeric_symbol_changer_rdi_5() 
}
function show_input_rdi_6(){
    $('#rdi_6').show() // show div
    appear_animation_rdi_6()
    slide_animation_rdi_6()
    label_text_rdi_6()
    numeric_symbol_changer_rdi_6() 
}
function show_input_rdi_7(){
    $('#rdi_7').show() // show div
    appear_animation_rdi_7()
    slide_animation_rdi_7()
    label_text_rdi_7()
    numeric_symbol_changer_rdi_7() 
}
function show_input_rdi_8(){
    $('#rdi_8').show() // show div
    appear_animation_rdi_8()
    slide_animation_rdi_8()
    label_text_rdi_8()
    numeric_symbol_changer_rdi_8() 
}
function show_input_rdi_9(){
    $('#rdi_9').show() // show div
    appear_animation_rdi_9()
    slide_animation_rdi_9()
    label_text_rdi_9()
    numeric_symbol_changer_rdi_9() 
}
function show_input_rdi_0(){
    $('#rdi_0').show() // show div
    appear_animation_rdi_0()
    slide_animation_rdi_0()
    label_text_rdi_0()
    numeric_symbol_changer_rdi_0() 
}


$(document).ready(function () {
  const buttonIds = ['nr_0', 'nr_1', 'nr_2', 'nr_3', 'nr_4', 'nr_5', 'nr_6', 'nr_7', 'nr_8', 'nr_9'];

  buttonIds.forEach((id, index) => {
    $(`#${id}`).click(function () {
      previous_crd_selection = crd_current_selection;
      crd_current_selection = (id === 'nr_0') ? 0 : index;
      if (previous_crd_selection !== crd_current_selection) {
        crd_number_selector();
      }
    });
  });
});

