function get_data(){
    console.log('get data function started')

    // initial settings
    mt_settings="no" // military time
    // mt_settings="" // military time
    sd_settings="no" // show date
    sg_settings="no" // show greetings

    top_dock_mt='no' // zc

    ld_link_override='no'

    color_background=''
    color_accent_1=''
    color_accent_2=''

    theme = ''

    // checkbox
    wsi_current_selection=''

    label_a=''
    label_b=''
    label_c=''
    label_d=''
    label_e=''
    label_f=''
    label_g=''
    label_h=''
    label_i=''
    label_j=''
    label_k=''
    label_l=''
    label_m=''
    label_n=''
    label_o=''
    label_p=''
    label_q=''
    label_r=''
    label_s=''
    label_t=''
    label_u=''
    label_v=''
    label_w=''
    label_x=''
    label_y=''
    label_z=''
    website_a=''
    website_b=''
    website_c=''
    website_d=''
    website_e=''
    website_f=''
    website_g=''
    website_h=''
    website_i=''
    website_j=''
    website_k=''
    website_l=''
    website_m=''
    website_n=''
    website_o=''
    website_p=''
    website_q=''
    website_r=''
    website_s=''
    website_t=''
    website_u=''
    website_v=''
    website_w=''
    website_x=''
    website_y=''
    website_z=''
    label_A=''
    label_B=''
    label_C=''
    label_D=''
    label_E=''
    label_F=''
    label_G=''
    label_H=''
    label_J=''
    label_J=''
    label_K=''
    label_L=''
    label_M=''
    label_N=''
    label_O=''
    label_P=''
    label_Q=''
    label_R=''
    label_S=''
    label_T=''
    label_U=''
    label_V=''
    label_W=''
    label_X=''
    label_Y=''
    label_Z=''
    website_A=''
    website_B=''
    website_C=''
    website_D=''
    website_E=''
    website_F=''
    website_G=''
    website_H=''
    website_J=''
    website_J=''
    website_K=''
    website_L=''
    website_M=''
    website_N=''
    website_O=''
    website_P=''
    website_Q=''
    website_R=''
    website_S=''
    website_T=''
    website_U=''
    website_V=''
    website_W=''
    website_X=''
    website_Y=''
    website_Z=''
    // numbers
    label_0=''
    label_1=''
    label_2=''
    label_3=''
    label_4=''
    label_5=''
    label_5=''
    label_6=''
    label_7=''
    label_8=''
    label_9=''
    website_1_1=''
    website_1_2=''
    website_1_3=''
    website_1_4=''
    website_1_5=''
    website_1_6=''
    website_1_7=''
    website_1_8=''
    website_1_9=''
    website_1_10=''
    website_2_1=''
    website_2_2=''
    website_2_3=''
    website_2_4=''
    website_2_5=''
    website_2_6=''
    website_2_7=''
    website_2_8=''
    website_2_9=''
    website_2_10=''
    website_3_1=''
    website_3_2=''
    website_3_3=''
    website_3_4=''
    website_3_5=''
    website_3_6=''
    website_3_7=''
    website_3_8=''
    website_3_9=''
    website_3_10=''
    website_4_1=''
    website_4_2=''
    website_4_3=''
    website_4_4=''
    website_4_5=''
    website_4_6=''
    website_4_7=''
    website_4_8=''
    website_4_9=''
    website_4_10=''
    website_5_1=''
    website_5_2=''
    website_5_3=''
    website_5_4=''
    website_5_5=''
    website_5_6=''
    website_5_7=''
    website_5_8=''
    website_5_9=''
    website_5_10=''
    website_6_1=''
    website_6_2=''
    website_6_3=''
    website_6_4=''
    website_6_5=''
    website_6_6=''
    website_6_7=''
    website_6_8=''
    website_6_9=''
    website_6_10=''
    website_7_1=''
    website_7_2=''
    website_7_3=''
    website_7_4=''
    website_7_5=''
    website_7_6=''
    website_7_7=''
    website_7_8=''
    website_7_9=''
    website_7_10=''
    website_8_1=''
    website_8_2=''
    website_8_3=''
    website_8_4=''
    website_8_5=''
    website_8_6=''
    website_8_7=''
    website_8_8=''
    website_8_9=''
    website_8_10=''
    website_9_1=''
    website_9_2=''
    website_9_3=''
    website_9_4=''
    website_9_5=''
    website_9_6=''
    website_9_7=''
    website_9_8=''
    website_9_9=''
    website_9_10=''
    website_0_10=''
    website_0_1=''
    website_0_2=''
    website_0_3=''
    website_0_4=''
    website_0_5=''
    website_0_6=''
    website_0_7=''
    website_0_8=''
    website_0_9=''
    website_0_10=''
    ws_1_website=''
    ws_2_website=''
    ws_3_website=''
    ws_4_website=''
    ws_5_website=''
    ws_6_website=''
    ws_1_url=''
    ws_2_url=''
    ws_3_url=''
    ws_4_url=''
    ws_5_url=''
    ws_6_url=''


    /////////////////////
    // Display Setting //
    /////////////////////

    // mt_settings - military time
    chrome.storage.sync.get(['mt_settings_stored'], function(mt_settings) {
        mt_settings_DS = mt_settings.mt_settings_stored
        if(!mt_settings_DS){
            mt_settings='no'
        }
        else{
            mt_settings=mt_settings_DS
        }
        if(mt_settings=='yes'){
            $('#mt_settings_yes').click()
        }
        else{
            $('#mt_settings_no').click()
        }
    });

    // sd_settings - show date
    chrome.storage.sync.get(['sd_settings_stored'], function(sd_settings) {
        sd_settings_DS = sd_settings.sd_settings_stored
        if(!sd_settings_DS){
            sd_settings='no'
        }
        else{
            sd_settings=sd_settings_DS
        }
        if(sd_settings=='yes'){
            $('#sd_settings_yes').click()
        }
        else{
            $('#sd_settings_no').click()
        }
    });


    // sg_settings - show greeting
    chrome.storage.sync.get(['sg_settings_stored'], function(sg_settings) {
        sg_settings_DS = sg_settings.sg_settings_stored
        if(!sg_settings_DS){
            sg_settings='no'
        }
        else{
            sg_settings=sg_settings_DS
        }
        if(sg_settings=='yes'){
            $('#sg_settings_yes').click()
        }
        else{
            $('#sg_settings_no').click()
        }
    });

    // name
    chrome.storage.sync.get(['name_stored'], function(name) {
        name_DS = name.name_stored
        if(!name_DS){
            name=''
        }
        else{
            name=name_DS
        }
        $("#name_input").val(name)
        // showTime()
    });

    // Left Dock Link Override?
    chrome.storage.sync.get(['ld_link_override_stored'], function(ld_link_override) {
        ld_link_override_DS = ld_link_override.ld_link_override_stored
        if(!ld_link_override_DS){
            ld_link_override='no'
        }
        else{
            ld_link_override=ld_link_override_DS
        }
        if(ld_link_override=='yes'){
            $('#ld_newtab_settings_yes').click()
        }
        else{
            $('#ld_newtab_settings_no').click()
        }
    });    

    ////////////////
    // Search Box //
    ////////////////

    wsi_current_selection_DS=''

    chrome.storage.sync.get(['wsi_current_selection_stored'], function(wsi_current_selection) {
        wsi_current_selection_DS = wsi_current_selection.wsi_current_selection_stored
        if(!wsi_current_selection_DS){
            wsi_current_selection='1'
        }
        else{
            wsi_current_selection=wsi_current_selection_DS
        }

        if(wsi_current_selection==1){
            $('#wsi_1_checkbox_off').click()
        }
        else if(wsi_current_selection==2){
            $('#wsi_2_checkbox_off').click()
        }
        else if(wsi_current_selection==3){
            $('#wsi_3_checkbox_off').click()
        }
        else if(wsi_current_selection==4){
            $('#wsi_4_checkbox_off').click()
        }
        else if(wsi_current_selection==5){
            $('#wsi_5_checkbox_off').click()
        }
        else if(wsi_current_selection==6){
            $('#wsi_6_checkbox_off').click()
        }
        else{
            $('#wsi_1_checkbox_off').click()
        }
    });

    ////////////
    // scheme //
    ////////////

    // color background
    color_background_DS=''
    color_accent_1_DS=''
    color_accent_2_DS=''

    chrome.storage.sync.get(['color_background_stored'], function(color_background) {
        color_background_DS = color_background.color_background_stored
        if(!color_background_DS){
            color_background='#242424'
        }
        else{
            color_background=color_background_DS
        }
        $('#hex_1').val(color_background)
    });

    // color accent 1
    chrome.storage.sync.get(['color_accent_1_stored'], function(color_accent_1) {
        color_accent_1_DS = color_accent_1.color_accent_1_stored
        if(!color_accent_1_DS){
            color_accent_1='#808080'
        }
        else{
            color_accent_1=color_accent_1_DS
        }
        $('#hex_2').val(color_accent_1)
    });

    // color accent 2
    chrome.storage.sync.get(['color_accent_2_stored'], function(color_accent_2) {
        color_accent_2_DS = color_accent_2.color_accent_2_stored
        if(!color_accent_2_DS){
            color_accent_2='#BFBFBF'
        }
        else{
            color_accent_2=color_accent_2_DS
        }
        $('#hex_3').val(color_accent_2)
    });

    // theme
    chrome.storage.sync.get(['theme_stored'], function(theme) {
        theme_DS = theme.theme_stored
        if(!theme_DS){
            theme='#BFBFBF'
        }
        else{
            theme=theme_DS
        }
        $('#theme_choice').val(theme)

    });

    ///////////////
    // lowercase //
    ///////////////

    // a
    chrome.storage.sync.get(['label_a_stored'], function(label_a) {
        label_a_DS = label_a.label_a_stored
        if(!label_a_DS){
            label_a=''
        }
        else{
            label_a=label_a_DS
            $('#ld-a').text(label_a) // updates dock
            $('#ld_a_label_input').val(label_a) // updates input table, within settings
        }
    });

    // b
    chrome.storage.sync.get(['label_b_stored'], function(label_b) {
        label_b_DS = label_b.label_b_stored
        if(!label_b_DS){
            label_b=''
        }
        else{
            label_b=label_b_DS
            $('#ld-b').text(label_b)
            $('#ld_b_label_input').val(label_b)
        }
    });

    // c
    chrome.storage.sync.get(['label_c_stored'], function(label_c) {
        label_c_DS = label_c.label_c_stored
        if(!label_c_DS){
            label_c=''
        }
        else{
            label_c=label_c_DS
            $('#ld-c').text(label_c)
            $('#ld_c_label_input').val(label_c)
        }
    });

    // d
    chrome.storage.sync.get(['label_d_stored'], function(label_d) {
        label_d_DS = label_d.label_d_stored
        if(!label_d_DS){
            label_d=''
        }
        else{
            label_d=label_d_DS
            $('#ld-d').text(label_d)
            $('#ld_d_label_input').val(label_d)
        }
    });

    // e
    chrome.storage.sync.get(['label_e_stored'], function(label_e) {
        label_e_DS = label_e.label_e_stored
        if(!label_e_DS){
            label_e=''
        }
        else{
            label_e=label_e_DS
            $('#ld-e').text(label_e)
            $('#ld_e_label_input').val(label_e)
        }
    });

    // f
    chrome.storage.sync.get(['label_f_stored'], function(label_f) {
        label_f_DS = label_f.label_f_stored
        if(!label_f_DS){
            label_f=''
        }
        else{
            label_f=label_f_DS
            $('#ld-f').text(label_f)
            $('#ld_f_label_input').val(label_f) 
        }
    });

    // g
    chrome.storage.sync.get(['label_g_stored'], function(label_g) {
        label_g_DS = label_g.label_g_stored
        if(!label_g_DS){
            label_g=''
        }
        else{
            label_g=label_g_DS
            $('#ld-g').text(label_g)
            $('#ld_g_label_input').val(label_g)
        }
    });

    // h
    chrome.storage.sync.get(['label_h_stored'], function(label_h) {
        label_h_DS = label_h.label_h_stored
        if(!label_h_DS){
            label_h=''
        }
        else{
            label_h=label_h_DS
            $('#ld-h').text(label_h)
            $('#ld_h_label_input').val(label_h) 
        }
    });

    // i
    chrome.storage.sync.get(['label_i_stored'], function(label_i) {
        label_i_DS = label_i.label_i_stored
        if(!label_i_DS){
            label_i=''
        }
        else{
            label_i=label_i_DS
            $('#ld-i').text(label_i)
            $('#ld_i_label_input').val(label_i) 
        }
    });

    // j
    chrome.storage.sync.get(['label_j_stored'], function(label_j) {
        label_j_DS = label_j.label_j_stored
        if(!label_j_DS){
            label_j=''
        }
        else{
            label_j=label_j_DS
            $('#ld-j').text(label_j)
            $('#ld_j_label_input').val(label_j) 
        }
    });

    // k
    chrome.storage.sync.get(['label_k_stored'], function(label_k) {
        label_k_DS = label_k.label_k_stored
        if(!label_k_DS){
            label_k=''
        }
        else{
            label_k=label_k_DS
            $('#ld-k').text(label_k)
            $('#ld_k_label_input').val(label_k) 
        }
    });

    // l
    chrome.storage.sync.get(['label_l_stored'], function(label_l) {
        label_l_DS = label_l.label_l_stored
        if(!label_l_DS){
            label_l=''
        }
        else{
            label_l=label_l_DS
            $('#ld-l').text(label_l)
            $('#ld_l_label_input').val(label_l) 
        }
    });

    // m
    chrome.storage.sync.get(['label_m_stored'], function(label_m) {
        label_m_DS = label_m.label_m_stored
        if(!label_m_DS){
            label_m=''
        }
        else{
            label_m=label_m_DS
            $('#ld-m').text(label_m)
            $('#ld_m_label_input').val(label_m) 
        }
    });

    // n
    chrome.storage.sync.get(['label_n_stored'], function(label_n) {
        label_n_DS = label_n.label_n_stored
        if(!label_n_DS){
            label_n=''
        }
        else{
            label_n=label_n_DS
            $('#ld-n').text(label_n)
            $('#ld_n_label_input').val(label_n) 
        }
    });

    // o
    chrome.storage.sync.get(['label_o_stored'], function(label_o) {
        label_o_DS = label_o.label_o_stored
        if(!label_o_DS){
            label_o=''
        }
        else{
            label_o=label_o_DS
            $('#ld-o').text(label_o)
            $('#ld_o_label_input').val(label_o) 
        }
    });

    // p
    chrome.storage.sync.get(['label_p_stored'], function(label_p) {
        label_p_DS = label_p.label_p_stored
        if(!label_p_DS){
            label_p=''
        }
        else{
            label_p=label_p_DS
            $('#ld-p').text(label_p)
            $('#ld_p_label_input').val(label_p) 
        }
    });

    // q
    chrome.storage.sync.get(['label_q_stored'], function(label_q) {
        label_q_DS = label_q.label_q_stored
        if(!label_q_DS){
            label_q=''
        }
        else{
            label_q=label_q_DS
            $('#ld-q').text(label_q)
            $('#ld_q_label_input').val(label_q) 
        }
    });

    // r
    chrome.storage.sync.get(['label_r_stored'], function(label_r) {
        label_r_DS = label_r.label_r_stored
        if(!label_r_DS){
            label_r=''
        }
        else{
            label_r=label_r_DS
            $('#ld-r').text(label_r)
            $('#ld_r_label_input').val(label_r) 
        }
    });

    // s
    chrome.storage.sync.get(['label_s_stored'], function(label_s) {
        label_s_DS = label_s.label_s_stored
        if(!label_s_DS){
            label_s=''
        }
        else{
            label_s=label_s_DS
            $('#ld-s').text(label_s)
            $('#ld_s_label_input').val(label_s) 
        }
    });

    // t
    chrome.storage.sync.get(['label_t_stored'], function(label_t) {
        label_t_DS = label_t.label_t_stored
        if(!label_t_DS){
            label_t=''
        }
        else{
            label_t=label_t_DS
            $('#ld-t').text(label_t)
            $('#ld_t_label_input').val(label_t) 
        }
    });

    // u
    chrome.storage.sync.get(['label_u_stored'], function(label_u) {
        label_u_DS = label_u.label_u_stored
        if(!label_u_DS){
            label_u=''
        }
        else{
            label_u=label_u_DS
            $('#ld-u').text(label_u)
            $('#ld_u_label_input').val(label_u) 
        }
    });

    // v
    chrome.storage.sync.get(['label_v_stored'], function(label_v) {
        label_v_DS = label_v.label_v_stored
        if(!label_v_DS){
            label_v=''
        }
        else{
            label_v=label_v_DS
            $('#ld-v').text(label_v)
            $('#ld_v_label_input').val(label_v) 
        }
    });

    // w
    chrome.storage.sync.get(['label_w_stored'], function(label_w) {
        label_w_DS = label_w.label_w_stored
        if(!label_w_DS){
            label_w=''
        }
        else{
            label_w=label_w_DS
            $('#ld-w').text(label_w)
            $('#ld_w_label_input').val(label_w) 
        }
    });

    // x
    chrome.storage.sync.get(['label_x_stored'], function(label_x) {
        label_x_DS = label_x.label_x_stored
        if(!label_x_DS){
            label_x=''
        }
        else{
            label_x=label_x_DS
            $('#ld-x').text(label_x)
            $('#ld_x_label_input').val(label_x) 
        }
    });

    // y
    chrome.storage.sync.get(['label_y_stored'], function(label_y) {
        label_y_DS = label_y.label_y_stored
        if(!label_y_DS){
            label_y=''
        }
        else{
            label_y=label_y_DS
            $('#ld-y').text(label_y)
            $('#ld_y_label_input').val(label_y) 
        }
    });

    // z
    chrome.storage.sync.get(['label_z_stored'], function(label_z) {
        label_z_DS = label_z.label_z_stored
        if(!label_z_DS){
            label_z=''
        }
        else{
            label_z=label_z_DS
            $('#ld-z').text(label_z)
            $('#ld_z_label_input').val(label_z) 
        }
    });

    // ///////////////
    // // UPPERCASE //
    // ///////////////

    // A
    chrome.storage.sync.get(['label_A_stored'], function(label_A) {
        label_A_DS = label_A.label_A_stored
        if(!label_A_DS){
            label_A=''
        }
        else{
            label_A=label_A_DS
            $('#ld-A').text(label_A)
            $('#ld_A_label_input').val(label_A) 
        }
    });

    // B
    chrome.storage.sync.get(['label_B_stored'], function(label_B) {
        label_B_DS = label_B.label_B_stored
        if(!label_B_DS){
            label_B=''
        }
        else{
            label_B=label_B_DS
            $('#ld-B').text(label_B)
            $('#ld_B_label_input').val(label_B) 
        }
    });

    // C
    chrome.storage.sync.get(['label_C_stored'], function(label_C) {
        label_C_DS = label_C.label_C_stored
        if(!label_C_DS){
            label_C=''
        }
        else{
            label_C=label_C_DS
            $('#ld-C').text(label_C)
            $('#ld_C_label_input').val(label_C) 
        }
    });

    // D
    chrome.storage.sync.get(['label_D_stored'], function(label_D) {
        label_D_DS = label_D.label_D_stored
        if(!label_D_DS){
            label_D=''
        }
        else{
            label_D=label_D_DS
            $('#ld-D').text(label_D)
            $('#ld_D_label_input').val(label_D) 
        }
    });

    // E
    chrome.storage.sync.get(['label_E_stored'], function(label_E) {
        label_E_DS = label_E.label_E_stored
        if(!label_E_DS){
            label_E=''
        }
        else{
            label_E=label_E_DS
            $('#ld-E').text(label_E)
            $('#ld_E_label_input').val(label_E) 
        }
    });

    // F
    chrome.storage.sync.get(['label_F_stored'], function(label_F) {
        label_F_DS = label_F.label_F_stored
        if(!label_F_DS){
            label_F=''
        }
        else{
            label_F=label_F_DS
            $('#ld-F').text(label_F)
            $('#ld_F_label_input').val(label_F) 
        }
    });

    // G
    chrome.storage.sync.get(['label_G_stored'], function(label_G) {
        label_G_DS = label_G.label_G_stored
        if(!label_G_DS){
            label_G=''
        }
        else{
            label_G=label_G_DS
            $('#ld-G').text(label_G)
            $('#ld_G_label_input').val(label_G) 
        }
    });

    // H
    chrome.storage.sync.get(['label_H_stored'], function(label_H) {
        label_H_DS = label_H.label_H_stored
        if(!label_H_DS){
            label_H=''
        }
        else{
            label_H=label_H_DS
            $('#ld-H').text(label_H)
            $('#ld_H_label_input').val(label_H) 
        }
    });

    // I
    chrome.storage.sync.get(['label_I_stored'], function(label_I) {
        label_I_DS = label_I.label_I_stored
        if(!label_I_DS){
            label_I=''
        }
        else{
            label_I=label_I_DS
            $('#ld-I').text(label_I)
            $('#ld_I_label_input').val(label_I) 
        }
    });

    // J
    chrome.storage.sync.get(['label_J_stored'], function(label_J) {
        label_J_DS = label_J.label_J_stored
        if(!label_J_DS){
            label_J=''
        }
        else{
            label_J=label_J_DS
            $('#ld-J').text(label_J)
            $('#ld_J_label_input').val(label_J) 
        }
    });

    // K
    chrome.storage.sync.get(['label_K_stored'], function(label_K) {
        label_K_DS = label_K.label_K_stored
        if(!label_K_DS){
            label_K=''
        }
        else{
            label_K=label_K_DS
            $('#ld-K').text(label_K)
            $('#ld_K_label_input').val(label_K) 
        }
    });

    // L
    chrome.storage.sync.get(['label_L_stored'], function(label_L) {
        label_L_DS = label_L.label_L_stored
        if(!label_L_DS){
            label_L=''
        }
        else{
            label_L=label_L_DS
            $('#ld-L').text(label_L)
            $('#ld_L_label_input').val(label_L) 
        }
    });

    // M
    chrome.storage.sync.get(['label_M_stored'], function(label_M) {
        label_M_DS = label_M.label_M_stored
        if(!label_M_DS){
            label_M=''
        }
        else{
            label_M=label_M_DS
            $('#ld-M').text(label_M)
            $('#ld_M_label_input').val(label_M) 
        }
    });

    // N
    chrome.storage.sync.get(['label_N_stored'], function(label_N) {
        label_N_DS = label_N.label_N_stored
        if(!label_N_DS){
            label_N=''
        }
        else{
            label_N=label_N_DS
            $('#ld-N').text(label_N)
            $('#ld_N_label_input').val(label_N) 
        }
    });

    // O
    chrome.storage.sync.get(['label_O_stored'], function(label_O) {
        label_O_DS = label_O.label_O_stored
        if(!label_O_DS){
            label_O=''
        }
        else{
            label_O=label_O_DS
            $('#ld-O').text(label_O)
            $('#ld_O_label_input').val(label_O) 
        }
    });

    // P
    chrome.storage.sync.get(['label_P_stored'], function(label_P) {
        label_P_DS = label_P.label_P_stored
        if(!label_P_DS){
            label_P=''
        }
        else{
            label_P=label_P_DS
            $('#ld-P').text(label_P)
            $('#ld_P_label_input').val(label_P) 
        }
    });

    // Q
    chrome.storage.sync.get(['label_Q_stored'], function(label_Q) {
        label_Q_DS = label_Q.label_Q_stored
        if(!label_Q_DS){
            label_Q=''
        }
        else{
            label_Q=label_Q_DS
            $('#ld-Q').text(label_Q)
            $('#ld_Q_label_input').val(label_Q) 
        }
    });

    // R
    chrome.storage.sync.get(['label_R_stored'], function(label_R) {
        label_R_DS = label_R.label_R_stored
        if(!label_R_DS){
            label_R=''
        }
        else{
            label_R=label_R_DS
            $('#ld-R').text(label_R)
            $('#ld_R_label_input').val(label_R) 
        }
    });

    // S
    chrome.storage.sync.get(['label_S_stored'], function(label_S) {
        label_S_DS = label_S.label_S_stored
        if(!label_S_DS){
            label_S=''
        }
        else{
            label_S=label_S_DS
            $('#ld-S').text(label_S)
            $('#ld_S_label_input').val(label_S) 
        }
    });

    // T
    chrome.storage.sync.get(['label_T_stored'], function(label_T) {
        label_T_DS = label_T.label_T_stored
        if(!label_T_DS){
            label_T=''
        }
        else{
            label_T=label_T_DS
            $('#ld-T').text(label_T)
            $('#ld_T_label_input').val(label_T) 
        }
    });

    // U
    chrome.storage.sync.get(['label_U_stored'], function(label_U) {
        label_U_DS = label_U.label_U_stored
        if(!label_U_DS){
            label_U=''
        }
        else{
            label_U=label_U_DS
            $('#ld-U').text(label_U)
            $('#ld_U_label_input').val(label_U) 
        }
    });

    // V
    chrome.storage.sync.get(['label_V_stored'], function(label_V) {
        label_V_DS = label_V.label_V_stored
        if(!label_V_DS){
            label_V=''
        }
        else{
            label_V=label_V_DS
            $('#ld-V').text(label_V)
            $('#ld_V_label_input').val(label_V) 
        }
    });

    // W
    chrome.storage.sync.get(['label_W_stored'], function(label_W) {
        label_W_DS = label_W.label_W_stored
        if(!label_W_DS){
            label_W=''
        }
        else{
            label_W=label_W_DS
            $('#ld-W').text(label_W)
            $('#ld_W_label_input').val(label_W) 
        }
    });

    // X
    chrome.storage.sync.get(['label_X_stored'], function(label_X) {
        label_X_DS = label_X.label_X_stored
        if(!label_X_DS){
            label_X=''
        }
        else{
            label_X=label_X_DS
            $('#ld-X').text(label_X)
            $('#ld_X_label_input').val(label_X) 
        }
    });

    // Y
    chrome.storage.sync.get(['label_Y_stored'], function(label_Y) {
        label_Y_DS = label_Y.label_Y_stored
        if(!label_Y_DS){
            label_Y=''
        }
        else{
            label_Y=label_Y_DS
            $('#ld-Y').text(label_Y)
            $('#ld_Y_label_input').val(label_Y) 
        }
    });

    // Z
    chrome.storage.sync.get(['label_Z_stored'], function(label_Z) {
        label_Z_DS = label_Z.label_Z_stored
        if(!label_Z_DS){
            label_Z=''
        }
        else{
            label_Z=label_Z_DS
            $('#ld-Z').text(label_Z)
            $('#ld_Z_label_input').val(label_Z) 
        }
    });

    // /////////////
    // // numbers //
    // /////////////

    // 0
    chrome.storage.sync.get(['label_0_stored'], function(label_0) {
        label_0_DS = label_0.label_0_stored
        if(!label_0_DS){
            label_0=''
        }
        else{
            label_0=label_0_DS
            $('#rd-0').text(label_0)
            $('#rd_0_label_input').val(label_0) 
        }
    });

    // 1
    chrome.storage.sync.get(['label_1_stored'], function(label_1) {
        label_1_DS = label_1.label_1_stored
        if(!label_1_DS){
            label_1=''
        }
        else{
            label_1=label_1_DS
            $('#rd-1').text(label_1)
            $('#rd_1_label_input').val(label_1) 
        }
    });

    // 2
    chrome.storage.sync.get(['label_2_stored'], function(label_2) {
        label_2_DS = label_2.label_2_stored
        if(!label_2_DS){
            label_2=''
        }
        else{
            label_2=label_2_DS
            $('#rd-2').text(label_2)
            $('#rd_2_label_input').val(label_2) 
        }
    });

    // 3
    chrome.storage.sync.get(['label_3_stored'], function(label_3) {
        label_3_DS = label_3.label_3_stored
        if(!label_3_DS){
            label_3=''
        }
        else{
            label_3=label_3_DS
            $('#rd-3').text(label_3)
            $('#rd_3_label_input').val(label_3) 
        }
    });

    // 4
    chrome.storage.sync.get(['label_4_stored'], function(label_4) {
        label_4_DS = label_4.label_4_stored
        if(!label_4_DS){
            label_4=''
        }
        else{
            label_4=label_4_DS
            $('#rd-4').text(label_4)
            $('#rd_4_label_input').val(label_4) 
        }
    });

    // 5
    chrome.storage.sync.get(['label_5_stored'], function(label_5) {
        label_5_DS = label_5.label_5_stored
        if(!label_5_DS){
            label_5=''
        }
        else{
            label_5=label_5_DS
            $('#rd-5').text(label_5)
            $('#rd_5_label_input').val(label_5) 
        }
    });

    // 6
    chrome.storage.sync.get(['label_6_stored'], function(label_6) {
        label_6_DS = label_6.label_6_stored
        if(!label_6_DS){
            label_6=''
        }
        else{
            label_6=label_6_DS
            $('#rd-6').text(label_6)
            $('#rd_6_label_input').val(label_6) 
        }
    });

    // 7
    chrome.storage.sync.get(['label_7_stored'], function(label_7) {
        label_7_DS = label_7.label_7_stored
        if(!label_7_DS){
            label_7=''
        }
        else{
            label_7=label_7_DS
            $('#rd-7').text(label_7)
            $('#rd_7_label_input').val(label_7) 
        }
    });

    // 8
    chrome.storage.sync.get(['label_8_stored'], function(label_8) {
        label_8_DS = label_8.label_8_stored
        if(!label_8_DS){
            label_8=''
        }
        else{
            label_8=label_8_DS
            $('#rd-8').text(label_8)
            $('#rd_8_label_input').val(label_8) 
        }
    });

    // 9
    chrome.storage.sync.get(['label_9_stored'], function(label_9) {
        label_9_DS = label_9.label_9_stored
        if(!label_9_DS){
            label_9=''
        }
        else{
            label_9=label_9_DS
            $('#rd-9').text(label_9)
            $('#rd_9_label_input').val(label_9) 
        }
    });


    // WEBSITE // 

    // ///////////////
    // // lowercase //
    // ///////////////

    // a
    chrome.storage.sync.get(['website_a_stored'], function(website_a) {
        website_a_DS = website_a.website_a_stored
        if(!website_a_DS){
            website_a=''
        }
        else{
            website_a=website_a_DS
            $('#ld_a_website_input').val(website_a) // updates input table, within settings
        }
    });

    // b
    chrome.storage.sync.get(['website_b_stored'], function(website_b) {
        website_b_DS = website_b.website_b_stored
        if(!website_b_DS){
            website_b=''
        }
        else{
            website_b=website_b_DS
            $('#ld_b_website_input').val(website_b) 
        }
    });

    // c
    chrome.storage.sync.get(['website_c_stored'], function(website_c) {
        website_c_DS = website_c.website_c_stored
        if(!website_c_DS){
            website_c=''
        }
        else{
            website_c=website_c_DS
            $('#ld_c_website_input').val(website_c) 
        }
    });


    // d
    chrome.storage.sync.get(['website_d_stored'], function(website_d) {
        website_d_DS = website_d.website_d_stored
        if(!website_d_DS){
            website_d=''
        }
        else{
            website_d=website_d_DS
            $('#ld_d_website_input').val(website_d)
        }
    });


    // d
    chrome.storage.sync.get(['label_d_stored'], function(label_d) {
        label_d_DS = label_d.label_d_stored
        if(!label_d_DS){
            label_d=''
        }
        else{
            label_d=label_d_DS
            $('#ld_d_label_input').val(label_d)
        }
    });

    // e
    chrome.storage.sync.get(['website_e_stored'], function(website_e) {
        website_e_DS = website_e.website_e_stored
        if(!website_e_DS){
            website_e=''
        }
        else{
            website_e=website_e_DS
            $('#ld_e_website_input').val(website_e)
        }
    });

    // f
    chrome.storage.sync.get(['website_f_stored'], function(website_f) {
        website_f_DS = website_f.website_f_stored
        if(!website_f_DS){
            website_f=''
        }
        else{
            website_f=website_f_DS
            $('#ld_f_website_input').val(website_f) 
        }
    });

    // g
    chrome.storage.sync.get(['website_g_stored'], function(website_g) {
        website_g_DS = website_g.website_g_stored
        if(!website_g_DS){
            website_g=''
        }
        else{
            website_g=website_g_DS
            $('#ld_g_website_input').val(website_g)
        }
    });

    // h
    chrome.storage.sync.get(['website_h_stored'], function(website_h) {
        website_h_DS = website_h.website_h_stored
        if(!website_h_DS){
            website_h=''
        }
        else{
            website_h=website_h_DS
            $('#ld_h_website_input').val(website_h) 
        }
    });

    // i
    chrome.storage.sync.get(['website_i_stored'], function(website_i) {
        website_i_DS = website_i.website_i_stored
        if(!website_i_DS){
            website_i=''
        }
        else{
            website_i=website_i_DS
            $('#ld_i_website_input').val(website_i) 
        }
    });

    // j
    chrome.storage.sync.get(['website_j_stored'], function(website_j) {
        website_j_DS = website_j.website_j_stored
        if(!website_j_DS){
            website_j=''
        }
        else{
            website_j=website_j_DS
            $('#ld_j_website_input').val(website_j) 
        }
    });

    // k
    chrome.storage.sync.get(['website_k_stored'], function(website_k) {
        website_k_DS = website_k.website_k_stored
        if(!website_k_DS){
            website_k=''
        }
        else{
            website_k=website_k_DS
            $('#ld_k_website_input').val(website_k) 
        }
    });

    // l
    chrome.storage.sync.get(['website_l_stored'], function(website_l) {
        website_l_DS = website_l.website_l_stored
        if(!website_l_DS){
            website_l=''
        }
        else{
            website_l=website_l_DS
            $('#ld_l_website_input').val(website_l) 
        }
    });

    // m
    chrome.storage.sync.get(['website_m_stored'], function(website_m) {
        website_m_DS = website_m.website_m_stored
        if(!website_m_DS){
            website_m=''
        }
        else{
            website_m=website_m_DS
            $('#ld_m_website_input').val(website_m) 
        }
    });

    // n
    chrome.storage.sync.get(['website_n_stored'], function(website_n) {
        website_n_DS = website_n.website_n_stored
        if(!website_n_DS){
            website_n=''
        }
        else{
            website_n=website_n_DS
            $('#ld_n_website_input').val(website_n) 
        }
    });

    // o
    chrome.storage.sync.get(['website_o_stored'], function(website_o) {
        website_o_DS = website_o.website_o_stored
        if(!website_o_DS){
            website_o=''
        }
        else{
            website_o=website_o_DS
            $('#ld_o_website_input').val(website_o) 
        }
    });

    // p
    chrome.storage.sync.get(['website_p_stored'], function(website_p) {
        website_p_DS = website_p.website_p_stored
        if(!website_p_DS){
            website_p=''
        }
        else{
            website_p=website_p_DS
            $('#ld_p_website_input').val(website_p) 
        }
    });

    // q
    chrome.storage.sync.get(['website_q_stored'], function(website_q) {
        website_q_DS = website_q.website_q_stored
        if(!website_q_DS){
            website_q=''
        }
        else{
            website_q=website_q_DS
            $('#ld_q_website_input').val(website_q) 
        }
    });

    // r
    chrome.storage.sync.get(['website_r_stored'], function(website_r) {
        website_r_DS = website_r.website_r_stored
        if(!website_r_DS){
            website_r=''
        }
        else{
            website_r=website_r_DS
            $('#ld_r_website_input').val(website_r) 
        }
    });

    // s
    chrome.storage.sync.get(['website_s_stored'], function(website_s) {
        website_s_DS = website_s.website_s_stored
        if(!website_s_DS){
            website_s=''
        }
        else{
            website_s=website_s_DS
            $('#ld_s_website_input').val(website_s) 
        }
    });

    // t
    chrome.storage.sync.get(['website_t_stored'], function(website_t) {
        website_t_DS = website_t.website_t_stored
        if(!website_t_DS){
            website_t=''
        }
        else{
            website_t=website_t_DS
            $('#ld_t_website_input').val(website_t) 
        }
    });

    // u
    chrome.storage.sync.get(['website_u_stored'], function(website_u) {
        website_u_DS = website_u.website_u_stored
        if(!website_u_DS){
            website_u=''
        }
        else{
            website_u=website_u_DS
            $('#ld_u_website_input').val(website_u) 
        }
    });

    // v
    chrome.storage.sync.get(['website_v_stored'], function(website_v) {
        website_v_DS = website_v.website_v_stored
        if(!website_v_DS){
            website_v=''
        }
        else{
            website_v=website_v_DS
            $('#ld_v_website_input').val(website_v) 
        }
    });

    // w
    chrome.storage.sync.get(['website_w_stored'], function(website_w) {
        website_w_DS = website_w.website_w_stored
        if(!website_w_DS){
            website_w=''
        }
        else{
            website_w=website_w_DS
            $('#ld_w_website_input').val(website_w) 
        }
    });

    // x
    chrome.storage.sync.get(['website_x_stored'], function(website_x) {
        website_x_DS = website_x.website_x_stored
        if(!website_x_DS){
            website_x=''
        }
        else{
            website_x=website_x_DS
            $('#ld_x_website_input').val(website_x) 
        }
    });

    // y
    chrome.storage.sync.get(['website_y_stored'], function(website_y) {
        website_y_DS = website_y.website_y_stored
        if(!website_y_DS){
            website_y=''
        }
        else{
            website_y=website_y_DS
            $('#ld_y_website_input').val(website_y) 
        }
    });

    // z
    chrome.storage.sync.get(['website_z_stored'], function(website_z) {
        website_z_DS = website_z.website_z_stored
        if(!website_z_DS){
            website_z=''
        }
        else{
            website_z=website_z_DS
            $('#ld_z_website_input').val(website_z) 
        }
    });

    // ///////////////
    // // UPPERCASE //
    // ///////////////

    // A
    chrome.storage.sync.get(['website_A_stored'], function(website_A) {
        website_A_DS = website_A.website_A_stored
        if(!website_A_DS){
            website_A=''
        }
        else{
            website_A=website_A_DS
            $('#ld_A_website_input').val(website_A) 
        }
    });

    // B
    chrome.storage.sync.get(['website_B_stored'], function(website_B) {
        website_B_DS = website_B.website_B_stored
        if(!website_B_DS){
            website_B=''
        }
        else{
            website_B=website_B_DS
            $('#ld_B_website_input').val(website_B) 
        }
    });

    // C
    chrome.storage.sync.get(['website_C_stored'], function(website_C) {
        website_C_DS = website_C.website_C_stored
        if(!website_C_DS){
            website_C=''
        }
        else{
            website_C=website_C_DS
            $('#ld_C_website_input').val(website_C) 
        }
    });

    // D
    chrome.storage.sync.get(['website_D_stored'], function(website_D) {
        website_D_DS = website_D.website_D_stored
        if(!website_D_DS){
            website_D=''
        }
        else{
            website_D=website_D_DS
            $('#ld_D_website_input').val(website_D) 
        }
    });

    // E
    chrome.storage.sync.get(['website_E_stored'], function(website_E) {
        website_E_DS = website_E.website_E_stored
        if(!website_E_DS){
            website_E=''
        }
        else{
            website_E=website_E_DS
            $('#ld_E_website_input').val(website_E) 
        }
    });

    // F
    chrome.storage.sync.get(['website_F_stored'], function(website_F) {
        website_F_DS = website_F.website_F_stored
        if(!website_F_DS){
            website_F=''
        }
        else{
            website_F=website_F_DS
            $('#ld_F_website_input').val(website_F) 
        }
    });

    // G
    chrome.storage.sync.get(['website_G_stored'], function(website_G) {
        website_G_DS = website_G.website_G_stored
        if(!website_G_DS){
            website_G=''
        }
        else{
            website_G=website_G_DS
            $('#ld_G_website_input').val(website_G) 
        }
    });

    // H
    chrome.storage.sync.get(['website_H_stored'], function(website_H) {
        website_H_DS = website_H.website_H_stored
        if(!website_H_DS){
            website_H=''
        }
        else{
            website_H=website_H_DS
            $('#ld_H_website_input').val(website_H) 
        }
    });

    // I
    chrome.storage.sync.get(['website_I_stored'], function(website_I) {
        website_I_DS = website_I.website_I_stored
        if(!website_I_DS){
            website_I=''
        }
        else{
            website_I=website_I_DS
            $('#ld_I_website_input').val(website_I) 
        }
    });

    // J
    chrome.storage.sync.get(['website_J_stored'], function(website_J) {
        website_J_DS = website_J.website_J_stored
        if(!website_J_DS){
            website_J=''
        }
        else{
            website_J=website_J_DS
            $('#ld_J_website_input').val(website_J) 
        }
    });

    // K
    chrome.storage.sync.get(['website_K_stored'], function(website_K) {
        website_K_DS = website_K.website_K_stored
        if(!website_K_DS){
            website_K=''
        }
        else{
            website_K=website_K_DS
            $('#ld_K_website_input').val(website_K) 
        }
    });

    // L
    chrome.storage.sync.get(['website_L_stored'], function(website_L) {
        website_L_DS = website_L.website_L_stored
        if(!website_L_DS){
            website_L=''
        }
        else{
            website_L=website_L_DS
            $('#ld_L_website_input').val(website_L) 
        }
    });

    // M
    chrome.storage.sync.get(['website_M_stored'], function(website_M) {
        website_M_DS = website_M.website_M_stored
        if(!website_M_DS){
            website_M=''
        }
        else{
            website_M=website_M_DS
            $('#ld_M_website_input').val(website_M) 
        }
    });

    // N
    chrome.storage.sync.get(['website_N_stored'], function(website_N) {
        website_N_DS = website_N.website_N_stored
        if(!website_N_DS){
            website_N=''
        }
        else{
            website_N=website_N_DS
            $('#ld_N_website_input').val(website_N) 
        }
    });

    // O
    chrome.storage.sync.get(['website_O_stored'], function(website_O) {
        website_O_DS = website_O.website_O_stored
        if(!website_O_DS){
            website_O=''
        }
        else{
            website_O=website_O_DS
            $('#ld_O_website_input').val(website_O) 
        }
    });

    // P
    chrome.storage.sync.get(['website_P_stored'], function(website_P) {
        website_P_DS = website_P.website_P_stored
        if(!website_P_DS){
            website_P=''
        }
        else{
            website_P=website_P_DS
            $('#ld_P_website_input').val(website_P) 
        }
    });

    // Q
    chrome.storage.sync.get(['website_Q_stored'], function(website_Q) {
        website_Q_DS = website_Q.website_Q_stored
        if(!website_Q_DS){
            website_Q=''
        }
        else{
            website_Q=website_Q_DS
            $('#ld_Q_website_input').val(website_Q) 
        }
    });

    // R
    chrome.storage.sync.get(['website_R_stored'], function(website_R) {
        website_R_DS = website_R.website_R_stored
        if(!website_R_DS){
            website_R=''
        }
        else{
            website_R=website_R_DS
            $('#ld_R_website_input').val(website_R) 
        }
    });

    // S
    chrome.storage.sync.get(['website_S_stored'], function(website_S) {
        website_S_DS = website_S.website_S_stored
        if(!website_S_DS){
            website_S=''
        }
        else{
            website_S=website_S_DS
            $('#ld_S_website_input').val(website_S) 
        }
    });

    // T
    chrome.storage.sync.get(['website_T_stored'], function(website_T) {
        website_T_DS = website_T.website_T_stored
        if(!website_T_DS){
            website_T=''
        }
        else{
            website_T=website_T_DS
            $('#ld_T_website_input').val(website_T) 
        }
    });

    // U
    chrome.storage.sync.get(['website_U_stored'], function(website_U) {
        website_U_DS = website_U.website_U_stored
        if(!website_U_DS){
            website_U=''
        }
        else{
            website_U=website_U_DS
            $('#ld_U_website_input').val(website_U) 
        }
    });

    // V
    chrome.storage.sync.get(['website_V_stored'], function(website_V) {
        website_V_DS = website_V.website_V_stored
        if(!website_V_DS){
            website_V=''
        }
        else{
            website_V=website_V_DS
            $('#ld_V_website_input').val(website_V) 
        }
    });

    // W
    chrome.storage.sync.get(['website_W_stored'], function(website_W) {
        website_W_DS = website_W.website_W_stored
        if(!website_W_DS){
            website_W=''
        }
        else{
            website_W=website_W_DS
            $('#ld_W_website_input').val(website_W) 
        }
    });

    // X
    chrome.storage.sync.get(['website_X_stored'], function(website_X) {
        website_X_DS = website_X.website_X_stored
        if(!website_X_DS){
            website_X=''
        }
        else{
            website_X=website_X_DS
            $('#ld_X_website_input').val(website_X) 
        }
    });

    // Y
    chrome.storage.sync.get(['website_Y_stored'], function(website_Y) {
        website_Y_DS = website_Y.website_Y_stored
        if(!website_Y_DS){
            website_Y=''
        }
        else{
            website_Y=website_Y_DS
            $('#ld_Y_website_input').val(website_Y) 
        }
    });

    // Z
    chrome.storage.sync.get(['website_Z_stored'], function(website_Z) {
        website_Z_DS = website_Z.website_Z_stored
        if(!website_Z_DS){
            website_Z=''
        }
        else{
            website_Z=website_Z_DS
            $('#ld_Z_website_input').val(website_Z) 
        }
    });

    // /////////////
    // // numbers //
    // /////////////

    ///////
    // 1 //
    ///////
    // website_1_1
    chrome.storage.sync.get(['website_1_1_stored'], function(website_1_1) {
        website_1_1_DS = website_1_1.website_1_1_stored
        if(!website_1_1_DS){
            website_1_1=''
        }
        else{
            website_1_1=website_1_1_DS
            $('#rd_1_input_1').val(website_1_1) 
        }
    });
    // website_1_2
    chrome.storage.sync.get(['website_1_2_stored'], function(website_1_2) {
        website_1_2_DS = website_1_2.website_1_2_stored
        if(!website_1_2_DS){
            website_1_2=''
        }
        else{
            website_1_2=website_1_2_DS
            $('#rd_1_input_2').val(website_1_2) 
        }
    });
    // website_1_3
    chrome.storage.sync.get(['website_1_3_stored'], function(website_1_3) {
        website_1_3_DS = website_1_3.website_1_3_stored
        if(!website_1_3_DS){
            website_1_3=''
        }
        else{
            website_1_3=website_1_3_DS
            $('#rd_1_input_3').val(website_1_3) 
        }
    });
    // website_1_4
    chrome.storage.sync.get(['website_1_4_stored'], function(website_1_4) {
        website_1_4_DS = website_1_4.website_1_4_stored
        if(!website_1_4_DS){
            website_1_4=''
        }
        else{
            website_1_4=website_1_4_DS
            $('#rd_1_input_4').val(website_1_4) 
        }
    });
    // website_1_5
    chrome.storage.sync.get(['website_1_5_stored'], function(website_1_5) {
        website_1_5_DS = website_1_5.website_1_5_stored
        if(!website_1_5_DS){
            website_1_5=''
        }
        else{
            website_1_5=website_1_5_DS
            $('#rd_1_input_5').val(website_1_5) 
        }
    });
    // website_1_6
    chrome.storage.sync.get(['website_1_6_stored'], function(website_1_6) {
        website_1_6_DS = website_1_6.website_1_6_stored
        if(!website_1_6_DS){
            website_1_6=''
        }
        else{
            website_1_6=website_1_6_DS
            $('#rd_1_input_6').val(website_1_6) 
        }
    });
    // website_1_7
    chrome.storage.sync.get(['website_1_7_stored'], function(website_1_7) {
        website_1_7_DS = website_1_7.website_1_7_stored
        if(!website_1_7_DS){
            website_1_7=''
        }
        else{
            website_1_7=website_1_7_DS
            $('#rd_1_input_7').val(website_1_7) 
        }
    });
    // website_1_8
    chrome.storage.sync.get(['website_1_8_stored'], function(website_1_8) {
        website_1_8_DS = website_1_8.website_1_8_stored
        if(!website_1_8_DS){
            website_1_8=''
        }
        else{
            website_1_8=website_1_8_DS
            $('#rd_1_input_8').val(website_1_8) 
        }
    });
    // website_1_9
    chrome.storage.sync.get(['website_1_9_stored'], function(website_1_9) {
        website_1_9_DS = website_1_9.website_1_9_stored
        if(!website_1_9_DS){
            website_1_9=''
        }
        else{
            website_1_9=website_1_9_DS
            $('#rd_1_input_9').val(website_1_9) 
        }
    });
    // website_1_10
    chrome.storage.sync.get(['website_1_10_stored'], function(website_1_10) {
        website_1_10_DS = website_1_10.website_1_10_stored
        if(!website_1_10_DS){
            website_1_10=''
        }
        else{
            website_1_10=website_1_10_DS
            $('#rd_1_input_10').val(website_1_10) 
        }
    });

    ///////
    // 2 //
    ///////
    // website_2_1
    chrome.storage.sync.get(['website_2_1_stored'], function(website_2_1) {
        website_2_1_DS = website_2_1.website_2_1_stored
        if(!website_2_1_DS){
            website_2_1=''
        }
        else{
            website_2_1=website_2_1_DS
            $('#rd_2_input_1').val(website_2_1) 
        }
    });
    // website_2_2
    chrome.storage.sync.get(['website_2_2_stored'], function(website_2_2) {
        website_2_2_DS = website_2_2.website_2_2_stored
        if(!website_2_2_DS){
            website_2_2=''
        }
        else{
            website_2_2=website_2_2_DS
            $('#rd_2_input_2').val(website_2_2) 
        }
    });
    // website_2_3
    chrome.storage.sync.get(['website_2_3_stored'], function(website_2_3) {
        website_2_3_DS = website_2_3.website_2_3_stored
        if(!website_2_3_DS){
            website_2_3=''
        }
        else{
            website_2_3=website_2_3_DS
            $('#rd_2_input_3').val(website_2_3) 
        }
    });
    // website_2_4
    chrome.storage.sync.get(['website_2_4_stored'], function(website_2_4) {
        website_2_4_DS = website_2_4.website_2_4_stored
        if(!website_2_4_DS){
            website_2_4=''
        }
        else{
            website_2_4=website_2_4_DS
            $('#rd_2_input_4').val(website_2_4) 
        }
    });
    // website_2_5
    chrome.storage.sync.get(['website_2_5_stored'], function(website_2_5) {
        website_2_5_DS = website_2_5.website_2_5_stored
        if(!website_2_5_DS){
            website_2_5=''
        }
        else{
            website_2_5=website_2_5_DS
            $('#rd_2_input_5').val(website_2_5) 
        }
    });
    // website_2_6
    chrome.storage.sync.get(['website_2_6_stored'], function(website_2_6) {
        website_2_6_DS = website_2_6.website_2_6_stored
        if(!website_2_6_DS){
            website_2_6=''
        }
        else{
            website_2_6=website_2_6_DS
            $('#rd_2_input_6').val(website_2_6) 
        }
    });
    // website_2_7
    chrome.storage.sync.get(['website_2_7_stored'], function(website_2_7) {
        website_2_7_DS = website_2_7.website_2_7_stored
        if(!website_2_7_DS){
            website_2_7=''
        }
        else{
            website_2_7=website_2_7_DS
            $('#rd_2_input_7').val(website_2_7) 
        }
    });
    // website_2_8
    chrome.storage.sync.get(['website_2_8_stored'], function(website_2_8) {
        website_2_8_DS = website_2_8.website_2_8_stored
        if(!website_2_8_DS){
            website_2_8=''
        }
        else{
            website_2_8=website_2_8_DS
            $('#rd_2_input_8').val(website_2_8) 
        }
    });
    // website_2_9
    chrome.storage.sync.get(['website_2_9_stored'], function(website_2_9) {
        website_2_9_DS = website_2_9.website_2_9_stored
        if(!website_2_9_DS){
            website_2_9=''
        }
        else{
            website_2_9=website_2_9_DS
            $('#rd_2_input_9').val(website_2_9) 
        }
    });
    // website_2_10
    chrome.storage.sync.get(['website_2_10_stored'], function(website_2_10) {
        website_2_10_DS = website_2_10.website_2_10_stored
        if(!website_2_10_DS){
            website_2_10=''
        }
        else{
            website_2_10=website_2_10_DS
            $('#rd_2_input_10').val(website_2_10) 
        }
    });
    ///////
    // 3 //
    ///////
    // website_3_1
    chrome.storage.sync.get(['website_3_1_stored'], function(website_3_1) {
        website_3_1_DS = website_3_1.website_3_1_stored
        if(!website_3_1_DS){
            website_3_1=''
        }
        else{
            website_3_1=website_3_1_DS
            $('#rd_3_input_1').val(website_3_1) 
        }
    });
    // website_3_2
    chrome.storage.sync.get(['website_3_2_stored'], function(website_3_2) {
        website_3_2_DS = website_3_2.website_3_2_stored
        if(!website_3_2_DS){
            website_3_2=''
        }
        else{
            website_3_2=website_3_2_DS
            $('#rd_3_input_2').val(website_3_2) 
        }
    });
    // website_3_3
    chrome.storage.sync.get(['website_3_3_stored'], function(website_3_3) {
        website_3_3_DS = website_3_3.website_3_3_stored
        if(!website_3_3_DS){
            website_3_3=''
        }
        else{
            website_3_3=website_3_3_DS
            $('#rd_3_input_3').val(website_3_3) 
        }
    });
    // website_3_4
    chrome.storage.sync.get(['website_3_4_stored'], function(website_3_4) {
        website_3_4_DS = website_3_4.website_3_4_stored
        if(!website_3_4_DS){
            website_3_4=''
        }
        else{
            website_3_4=website_3_4_DS
            $('#rd_3_input_4').val(website_3_4) 
        }
    });
    // website_3_5
    chrome.storage.sync.get(['website_3_5_stored'], function(website_3_5) {
        website_3_5_DS = website_3_5.website_3_5_stored
        if(!website_3_5_DS){
            website_3_5=''
        }
        else{
            website_3_5=website_3_5_DS
            $('#rd_3_input_5').val(website_3_5)
        }
    });
    // website_3_6
    chrome.storage.sync.get(['website_3_6_stored'], function(website_3_6) {
        website_3_6_DS = website_3_6.website_3_6_stored
        if(!website_3_6_DS){
            website_3_6=''
        }
        else{
            website_3_6=website_3_6_DS
            $('#rd_3_input_6').val(website_3_6) 
        }
    });
    // website_3_7
    chrome.storage.sync.get(['website_3_7_stored'], function(website_3_7) {
        website_3_7_DS = website_3_7.website_3_7_stored
        if(!website_3_7_DS){
            website_3_7=''
        }
        else{
            website_3_7=website_3_7_DS
            $('#rd_3_input_7').val(website_3_7) 
        }
    });
    // website_3_8
    chrome.storage.sync.get(['website_3_8_stored'], function(website_3_8) {
        website_3_8_DS = website_3_8.website_3_8_stored
        if(!website_3_8_DS){
            website_3_8=''
        }
        else{
            website_3_8=website_3_8_DS
            $('#rd_3_input_8').val(website_3_8) 
        }
    });
    // website_3_9
    chrome.storage.sync.get(['website_3_9_stored'], function(website_3_9) {
        website_3_9_DS = website_3_9.website_3_9_stored
        if(!website_3_9_DS){
            website_3_9=''
        }
        else{
            website_3_9=website_3_9_DS
            $('#rd_3_input_9').val(website_3_9) 
        }
    });
    // website_3_10
    chrome.storage.sync.get(['website_3_10_stored'], function(website_3_10) {
        website_3_10_DS = website_3_10.website_3_10_stored
        if(!website_3_10_DS){
            website_3_10=''
        }
        else{
            website_3_10=website_3_10_DS
            $('#rd_3_input_10').val(website_3_10) 
        }
    });
    ///////
    // 4 //
    ///////
    // website_4_1
    chrome.storage.sync.get(['website_4_1_stored'], function(website_4_1) {
        website_4_1_DS = website_4_1.website_4_1_stored
        if(!website_4_1_DS){
            website_4_1=''
        }
        else{
            website_4_1=website_4_1_DS
            $('#rd_4_input_1').val(website_4_1) 
        }
    });
    // website_4_2
    chrome.storage.sync.get(['website_4_2_stored'], function(website_4_2) {
        website_4_2_DS = website_4_2.website_4_2_stored
        if(!website_4_2_DS){
            website_4_2=''
        }
        else{
            website_4_2=website_4_2_DS
            $('#rd_4_input_2').val(website_4_2) 
        }
    });
    // website_4_3
    chrome.storage.sync.get(['website_4_3_stored'], function(website_4_3) {
        website_4_3_DS = website_4_3.website_4_3_stored
        if(!website_4_3_DS){
            website_4_3=''
        }
        else{
            website_4_3=website_4_3_DS
            $('#rd_4_input_3').val(website_4_3) 
        }
    });
    // website_4_4
    chrome.storage.sync.get(['website_4_4_stored'], function(website_4_4) {
        website_4_4_DS = website_4_4.website_4_4_stored
        if(!website_4_4_DS){
            website_4_4=''
        }
        else{
            website_4_4=website_4_4_DS
            $('#rd_4_input_4').val(website_4_4) 
        }
    });
    // website_4_5
    chrome.storage.sync.get(['website_4_5_stored'], function(website_4_5) {
        website_4_5_DS = website_4_5.website_4_5_stored
        if(!website_4_5_DS){
            website_4_5=''
        }
        else{
            website_4_5=website_4_5_DS
            $('#rd_4_input_5').val(website_4_5) 
        }
    });
    // website_4_6
    chrome.storage.sync.get(['website_4_6_stored'], function(website_4_6) {
        website_4_6_DS = website_4_6.website_4_6_stored
        if(!website_4_6_DS){
            website_4_6=''
        }
        else{
            website_4_6=website_4_6_DS
            $('#rd_4_input_6').val(website_4_6) 
        }
    });
    // website_4_7
    chrome.storage.sync.get(['website_4_7_stored'], function(website_4_7) {
        website_4_7_DS = website_4_7.website_4_7_stored
        if(!website_4_7_DS){
            website_4_7=''
        }
        else{
            website_4_7=website_4_7_DS
            $('#rd_4_input_7').val(website_4_7) 
        }
    });
    // website_4_8
    chrome.storage.sync.get(['website_4_8_stored'], function(website_4_8) {
        website_4_8_DS = website_4_8.website_4_8_stored
        if(!website_4_8_DS){
            website_4_8=''
        }
        else{
            website_4_8=website_4_8_DS
            $('#rd_4_input_8').val(website_4_8) 
        }
    });
    // website_4_9
    chrome.storage.sync.get(['website_4_9_stored'], function(website_4_9) {
        website_4_9_DS = website_4_9.website_4_9_stored
        if(!website_4_9_DS){
            website_4_9=''
        }
        else{
            website_4_9=website_4_9_DS
            $('#rd_4_input_9').val(website_4_9) 
        }
    });
    // website_4_10
    chrome.storage.sync.get(['website_4_10_stored'], function(website_4_10) {
        website_4_10_DS = website_4_10.website_4_10_stored
        if(!website_4_10_DS){
            website_4_10=''
        }
        else{
            website_4_10=website_4_10_DS
            $('#rd_4_input_10').val(website_4_10) 
        }
    });
    ///////
    // 5 //
    ///////
    // website_5_1
    chrome.storage.sync.get(['website_5_1_stored'], function(website_5_1) {
        website_5_1_DS = website_5_1.website_5_1_stored
        if(!website_5_1_DS){
            website_5_1=''
        }
        else{
            website_5_1=website_5_1_DS
            $('#rd_5_input_1').val(website_5_1) 
        }
    });
    // website_5_2
    chrome.storage.sync.get(['website_5_2_stored'], function(website_5_2) {
        website_5_2_DS = website_5_2.website_5_2_stored
        if(!website_5_2_DS){
            website_5_2=''
        }
        else{
            website_5_2=website_5_2_DS
            $('#rd_5_input_2').val(website_5_2) 
        }
    });
    // website_5_3
    chrome.storage.sync.get(['website_5_3_stored'], function(website_5_3) {
        website_5_3_DS = website_5_3.website_5_3_stored
        if(!website_5_3_DS){
            website_5_3=''
        }
        else{
            website_5_3=website_5_3_DS
            $('#rd_5_input_3').val(website_5_3) 
        }
    });
    // website_5_4
    chrome.storage.sync.get(['website_5_4_stored'], function(website_5_4) {
        website_5_4_DS = website_5_4.website_5_4_stored
        if(!website_5_4_DS){
            website_5_4=''
        }
        else{
            website_5_4=website_5_4_DS
            $('#rd_5_input_4').val(website_5_4) 
        }
    });
    // website_5_5
    chrome.storage.sync.get(['website_5_5_stored'], function(website_5_5) {
        website_5_5_DS = website_5_5.website_5_5_stored
        if(!website_5_5_DS){
            website_5_5=''
        }
        else{
            website_5_5=website_5_5_DS
            $('#rd_5_input_5').val(website_5_5) 
        }
    });
    // website_5_6
    chrome.storage.sync.get(['website_5_6_stored'], function(website_5_6) {
        website_5_6_DS = website_5_6.website_5_6_stored
        if(!website_5_6_DS){
            website_5_6=''
        }
        else{
            website_5_6=website_5_6_DS
            $('#rd_5_input_6').val(website_5_6) 
        }
    });
    // website_5_7
    chrome.storage.sync.get(['website_5_7_stored'], function(website_5_7) {
        website_5_7_DS = website_5_7.website_5_7_stored
        if(!website_5_7_DS){
            website_5_7=''
        }
        else{
            website_5_7=website_5_7_DS
            $('#rd_5_input_7').val(website_5_7) 
        }
    });
    // website_5_8
    chrome.storage.sync.get(['website_5_8_stored'], function(website_5_8) {
        website_5_8_DS = website_5_8.website_5_8_stored
        if(!website_5_8_DS){
            website_5_8=''
        }
        else{
            website_5_8=website_5_8_DS
            $('#rd_5_input_8').val(website_5_8) 
        }
    });
    // website_5_9
    chrome.storage.sync.get(['website_5_9_stored'], function(website_5_9) {
        website_5_9_DS = website_5_9.website_5_9_stored
        if(!website_5_9_DS){
            website_5_9=''
        }
        else{
            website_5_9=website_5_9_DS
            $('#rd_5_input_9').val(website_5_9) 
        }
    });
    // website_5_10
    chrome.storage.sync.get(['website_5_10_stored'], function(website_5_10) {
        website_5_10_DS = website_5_10.website_5_10_stored
        if(!website_5_10_DS){
            website_5_10=''
        }
        else{
            website_5_10=website_5_10_DS
            $('#rd_5_input_10').val(website_5_10) 
        }
    });
    ///////
    // 6 //
    ///////
    // website_6_1
    chrome.storage.sync.get(['website_6_1_stored'], function(website_6_1) {
        website_6_1_DS = website_6_1.website_6_1_stored
        if(!website_6_1_DS){
            website_6_1=''
        }
        else{
            website_6_1=website_6_1_DS
            $('#rd_6_input_1').val(website_6_1) 
        }
    });
    // website_6_2
    chrome.storage.sync.get(['website_6_2_stored'], function(website_6_2) {
        website_6_2_DS = website_6_2.website_6_2_stored
        if(!website_6_2_DS){
            website_6_2=''
        }
        else{
            website_6_2=website_6_2_DS
            $('#rd_6_input_2').val(website_6_2) 
        }
    });
    // website_6_3
    chrome.storage.sync.get(['website_6_3_stored'], function(website_6_3) {
        website_6_3_DS = website_6_3.website_6_3_stored
        if(!website_6_3_DS){
            website_6_3=''
        }
        else{
            website_6_3=website_6_3_DS
            $('#rd_6_input_3').val(website_6_3) 
        }
    });
    // website_6_4
    chrome.storage.sync.get(['website_6_4_stored'], function(website_6_4) {
        website_6_4_DS = website_6_4.website_6_4_stored
        if(!website_6_4_DS){
            website_6_4=''
        }
        else{
            website_6_4=website_6_4_DS
            $('#rd_6_input_4').val(website_6_4) 
        }
    });
    // website_6_5
    chrome.storage.sync.get(['website_6_5_stored'], function(website_6_5) {
        website_6_5_DS = website_6_5.website_6_5_stored
        if(!website_6_5_DS){
            website_6_5=''
        }
        else{
            website_6_5=website_6_5_DS
            $('#rd_6_input_5').val(website_6_5) 
        }
    });
    // website_6_6
    chrome.storage.sync.get(['website_6_6_stored'], function(website_6_6) {
        website_6_6_DS = website_6_6.website_6_6_stored
        if(!website_6_6_DS){
            website_6_6=''
        }
        else{
            website_6_6=website_6_6_DS
            $('#rd_6_input_6').val(website_6_6) 
        }
    });
    // website_6_7
    chrome.storage.sync.get(['website_6_7_stored'], function(website_6_7) {
        website_6_7_DS = website_6_7.website_6_7_stored
        if(!website_6_7_DS){
            website_6_7=''
        }
        else{
            website_6_7=website_6_7_DS
            $('#rd_6_input_7').val(website_6_7) 
        }
    });
    // website_6_8
    chrome.storage.sync.get(['website_6_8_stored'], function(website_6_8) {
        website_6_8_DS = website_6_8.website_6_8_stored
        if(!website_6_8_DS){
            website_6_8=''
        }
        else{
            website_6_8=website_6_8_DS
            $('#rd_6_input_8').val(website_6_8) 
        }
    });
    // website_6_9
    chrome.storage.sync.get(['website_6_9_stored'], function(website_6_9) {
        website_6_9_DS = website_6_9.website_6_9_stored
        if(!website_6_9_DS){
            website_6_9=''
        }
        else{
            website_6_9=website_6_9_DS
            $('#rd_6_input_9').val(website_6_9) 
        }
    });
    // website_6_10
    chrome.storage.sync.get(['website_6_10_stored'], function(website_6_10) {
        website_6_10_DS = website_6_10.website_6_10_stored
        if(!website_6_10_DS){
            website_6_10=''
        }
        else{
            website_6_10=website_6_10_DS
            $('#rd_6_input_10').val(website_6_10) 
        }
    });
    ///////
    // 7 //
    ///////
    // website_7_1
    chrome.storage.sync.get(['website_7_1_stored'], function(website_7_1) {
        website_7_1_DS = website_7_1.website_7_1_stored
        if(!website_7_1_DS){
            website_7_1=''
        }
        else{
            website_7_1=website_7_1_DS
            $('#rd_7_input_1').val(website_7_1) 
        }
    });
    // website_7_2
    chrome.storage.sync.get(['website_7_2_stored'], function(website_7_2) {
        website_7_2_DS = website_7_2.website_7_2_stored
        if(!website_7_2_DS){
            website_7_2=''
        }
        else{
            website_7_2=website_7_2_DS
            $('#rd_7_input_2').val(website_7_2) 
        }
    });
    // website_7_3
    chrome.storage.sync.get(['website_7_3_stored'], function(website_7_3) {
        website_7_3_DS = website_7_3.website_7_3_stored
        if(!website_7_3_DS){
            website_7_3=''
        }
        else{
            website_7_3=website_7_3_DS
            $('#rd_7_input_3').val(website_7_3) 
        }
    });
    // website_7_4
    chrome.storage.sync.get(['website_7_4_stored'], function(website_7_4) {
        website_7_4_DS = website_7_4.website_7_4_stored
        if(!website_7_4_DS){
            website_7_4=''
        }
        else{
            website_7_4=website_7_4_DS
            $('#rd_7_input_4').val(website_7_4) 
        }
    });
    // website_7_5
    chrome.storage.sync.get(['website_7_5_stored'], function(website_7_5) {
        website_7_5_DS = website_7_5.website_7_5_stored
        if(!website_7_5_DS){
            website_7_5=''
        }
        else{
            website_7_5=website_7_5_DS
            $('#rd_7_input_5').val(website_7_5) 
        }
    });
    // website_7_6
    chrome.storage.sync.get(['website_7_6_stored'], function(website_7_6) {
        website_7_6_DS = website_7_6.website_7_6_stored
        if(!website_7_6_DS){
            website_7_6=''
        }
        else{
            website_7_6=website_7_6_DS
            $('#rd_7_input_6').val(website_7_6) 
        }
    });
    // website_7_7
    chrome.storage.sync.get(['website_7_7_stored'], function(website_7_7) {
        website_7_7_DS = website_7_7.website_7_7_stored
        if(!website_7_7_DS){
            website_7_7=''
        }
        else{
            website_7_7=website_7_7_DS
            $('#rd_7_input_7').val(website_7_7) 
        }
    });
    // website_7_8
    chrome.storage.sync.get(['website_7_8_stored'], function(website_7_8) {
        website_7_8_DS = website_7_8.website_7_8_stored
        if(!website_7_8_DS){
            website_7_8=''
        }
        else{
            website_7_8=website_7_8_DS
            $('#rd_7_input_8').val(website_7_8) 
        }
    });
    // website_7_9
    chrome.storage.sync.get(['website_7_9_stored'], function(website_7_9) {
        website_7_9_DS = website_7_9.website_7_9_stored
        if(!website_7_9_DS){
            website_7_9=''
        }
        else{
            website_7_9=website_7_9_DS
            $('#rd_7_input_9').val(website_7_9) 
        }
    });
    // website_7_10
    chrome.storage.sync.get(['website_7_10_stored'], function(website_7_10) {
        website_7_10_DS = website_7_10.website_7_10_stored
        if(!website_7_10_DS){
            website_7_10=''
        }
        else{
            website_7_10=website_7_10_DS
            $('#rd_7_input_10').val(website_7_10) 
        }
    });
    ///////
    // 8 //
    ///////
    // website_8_1
    chrome.storage.sync.get(['website_8_1_stored'], function(website_8_1) {
        website_8_1_DS = website_8_1.website_8_1_stored
        if(!website_8_1_DS){
            website_8_1=''
        }
        else{
            website_8_1=website_8_1_DS
            $('#rd_8_input_1').val(website_8_1) 
        }
    });
    // website_8_2
    chrome.storage.sync.get(['website_8_2_stored'], function(website_8_2) {
        website_8_2_DS = website_8_2.website_8_2_stored
        if(!website_8_2_DS){
            website_8_2=''
        }
        else{
            website_8_2=website_8_2_DS
            $('#rd_8_input_2').val(website_8_2) 
        }
    });
    // website_8_3
    chrome.storage.sync.get(['website_8_3_stored'], function(website_8_3) {
        website_8_3_DS = website_8_3.website_8_3_stored
        if(!website_8_3_DS){
            website_8_3=''
        }
        else{
            website_8_3=website_8_3_DS
            $('#rd_8_input_3').val(website_8_3) 
        }
    });
    // website_8_4
    chrome.storage.sync.get(['website_8_4_stored'], function(website_8_4) {
        website_8_4_DS = website_8_4.website_8_4_stored
        if(!website_8_4_DS){
            website_8_4=''
        }
        else{
            website_8_4=website_8_4_DS
            $('#rd_8_input_4').val(website_8_4) 
        }
    });
    // website_8_5
    chrome.storage.sync.get(['website_8_5_stored'], function(website_8_5) {
        website_8_5_DS = website_8_5.website_8_5_stored
        if(!website_8_5_DS){
            website_8_5=''
        }
        else{
            website_8_5=website_8_5_DS
            $('#rd_8_input_5').val(website_8_5) 
        }
    });
    // website_8_6
    chrome.storage.sync.get(['website_8_6_stored'], function(website_8_6) {
        website_8_6_DS = website_8_6.website_8_6_stored
        if(!website_8_6_DS){
            website_8_6=''
        }
        else{
            website_8_6=website_8_6_DS
            $('#rd_8_input_6').val(website_8_6) 
        }
    });
    // website_8_7
    chrome.storage.sync.get(['website_8_7_stored'], function(website_8_7) {
        website_8_7_DS = website_8_7.website_8_7_stored
        if(!website_8_7_DS){
            website_8_7=''
        }
        else{
            website_8_7=website_8_7_DS
            $('#rd_8_input_7').val(website_8_7) 
        }
    });
    // website_8_8
    chrome.storage.sync.get(['website_8_8_stored'], function(website_8_8) {
        website_8_8_DS = website_8_8.website_8_8_stored
        if(!website_8_8_DS){
            website_8_8=''
        }
        else{
            website_8_8=website_8_8_DS
            $('#rd_8_input_8').val(website_8_8) 
        }
    });
    // website_8_9
    chrome.storage.sync.get(['website_8_9_stored'], function(website_8_9) {
        website_8_9_DS = website_8_9.website_8_9_stored
        if(!website_8_9_DS){
            website_8_9=''
        }
        else{
            website_8_9=website_8_9_DS
            $('#rd_8_input_9').val(website_8_9) 
        }
    });
    // website_8_10
    chrome.storage.sync.get(['website_8_10_stored'], function(website_8_10) {
        website_8_10_DS = website_8_10.website_8_10_stored
        if(!website_8_10_DS){
            website_8_10=''
        }
        else{
            website_8_10=website_8_10_DS
            $('#rd_8_input_10').val(website_8_10) 
        }
    });
    ///////
    // 9 //
    ///////
    // website_9_1
    chrome.storage.sync.get(['website_9_1_stored'], function(website_9_1) {
        website_9_1_DS = website_9_1.website_9_1_stored
        if(!website_9_1_DS){
            website_9_1=''
        }
        else{
            website_9_1=website_9_1_DS
            $('#rd_9_input_1').val(website_9_1) 
        }
    });
    // website_9_2
    chrome.storage.sync.get(['website_9_2_stored'], function(website_9_2) {
        website_9_2_DS = website_9_2.website_9_2_stored
        if(!website_9_2_DS){
            website_9_2=''
        }
        else{
            website_9_2=website_9_2_DS
            $('#rd_9_input_2').val(website_9_2) 
        }
    });
    // website_9_3
    chrome.storage.sync.get(['website_9_3_stored'], function(website_9_3) {
        website_9_3_DS = website_9_3.website_9_3_stored
        if(!website_9_3_DS){
            website_9_3=''
        }
        else{
            website_9_3=website_9_3_DS
            $('#rd_9_input_3').val(website_9_3) 
        }
    });
    // website_9_4
    chrome.storage.sync.get(['website_9_4_stored'], function(website_9_4) {
        website_9_4_DS = website_9_4.website_9_4_stored
        if(!website_9_4_DS){
            website_9_4=''
        }
        else{
            website_9_4=website_9_4_DS
            $('#rd_9_input_4').val(website_9_4) 
        }
    });
    // website_9_5
    chrome.storage.sync.get(['website_9_5_stored'], function(website_9_5) {
        website_9_5_DS = website_9_5.website_9_5_stored
        if(!website_9_5_DS){
            website_9_5=''
        }
        else{
            website_9_5=website_9_5_DS
            $('#rd_9_input_5').val(website_9_5) 
        }
    });
    // website_9_6
    chrome.storage.sync.get(['website_9_6_stored'], function(website_9_6) {
        website_9_6_DS = website_9_6.website_9_6_stored
        if(!website_9_6_DS){
            website_9_6=''
        }
        else{
            website_9_6=website_9_6_DS
            $('#rd_9_input_6').val(website_9_6) 
        }
    });
    // website_9_7
    chrome.storage.sync.get(['website_9_7_stored'], function(website_9_7) {
        website_9_7_DS = website_9_7.website_9_7_stored
        if(!website_9_7_DS){
            website_9_7=''
        }
        else{
            website_9_7=website_9_7_DS
            $('#rd_9_input_7').val(website_9_7) 
        }
    });
    // website_9_8
    chrome.storage.sync.get(['website_9_8_stored'], function(website_9_8) {
        website_9_8_DS = website_9_8.website_9_8_stored
        if(!website_9_8_DS){
            website_9_8=''
        }
        else{
            website_9_8=website_9_8_DS
            $('#rd_9_input_8').val(website_9_8) 
        }
    });
    // website_9_9
    chrome.storage.sync.get(['website_9_9_stored'], function(website_9_9) {
        website_9_9_DS = website_9_9.website_9_9_stored
        if(!website_9_9_DS){
            website_9_9=''
        }
        else{
            website_9_9=website_9_9_DS
            $('#rd_9_input_9').val(website_9_9) 
        }
    });
    // website_9_10
    chrome.storage.sync.get(['website_9_10_stored'], function(website_9_10) {
        website_9_10_DS = website_9_10.website_9_10_stored
        if(!website_9_10_DS){
            website_9_10=''
        }
        else{
            website_9_10=website_9_10_DS
            $('#rd_9_input_10').val(website_9_10) 
        }
    });
    ///////
    // 0 //
    ///////
    // website_0_1
    chrome.storage.sync.get(['website_0_1_stored'], function(website_0_1) {
        website_0_1_DS = website_0_1.website_0_1_stored
        if(!website_0_1_DS){
            website_0_1=''
        }
        else{
            website_0_1=website_0_1_DS
            $('#rd_0_input_1').val(website_0_1) 
        }
    });
    // website_0_2
    chrome.storage.sync.get(['website_0_2_stored'], function(website_0_2) {
        website_0_2_DS = website_0_2.website_0_2_stored
        if(!website_0_2_DS){
            website_0_2=''
        }
        else{
            website_0_2=website_0_2_DS
            $('#rd_0_input_2').val(website_0_2) 
        }
    });
    // website_0_3
    chrome.storage.sync.get(['website_0_3_stored'], function(website_0_3) {
        website_0_3_DS = website_0_3.website_0_3_stored
        if(!website_0_3_DS){
            website_0_3=''
        }
        else{
            website_0_3=website_0_3_DS
            $('#rd_0_input_3').val(website_0_3) 
        }
    });
    // website_0_4
    chrome.storage.sync.get(['website_0_4_stored'], function(website_0_4) {
        website_0_4_DS = website_0_4.website_0_4_stored
        if(!website_0_4_DS){
            website_0_4=''
        }
        else{
            website_0_4=website_0_4_DS
            $('#rd_0_input_4').val(website_0_4) 
        }
    });
    // website_0_5
    chrome.storage.sync.get(['website_0_5_stored'], function(website_0_5) {
        website_0_5_DS = website_0_5.website_0_5_stored
        if(!website_0_5_DS){
            website_0_5=''
        }
        else{
            website_0_5=website_0_5_DS
            $('#rd_0_input_5').val(website_0_5) 
        }
    });
    // website_0_6
    chrome.storage.sync.get(['website_0_6_stored'], function(website_0_6) {
        website_0_6_DS = website_0_6.website_0_6_stored
        if(!website_0_6_DS){
            website_0_6=''
        }
        else{
            website_0_6=website_0_6_DS
            $('#rd_0_input_6').val(website_0_6) 
        }
    });
    // website_0_7
    chrome.storage.sync.get(['website_0_7_stored'], function(website_0_7) {
        website_0_7_DS = website_0_7.website_0_7_stored
        if(!website_0_7_DS){
            website_0_7=''
        }
        else{
            website_0_7=website_0_7_DS
            $('#rd_0_input_7').val(website_0_7) 
        }
    });
    // website_0_8
    chrome.storage.sync.get(['website_0_8_stored'], function(website_0_8) {
        website_0_8_DS = website_0_8.website_0_8_stored
        if(!website_0_8_DS){
            website_0_8=''
        }
        else{
            website_0_8=website_0_8_DS
            $('#rd_0_input_8').val(website_0_8) 
        }
    });
    // website_0_9
    chrome.storage.sync.get(['website_0_9_stored'], function(website_0_9) {
        website_0_9_DS = website_0_9.website_0_9_stored
        if(!website_0_9_DS){
            website_0_9=''
        }
        else{
            website_0_9=website_0_9_DS
            $('#rd_0_input_9').val(website_0_9) 
        }
    });
    // website_0_10
    chrome.storage.sync.get(['website_0_10_stored'], function(website_0_10) {
        website_0_10_DS = website_0_10.website_0_10_stored
        if(!website_0_10_DS){
            website_0_10=''
        }
        else{
            website_0_10=website_0_10_DS
            $('#rd_0_input_10').val(website_0_10) 
        }
    });

    // chrome.storage.sync.get(['website_0_stored'], function(website_0) {
    //     website_0_DS = website_0.website_0_stored
    //     if(!website_0_DS){
    //         website_0=''
    //     }
    //     else{
    //         website_0=website_0_DS
    //         $('#rd_0_website_input').val(website_0) 
    //     }
    // });

    ////////////////
    // web search //
    ////////////////

    ws_1_website_input_DS =''
    ws_2_website_input_DS =''
    ws_3_website_input_DS =''
    ws_4_website_input_DS =''
    ws_5_website_input_DS =''
    ws_6_website_input_DS =''

    ws_1_url_input_DS =''
    ws_2_url_input_DS =''
    ws_3_url_input_DS =''
    ws_4_url_input_DS =''
    ws_5_url_input_DS =''
    ws_6_url_input_DS =''

    chrome.storage.sync.get(['ws_1_website_input_stored'], function(ws_1_website) {
        ws_1_website_input_DS = ws_1_website.ws_1_website_input_stored
        if(!ws_1_website_input_DS){
            ws_1_website=''
        }
        else{
            ws_1_website=ws_1_website_input_DS
            $('#ws_1_website_input').val(ws_1_website) 
        }
    });

    chrome.storage.sync.get(['ws_2_website_input_stored'], function(ws_2_website) {
        ws_2_website_input_DS = ws_2_website.ws_2_website_input_stored
        if(!ws_2_website_input_DS){
            ws_2_website=''
        }
        else{
            ws_2_website=ws_2_website_input_DS
            $('#ws_2_website_input').val(ws_2_website) 
        }
    });

    chrome.storage.sync.get(['ws_3_website_input_stored'], function(ws_3_website) {
        ws_3_website_input_DS = ws_3_website.ws_3_website_input_stored
        if(!ws_3_website_input_DS){
            ws_3_website=''
        }
        else{
            ws_3_website=ws_3_website_input_DS
            $('#ws_3_website_input').val(ws_3_website)
            $('#bd_3').text(ws_3_website)
        }
    });

    chrome.storage.sync.get(['ws_4_website_input_stored'], function(ws_4_website) {
        ws_4_website_input_DS = ws_4_website.ws_4_website_input_stored
        if(!ws_4_website_input_DS){
            ws_4_website=''
        }
        else{
            ws_4_website=ws_4_website_input_DS
            $('#ws_4_website_input').val(ws_4_website)
            $('#bd_4').text(ws_4_website)
        }
    });

    chrome.storage.sync.get(['ws_5_website_input_stored'], function(ws_5_website) {
        ws_5_website_input_DS = ws_5_website.ws_5_website_input_stored
        if(!ws_5_website_input_DS){
            ws_5_website=''
        }
        else{
            ws_5_website=ws_5_website_input_DS
            $('#ws_5_website_input').val(ws_5_website)
            $('#bd_5').text(ws_5_website)
        }
    });

    chrome.storage.sync.get(['ws_6_website_input_stored'], function(ws_6_website) {
        ws_6_website_input_DS = ws_6_website.ws_6_website_input_stored
        if(!ws_6_website_input_DS){
            ws_6_website=''
        }
        else{
            ws_6_website=ws_6_website_input_DS
            $('#ws_6_website_input').val(ws_6_website)
            $('#bd_6').text(ws_6_website)
        }
    });

    ///

    chrome.storage.sync.get(['ws_1_url_input_stored'], function(ws_1_url) {
        ws_1_url_input_DS = ws_1_url.ws_1_url_input_stored
        if(!ws_1_url_input_DS){
            ws_1_url=''
        }
        else{
            ws_1_url=ws_1_url_input_DS
            $('#ws_1_url_input').val(ws_1_url) 
        }
    });

    chrome.storage.sync.get(['ws_2_url_input_stored'], function(ws_2_url) {
        ws_2_url_input_DS = ws_2_url.ws_2_url_input_stored
        if(!ws_2_url_input_DS){
            ws_2_url=''
        }
        else{
            ws_2_url=ws_2_url_input_DS
            $('#ws_2_url_input').val(ws_2_url) 
        }
    });

    chrome.storage.sync.get(['ws_3_url_input_stored'], function(ws_3_url) {
        ws_3_url_input_DS = ws_3_url.ws_3_url_input_stored
        if(!ws_3_url_input_DS){
            ws_3_url=''
        }
        else{
            ws_3_url=ws_3_url_input_DS
            $('#ws_3_url_input').val(ws_3_url) 
        }
    });

    chrome.storage.sync.get(['ws_4_url_input_stored'], function(ws_4_url) {
        ws_4_url_input_DS = ws_4_url.ws_4_url_input_stored
        if(!ws_4_url_input_DS){
            ws_4_url=''
        }
        else{
            ws_4_url=ws_4_url_input_DS
            $('#ws_4_url_input').val(ws_4_url) 
        }
    });

    chrome.storage.sync.get(['ws_5_url_input_stored'], function(ws_5_url) {
        ws_5_url_input_DS = ws_5_url.ws_5_url_input_stored
        if(!ws_5_url_input_DS){
            ws_5_url=''
        }
        else{
            ws_5_url=ws_5_url_input_DS
            $('#ws_5_url_input').val(ws_5_url) 
        }
    });

    chrome.storage.sync.get(['ws_6_url_input_stored'], function(ws_6_url) {
        ws_6_url_input_DS = ws_6_url.ws_6_url_input_stored
        if(!ws_6_url_input_DS){
            ws_6_url=''
        }
        else{
            ws_6_url=ws_6_url_input_DS
            $('#ws_6_url_input').val(ws_6_url) 
        }
    });
}