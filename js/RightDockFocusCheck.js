window.right_dock_input_focus_check = function right_dock_input_focus_check(){
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

window.right_dock_input_focus_decision = function right_dock_input_focus_decision(){
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