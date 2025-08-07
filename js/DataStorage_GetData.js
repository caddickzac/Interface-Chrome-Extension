window.get_data = function get_data(){
    // console.log('get data function started')

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

    // top dock: sub view
    current_top_dock_module='' // options: present, day, week, month, year
    current_top_dock_tool='none' // options: timer, none

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
    label_I=''
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
    website_I=''
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

    top_dock_calendar_view_choice=''
    default_home_screen=''
    top_dock_hotkey_choice=''


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
    theme_DS = ''

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
    chrome.storage.sync.get(['theme_stored'], function(result) {
        theme_DS = result.theme_stored;
        if (!theme_DS) {
            theme = '#BFBFBF'; // fallback or default
        } else {
            theme = theme_DS;
        }
        $('#theme_choice').val(theme);
    });

    // top dock sub-view choice
    chrome.storage.sync.get(['current_top_dock_module_stored'], function(result) {
        const stored = result.current_top_dock_module_stored;
        if (!stored) {
            current_top_dock_module = 'present';
        } else {
            current_top_dock_module = stored;
            // TODO: Add action to update a top dock settings menu choice (dropdown menu item)
        }
    });

    // top dock view array number
    chrome.storage.sync.get(['top_dock_view_array_number_stored'], function(result) {
        const stored = result.top_dock_view_array_number_stored;
        if (!stored) {
            top_dock_view_array_number = 0;
        } else {
            top_dock_view_array_number = stored;
        }
    });

    ///////////////
    // lowercase //
    ///////////////

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    alphabet.forEach(letter => {
      const key = `label_${letter}_stored`;
      chrome.storage.sync.get([key], function(result) {
        let value = '';
        if (result.hasOwnProperty(key)) {
          value = result[key]; // could be ''
        }
        $(`#ld-${letter}`).text(value);
        $(`#ld_${letter}_label_input`).val(value);
      });
    });

    // example of inefficient code below (just one case for "a")
    // // a
    // chrome.storage.sync.get(['label_a_stored'], function(label_a) {
    //     label_a_DS = label_a.label_a_stored
    //     if(!label_a_DS){
    //         label_a=''
    //     }
    //     else{
    //         label_a=label_a_DS
    //         $('#ld-a').text(label_a) // updates dock
    //         $('#ld_a_label_input').val(label_a) // updates input table, within settings
    //     }
    // });

    ///////////////
    // UPPERCASE //
    ///////////////

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    uppercaseLetters.forEach(letter => {
      const key = `label_${letter}_stored`;
      chrome.storage.sync.get([key], function(result) {
        let value = '';
        if (result.hasOwnProperty(key)) {
          value = result[key]; // may be ''
        }
        $(`#ld-${letter}`).text(value);
        $(`#ld_${letter}_label_input`).val(value);
      });
    });

    /////////////
    // numbers //
    /////////////

    const digits = '0123456789'.split('');

    digits.forEach(digit => {
      const key = `label_${digit}_stored`;
      chrome.storage.sync.get([key], function(result) {
        let value = '';
        if (result.hasOwnProperty(key)) {
          value = result[key]; // may be ''
        }
        $(`#rd-${digit}`).text(value);
        $(`#rd_${digit}_label_input`).val(value);
      });
    });

    // WEBSITE // 

    ///////////////
    // lowercase //
    ///////////////

    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    lowercaseLetters.forEach(letter => {
      const key = `website_${letter}_stored`;
      chrome.storage.sync.get([key], function(result) {
        let value = '';
        if (result.hasOwnProperty(key)) {
          value = result[key]; // could be ''
        }
        $(`#ld_${letter}_website_input`).val(value);
      });
    });

    ///////////////
    // UPPERCASE //
    ///////////////

    const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    capitalLetters.forEach(letter => {
      const key = `website_${letter}_stored`;
      chrome.storage.sync.get([key], function(result) {
        let value = '';
        if (result.hasOwnProperty(key)) {
          value = result[key]; // may be empty string
        }
        $(`#ld_${letter}_website_input`).val(value);
      });
    });

    /////////////
    // numbers //
    /////////////

    for (let i = 0; i <= 9; i++) {
      for (let j = 1; j <= 10; j++) {
        const key = `website_${i}_${j}_stored`;
        chrome.storage.sync.get([key], function(result) {
          const storedValue = result[key] || '';
          const inputId = `#rd_${i}_input_${j}`;
          window[`website_${i}_${j}`] = storedValue;
          $(inputId).val(storedValue);
        });
      }
    }

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

    top_dock_calendar_view_choice_DS =''
    default_home_screen_DS =''
    top_dock_hotkey_choice_DS =''

    // Bottom Dock: Websearch Inputs
    for (let i = 1; i <= 6; i++) {
      const key = `ws_${i}_website_input_stored`;
      chrome.storage.sync.get([key], function (result) {
        const storedValue = result[key];
        const value = storedValue || '';
        $(`#ws_${i}_website_input`).val(value);

        // Add #bd-i text updates for ws_3 through ws_6
        if (i >= 3 && i <= 6) {
          $(`#bd_${i}`).text(value);
        }
      });
    }

    for (let i = 1; i <= 6; i++) {
      const key = `ws_${i}_url_input_stored`;
      chrome.storage.sync.get([key], function (result) {
        const value = result[key] || '';
        $(`#ws_${i}_url_input`).val(value);
      });
    }

    chrome.storage.sync.get(['top_dock_calendar_view_choice_stored'], function(result) {
        const stored = result.top_dock_calendar_view_choice_stored;
        const top_dock_calendar_view_choice = stored || 'last open';
        $('#top_dock_calendar_view_choice').val(top_dock_calendar_view_choice);
    });

    chrome.storage.sync.get(['default_home_screen_stored'], function(result) {
        const stored = result.default_home_screen_stored;
        const default_home_screen = stored || 'clock';
        $('#default_home_screen_view_choice').val(default_home_screen);
    });

    chrome.storage.sync.get(['top_dock_hotkey_choice_stored'], function(result) {
        const stored = result.top_dock_hotkey_choice_stored;
        const top_dock_hotkey_choice = stored || 'calendar';
        $('#top_dock_hotkey_choice').val(top_dock_hotkey_choice); 
    });


    chrome.storage.sync.get(['page_count_stored'], function(result) {
        let stored = result.page_count_stored;
        page_count = (stored || 0) + 1;  // Increment count

        // Save the updated value
        chrome.storage.sync.set({ 'page_count_stored': page_count }, function() {
            console.log("📈 page_count incremented to:", page_count);

            // Optional: trigger behavior based on usage level
            if (page_count <= 3) {
                // Show tutorial, hints, welcome message, etc.
                // showWelcomeHints();
            }
        });
    });


    // console.log('get data function ended')
}