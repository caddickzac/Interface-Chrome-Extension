window.contra_animation_timeouts = [];
window.contra_loop_active = true;

window.contra_animation = function contra_animation() {
    if (contra_rdy != 'no') {
        window.contra_animation_timeouts.push(setTimeout(() => {
            $('#contra_img_1').hide();
            $('#contra_img_7').hide();
            $('#contra_img_2').show();
        }, 125));

        window.contra_animation_timeouts.push(setTimeout(() => {
            $('#contra_img_2').hide();
            $('#contra_img_3').show();
        }, 250));

        window.contra_animation_timeouts.push(setTimeout(() => {
            $('#contra_img_3').hide();
            $('#contra_img_4').show();
        }, 375));

        window.contra_animation_timeouts.push(setTimeout(() => {
            $('#contra_img_4').hide();
            $('#contra_img_5').show();
        }, 500));

        window.contra_animation_timeouts.push(setTimeout(() => {
            $('#contra_img_5').hide();
            $('#contra_img_6').show();
        }, 625));

        window.contra_animation_timeouts.push(setTimeout(() => {
            $('#contra_img_6').hide();
            $('#contra_img_7').show();
        }, 750));

        window.contra_animation_timeouts.push(setTimeout(() => {
            // $('#contra_img_7').hide();
        }, 800));
    }
};

// window.contra_animation_loop = function contra_animation_loop(){
//     if(contra_rdy=='yes'){
//         contra_rdy='standby'
//         $('#contra_img_1').show()
//         contra_animation()
//         setTimeout(function(){
//             contra_animation()
//         },800)
//         setTimeout(function(){
//             contra_animation()
//         },1600)
//         setTimeout(function(){
//             contra_animation()
//         },2400)
//         setTimeout(function(){
//             contra_animation()
//         },3200)
//         setTimeout(function(){
//             contra_animation()
//         },4000)
//         setTimeout(function(){
//             contra_animation()
//         },4800)
//         setTimeout(function(){
//             contra_animation()
//         },5600)
//         setTimeout(function(){
//             contra_animation()
//         },6400)
//         setTimeout(function(){
//             $('#contra_img_7').hide()
//             // contra_rdy='yes'
//         },7200)
//         setTimeout(function(){
//             // $('#contra_img_7').hide()
//             contra_rdy='yes'
//         },8000)
//     }   
// }

window.contra_animation_loop = function contra_animation_loop() {
    // Always reset animation state
    window.contra_loop_active = true;

    // Clear any old timeouts & hide images
    window.contra_animation_timeouts.forEach(clearTimeout);
    window.contra_animation_timeouts = [];
    $('#contra_img_1, #contra_img_2, #contra_img_3, #contra_img_4, #contra_img_5, #contra_img_6, #contra_img_7').hide();

    if (contra_rdy === 'yes' && window.contra_loop_active) {
        contra_rdy = 'standby';

        $('#contra_img_1').show(); // Restart with first image

        // Start animation cycle
        for (let i = 0; i < 8; i++) {
            window.contra_animation_timeouts.push(setTimeout(() => {
                if (window.contra_loop_active) {
                    contra_animation();
                }
            }, i * 800));
        }

        // Final cleanup
        window.contra_animation_timeouts.push(setTimeout(() => {
            $('#contra_img_7').hide();
        }, 7200));

        setTimeout(function(){
            contra_rdy = 'yes';
        }, 8000);
    }
};

