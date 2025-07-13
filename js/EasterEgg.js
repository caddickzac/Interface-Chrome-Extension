window.contra_animation = function contra_animation(){
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

window.contra_animation_loop = function contra_animation_loop(){
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