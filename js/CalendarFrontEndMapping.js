///////////////////////////////////////////////////////////////////////////

// Year Calendar // 

function year_view_calendar_dictionary_grabber(){
    jan_dictionary = dictionary_library_array[0][0]
    feb_dictionary = dictionary_library_array[0][1]
    mar_dictionary = dictionary_library_array[0][2]
    apr_dictionary = dictionary_library_array[0][3]
    may_dictionary = dictionary_library_array[0][4]
    jun_dictionary = dictionary_library_array[0][5]
    jul_dictionary = dictionary_library_array[0][6]
    aug_dictionary = dictionary_library_array[0][7]
    sep_dictionary = dictionary_library_array[0][8]
    oct_dictionary = dictionary_library_array[0][9]
    nov_dictionary = dictionary_library_array[0][10]
    dec_dictionary = dictionary_library_array[0][11]
}

function year_view_calendar_day_of_month_labeler_jan(){
    $('#td_year_jan_1').text(jan_dictionary.day_of_month_array[0][0])
    $('#td_year_jan_2').text(jan_dictionary.day_of_month_array[0][1])
    $('#td_year_jan_3').text(jan_dictionary.day_of_month_array[0][2])
    $('#td_year_jan_4').text(jan_dictionary.day_of_month_array[0][3])
    $('#td_year_jan_5').text(jan_dictionary.day_of_month_array[0][4])
    $('#td_year_jan_6').text(jan_dictionary.day_of_month_array[0][5])
    $('#td_year_jan_7').text(jan_dictionary.day_of_month_array[0][6])
    $('#td_year_jan_8').text(jan_dictionary.day_of_month_array[0][7])
    $('#td_year_jan_9').text(jan_dictionary.day_of_month_array[0][8])
    $('#td_year_jan_10').text(jan_dictionary.day_of_month_array[0][9])
    $('#td_year_jan_11').text(jan_dictionary.day_of_month_array[0][10])
    $('#td_year_jan_12').text(jan_dictionary.day_of_month_array[0][11])
    $('#td_year_jan_13').text(jan_dictionary.day_of_month_array[0][12])
    $('#td_year_jan_14').text(jan_dictionary.day_of_month_array[0][13])
    $('#td_year_jan_15').text(jan_dictionary.day_of_month_array[0][14])
    $('#td_year_jan_16').text(jan_dictionary.day_of_month_array[0][15])
    $('#td_year_jan_17').text(jan_dictionary.day_of_month_array[0][16])
    $('#td_year_jan_18').text(jan_dictionary.day_of_month_array[0][17])
    $('#td_year_jan_19').text(jan_dictionary.day_of_month_array[0][18])
    $('#td_year_jan_20').text(jan_dictionary.day_of_month_array[0][19])
    $('#td_year_jan_21').text(jan_dictionary.day_of_month_array[0][20])
    $('#td_year_jan_22').text(jan_dictionary.day_of_month_array[0][21])
    $('#td_year_jan_23').text(jan_dictionary.day_of_month_array[0][22])
    $('#td_year_jan_24').text(jan_dictionary.day_of_month_array[0][23])
    $('#td_year_jan_25').text(jan_dictionary.day_of_month_array[0][24])
    $('#td_year_jan_26').text(jan_dictionary.day_of_month_array[0][25])
    $('#td_year_jan_27').text(jan_dictionary.day_of_month_array[0][26])
    $('#td_year_jan_28').text(jan_dictionary.day_of_month_array[0][27])
    if(jan_dictionary.day_of_month_array[0][28]>jan_dictionary.days_in_month){$('#td_year_jan_29').text('')}
    else{$('#td_year_jan_29').text(jan_dictionary.day_of_month_array[0][28])}
    if(jan_dictionary.day_of_month_array[0][29]>jan_dictionary.days_in_month){$('#td_year_jan_30').text('')}
    else{$('#td_year_jan_30').text(jan_dictionary.day_of_month_array[0][29])}
    if(jan_dictionary.day_of_month_array[0][30]>jan_dictionary.days_in_month){$('#td_year_jan_31').text('')}
    else{$('#td_year_jan_31').text(jan_dictionary.day_of_month_array[0][30])}
    if(jan_dictionary.day_of_month_array[0][31]>jan_dictionary.days_in_month){$('#td_year_jan_32').text('')}
    else{$('#td_year_jan_32').text(jan_dictionary.day_of_month_array[0][31])}
    if(jan_dictionary.day_of_month_array[0][32]>jan_dictionary.days_in_month){$('#td_year_jan_33').text('')}
    else{$('#td_year_jan_33').text(jan_dictionary.day_of_month_array[0][32])}
    if(jan_dictionary.day_of_month_array[0][33]>jan_dictionary.days_in_month){$('#td_year_jan_34').text('')}
    else{$('#td_year_jan_34').text(jan_dictionary.day_of_month_array[0][33])}
    if(jan_dictionary.day_of_month_array[0][34]>jan_dictionary.days_in_month){$('#td_year_jan_35').text('')}
    else{$('#td_year_jan_35').text(jan_dictionary.day_of_month_array[0][34])}
    if(jan_dictionary.day_of_month_array[0][35]>jan_dictionary.days_in_month){$('#td_year_jan_36').text('')}
    else{$('#td_year_jan_36').text(jan_dictionary.day_of_month_array[0][35])}
    if(jan_dictionary.day_of_month_array[0][36]>jan_dictionary.days_in_month){$('#td_year_jan_37').text('')}
    else{$('#td_year_jan_37').text(jan_dictionary.day_of_month_array[0][36])}
    if(jan_dictionary.day_of_month_array[0][37]>jan_dictionary.days_in_month){$('#td_year_jan_38').text('')}
    else{$('#td_year_jan_38').text(jan_dictionary.day_of_month_array[0][37])}
    if(jan_dictionary.day_of_month_array[0][38]>jan_dictionary.days_in_month){$('#td_year_jan_39').text('')}
    else{$('#td_year_jan_39').text(jan_dictionary.day_of_month_array[0][38])}
    if(jan_dictionary.day_of_month_array[0][39]>jan_dictionary.days_in_month){$('#td_year_jan_40').text('')}
    else{$('#td_year_jan_40').text(jan_dictionary.day_of_month_array[0][39])}
    if(jan_dictionary.day_of_month_array[0][40]>jan_dictionary.days_in_month){$('#td_year_jan_41').text('')}
    else{$('#td_year_jan_41').text(jan_dictionary.day_of_month_array[0][40])}
    if(jan_dictionary.day_of_month_array[0][41]>jan_dictionary.days_in_month){$('#td_year_jan_42').text('')}
    else{$('#td_year_jan_42').text(jan_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_feb(){
    $('#td_year_feb_1').text(feb_dictionary.day_of_month_array[0][0])
    $('#td_year_feb_2').text(feb_dictionary.day_of_month_array[0][1])
    $('#td_year_feb_3').text(feb_dictionary.day_of_month_array[0][2])
    $('#td_year_feb_4').text(feb_dictionary.day_of_month_array[0][3])
    $('#td_year_feb_5').text(feb_dictionary.day_of_month_array[0][4])
    $('#td_year_feb_6').text(feb_dictionary.day_of_month_array[0][5])
    $('#td_year_feb_7').text(feb_dictionary.day_of_month_array[0][6])
    $('#td_year_feb_8').text(feb_dictionary.day_of_month_array[0][7])
    $('#td_year_feb_9').text(feb_dictionary.day_of_month_array[0][8])
    $('#td_year_feb_10').text(feb_dictionary.day_of_month_array[0][9])
    $('#td_year_feb_11').text(feb_dictionary.day_of_month_array[0][10])
    $('#td_year_feb_12').text(feb_dictionary.day_of_month_array[0][11])
    $('#td_year_feb_13').text(feb_dictionary.day_of_month_array[0][12])
    $('#td_year_feb_14').text(feb_dictionary.day_of_month_array[0][13])
    $('#td_year_feb_15').text(feb_dictionary.day_of_month_array[0][14])
    $('#td_year_feb_16').text(feb_dictionary.day_of_month_array[0][15])
    $('#td_year_feb_17').text(feb_dictionary.day_of_month_array[0][16])
    $('#td_year_feb_18').text(feb_dictionary.day_of_month_array[0][17])
    $('#td_year_feb_19').text(feb_dictionary.day_of_month_array[0][18])
    $('#td_year_feb_20').text(feb_dictionary.day_of_month_array[0][19])
    $('#td_year_feb_21').text(feb_dictionary.day_of_month_array[0][20])
    $('#td_year_feb_22').text(feb_dictionary.day_of_month_array[0][21])
    $('#td_year_feb_23').text(feb_dictionary.day_of_month_array[0][22])
    $('#td_year_feb_24').text(feb_dictionary.day_of_month_array[0][23])
    $('#td_year_feb_25').text(feb_dictionary.day_of_month_array[0][24])
    $('#td_year_feb_26').text(feb_dictionary.day_of_month_array[0][25])
    $('#td_year_feb_27').text(feb_dictionary.day_of_month_array[0][26])
    $('#td_year_feb_28').text(feb_dictionary.day_of_month_array[0][27])
    if(feb_dictionary.day_of_month_array[0][28]>feb_dictionary.days_in_month){$('#td_year_feb_29').text('')}
    else{$('#td_year_feb_29').text(feb_dictionary.day_of_month_array[0][28])}
    if(feb_dictionary.day_of_month_array[0][29]>feb_dictionary.days_in_month){$('#td_year_feb_30').text('')}
    else{$('#td_year_feb_30').text(feb_dictionary.day_of_month_array[0][29])}
    if(feb_dictionary.day_of_month_array[0][30]>feb_dictionary.days_in_month){$('#td_year_feb_31').text('')}
    else{$('#td_year_feb_31').text(feb_dictionary.day_of_month_array[0][30])}
    if(feb_dictionary.day_of_month_array[0][31]>feb_dictionary.days_in_month){$('#td_year_feb_32').text('')}
    else{$('#td_year_feb_32').text(feb_dictionary.day_of_month_array[0][31])}
    if(feb_dictionary.day_of_month_array[0][32]>feb_dictionary.days_in_month){$('#td_year_feb_33').text('')}
    else{$('#td_year_feb_33').text(feb_dictionary.day_of_month_array[0][32])}
    if(feb_dictionary.day_of_month_array[0][33]>feb_dictionary.days_in_month){$('#td_year_feb_34').text('')}
    else{$('#td_year_feb_34').text(feb_dictionary.day_of_month_array[0][33])}
    if(feb_dictionary.day_of_month_array[0][34]>feb_dictionary.days_in_month){$('#td_year_feb_35').text('')}
    else{$('#td_year_feb_35').text(feb_dictionary.day_of_month_array[0][34])}
    if(feb_dictionary.day_of_month_array[0][35]>feb_dictionary.days_in_month){$('#td_year_feb_36').text('')}
    else{$('#td_year_feb_36').text(feb_dictionary.day_of_month_array[0][35])}
    if(feb_dictionary.day_of_month_array[0][36]>feb_dictionary.days_in_month){$('#td_year_feb_37').text('')}
    else{$('#td_year_feb_37').text(feb_dictionary.day_of_month_array[0][36])}
    if(feb_dictionary.day_of_month_array[0][37]>feb_dictionary.days_in_month){$('#td_year_feb_38').text('')}
    else{$('#td_year_feb_38').text(feb_dictionary.day_of_month_array[0][37])}
    if(feb_dictionary.day_of_month_array[0][38]>feb_dictionary.days_in_month){$('#td_year_feb_39').text('')}
    else{$('#td_year_feb_39').text(feb_dictionary.day_of_month_array[0][38])}
    if(feb_dictionary.day_of_month_array[0][39]>feb_dictionary.days_in_month){$('#td_year_feb_40').text('')}
    else{$('#td_year_feb_40').text(feb_dictionary.day_of_month_array[0][39])}
    if(feb_dictionary.day_of_month_array[0][40]>feb_dictionary.days_in_month){$('#td_year_feb_41').text('')}
    else{$('#td_year_feb_41').text(feb_dictionary.day_of_month_array[0][40])}
    if(feb_dictionary.day_of_month_array[0][41]>feb_dictionary.days_in_month){$('#td_year_feb_42').text('')}
    else{$('#td_year_feb_42').text(feb_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_mar(){
    $('#td_year_mar_1').text(mar_dictionary.day_of_month_array[0][0])
    $('#td_year_mar_2').text(mar_dictionary.day_of_month_array[0][1])
    $('#td_year_mar_3').text(mar_dictionary.day_of_month_array[0][2])
    $('#td_year_mar_4').text(mar_dictionary.day_of_month_array[0][3])
    $('#td_year_mar_5').text(mar_dictionary.day_of_month_array[0][4])
    $('#td_year_mar_6').text(mar_dictionary.day_of_month_array[0][5])
    $('#td_year_mar_7').text(mar_dictionary.day_of_month_array[0][6])
    $('#td_year_mar_8').text(mar_dictionary.day_of_month_array[0][7])
    $('#td_year_mar_9').text(mar_dictionary.day_of_month_array[0][8])
    $('#td_year_mar_10').text(mar_dictionary.day_of_month_array[0][9])
    $('#td_year_mar_11').text(mar_dictionary.day_of_month_array[0][10])
    $('#td_year_mar_12').text(mar_dictionary.day_of_month_array[0][11])
    $('#td_year_mar_13').text(mar_dictionary.day_of_month_array[0][12])
    $('#td_year_mar_14').text(mar_dictionary.day_of_month_array[0][13])
    $('#td_year_mar_15').text(mar_dictionary.day_of_month_array[0][14])
    $('#td_year_mar_16').text(mar_dictionary.day_of_month_array[0][15])
    $('#td_year_mar_17').text(mar_dictionary.day_of_month_array[0][16])
    $('#td_year_mar_18').text(mar_dictionary.day_of_month_array[0][17])
    $('#td_year_mar_19').text(mar_dictionary.day_of_month_array[0][18])
    $('#td_year_mar_20').text(mar_dictionary.day_of_month_array[0][19])
    $('#td_year_mar_21').text(mar_dictionary.day_of_month_array[0][20])
    $('#td_year_mar_22').text(mar_dictionary.day_of_month_array[0][21])
    $('#td_year_mar_23').text(mar_dictionary.day_of_month_array[0][22])
    $('#td_year_mar_24').text(mar_dictionary.day_of_month_array[0][23])
    $('#td_year_mar_25').text(mar_dictionary.day_of_month_array[0][24])
    $('#td_year_mar_26').text(mar_dictionary.day_of_month_array[0][25])
    $('#td_year_mar_27').text(mar_dictionary.day_of_month_array[0][26])
    $('#td_year_mar_28').text(mar_dictionary.day_of_month_array[0][27])
    if(mar_dictionary.day_of_month_array[0][28]>mar_dictionary.days_in_month){$('#td_year_mar_29').text('')}
    else{$('#td_year_mar_29').text(mar_dictionary.day_of_month_array[0][28])}
    if(mar_dictionary.day_of_month_array[0][29]>mar_dictionary.days_in_month){$('#td_year_mar_30').text('')}
    else{$('#td_year_mar_30').text(mar_dictionary.day_of_month_array[0][29])}
    if(mar_dictionary.day_of_month_array[0][30]>mar_dictionary.days_in_month){$('#td_year_mar_31').text('')}
    else{$('#td_year_mar_31').text(mar_dictionary.day_of_month_array[0][30])}
    if(mar_dictionary.day_of_month_array[0][31]>mar_dictionary.days_in_month){$('#td_year_mar_32').text('')}
    else{$('#td_year_mar_32').text(mar_dictionary.day_of_month_array[0][31])}
    if(mar_dictionary.day_of_month_array[0][32]>mar_dictionary.days_in_month){$('#td_year_mar_33').text('')}
    else{$('#td_year_mar_33').text(mar_dictionary.day_of_month_array[0][32])}
    if(mar_dictionary.day_of_month_array[0][33]>mar_dictionary.days_in_month){$('#td_year_mar_34').text('')}
    else{$('#td_year_mar_34').text(mar_dictionary.day_of_month_array[0][33])}
    if(mar_dictionary.day_of_month_array[0][34]>mar_dictionary.days_in_month){$('#td_year_mar_35').text('')}
    else{$('#td_year_mar_35').text(mar_dictionary.day_of_month_array[0][34])}
    if(mar_dictionary.day_of_month_array[0][35]>mar_dictionary.days_in_month){$('#td_year_mar_36').text('')}
    else{$('#td_year_mar_36').text(mar_dictionary.day_of_month_array[0][35])}
    if(mar_dictionary.day_of_month_array[0][36]>mar_dictionary.days_in_month){$('#td_year_mar_37').text('')}
    else{$('#td_year_mar_37').text(mar_dictionary.day_of_month_array[0][36])}
    if(mar_dictionary.day_of_month_array[0][37]>mar_dictionary.days_in_month){$('#td_year_mar_38').text('')}
    else{$('#td_year_mar_38').text(mar_dictionary.day_of_month_array[0][37])}
    if(mar_dictionary.day_of_month_array[0][38]>mar_dictionary.days_in_month){$('#td_year_mar_39').text('')}
    else{$('#td_year_mar_39').text(mar_dictionary.day_of_month_array[0][38])}
    if(mar_dictionary.day_of_month_array[0][39]>mar_dictionary.days_in_month){$('#td_year_mar_40').text('')}
    else{$('#td_year_mar_40').text(mar_dictionary.day_of_month_array[0][39])}
    if(mar_dictionary.day_of_month_array[0][40]>mar_dictionary.days_in_month){$('#td_year_mar_41').text('')}
    else{$('#td_year_mar_41').text(mar_dictionary.day_of_month_array[0][40])}
    if(mar_dictionary.day_of_month_array[0][41]>mar_dictionary.days_in_month){$('#td_year_mar_42').text('')}
    else{$('#td_year_mar_42').text(mar_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_apr(){
    $('#td_year_apr_1').text(apr_dictionary.day_of_month_array[0][0])
    $('#td_year_apr_2').text(apr_dictionary.day_of_month_array[0][1])
    $('#td_year_apr_3').text(apr_dictionary.day_of_month_array[0][2])
    $('#td_year_apr_4').text(apr_dictionary.day_of_month_array[0][3])
    $('#td_year_apr_5').text(apr_dictionary.day_of_month_array[0][4])
    $('#td_year_apr_6').text(apr_dictionary.day_of_month_array[0][5])
    $('#td_year_apr_7').text(apr_dictionary.day_of_month_array[0][6])
    $('#td_year_apr_8').text(apr_dictionary.day_of_month_array[0][7])
    $('#td_year_apr_9').text(apr_dictionary.day_of_month_array[0][8])
    $('#td_year_apr_10').text(apr_dictionary.day_of_month_array[0][9])
    $('#td_year_apr_11').text(apr_dictionary.day_of_month_array[0][10])
    $('#td_year_apr_12').text(apr_dictionary.day_of_month_array[0][11])
    $('#td_year_apr_13').text(apr_dictionary.day_of_month_array[0][12])
    $('#td_year_apr_14').text(apr_dictionary.day_of_month_array[0][13])
    $('#td_year_apr_15').text(apr_dictionary.day_of_month_array[0][14])
    $('#td_year_apr_16').text(apr_dictionary.day_of_month_array[0][15])
    $('#td_year_apr_17').text(apr_dictionary.day_of_month_array[0][16])
    $('#td_year_apr_18').text(apr_dictionary.day_of_month_array[0][17])
    $('#td_year_apr_19').text(apr_dictionary.day_of_month_array[0][18])
    $('#td_year_apr_20').text(apr_dictionary.day_of_month_array[0][19])
    $('#td_year_apr_21').text(apr_dictionary.day_of_month_array[0][20])
    $('#td_year_apr_22').text(apr_dictionary.day_of_month_array[0][21])
    $('#td_year_apr_23').text(apr_dictionary.day_of_month_array[0][22])
    $('#td_year_apr_24').text(apr_dictionary.day_of_month_array[0][23])
    $('#td_year_apr_25').text(apr_dictionary.day_of_month_array[0][24])
    $('#td_year_apr_26').text(apr_dictionary.day_of_month_array[0][25])
    $('#td_year_apr_27').text(apr_dictionary.day_of_month_array[0][26])
    $('#td_year_apr_28').text(apr_dictionary.day_of_month_array[0][27])
    if(apr_dictionary.day_of_month_array[0][28]>apr_dictionary.days_in_month){$('#td_year_apr_29').text('')}
    else{$('#td_year_apr_29').text(apr_dictionary.day_of_month_array[0][28])}
    if(apr_dictionary.day_of_month_array[0][29]>apr_dictionary.days_in_month){$('#td_year_apr_30').text('')}
    else{$('#td_year_apr_30').text(apr_dictionary.day_of_month_array[0][29])}
    if(apr_dictionary.day_of_month_array[0][30]>apr_dictionary.days_in_month){$('#td_year_apr_31').text('')}
    else{$('#td_year_apr_31').text(apr_dictionary.day_of_month_array[0][30])}
    if(apr_dictionary.day_of_month_array[0][31]>apr_dictionary.days_in_month){$('#td_year_apr_32').text('')}
    else{$('#td_year_apr_32').text(apr_dictionary.day_of_month_array[0][31])}
    if(apr_dictionary.day_of_month_array[0][32]>apr_dictionary.days_in_month){$('#td_year_apr_33').text('')}
    else{$('#td_year_apr_33').text(apr_dictionary.day_of_month_array[0][32])}
    if(apr_dictionary.day_of_month_array[0][33]>apr_dictionary.days_in_month){$('#td_year_apr_34').text('')}
    else{$('#td_year_apr_34').text(apr_dictionary.day_of_month_array[0][33])}
    if(apr_dictionary.day_of_month_array[0][34]>apr_dictionary.days_in_month){$('#td_year_apr_35').text('')}
    else{$('#td_year_apr_35').text(apr_dictionary.day_of_month_array[0][34])}
    if(apr_dictionary.day_of_month_array[0][35]>apr_dictionary.days_in_month){$('#td_year_apr_36').text('')}
    else{$('#td_year_apr_36').text(apr_dictionary.day_of_month_array[0][35])}
    if(apr_dictionary.day_of_month_array[0][36]>apr_dictionary.days_in_month){$('#td_year_apr_37').text('')}
    else{$('#td_year_apr_37').text(apr_dictionary.day_of_month_array[0][36])}
    if(apr_dictionary.day_of_month_array[0][37]>apr_dictionary.days_in_month){$('#td_year_apr_38').text('')}
    else{$('#td_year_apr_38').text(apr_dictionary.day_of_month_array[0][37])}
    if(apr_dictionary.day_of_month_array[0][38]>apr_dictionary.days_in_month){$('#td_year_apr_39').text('')}
    else{$('#td_year_apr_39').text(apr_dictionary.day_of_month_array[0][38])}
    if(apr_dictionary.day_of_month_array[0][39]>apr_dictionary.days_in_month){$('#td_year_apr_40').text('')}
    else{$('#td_year_apr_40').text(apr_dictionary.day_of_month_array[0][39])}
    if(apr_dictionary.day_of_month_array[0][40]>apr_dictionary.days_in_month){$('#td_year_apr_41').text('')}
    else{$('#td_year_apr_41').text(apr_dictionary.day_of_month_array[0][40])}
    if(apr_dictionary.day_of_month_array[0][41]>apr_dictionary.days_in_month){$('#td_year_apr_42').text('')}
    else{$('#td_year_apr_42').text(apr_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_may(){
    $('#td_year_may_1').text(may_dictionary.day_of_month_array[0][0])
    $('#td_year_may_2').text(may_dictionary.day_of_month_array[0][1])
    $('#td_year_may_3').text(may_dictionary.day_of_month_array[0][2])
    $('#td_year_may_4').text(may_dictionary.day_of_month_array[0][3])
    $('#td_year_may_5').text(may_dictionary.day_of_month_array[0][4])
    $('#td_year_may_6').text(may_dictionary.day_of_month_array[0][5])
    $('#td_year_may_7').text(may_dictionary.day_of_month_array[0][6])
    $('#td_year_may_8').text(may_dictionary.day_of_month_array[0][7])
    $('#td_year_may_9').text(may_dictionary.day_of_month_array[0][8])
    $('#td_year_may_10').text(may_dictionary.day_of_month_array[0][9])
    $('#td_year_may_11').text(may_dictionary.day_of_month_array[0][10])
    $('#td_year_may_12').text(may_dictionary.day_of_month_array[0][11])
    $('#td_year_may_13').text(may_dictionary.day_of_month_array[0][12])
    $('#td_year_may_14').text(may_dictionary.day_of_month_array[0][13])
    $('#td_year_may_15').text(may_dictionary.day_of_month_array[0][14])
    $('#td_year_may_16').text(may_dictionary.day_of_month_array[0][15])
    $('#td_year_may_17').text(may_dictionary.day_of_month_array[0][16])
    $('#td_year_may_18').text(may_dictionary.day_of_month_array[0][17])
    $('#td_year_may_19').text(may_dictionary.day_of_month_array[0][18])
    $('#td_year_may_20').text(may_dictionary.day_of_month_array[0][19])
    $('#td_year_may_21').text(may_dictionary.day_of_month_array[0][20])
    $('#td_year_may_22').text(may_dictionary.day_of_month_array[0][21])
    $('#td_year_may_23').text(may_dictionary.day_of_month_array[0][22])
    $('#td_year_may_24').text(may_dictionary.day_of_month_array[0][23])
    $('#td_year_may_25').text(may_dictionary.day_of_month_array[0][24])
    $('#td_year_may_26').text(may_dictionary.day_of_month_array[0][25])
    $('#td_year_may_27').text(may_dictionary.day_of_month_array[0][26])
    $('#td_year_may_28').text(may_dictionary.day_of_month_array[0][27])
    if(may_dictionary.day_of_month_array[0][28]>may_dictionary.days_in_month){$('#td_year_may_29').text('')}
    else{$('#td_year_may_29').text(may_dictionary.day_of_month_array[0][28])}
    if(may_dictionary.day_of_month_array[0][29]>may_dictionary.days_in_month){$('#td_year_may_30').text('')}
    else{$('#td_year_may_30').text(may_dictionary.day_of_month_array[0][29])}
    if(may_dictionary.day_of_month_array[0][30]>may_dictionary.days_in_month){$('#td_year_may_31').text('')}
    else{$('#td_year_may_31').text(may_dictionary.day_of_month_array[0][30])}
    if(may_dictionary.day_of_month_array[0][31]>may_dictionary.days_in_month){$('#td_year_may_32').text('')}
    else{$('#td_year_may_32').text(may_dictionary.day_of_month_array[0][31])}
    if(may_dictionary.day_of_month_array[0][32]>may_dictionary.days_in_month){$('#td_year_may_33').text('')}
    else{$('#td_year_may_33').text(may_dictionary.day_of_month_array[0][32])}
    if(may_dictionary.day_of_month_array[0][33]>may_dictionary.days_in_month){$('#td_year_may_34').text('')}
    else{$('#td_year_may_34').text(may_dictionary.day_of_month_array[0][33])}
    if(may_dictionary.day_of_month_array[0][34]>may_dictionary.days_in_month){$('#td_year_may_35').text('')}
    else{$('#td_year_may_35').text(may_dictionary.day_of_month_array[0][34])}
    if(may_dictionary.day_of_month_array[0][35]>may_dictionary.days_in_month){$('#td_year_may_36').text('')}
    else{$('#td_year_may_36').text(may_dictionary.day_of_month_array[0][35])}
    if(may_dictionary.day_of_month_array[0][36]>may_dictionary.days_in_month){$('#td_year_may_37').text('')}
    else{$('#td_year_may_37').text(may_dictionary.day_of_month_array[0][36])}
    if(may_dictionary.day_of_month_array[0][37]>may_dictionary.days_in_month){$('#td_year_may_38').text('')}
    else{$('#td_year_may_38').text(may_dictionary.day_of_month_array[0][37])}
    if(may_dictionary.day_of_month_array[0][38]>may_dictionary.days_in_month){$('#td_year_may_39').text('')}
    else{$('#td_year_may_39').text(may_dictionary.day_of_month_array[0][38])}
    if(may_dictionary.day_of_month_array[0][39]>may_dictionary.days_in_month){$('#td_year_may_40').text('')}
    else{$('#td_year_may_40').text(may_dictionary.day_of_month_array[0][39])}
    if(may_dictionary.day_of_month_array[0][40]>may_dictionary.days_in_month){$('#td_year_may_41').text('')}
    else{$('#td_year_may_41').text(may_dictionary.day_of_month_array[0][40])}
    if(may_dictionary.day_of_month_array[0][41]>may_dictionary.days_in_month){$('#td_year_may_42').text('')}
    else{$('#td_year_may_42').text(may_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_jun(){
    $('#td_year_jun_1').text(jun_dictionary.day_of_month_array[0][0])
    $('#td_year_jun_2').text(jun_dictionary.day_of_month_array[0][1])
    $('#td_year_jun_3').text(jun_dictionary.day_of_month_array[0][2])
    $('#td_year_jun_4').text(jun_dictionary.day_of_month_array[0][3])
    $('#td_year_jun_5').text(jun_dictionary.day_of_month_array[0][4])
    $('#td_year_jun_6').text(jun_dictionary.day_of_month_array[0][5])
    $('#td_year_jun_7').text(jun_dictionary.day_of_month_array[0][6])
    $('#td_year_jun_8').text(jun_dictionary.day_of_month_array[0][7])
    $('#td_year_jun_9').text(jun_dictionary.day_of_month_array[0][8])
    $('#td_year_jun_10').text(jun_dictionary.day_of_month_array[0][9])
    $('#td_year_jun_11').text(jun_dictionary.day_of_month_array[0][10])
    $('#td_year_jun_12').text(jun_dictionary.day_of_month_array[0][11])
    $('#td_year_jun_13').text(jun_dictionary.day_of_month_array[0][12])
    $('#td_year_jun_14').text(jun_dictionary.day_of_month_array[0][13])
    $('#td_year_jun_15').text(jun_dictionary.day_of_month_array[0][14])
    $('#td_year_jun_16').text(jun_dictionary.day_of_month_array[0][15])
    $('#td_year_jun_17').text(jun_dictionary.day_of_month_array[0][16])
    $('#td_year_jun_18').text(jun_dictionary.day_of_month_array[0][17])
    $('#td_year_jun_19').text(jun_dictionary.day_of_month_array[0][18])
    $('#td_year_jun_20').text(jun_dictionary.day_of_month_array[0][19])
    $('#td_year_jun_21').text(jun_dictionary.day_of_month_array[0][20])
    $('#td_year_jun_22').text(jun_dictionary.day_of_month_array[0][21])
    $('#td_year_jun_23').text(jun_dictionary.day_of_month_array[0][22])
    $('#td_year_jun_24').text(jun_dictionary.day_of_month_array[0][23])
    $('#td_year_jun_25').text(jun_dictionary.day_of_month_array[0][24])
    $('#td_year_jun_26').text(jun_dictionary.day_of_month_array[0][25])
    $('#td_year_jun_27').text(jun_dictionary.day_of_month_array[0][26])
    $('#td_year_jun_28').text(jun_dictionary.day_of_month_array[0][27])
    if(jun_dictionary.day_of_month_array[0][28]>jun_dictionary.days_in_month){$('#td_year_jun_29').text('')}
    else{$('#td_year_jun_29').text(jun_dictionary.day_of_month_array[0][28])}
    if(jun_dictionary.day_of_month_array[0][29]>jun_dictionary.days_in_month){$('#td_year_jun_30').text('')}
    else{$('#td_year_jun_30').text(jun_dictionary.day_of_month_array[0][29])}
    if(jun_dictionary.day_of_month_array[0][30]>jun_dictionary.days_in_month){$('#td_year_jun_31').text('')}
    else{$('#td_year_jun_31').text(jun_dictionary.day_of_month_array[0][30])}
    if(jun_dictionary.day_of_month_array[0][31]>jun_dictionary.days_in_month){$('#td_year_jun_32').text('')}
    else{$('#td_year_jun_32').text(jun_dictionary.day_of_month_array[0][31])}
    if(jun_dictionary.day_of_month_array[0][32]>jun_dictionary.days_in_month){$('#td_year_jun_33').text('')}
    else{$('#td_year_jun_33').text(jun_dictionary.day_of_month_array[0][32])}
    if(jun_dictionary.day_of_month_array[0][33]>jun_dictionary.days_in_month){$('#td_year_jun_34').text('')}
    else{$('#td_year_jun_34').text(jun_dictionary.day_of_month_array[0][33])}
    if(jun_dictionary.day_of_month_array[0][34]>jun_dictionary.days_in_month){$('#td_year_jun_35').text('')}
    else{$('#td_year_jun_35').text(jun_dictionary.day_of_month_array[0][34])}
    if(jun_dictionary.day_of_month_array[0][35]>jun_dictionary.days_in_month){$('#td_year_jun_36').text('')}
    else{$('#td_year_jun_36').text(jun_dictionary.day_of_month_array[0][35])}
    if(jun_dictionary.day_of_month_array[0][36]>jun_dictionary.days_in_month){$('#td_year_jun_37').text('')}
    else{$('#td_year_jun_37').text(jun_dictionary.day_of_month_array[0][36])}
    if(jun_dictionary.day_of_month_array[0][37]>jun_dictionary.days_in_month){$('#td_year_jun_38').text('')}
    else{$('#td_year_jun_38').text(jun_dictionary.day_of_month_array[0][37])}
    if(jun_dictionary.day_of_month_array[0][38]>jun_dictionary.days_in_month){$('#td_year_jun_39').text('')}
    else{$('#td_year_jun_39').text(jun_dictionary.day_of_month_array[0][38])}
    if(jun_dictionary.day_of_month_array[0][39]>jun_dictionary.days_in_month){$('#td_year_jun_40').text('')}
    else{$('#td_year_jun_40').text(jun_dictionary.day_of_month_array[0][39])}
    if(jun_dictionary.day_of_month_array[0][40]>jun_dictionary.days_in_month){$('#td_year_jun_41').text('')}
    else{$('#td_year_jun_41').text(jun_dictionary.day_of_month_array[0][40])}
    if(jun_dictionary.day_of_month_array[0][41]>jun_dictionary.days_in_month){$('#td_year_jun_42').text('')}
    else{$('#td_year_jun_42').text(jun_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_jul(){
    $('#td_year_jul_1').text(jul_dictionary.day_of_month_array[0][0])
    $('#td_year_jul_2').text(jul_dictionary.day_of_month_array[0][1])
    $('#td_year_jul_3').text(jul_dictionary.day_of_month_array[0][2])
    $('#td_year_jul_4').text(jul_dictionary.day_of_month_array[0][3])
    $('#td_year_jul_5').text(jul_dictionary.day_of_month_array[0][4])
    $('#td_year_jul_6').text(jul_dictionary.day_of_month_array[0][5])
    $('#td_year_jul_7').text(jul_dictionary.day_of_month_array[0][6])
    $('#td_year_jul_8').text(jul_dictionary.day_of_month_array[0][7])
    $('#td_year_jul_9').text(jul_dictionary.day_of_month_array[0][8])
    $('#td_year_jul_10').text(jul_dictionary.day_of_month_array[0][9])
    $('#td_year_jul_11').text(jul_dictionary.day_of_month_array[0][10])
    $('#td_year_jul_12').text(jul_dictionary.day_of_month_array[0][11])
    $('#td_year_jul_13').text(jul_dictionary.day_of_month_array[0][12])
    $('#td_year_jul_14').text(jul_dictionary.day_of_month_array[0][13])
    $('#td_year_jul_15').text(jul_dictionary.day_of_month_array[0][14])
    $('#td_year_jul_16').text(jul_dictionary.day_of_month_array[0][15])
    $('#td_year_jul_17').text(jul_dictionary.day_of_month_array[0][16])
    $('#td_year_jul_18').text(jul_dictionary.day_of_month_array[0][17])
    $('#td_year_jul_19').text(jul_dictionary.day_of_month_array[0][18])
    $('#td_year_jul_20').text(jul_dictionary.day_of_month_array[0][19])
    $('#td_year_jul_21').text(jul_dictionary.day_of_month_array[0][20])
    $('#td_year_jul_22').text(jul_dictionary.day_of_month_array[0][21])
    $('#td_year_jul_23').text(jul_dictionary.day_of_month_array[0][22])
    $('#td_year_jul_24').text(jul_dictionary.day_of_month_array[0][23])
    $('#td_year_jul_25').text(jul_dictionary.day_of_month_array[0][24])
    $('#td_year_jul_26').text(jul_dictionary.day_of_month_array[0][25])
    $('#td_year_jul_27').text(jul_dictionary.day_of_month_array[0][26])
    $('#td_year_jul_28').text(jul_dictionary.day_of_month_array[0][27])
    if(jul_dictionary.day_of_month_array[0][28]>jul_dictionary.days_in_month){$('#td_year_jul_29').text('')}
    else{$('#td_year_jul_29').text(jul_dictionary.day_of_month_array[0][28])}
    if(jul_dictionary.day_of_month_array[0][29]>jul_dictionary.days_in_month){$('#td_year_jul_30').text('')}
    else{$('#td_year_jul_30').text(jul_dictionary.day_of_month_array[0][29])}
    if(jul_dictionary.day_of_month_array[0][30]>jul_dictionary.days_in_month){$('#td_year_jul_31').text('')}
    else{$('#td_year_jul_31').text(jul_dictionary.day_of_month_array[0][30])}
    if(jul_dictionary.day_of_month_array[0][31]>jul_dictionary.days_in_month){$('#td_year_jul_32').text('')}
    else{$('#td_year_jul_32').text(jul_dictionary.day_of_month_array[0][31])}
    if(jul_dictionary.day_of_month_array[0][32]>jul_dictionary.days_in_month){$('#td_year_jul_33').text('')}
    else{$('#td_year_jul_33').text(jul_dictionary.day_of_month_array[0][32])}
    if(jul_dictionary.day_of_month_array[0][33]>jul_dictionary.days_in_month){$('#td_year_jul_34').text('')}
    else{$('#td_year_jul_34').text(jul_dictionary.day_of_month_array[0][33])}
    if(jul_dictionary.day_of_month_array[0][34]>jul_dictionary.days_in_month){$('#td_year_jul_35').text('')}
    else{$('#td_year_jul_35').text(jul_dictionary.day_of_month_array[0][34])}
    if(jul_dictionary.day_of_month_array[0][35]>jul_dictionary.days_in_month){$('#td_year_jul_36').text('')}
    else{$('#td_year_jul_36').text(jul_dictionary.day_of_month_array[0][35])}
    if(jul_dictionary.day_of_month_array[0][36]>jul_dictionary.days_in_month){$('#td_year_jul_37').text('')}
    else{$('#td_year_jul_37').text(jul_dictionary.day_of_month_array[0][36])}
    if(jul_dictionary.day_of_month_array[0][37]>jul_dictionary.days_in_month){$('#td_year_jul_38').text('')}
    else{$('#td_year_jul_38').text(jul_dictionary.day_of_month_array[0][37])}
    if(jul_dictionary.day_of_month_array[0][38]>jul_dictionary.days_in_month){$('#td_year_jul_39').text('')}
    else{$('#td_year_jul_39').text(jul_dictionary.day_of_month_array[0][38])}
    if(jul_dictionary.day_of_month_array[0][39]>jul_dictionary.days_in_month){$('#td_year_jul_40').text('')}
    else{$('#td_year_jul_40').text(jul_dictionary.day_of_month_array[0][39])}
    if(jul_dictionary.day_of_month_array[0][40]>jul_dictionary.days_in_month){$('#td_year_jul_41').text('')}
    else{$('#td_year_jul_41').text(jul_dictionary.day_of_month_array[0][40])}
    if(jul_dictionary.day_of_month_array[0][41]>jul_dictionary.days_in_month){$('#td_year_jul_42').text('')}
    else{$('#td_year_jul_42').text(jul_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_aug(){
    $('#td_year_aug_1').text(aug_dictionary.day_of_month_array[0][0])
    $('#td_year_aug_2').text(aug_dictionary.day_of_month_array[0][1])
    $('#td_year_aug_3').text(aug_dictionary.day_of_month_array[0][2])
    $('#td_year_aug_4').text(aug_dictionary.day_of_month_array[0][3])
    $('#td_year_aug_5').text(aug_dictionary.day_of_month_array[0][4])
    $('#td_year_aug_6').text(aug_dictionary.day_of_month_array[0][5])
    $('#td_year_aug_7').text(aug_dictionary.day_of_month_array[0][6])
    $('#td_year_aug_8').text(aug_dictionary.day_of_month_array[0][7])
    $('#td_year_aug_9').text(aug_dictionary.day_of_month_array[0][8])
    $('#td_year_aug_10').text(aug_dictionary.day_of_month_array[0][9])
    $('#td_year_aug_11').text(aug_dictionary.day_of_month_array[0][10])
    $('#td_year_aug_12').text(aug_dictionary.day_of_month_array[0][11])
    $('#td_year_aug_13').text(aug_dictionary.day_of_month_array[0][12])
    $('#td_year_aug_14').text(aug_dictionary.day_of_month_array[0][13])
    $('#td_year_aug_15').text(aug_dictionary.day_of_month_array[0][14])
    $('#td_year_aug_16').text(aug_dictionary.day_of_month_array[0][15])
    $('#td_year_aug_17').text(aug_dictionary.day_of_month_array[0][16])
    $('#td_year_aug_18').text(aug_dictionary.day_of_month_array[0][17])
    $('#td_year_aug_19').text(aug_dictionary.day_of_month_array[0][18])
    $('#td_year_aug_20').text(aug_dictionary.day_of_month_array[0][19])
    $('#td_year_aug_21').text(aug_dictionary.day_of_month_array[0][20])
    $('#td_year_aug_22').text(aug_dictionary.day_of_month_array[0][21])
    $('#td_year_aug_23').text(aug_dictionary.day_of_month_array[0][22])
    $('#td_year_aug_24').text(aug_dictionary.day_of_month_array[0][23])
    $('#td_year_aug_25').text(aug_dictionary.day_of_month_array[0][24])
    $('#td_year_aug_26').text(aug_dictionary.day_of_month_array[0][25])
    $('#td_year_aug_27').text(aug_dictionary.day_of_month_array[0][26])
    $('#td_year_aug_28').text(aug_dictionary.day_of_month_array[0][27])
    if(aug_dictionary.day_of_month_array[0][28]>aug_dictionary.days_in_month){$('#td_year_aug_29').text('')}
    else{$('#td_year_aug_29').text(aug_dictionary.day_of_month_array[0][28])}
    if(aug_dictionary.day_of_month_array[0][29]>aug_dictionary.days_in_month){$('#td_year_aug_30').text('')}
    else{$('#td_year_aug_30').text(aug_dictionary.day_of_month_array[0][29])}
    if(aug_dictionary.day_of_month_array[0][30]>aug_dictionary.days_in_month){$('#td_year_aug_31').text('')}
    else{$('#td_year_aug_31').text(aug_dictionary.day_of_month_array[0][30])}
    if(aug_dictionary.day_of_month_array[0][31]>aug_dictionary.days_in_month){$('#td_year_aug_32').text('')}
    else{$('#td_year_aug_32').text(aug_dictionary.day_of_month_array[0][31])}
    if(aug_dictionary.day_of_month_array[0][32]>aug_dictionary.days_in_month){$('#td_year_aug_33').text('')}
    else{$('#td_year_aug_33').text(aug_dictionary.day_of_month_array[0][32])}
    if(aug_dictionary.day_of_month_array[0][33]>aug_dictionary.days_in_month){$('#td_year_aug_34').text('')}
    else{$('#td_year_aug_34').text(aug_dictionary.day_of_month_array[0][33])}
    if(aug_dictionary.day_of_month_array[0][34]>aug_dictionary.days_in_month){$('#td_year_aug_35').text('')}
    else{$('#td_year_aug_35').text(aug_dictionary.day_of_month_array[0][34])}
    if(aug_dictionary.day_of_month_array[0][35]>aug_dictionary.days_in_month){$('#td_year_aug_36').text('')}
    else{$('#td_year_aug_36').text(aug_dictionary.day_of_month_array[0][35])}
    if(aug_dictionary.day_of_month_array[0][36]>aug_dictionary.days_in_month){$('#td_year_aug_37').text('')}
    else{$('#td_year_aug_37').text(aug_dictionary.day_of_month_array[0][36])}
    if(aug_dictionary.day_of_month_array[0][37]>aug_dictionary.days_in_month){$('#td_year_aug_38').text('')}
    else{$('#td_year_aug_38').text(aug_dictionary.day_of_month_array[0][37])}
    if(aug_dictionary.day_of_month_array[0][38]>aug_dictionary.days_in_month){$('#td_year_aug_39').text('')}
    else{$('#td_year_aug_39').text(aug_dictionary.day_of_month_array[0][38])}
    if(aug_dictionary.day_of_month_array[0][39]>aug_dictionary.days_in_month){$('#td_year_aug_40').text('')}
    else{$('#td_year_aug_40').text(aug_dictionary.day_of_month_array[0][39])}
    if(aug_dictionary.day_of_month_array[0][40]>aug_dictionary.days_in_month){$('#td_year_aug_41').text('')}
    else{$('#td_year_aug_41').text(aug_dictionary.day_of_month_array[0][40])}
    if(aug_dictionary.day_of_month_array[0][41]>aug_dictionary.days_in_month){$('#td_year_aug_42').text('')}
    else{$('#td_year_aug_42').text(aug_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_sep(){
    $('#td_year_sep_1').text(sep_dictionary.day_of_month_array[0][0])
    $('#td_year_sep_2').text(sep_dictionary.day_of_month_array[0][1])
    $('#td_year_sep_3').text(sep_dictionary.day_of_month_array[0][2])
    $('#td_year_sep_4').text(sep_dictionary.day_of_month_array[0][3])
    $('#td_year_sep_5').text(sep_dictionary.day_of_month_array[0][4])
    $('#td_year_sep_6').text(sep_dictionary.day_of_month_array[0][5])
    $('#td_year_sep_7').text(sep_dictionary.day_of_month_array[0][6])
    $('#td_year_sep_8').text(sep_dictionary.day_of_month_array[0][7])
    $('#td_year_sep_9').text(sep_dictionary.day_of_month_array[0][8])
    $('#td_year_sep_10').text(sep_dictionary.day_of_month_array[0][9])
    $('#td_year_sep_11').text(sep_dictionary.day_of_month_array[0][10])
    $('#td_year_sep_12').text(sep_dictionary.day_of_month_array[0][11])
    $('#td_year_sep_13').text(sep_dictionary.day_of_month_array[0][12])
    $('#td_year_sep_14').text(sep_dictionary.day_of_month_array[0][13])
    $('#td_year_sep_15').text(sep_dictionary.day_of_month_array[0][14])
    $('#td_year_sep_16').text(sep_dictionary.day_of_month_array[0][15])
    $('#td_year_sep_17').text(sep_dictionary.day_of_month_array[0][16])
    $('#td_year_sep_18').text(sep_dictionary.day_of_month_array[0][17])
    $('#td_year_sep_19').text(sep_dictionary.day_of_month_array[0][18])
    $('#td_year_sep_20').text(sep_dictionary.day_of_month_array[0][19])
    $('#td_year_sep_21').text(sep_dictionary.day_of_month_array[0][20])
    $('#td_year_sep_22').text(sep_dictionary.day_of_month_array[0][21])
    $('#td_year_sep_23').text(sep_dictionary.day_of_month_array[0][22])
    $('#td_year_sep_24').text(sep_dictionary.day_of_month_array[0][23])
    $('#td_year_sep_25').text(sep_dictionary.day_of_month_array[0][24])
    $('#td_year_sep_26').text(sep_dictionary.day_of_month_array[0][25])
    $('#td_year_sep_27').text(sep_dictionary.day_of_month_array[0][26])
    $('#td_year_sep_28').text(sep_dictionary.day_of_month_array[0][27])
    if(sep_dictionary.day_of_month_array[0][28]>sep_dictionary.days_in_month){$('#td_year_sep_29').text('')}
    else{$('#td_year_sep_29').text(sep_dictionary.day_of_month_array[0][28])}
    if(sep_dictionary.day_of_month_array[0][29]>sep_dictionary.days_in_month){$('#td_year_sep_30').text('')}
    else{$('#td_year_sep_30').text(sep_dictionary.day_of_month_array[0][29])}
    if(sep_dictionary.day_of_month_array[0][30]>sep_dictionary.days_in_month){$('#td_year_sep_31').text('')}
    else{$('#td_year_sep_31').text(sep_dictionary.day_of_month_array[0][30])}
    if(sep_dictionary.day_of_month_array[0][31]>sep_dictionary.days_in_month){$('#td_year_sep_32').text('')}
    else{$('#td_year_sep_32').text(sep_dictionary.day_of_month_array[0][31])}
    if(sep_dictionary.day_of_month_array[0][32]>sep_dictionary.days_in_month){$('#td_year_sep_33').text('')}
    else{$('#td_year_sep_33').text(sep_dictionary.day_of_month_array[0][32])}
    if(sep_dictionary.day_of_month_array[0][33]>sep_dictionary.days_in_month){$('#td_year_sep_34').text('')}
    else{$('#td_year_sep_34').text(sep_dictionary.day_of_month_array[0][33])}
    if(sep_dictionary.day_of_month_array[0][34]>sep_dictionary.days_in_month){$('#td_year_sep_35').text('')}
    else{$('#td_year_sep_35').text(sep_dictionary.day_of_month_array[0][34])}
    if(sep_dictionary.day_of_month_array[0][35]>sep_dictionary.days_in_month){$('#td_year_sep_36').text('')}
    else{$('#td_year_sep_36').text(sep_dictionary.day_of_month_array[0][35])}
    if(sep_dictionary.day_of_month_array[0][36]>sep_dictionary.days_in_month){$('#td_year_sep_37').text('')}
    else{$('#td_year_sep_37').text(sep_dictionary.day_of_month_array[0][36])}
    if(sep_dictionary.day_of_month_array[0][37]>sep_dictionary.days_in_month){$('#td_year_sep_38').text('')}
    else{$('#td_year_sep_38').text(sep_dictionary.day_of_month_array[0][37])}
    if(sep_dictionary.day_of_month_array[0][38]>sep_dictionary.days_in_month){$('#td_year_sep_39').text('')}
    else{$('#td_year_sep_39').text(sep_dictionary.day_of_month_array[0][38])}
    if(sep_dictionary.day_of_month_array[0][39]>sep_dictionary.days_in_month){$('#td_year_sep_40').text('')}
    else{$('#td_year_sep_40').text(sep_dictionary.day_of_month_array[0][39])}
    if(sep_dictionary.day_of_month_array[0][40]>sep_dictionary.days_in_month){$('#td_year_sep_41').text('')}
    else{$('#td_year_sep_41').text(sep_dictionary.day_of_month_array[0][40])}
    if(sep_dictionary.day_of_month_array[0][41]>sep_dictionary.days_in_month){$('#td_year_sep_42').text('')}
    else{$('#td_year_sep_42').text(sep_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_oct(){
    $('#td_year_oct_1').text(oct_dictionary.day_of_month_array[0][0])
    $('#td_year_oct_2').text(oct_dictionary.day_of_month_array[0][1])
    $('#td_year_oct_3').text(oct_dictionary.day_of_month_array[0][2])
    $('#td_year_oct_4').text(oct_dictionary.day_of_month_array[0][3])
    $('#td_year_oct_5').text(oct_dictionary.day_of_month_array[0][4])
    $('#td_year_oct_6').text(oct_dictionary.day_of_month_array[0][5])
    $('#td_year_oct_7').text(oct_dictionary.day_of_month_array[0][6])
    $('#td_year_oct_8').text(oct_dictionary.day_of_month_array[0][7])
    $('#td_year_oct_9').text(oct_dictionary.day_of_month_array[0][8])
    $('#td_year_oct_10').text(oct_dictionary.day_of_month_array[0][9])
    $('#td_year_oct_11').text(oct_dictionary.day_of_month_array[0][10])
    $('#td_year_oct_12').text(oct_dictionary.day_of_month_array[0][11])
    $('#td_year_oct_13').text(oct_dictionary.day_of_month_array[0][12])
    $('#td_year_oct_14').text(oct_dictionary.day_of_month_array[0][13])
    $('#td_year_oct_15').text(oct_dictionary.day_of_month_array[0][14])
    $('#td_year_oct_16').text(oct_dictionary.day_of_month_array[0][15])
    $('#td_year_oct_17').text(oct_dictionary.day_of_month_array[0][16])
    $('#td_year_oct_18').text(oct_dictionary.day_of_month_array[0][17])
    $('#td_year_oct_19').text(oct_dictionary.day_of_month_array[0][18])
    $('#td_year_oct_20').text(oct_dictionary.day_of_month_array[0][19])
    $('#td_year_oct_21').text(oct_dictionary.day_of_month_array[0][20])
    $('#td_year_oct_22').text(oct_dictionary.day_of_month_array[0][21])
    $('#td_year_oct_23').text(oct_dictionary.day_of_month_array[0][22])
    $('#td_year_oct_24').text(oct_dictionary.day_of_month_array[0][23])
    $('#td_year_oct_25').text(oct_dictionary.day_of_month_array[0][24])
    $('#td_year_oct_26').text(oct_dictionary.day_of_month_array[0][25])
    $('#td_year_oct_27').text(oct_dictionary.day_of_month_array[0][26])
    $('#td_year_oct_28').text(oct_dictionary.day_of_month_array[0][27])
    if(oct_dictionary.day_of_month_array[0][28]>oct_dictionary.days_in_month){$('#td_year_oct_29').text('')}
    else{$('#td_year_oct_29').text(oct_dictionary.day_of_month_array[0][28])}
    if(oct_dictionary.day_of_month_array[0][29]>oct_dictionary.days_in_month){$('#td_year_oct_30').text('')}
    else{$('#td_year_oct_30').text(oct_dictionary.day_of_month_array[0][29])}
    if(oct_dictionary.day_of_month_array[0][30]>oct_dictionary.days_in_month){$('#td_year_oct_31').text('')}
    else{$('#td_year_oct_31').text(oct_dictionary.day_of_month_array[0][30])}
    if(oct_dictionary.day_of_month_array[0][31]>oct_dictionary.days_in_month){$('#td_year_oct_32').text('')}
    else{$('#td_year_oct_32').text(oct_dictionary.day_of_month_array[0][31])}
    if(oct_dictionary.day_of_month_array[0][32]>oct_dictionary.days_in_month){$('#td_year_oct_33').text('')}
    else{$('#td_year_oct_33').text(oct_dictionary.day_of_month_array[0][32])}
    if(oct_dictionary.day_of_month_array[0][33]>oct_dictionary.days_in_month){$('#td_year_oct_34').text('')}
    else{$('#td_year_oct_34').text(oct_dictionary.day_of_month_array[0][33])}
    if(oct_dictionary.day_of_month_array[0][34]>oct_dictionary.days_in_month){$('#td_year_oct_35').text('')}
    else{$('#td_year_oct_35').text(oct_dictionary.day_of_month_array[0][34])}
    if(oct_dictionary.day_of_month_array[0][35]>oct_dictionary.days_in_month){$('#td_year_oct_36').text('')}
    else{$('#td_year_oct_36').text(oct_dictionary.day_of_month_array[0][35])}
    if(oct_dictionary.day_of_month_array[0][36]>oct_dictionary.days_in_month){$('#td_year_oct_37').text('')}
    else{$('#td_year_oct_37').text(oct_dictionary.day_of_month_array[0][36])}
    if(oct_dictionary.day_of_month_array[0][37]>oct_dictionary.days_in_month){$('#td_year_oct_38').text('')}
    else{$('#td_year_oct_38').text(oct_dictionary.day_of_month_array[0][37])}
    if(oct_dictionary.day_of_month_array[0][38]>oct_dictionary.days_in_month){$('#td_year_oct_39').text('')}
    else{$('#td_year_oct_39').text(oct_dictionary.day_of_month_array[0][38])}
    if(oct_dictionary.day_of_month_array[0][39]>oct_dictionary.days_in_month){$('#td_year_oct_40').text('')}
    else{$('#td_year_oct_40').text(oct_dictionary.day_of_month_array[0][39])}
    if(oct_dictionary.day_of_month_array[0][40]>oct_dictionary.days_in_month){$('#td_year_oct_41').text('')}
    else{$('#td_year_oct_41').text(oct_dictionary.day_of_month_array[0][40])}
    if(oct_dictionary.day_of_month_array[0][41]>oct_dictionary.days_in_month){$('#td_year_oct_42').text('')}
    else{$('#td_year_oct_42').text(oct_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_nov(){
    $('#td_year_nov_1').text(nov_dictionary.day_of_month_array[0][0])
    $('#td_year_nov_2').text(nov_dictionary.day_of_month_array[0][1])
    $('#td_year_nov_3').text(nov_dictionary.day_of_month_array[0][2])
    $('#td_year_nov_4').text(nov_dictionary.day_of_month_array[0][3])
    $('#td_year_nov_5').text(nov_dictionary.day_of_month_array[0][4])
    $('#td_year_nov_6').text(nov_dictionary.day_of_month_array[0][5])
    $('#td_year_nov_7').text(nov_dictionary.day_of_month_array[0][6])
    $('#td_year_nov_8').text(nov_dictionary.day_of_month_array[0][7])
    $('#td_year_nov_9').text(nov_dictionary.day_of_month_array[0][8])
    $('#td_year_nov_10').text(nov_dictionary.day_of_month_array[0][9])
    $('#td_year_nov_11').text(nov_dictionary.day_of_month_array[0][10])
    $('#td_year_nov_12').text(nov_dictionary.day_of_month_array[0][11])
    $('#td_year_nov_13').text(nov_dictionary.day_of_month_array[0][12])
    $('#td_year_nov_14').text(nov_dictionary.day_of_month_array[0][13])
    $('#td_year_nov_15').text(nov_dictionary.day_of_month_array[0][14])
    $('#td_year_nov_16').text(nov_dictionary.day_of_month_array[0][15])
    $('#td_year_nov_17').text(nov_dictionary.day_of_month_array[0][16])
    $('#td_year_nov_18').text(nov_dictionary.day_of_month_array[0][17])
    $('#td_year_nov_19').text(nov_dictionary.day_of_month_array[0][18])
    $('#td_year_nov_20').text(nov_dictionary.day_of_month_array[0][19])
    $('#td_year_nov_21').text(nov_dictionary.day_of_month_array[0][20])
    $('#td_year_nov_22').text(nov_dictionary.day_of_month_array[0][21])
    $('#td_year_nov_23').text(nov_dictionary.day_of_month_array[0][22])
    $('#td_year_nov_24').text(nov_dictionary.day_of_month_array[0][23])
    $('#td_year_nov_25').text(nov_dictionary.day_of_month_array[0][24])
    $('#td_year_nov_26').text(nov_dictionary.day_of_month_array[0][25])
    $('#td_year_nov_27').text(nov_dictionary.day_of_month_array[0][26])
    $('#td_year_nov_28').text(nov_dictionary.day_of_month_array[0][27])
    if(nov_dictionary.day_of_month_array[0][28]>nov_dictionary.days_in_month){$('#td_year_nov_29').text('')}
    else{$('#td_year_nov_29').text(nov_dictionary.day_of_month_array[0][28])}
    if(nov_dictionary.day_of_month_array[0][29]>nov_dictionary.days_in_month){$('#td_year_nov_30').text('')}
    else{$('#td_year_nov_30').text(nov_dictionary.day_of_month_array[0][29])}
    if(nov_dictionary.day_of_month_array[0][30]>nov_dictionary.days_in_month){$('#td_year_nov_31').text('')}
    else{$('#td_year_nov_31').text(nov_dictionary.day_of_month_array[0][30])}
    if(nov_dictionary.day_of_month_array[0][31]>nov_dictionary.days_in_month){$('#td_year_nov_32').text('')}
    else{$('#td_year_nov_32').text(nov_dictionary.day_of_month_array[0][31])}
    if(nov_dictionary.day_of_month_array[0][32]>nov_dictionary.days_in_month){$('#td_year_nov_33').text('')}
    else{$('#td_year_nov_33').text(nov_dictionary.day_of_month_array[0][32])}
    if(nov_dictionary.day_of_month_array[0][33]>nov_dictionary.days_in_month){$('#td_year_nov_34').text('')}
    else{$('#td_year_nov_34').text(nov_dictionary.day_of_month_array[0][33])}
    if(nov_dictionary.day_of_month_array[0][34]>nov_dictionary.days_in_month){$('#td_year_nov_35').text('')}
    else{$('#td_year_nov_35').text(nov_dictionary.day_of_month_array[0][34])}
    if(nov_dictionary.day_of_month_array[0][35]>nov_dictionary.days_in_month){$('#td_year_nov_36').text('')}
    else{$('#td_year_nov_36').text(nov_dictionary.day_of_month_array[0][35])}
    if(nov_dictionary.day_of_month_array[0][36]>nov_dictionary.days_in_month){$('#td_year_nov_37').text('')}
    else{$('#td_year_nov_37').text(nov_dictionary.day_of_month_array[0][36])}
    if(nov_dictionary.day_of_month_array[0][37]>nov_dictionary.days_in_month){$('#td_year_nov_38').text('')}
    else{$('#td_year_nov_38').text(nov_dictionary.day_of_month_array[0][37])}
    if(nov_dictionary.day_of_month_array[0][38]>nov_dictionary.days_in_month){$('#td_year_nov_39').text('')}
    else{$('#td_year_nov_39').text(nov_dictionary.day_of_month_array[0][38])}
    if(nov_dictionary.day_of_month_array[0][39]>nov_dictionary.days_in_month){$('#td_year_nov_40').text('')}
    else{$('#td_year_nov_40').text(nov_dictionary.day_of_month_array[0][39])}
    if(nov_dictionary.day_of_month_array[0][40]>nov_dictionary.days_in_month){$('#td_year_nov_41').text('')}
    else{$('#td_year_nov_41').text(nov_dictionary.day_of_month_array[0][40])}
    if(nov_dictionary.day_of_month_array[0][41]>nov_dictionary.days_in_month){$('#td_year_nov_42').text('')}
    else{$('#td_year_nov_42').text(nov_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_day_of_month_labeler_dec(){
    $('#td_year_dec_1').text(dec_dictionary.day_of_month_array[0][0])
    $('#td_year_dec_2').text(dec_dictionary.day_of_month_array[0][1])
    $('#td_year_dec_3').text(dec_dictionary.day_of_month_array[0][2])
    $('#td_year_dec_4').text(dec_dictionary.day_of_month_array[0][3])
    $('#td_year_dec_5').text(dec_dictionary.day_of_month_array[0][4])
    $('#td_year_dec_6').text(dec_dictionary.day_of_month_array[0][5])
    $('#td_year_dec_7').text(dec_dictionary.day_of_month_array[0][6])
    $('#td_year_dec_8').text(dec_dictionary.day_of_month_array[0][7])
    $('#td_year_dec_9').text(dec_dictionary.day_of_month_array[0][8])
    $('#td_year_dec_10').text(dec_dictionary.day_of_month_array[0][9])
    $('#td_year_dec_11').text(dec_dictionary.day_of_month_array[0][10])
    $('#td_year_dec_12').text(dec_dictionary.day_of_month_array[0][11])
    $('#td_year_dec_13').text(dec_dictionary.day_of_month_array[0][12])
    $('#td_year_dec_14').text(dec_dictionary.day_of_month_array[0][13])
    $('#td_year_dec_15').text(dec_dictionary.day_of_month_array[0][14])
    $('#td_year_dec_16').text(dec_dictionary.day_of_month_array[0][15])
    $('#td_year_dec_17').text(dec_dictionary.day_of_month_array[0][16])
    $('#td_year_dec_18').text(dec_dictionary.day_of_month_array[0][17])
    $('#td_year_dec_19').text(dec_dictionary.day_of_month_array[0][18])
    $('#td_year_dec_20').text(dec_dictionary.day_of_month_array[0][19])
    $('#td_year_dec_21').text(dec_dictionary.day_of_month_array[0][20])
    $('#td_year_dec_22').text(dec_dictionary.day_of_month_array[0][21])
    $('#td_year_dec_23').text(dec_dictionary.day_of_month_array[0][22])
    $('#td_year_dec_24').text(dec_dictionary.day_of_month_array[0][23])
    $('#td_year_dec_25').text(dec_dictionary.day_of_month_array[0][24])
    $('#td_year_dec_26').text(dec_dictionary.day_of_month_array[0][25])
    $('#td_year_dec_27').text(dec_dictionary.day_of_month_array[0][26])
    $('#td_year_dec_28').text(dec_dictionary.day_of_month_array[0][27])
    if(dec_dictionary.day_of_month_array[0][28]>dec_dictionary.days_in_month){$('#td_year_dec_29').text('')}
    else{$('#td_year_dec_29').text(dec_dictionary.day_of_month_array[0][28])}
    if(dec_dictionary.day_of_month_array[0][29]>dec_dictionary.days_in_month){$('#td_year_dec_30').text('')}
    else{$('#td_year_dec_30').text(dec_dictionary.day_of_month_array[0][29])}
    if(dec_dictionary.day_of_month_array[0][30]>dec_dictionary.days_in_month){$('#td_year_dec_31').text('')}
    else{$('#td_year_dec_31').text(dec_dictionary.day_of_month_array[0][30])}
    if(dec_dictionary.day_of_month_array[0][31]>dec_dictionary.days_in_month){$('#td_year_dec_32').text('')}
    else{$('#td_year_dec_32').text(dec_dictionary.day_of_month_array[0][31])}
    if(dec_dictionary.day_of_month_array[0][32]>dec_dictionary.days_in_month){$('#td_year_dec_33').text('')}
    else{$('#td_year_dec_33').text(dec_dictionary.day_of_month_array[0][32])}
    if(dec_dictionary.day_of_month_array[0][33]>dec_dictionary.days_in_month){$('#td_year_dec_34').text('')}
    else{$('#td_year_dec_34').text(dec_dictionary.day_of_month_array[0][33])}
    if(dec_dictionary.day_of_month_array[0][34]>dec_dictionary.days_in_month){$('#td_year_dec_35').text('')}
    else{$('#td_year_dec_35').text(dec_dictionary.day_of_month_array[0][34])}
    if(dec_dictionary.day_of_month_array[0][35]>dec_dictionary.days_in_month){$('#td_year_dec_36').text('')}
    else{$('#td_year_dec_36').text(dec_dictionary.day_of_month_array[0][35])}
    if(dec_dictionary.day_of_month_array[0][36]>dec_dictionary.days_in_month){$('#td_year_dec_37').text('')}
    else{$('#td_year_dec_37').text(dec_dictionary.day_of_month_array[0][36])}
    if(dec_dictionary.day_of_month_array[0][37]>dec_dictionary.days_in_month){$('#td_year_dec_38').text('')}
    else{$('#td_year_dec_38').text(dec_dictionary.day_of_month_array[0][37])}
    if(dec_dictionary.day_of_month_array[0][38]>dec_dictionary.days_in_month){$('#td_year_dec_39').text('')}
    else{$('#td_year_dec_39').text(dec_dictionary.day_of_month_array[0][38])}
    if(dec_dictionary.day_of_month_array[0][39]>dec_dictionary.days_in_month){$('#td_year_dec_40').text('')}
    else{$('#td_year_dec_40').text(dec_dictionary.day_of_month_array[0][39])}
    if(dec_dictionary.day_of_month_array[0][40]>dec_dictionary.days_in_month){$('#td_year_dec_41').text('')}
    else{$('#td_year_dec_41').text(dec_dictionary.day_of_month_array[0][40])}
    if(dec_dictionary.day_of_month_array[0][41]>dec_dictionary.days_in_month){$('#td_year_dec_42').text('')}
    else{$('#td_year_dec_42').text(dec_dictionary.day_of_month_array[0][41])}
}

function year_view_calendar_highlight_today_check_jan(){
    year_view_values_jan = [
    $('#td_year_jan_1').text(),
    $('#td_year_jan_2').text(),
    $('#td_year_jan_3').text(),
    $('#td_year_jan_4').text(),
    $('#td_year_jan_5').text(),
    $('#td_year_jan_6').text(),
    $('#td_year_jan_7').text(),
    $('#td_year_jan_8').text(),
    $('#td_year_jan_9').text(),
    $('#td_year_jan_10').text(),
    $('#td_year_jan_11').text(),
    $('#td_year_jan_12').text(),
    $('#td_year_jan_13').text(),
    $('#td_year_jan_14').text(),
    $('#td_year_jan_15').text(),
    $('#td_year_jan_16').text(),
    $('#td_year_jan_17').text(),
    $('#td_year_jan_18').text(),
    $('#td_year_jan_19').text(),
    $('#td_year_jan_20').text(),
    $('#td_year_jan_21').text(),
    $('#td_year_jan_22').text(),
    $('#td_year_jan_23').text(),
    $('#td_year_jan_24').text(),
    $('#td_year_jan_25').text(),
    $('#td_year_jan_26').text(),
    $('#td_year_jan_27').text(),
    $('#td_year_jan_28').text(),
    $('#td_year_jan_29').text(),
    $('#td_year_jan_30').text(),
    $('#td_year_jan_31').text(),
    $('#td_year_jan_32').text(),
    $('#td_year_jan_33').text(),
    $('#td_year_jan_34').text(),
    $('#td_year_jan_35').text(),
    $('#td_year_jan_36').text(),
    $('#td_year_jan_37').text(),
    $('#td_year_jan_38').text(),
    $('#td_year_jan_39').text(),
    $('#td_year_jan_40').text(),
    $('#td_year_jan_41').text(),
    $('#td_year_jan_42').text()
    ]
}

function year_view_calendar_highlight_today_check_feb(){
    year_view_values_feb = [
    $('#td_year_feb_1').text(),
    $('#td_year_feb_2').text(),
    $('#td_year_feb_3').text(),
    $('#td_year_feb_4').text(),
    $('#td_year_feb_5').text(),
    $('#td_year_feb_6').text(),
    $('#td_year_feb_7').text(),
    $('#td_year_feb_8').text(),
    $('#td_year_feb_9').text(),
    $('#td_year_feb_10').text(),
    $('#td_year_feb_11').text(),
    $('#td_year_feb_12').text(),
    $('#td_year_feb_13').text(),
    $('#td_year_feb_14').text(),
    $('#td_year_feb_15').text(),
    $('#td_year_feb_16').text(),
    $('#td_year_feb_17').text(),
    $('#td_year_feb_18').text(),
    $('#td_year_feb_19').text(),
    $('#td_year_feb_20').text(),
    $('#td_year_feb_21').text(),
    $('#td_year_feb_22').text(),
    $('#td_year_feb_23').text(),
    $('#td_year_feb_24').text(),
    $('#td_year_feb_25').text(),
    $('#td_year_feb_26').text(),
    $('#td_year_feb_27').text(),
    $('#td_year_feb_28').text(),
    $('#td_year_feb_29').text(),
    $('#td_year_feb_30').text(),
    $('#td_year_feb_31').text(),
    $('#td_year_feb_32').text(),
    $('#td_year_feb_33').text(),
    $('#td_year_feb_34').text(),
    $('#td_year_feb_35').text(),
    $('#td_year_feb_36').text(),
    $('#td_year_feb_37').text(),
    $('#td_year_feb_38').text(),
    $('#td_year_feb_39').text(),
    $('#td_year_feb_40').text(),
    $('#td_year_feb_41').text(),
    $('#td_year_feb_42').text()
    ]
}

function year_view_calendar_highlight_today_check_mar(){
    year_view_values_mar = [
    $('#td_year_mar_1').text(),
    $('#td_year_mar_2').text(),
    $('#td_year_mar_3').text(),
    $('#td_year_mar_4').text(),
    $('#td_year_mar_5').text(),
    $('#td_year_mar_6').text(),
    $('#td_year_mar_7').text(),
    $('#td_year_mar_8').text(),
    $('#td_year_mar_9').text(),
    $('#td_year_mar_10').text(),
    $('#td_year_mar_11').text(),
    $('#td_year_mar_12').text(),
    $('#td_year_mar_13').text(),
    $('#td_year_mar_14').text(),
    $('#td_year_mar_15').text(),
    $('#td_year_mar_16').text(),
    $('#td_year_mar_17').text(),
    $('#td_year_mar_18').text(),
    $('#td_year_mar_19').text(),
    $('#td_year_mar_20').text(),
    $('#td_year_mar_21').text(),
    $('#td_year_mar_22').text(),
    $('#td_year_mar_23').text(),
    $('#td_year_mar_24').text(),
    $('#td_year_mar_25').text(),
    $('#td_year_mar_26').text(),
    $('#td_year_mar_27').text(),
    $('#td_year_mar_28').text(),
    $('#td_year_mar_29').text(),
    $('#td_year_mar_30').text(),
    $('#td_year_mar_31').text(),
    $('#td_year_mar_32').text(),
    $('#td_year_mar_33').text(),
    $('#td_year_mar_34').text(),
    $('#td_year_mar_35').text(),
    $('#td_year_mar_36').text(),
    $('#td_year_mar_37').text(),
    $('#td_year_mar_38').text(),
    $('#td_year_mar_39').text(),
    $('#td_year_mar_40').text(),
    $('#td_year_mar_41').text(),
    $('#td_year_mar_42').text()
    ]
}

function year_view_calendar_highlight_today_check_apr(){
    year_view_values_apr = [
    $('#td_year_apr_1').text(),
    $('#td_year_apr_2').text(),
    $('#td_year_apr_3').text(),
    $('#td_year_apr_4').text(),
    $('#td_year_apr_5').text(),
    $('#td_year_apr_6').text(),
    $('#td_year_apr_7').text(),
    $('#td_year_apr_8').text(),
    $('#td_year_apr_9').text(),
    $('#td_year_apr_10').text(),
    $('#td_year_apr_11').text(),
    $('#td_year_apr_12').text(),
    $('#td_year_apr_13').text(),
    $('#td_year_apr_14').text(),
    $('#td_year_apr_15').text(),
    $('#td_year_apr_16').text(),
    $('#td_year_apr_17').text(),
    $('#td_year_apr_18').text(),
    $('#td_year_apr_19').text(),
    $('#td_year_apr_20').text(),
    $('#td_year_apr_21').text(),
    $('#td_year_apr_22').text(),
    $('#td_year_apr_23').text(),
    $('#td_year_apr_24').text(),
    $('#td_year_apr_25').text(),
    $('#td_year_apr_26').text(),
    $('#td_year_apr_27').text(),
    $('#td_year_apr_28').text(),
    $('#td_year_apr_29').text(),
    $('#td_year_apr_30').text(),
    $('#td_year_apr_31').text(),
    $('#td_year_apr_32').text(),
    $('#td_year_apr_33').text(),
    $('#td_year_apr_34').text(),
    $('#td_year_apr_35').text(),
    $('#td_year_apr_36').text(),
    $('#td_year_apr_37').text(),
    $('#td_year_apr_38').text(),
    $('#td_year_apr_39').text(),
    $('#td_year_apr_40').text(),
    $('#td_year_apr_41').text(),
    $('#td_year_apr_42').text()
    ]
}

function year_view_calendar_highlight_today_check_may(){
    year_view_values_may = [
    $('#td_year_may_1').text(),
    $('#td_year_may_2').text(),
    $('#td_year_may_3').text(),
    $('#td_year_may_4').text(),
    $('#td_year_may_5').text(),
    $('#td_year_may_6').text(),
    $('#td_year_may_7').text(),
    $('#td_year_may_8').text(),
    $('#td_year_may_9').text(),
    $('#td_year_may_10').text(),
    $('#td_year_may_11').text(),
    $('#td_year_may_12').text(),
    $('#td_year_may_13').text(),
    $('#td_year_may_14').text(),
    $('#td_year_may_15').text(),
    $('#td_year_may_16').text(),
    $('#td_year_may_17').text(),
    $('#td_year_may_18').text(),
    $('#td_year_may_19').text(),
    $('#td_year_may_20').text(),
    $('#td_year_may_21').text(),
    $('#td_year_may_22').text(),
    $('#td_year_may_23').text(),
    $('#td_year_may_24').text(),
    $('#td_year_may_25').text(),
    $('#td_year_may_26').text(),
    $('#td_year_may_27').text(),
    $('#td_year_may_28').text(),
    $('#td_year_may_29').text(),
    $('#td_year_may_30').text(),
    $('#td_year_may_31').text(),
    $('#td_year_may_32').text(),
    $('#td_year_may_33').text(),
    $('#td_year_may_34').text(),
    $('#td_year_may_35').text(),
    $('#td_year_may_36').text(),
    $('#td_year_may_37').text(),
    $('#td_year_may_38').text(),
    $('#td_year_may_39').text(),
    $('#td_year_may_40').text(),
    $('#td_year_may_41').text(),
    $('#td_year_may_42').text()
    ]
}

function year_view_calendar_highlight_today_check_jun(){
    year_view_values_jun = [
    $('#td_year_jun_1').text(),
    $('#td_year_jun_2').text(),
    $('#td_year_jun_3').text(),
    $('#td_year_jun_4').text(),
    $('#td_year_jun_5').text(),
    $('#td_year_jun_6').text(),
    $('#td_year_jun_7').text(),
    $('#td_year_jun_8').text(),
    $('#td_year_jun_9').text(),
    $('#td_year_jun_10').text(),
    $('#td_year_jun_11').text(),
    $('#td_year_jun_12').text(),
    $('#td_year_jun_13').text(),
    $('#td_year_jun_14').text(),
    $('#td_year_jun_15').text(),
    $('#td_year_jun_16').text(),
    $('#td_year_jun_17').text(),
    $('#td_year_jun_18').text(),
    $('#td_year_jun_19').text(),
    $('#td_year_jun_20').text(),
    $('#td_year_jun_21').text(),
    $('#td_year_jun_22').text(),
    $('#td_year_jun_23').text(),
    $('#td_year_jun_24').text(),
    $('#td_year_jun_25').text(),
    $('#td_year_jun_26').text(),
    $('#td_year_jun_27').text(),
    $('#td_year_jun_28').text(),
    $('#td_year_jun_29').text(),
    $('#td_year_jun_30').text(),
    $('#td_year_jun_31').text(),
    $('#td_year_jun_32').text(),
    $('#td_year_jun_33').text(),
    $('#td_year_jun_34').text(),
    $('#td_year_jun_35').text(),
    $('#td_year_jun_36').text(),
    $('#td_year_jun_37').text(),
    $('#td_year_jun_38').text(),
    $('#td_year_jun_39').text(),
    $('#td_year_jun_40').text(),
    $('#td_year_jun_41').text(),
    $('#td_year_jun_42').text()
    ]
}

function year_view_calendar_highlight_today_check_jul(){
    year_view_values_jul = [
    $('#td_year_jul_1').text(),
    $('#td_year_jul_2').text(),
    $('#td_year_jul_3').text(),
    $('#td_year_jul_4').text(),
    $('#td_year_jul_5').text(),
    $('#td_year_jul_6').text(),
    $('#td_year_jul_7').text(),
    $('#td_year_jul_8').text(),
    $('#td_year_jul_9').text(),
    $('#td_year_jul_10').text(),
    $('#td_year_jul_11').text(),
    $('#td_year_jul_12').text(),
    $('#td_year_jul_13').text(),
    $('#td_year_jul_14').text(),
    $('#td_year_jul_15').text(),
    $('#td_year_jul_16').text(),
    $('#td_year_jul_17').text(),
    $('#td_year_jul_18').text(),
    $('#td_year_jul_19').text(),
    $('#td_year_jul_20').text(),
    $('#td_year_jul_21').text(),
    $('#td_year_jul_22').text(),
    $('#td_year_jul_23').text(),
    $('#td_year_jul_24').text(),
    $('#td_year_jul_25').text(),
    $('#td_year_jul_26').text(),
    $('#td_year_jul_27').text(),
    $('#td_year_jul_28').text(),
    $('#td_year_jul_29').text(),
    $('#td_year_jul_30').text(),
    $('#td_year_jul_31').text(),
    $('#td_year_jul_32').text(),
    $('#td_year_jul_33').text(),
    $('#td_year_jul_34').text(),
    $('#td_year_jul_35').text(),
    $('#td_year_jul_36').text(),
    $('#td_year_jul_37').text(),
    $('#td_year_jul_38').text(),
    $('#td_year_jul_39').text(),
    $('#td_year_jul_40').text(),
    $('#td_year_jul_41').text(),
    $('#td_year_jul_42').text()
    ]
}

function year_view_calendar_highlight_today_check_aug(){
    year_view_values_aug = [
    $('#td_year_aug_1').text(),
    $('#td_year_aug_2').text(),
    $('#td_year_aug_3').text(),
    $('#td_year_aug_4').text(),
    $('#td_year_aug_5').text(),
    $('#td_year_aug_6').text(),
    $('#td_year_aug_7').text(),
    $('#td_year_aug_8').text(),
    $('#td_year_aug_9').text(),
    $('#td_year_aug_10').text(),
    $('#td_year_aug_11').text(),
    $('#td_year_aug_12').text(),
    $('#td_year_aug_13').text(),
    $('#td_year_aug_14').text(),
    $('#td_year_aug_15').text(),
    $('#td_year_aug_16').text(),
    $('#td_year_aug_17').text(),
    $('#td_year_aug_18').text(),
    $('#td_year_aug_19').text(),
    $('#td_year_aug_20').text(),
    $('#td_year_aug_21').text(),
    $('#td_year_aug_22').text(),
    $('#td_year_aug_23').text(),
    $('#td_year_aug_24').text(),
    $('#td_year_aug_25').text(),
    $('#td_year_aug_26').text(),
    $('#td_year_aug_27').text(),
    $('#td_year_aug_28').text(),
    $('#td_year_aug_29').text(),
    $('#td_year_aug_30').text(),
    $('#td_year_aug_31').text(),
    $('#td_year_aug_32').text(),
    $('#td_year_aug_33').text(),
    $('#td_year_aug_34').text(),
    $('#td_year_aug_35').text(),
    $('#td_year_aug_36').text(),
    $('#td_year_aug_37').text(),
    $('#td_year_aug_38').text(),
    $('#td_year_aug_39').text(),
    $('#td_year_aug_40').text(),
    $('#td_year_aug_41').text(),
    $('#td_year_aug_42').text()
    ]
}

function year_view_calendar_highlight_today_check_sep(){
    year_view_values_sep = [
    $('#td_year_sep_1').text(),
    $('#td_year_sep_2').text(),
    $('#td_year_sep_3').text(),
    $('#td_year_sep_4').text(),
    $('#td_year_sep_5').text(),
    $('#td_year_sep_6').text(),
    $('#td_year_sep_7').text(),
    $('#td_year_sep_8').text(),
    $('#td_year_sep_9').text(),
    $('#td_year_sep_10').text(),
    $('#td_year_sep_11').text(),
    $('#td_year_sep_12').text(),
    $('#td_year_sep_13').text(),
    $('#td_year_sep_14').text(),
    $('#td_year_sep_15').text(),
    $('#td_year_sep_16').text(),
    $('#td_year_sep_17').text(),
    $('#td_year_sep_18').text(),
    $('#td_year_sep_19').text(),
    $('#td_year_sep_20').text(),
    $('#td_year_sep_21').text(),
    $('#td_year_sep_22').text(),
    $('#td_year_sep_23').text(),
    $('#td_year_sep_24').text(),
    $('#td_year_sep_25').text(),
    $('#td_year_sep_26').text(),
    $('#td_year_sep_27').text(),
    $('#td_year_sep_28').text(),
    $('#td_year_sep_29').text(),
    $('#td_year_sep_30').text(),
    $('#td_year_sep_31').text(),
    $('#td_year_sep_32').text(),
    $('#td_year_sep_33').text(),
    $('#td_year_sep_34').text(),
    $('#td_year_sep_35').text(),
    $('#td_year_sep_36').text(),
    $('#td_year_sep_37').text(),
    $('#td_year_sep_38').text(),
    $('#td_year_sep_39').text(),
    $('#td_year_sep_40').text(),
    $('#td_year_sep_41').text(),
    $('#td_year_sep_42').text()
    ]
}

function year_view_calendar_highlight_today_check_oct(){
    year_view_values_oct = [
    $('#td_year_oct_1').text(),
    $('#td_year_oct_2').text(),
    $('#td_year_oct_3').text(),
    $('#td_year_oct_4').text(),
    $('#td_year_oct_5').text(),
    $('#td_year_oct_6').text(),
    $('#td_year_oct_7').text(),
    $('#td_year_oct_8').text(),
    $('#td_year_oct_9').text(),
    $('#td_year_oct_10').text(),
    $('#td_year_oct_11').text(),
    $('#td_year_oct_12').text(),
    $('#td_year_oct_13').text(),
    $('#td_year_oct_14').text(),
    $('#td_year_oct_15').text(),
    $('#td_year_oct_16').text(),
    $('#td_year_oct_17').text(),
    $('#td_year_oct_18').text(),
    $('#td_year_oct_19').text(),
    $('#td_year_oct_20').text(),
    $('#td_year_oct_21').text(),
    $('#td_year_oct_22').text(),
    $('#td_year_oct_23').text(),
    $('#td_year_oct_24').text(),
    $('#td_year_oct_25').text(),
    $('#td_year_oct_26').text(),
    $('#td_year_oct_27').text(),
    $('#td_year_oct_28').text(),
    $('#td_year_oct_29').text(),
    $('#td_year_oct_30').text(),
    $('#td_year_oct_31').text(),
    $('#td_year_oct_32').text(),
    $('#td_year_oct_33').text(),
    $('#td_year_oct_34').text(),
    $('#td_year_oct_35').text(),
    $('#td_year_oct_36').text(),
    $('#td_year_oct_37').text(),
    $('#td_year_oct_38').text(),
    $('#td_year_oct_39').text(),
    $('#td_year_oct_40').text(),
    $('#td_year_oct_41').text(),
    $('#td_year_oct_42').text()
    ]
}

function year_view_calendar_highlight_today_check_nov(){
    year_view_values_nov = [
    $('#td_year_nov_1').text(),
    $('#td_year_nov_2').text(),
    $('#td_year_nov_3').text(),
    $('#td_year_nov_4').text(),
    $('#td_year_nov_5').text(),
    $('#td_year_nov_6').text(),
    $('#td_year_nov_7').text(),
    $('#td_year_nov_8').text(),
    $('#td_year_nov_9').text(),
    $('#td_year_nov_10').text(),
    $('#td_year_nov_11').text(),
    $('#td_year_nov_12').text(),
    $('#td_year_nov_13').text(),
    $('#td_year_nov_14').text(),
    $('#td_year_nov_15').text(),
    $('#td_year_nov_16').text(),
    $('#td_year_nov_17').text(),
    $('#td_year_nov_18').text(),
    $('#td_year_nov_19').text(),
    $('#td_year_nov_20').text(),
    $('#td_year_nov_21').text(),
    $('#td_year_nov_22').text(),
    $('#td_year_nov_23').text(),
    $('#td_year_nov_24').text(),
    $('#td_year_nov_25').text(),
    $('#td_year_nov_26').text(),
    $('#td_year_nov_27').text(),
    $('#td_year_nov_28').text(),
    $('#td_year_nov_29').text(),
    $('#td_year_nov_30').text(),
    $('#td_year_nov_31').text(),
    $('#td_year_nov_32').text(),
    $('#td_year_nov_33').text(),
    $('#td_year_nov_34').text(),
    $('#td_year_nov_35').text(),
    $('#td_year_nov_36').text(),
    $('#td_year_nov_37').text(),
    $('#td_year_nov_38').text(),
    $('#td_year_nov_39').text(),
    $('#td_year_nov_40').text(),
    $('#td_year_nov_41').text(),
    $('#td_year_nov_42').text()
    ]
}

function year_view_calendar_highlight_today_check_dec(){
    year_view_values_dec = [
    $('#td_year_dec_1').text(),
    $('#td_year_dec_2').text(),
    $('#td_year_dec_3').text(),
    $('#td_year_dec_4').text(),
    $('#td_year_dec_5').text(),
    $('#td_year_dec_6').text(),
    $('#td_year_dec_7').text(),
    $('#td_year_dec_8').text(),
    $('#td_year_dec_9').text(),
    $('#td_year_dec_10').text(),
    $('#td_year_dec_11').text(),
    $('#td_year_dec_12').text(),
    $('#td_year_dec_13').text(),
    $('#td_year_dec_14').text(),
    $('#td_year_dec_15').text(),
    $('#td_year_dec_16').text(),
    $('#td_year_dec_17').text(),
    $('#td_year_dec_18').text(),
    $('#td_year_dec_19').text(),
    $('#td_year_dec_20').text(),
    $('#td_year_dec_21').text(),
    $('#td_year_dec_22').text(),
    $('#td_year_dec_23').text(),
    $('#td_year_dec_24').text(),
    $('#td_year_dec_25').text(),
    $('#td_year_dec_26').text(),
    $('#td_year_dec_27').text(),
    $('#td_year_dec_28').text(),
    $('#td_year_dec_29').text(),
    $('#td_year_dec_30').text(),
    $('#td_year_dec_31').text(),
    $('#td_year_dec_32').text(),
    $('#td_year_dec_33').text(),
    $('#td_year_dec_34').text(),
    $('#td_year_dec_35').text(),
    $('#td_year_dec_36').text(),
    $('#td_year_dec_37').text(),
    $('#td_year_dec_38').text(),
    $('#td_year_dec_39').text(),
    $('#td_year_dec_40').text(),
    $('#td_year_dec_41').text(),
    $('#td_year_dec_42').text()
    ]
}


// Today I created my own jquery function using abstraction!!! 
$.fn.highlightday = function(){
    return this.each(function(e){
        $(this).css({
            'background-color': color_accent_2,
            'color': color_background,
            'font-weight': 'bold'
        })
    })
}

$.fn.nohighlightday = function(){
    return this.each(function(e){
        $(this).css({
            'background-color': color_background,
            'color': color_accent_1,
            'font-weight': 'normal'
        })
    })
}

function year_view_calendar_highlight_today_divs_jan(){
    year_view_divs_jan = {
        0: [
        function(){$('#td_year_jan_1').highlightday()},
        function(){$('#td_year_jan_1').nohighlightday()}],
        1: [
        function(){$('#td_year_jan_2').highlightday()},
        function(){$('#td_year_jan_2').nohighlightday()}],
        2: [
        function(){$('#td_year_jan_3').highlightday()},
        function(){$('#td_year_jan_3').nohighlightday()}],
        3: [
        function(){$('#td_year_jan_4').highlightday()},
        function(){$('#td_year_jan_4').nohighlightday()}],
        4: [
        function(){$('#td_year_jan_5').highlightday()},
        function(){$('#td_year_jan_5').nohighlightday()}],
        5: [
        function(){$('#td_year_jan_6').highlightday()},
        function(){$('#td_year_jan_6').nohighlightday()}],
        6: [
        function(){$('#td_year_jan_7').highlightday()},
        function(){$('#td_year_jan_7').nohighlightday()}],
        7: [
        function(){$('#td_year_jan_8').highlightday()},
        function(){$('#td_year_jan_8').nohighlightday()}],
        8: [
        function(){$('#td_year_jan_9').highlightday()},
        function(){$('#td_year_jan_9').nohighlightday()}],
        9: [
        function(){$('#td_year_jan_10').highlightday()},
        function(){$('#td_year_jan_10').nohighlightday()}],
        10: [
        function(){$('#td_year_jan_11').highlightday()},
        function(){$('#td_year_jan_11').nohighlightday()}],
        11: [
        function(){$('#td_year_jan_12').highlightday()},
        function(){$('#td_year_jan_12').nohighlightday()}],
        12: [
        function(){$('#td_year_jan_13').highlightday()},
        function(){$('#td_year_jan_13').nohighlightday()}],
        13: [
        function(){$('#td_year_jan_14').highlightday()},
        function(){$('#td_year_jan_14').nohighlightday()}],
        14: [
        function(){$('#td_year_jan_15').highlightday()},
        function(){$('#td_year_jan_15').nohighlightday()}],
        15: [
        function(){$('#td_year_jan_16').highlightday()},
        function(){$('#td_year_jan_16').nohighlightday()}],
        16: [
        function(){$('#td_year_jan_17').highlightday()},
        function(){$('#td_year_jan_17').nohighlightday()}],
        17: [
        function(){$('#td_year_jan_18').highlightday()},
        function(){$('#td_year_jan_18').nohighlightday()}],
        18: [
        function(){$('#td_year_jan_19').highlightday()},
        function(){$('#td_year_jan_19').nohighlightday()}],
        19: [
        function(){$('#td_year_jan_20').highlightday()},
        function(){$('#td_year_jan_20').nohighlightday()}],
        20: [
        function(){$('#td_year_jan_21').highlightday()},
        function(){$('#td_year_jan_21').nohighlightday()}],
        21: [
        function(){$('#td_year_jan_22').highlightday()},
        function(){$('#td_year_jan_22').nohighlightday()}],
        22: [
        function(){$('#td_year_jan_23').highlightday()},
        function(){$('#td_year_jan_23').nohighlightday()}],
        23: [
        function(){$('#td_year_jan_24').highlightday()},
        function(){$('#td_year_jan_24').nohighlightday()}],
        24: [
        function(){$('#td_year_jan_25').highlightday()},
        function(){$('#td_year_jan_25').nohighlightday()}],
        25: [
        function(){$('#td_year_jan_26').highlightday()},
        function(){$('#td_year_jan_26').nohighlightday()}],
        26: [
        function(){$('#td_year_jan_27').highlightday()},
        function(){$('#td_year_jan_27').nohighlightday()}],
        27: [
        function(){$('#td_year_jan_28').highlightday()},
        function(){$('#td_year_jan_28').nohighlightday()}],
        28: [
        function(){$('#td_year_jan_29').highlightday()},
        function(){$('#td_year_jan_29').nohighlightday()}],
        29: [
        function(){$('#td_year_jan_30').highlightday()},
        function(){$('#td_year_jan_30').nohighlightday()}],
        30: [
        function(){$('#td_year_jan_31').highlightday()},
        function(){$('#td_year_jan_31').nohighlightday()}],
        31: [
        function(){$('#td_year_jan_32').highlightday()},
        function(){$('#td_year_jan_32').nohighlightday()}],
        32: [
        function(){$('#td_year_jan_33').highlightday()},
        function(){$('#td_year_jan_33').nohighlightday()}],
        33: [
        function(){$('#td_year_jan_34').highlightday()},
        function(){$('#td_year_jan_34').nohighlightday()}],
        34: [
        function(){$('#td_year_jan_35').highlightday()},
        function(){$('#td_year_jan_35').nohighlightday()}],
        35: [
        function(){$('#td_year_jan_36').highlightday()},
        function(){$('#td_year_jan_36').nohighlightday()}],
        36: [
        function(){$('#td_year_jan_37').highlightday()},
        function(){$('#td_year_jan_37').nohighlightday()}],
        37: [
        function(){$('#td_year_jan_38').highlightday()},
        function(){$('#td_year_jan_38').nohighlightday()}],
        38: [
        function(){$('#td_year_jan_39').highlightday()},
        function(){$('#td_year_jan_39').nohighlightday()}],
        39: [
        function(){$('#td_year_jan_40').highlightday()},
        function(){$('#td_year_jan_40').nohighlightday()}],
        40: [
        function(){$('#td_year_jan_41').highlightday()},
        function(){$('#td_year_jan_41').nohighlightday()}],
        41: [
        function(){$('#td_year_jan_42').highlightday()},
        function(){$('#td_year_jan_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_feb(){
    year_view_divs_feb = {
        0: [
        function(){$('#td_year_feb_1').highlightday()},
        function(){$('#td_year_feb_1').nohighlightday()}],
        1: [
        function(){$('#td_year_feb_2').highlightday()},
        function(){$('#td_year_feb_2').nohighlightday()}],
        2: [
        function(){$('#td_year_feb_3').highlightday()},
        function(){$('#td_year_feb_3').nohighlightday()}],
        3: [
        function(){$('#td_year_feb_4').highlightday()},
        function(){$('#td_year_feb_4').nohighlightday()}],
        4: [
        function(){$('#td_year_feb_5').highlightday()},
        function(){$('#td_year_feb_5').nohighlightday()}],
        5: [
        function(){$('#td_year_feb_6').highlightday()},
        function(){$('#td_year_feb_6').nohighlightday()}],
        6: [
        function(){$('#td_year_feb_7').highlightday()},
        function(){$('#td_year_feb_7').nohighlightday()}],
        7: [
        function(){$('#td_year_feb_8').highlightday()},
        function(){$('#td_year_feb_8').nohighlightday()}],
        8: [
        function(){$('#td_year_feb_9').highlightday()},
        function(){$('#td_year_feb_9').nohighlightday()}],
        9: [
        function(){$('#td_year_feb_10').highlightday()},
        function(){$('#td_year_feb_10').nohighlightday()}],
        10: [
        function(){$('#td_year_feb_11').highlightday()},
        function(){$('#td_year_feb_11').nohighlightday()}],
        11: [
        function(){$('#td_year_feb_12').highlightday()},
        function(){$('#td_year_feb_12').nohighlightday()}],
        12: [
        function(){$('#td_year_feb_13').highlightday()},
        function(){$('#td_year_feb_13').nohighlightday()}],
        13: [
        function(){$('#td_year_feb_14').highlightday()},
        function(){$('#td_year_feb_14').nohighlightday()}],
        14: [
        function(){$('#td_year_feb_15').highlightday()},
        function(){$('#td_year_feb_15').nohighlightday()}],
        15: [
        function(){$('#td_year_feb_16').highlightday()},
        function(){$('#td_year_feb_16').nohighlightday()}],
        16: [
        function(){$('#td_year_feb_17').highlightday()},
        function(){$('#td_year_feb_17').nohighlightday()}],
        17: [
        function(){$('#td_year_feb_18').highlightday()},
        function(){$('#td_year_feb_18').nohighlightday()}],
        18: [
        function(){$('#td_year_feb_19').highlightday()},
        function(){$('#td_year_feb_19').nohighlightday()}],
        19: [
        function(){$('#td_year_feb_20').highlightday()},
        function(){$('#td_year_feb_20').nohighlightday()}],
        20: [
        function(){$('#td_year_feb_21').highlightday()},
        function(){$('#td_year_feb_21').nohighlightday()}],
        21: [
        function(){$('#td_year_feb_22').highlightday()},
        function(){$('#td_year_feb_22').nohighlightday()}],
        22: [
        function(){$('#td_year_feb_23').highlightday()},
        function(){$('#td_year_feb_23').nohighlightday()}],
        23: [
        function(){$('#td_year_feb_24').highlightday()},
        function(){$('#td_year_feb_24').nohighlightday()}],
        24: [
        function(){$('#td_year_feb_25').highlightday()},
        function(){$('#td_year_feb_25').nohighlightday()}],
        25: [
        function(){$('#td_year_feb_26').highlightday()},
        function(){$('#td_year_feb_26').nohighlightday()}],
        26: [
        function(){$('#td_year_feb_27').highlightday()},
        function(){$('#td_year_feb_27').nohighlightday()}],
        27: [
        function(){$('#td_year_feb_28').highlightday()},
        function(){$('#td_year_feb_28').nohighlightday()}],
        28: [
        function(){$('#td_year_feb_29').highlightday()},
        function(){$('#td_year_feb_29').nohighlightday()}],
        29: [
        function(){$('#td_year_feb_30').highlightday()},
        function(){$('#td_year_feb_30').nohighlightday()}],
        30: [
        function(){$('#td_year_feb_31').highlightday()},
        function(){$('#td_year_feb_31').nohighlightday()}],
        31: [
        function(){$('#td_year_feb_32').highlightday()},
        function(){$('#td_year_feb_32').nohighlightday()}],
        32: [
        function(){$('#td_year_feb_33').highlightday()},
        function(){$('#td_year_feb_33').nohighlightday()}],
        33: [
        function(){$('#td_year_feb_34').highlightday()},
        function(){$('#td_year_feb_34').nohighlightday()}],
        34: [
        function(){$('#td_year_feb_35').highlightday()},
        function(){$('#td_year_feb_35').nohighlightday()}],
        35: [
        function(){$('#td_year_feb_36').highlightday()},
        function(){$('#td_year_feb_36').nohighlightday()}],
        36: [
        function(){$('#td_year_feb_37').highlightday()},
        function(){$('#td_year_feb_37').nohighlightday()}],
        37: [
        function(){$('#td_year_feb_38').highlightday()},
        function(){$('#td_year_feb_38').nohighlightday()}],
        38: [
        function(){$('#td_year_feb_39').highlightday()},
        function(){$('#td_year_feb_39').nohighlightday()}],
        39: [
        function(){$('#td_year_feb_40').highlightday()},
        function(){$('#td_year_feb_40').nohighlightday()}],
        40: [
        function(){$('#td_year_feb_41').highlightday()},
        function(){$('#td_year_feb_41').nohighlightday()}],
        41: [
        function(){$('#td_year_feb_42').highlightday()},
        function(){$('#td_year_feb_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_mar(){
    year_view_divs_mar = {
        0: [
        function(){$('#td_year_mar_1').highlightday()},
        function(){$('#td_year_mar_1').nohighlightday()}],
        1: [
        function(){$('#td_year_mar_2').highlightday()},
        function(){$('#td_year_mar_2').nohighlightday()}],
        2: [
        function(){$('#td_year_mar_3').highlightday()},
        function(){$('#td_year_mar_3').nohighlightday()}],
        3: [
        function(){$('#td_year_mar_4').highlightday()},
        function(){$('#td_year_mar_4').nohighlightday()}],
        4: [
        function(){$('#td_year_mar_5').highlightday()},
        function(){$('#td_year_mar_5').nohighlightday()}],
        5: [
        function(){$('#td_year_mar_6').highlightday()},
        function(){$('#td_year_mar_6').nohighlightday()}],
        6: [
        function(){$('#td_year_mar_7').highlightday()},
        function(){$('#td_year_mar_7').nohighlightday()}],
        7: [
        function(){$('#td_year_mar_8').highlightday()},
        function(){$('#td_year_mar_8').nohighlightday()}],
        8: [
        function(){$('#td_year_mar_9').highlightday()},
        function(){$('#td_year_mar_9').nohighlightday()}],
        9: [
        function(){$('#td_year_mar_10').highlightday()},
        function(){$('#td_year_mar_10').nohighlightday()}],
        10: [
        function(){$('#td_year_mar_11').highlightday()},
        function(){$('#td_year_mar_11').nohighlightday()}],
        11: [
        function(){$('#td_year_mar_12').highlightday()},
        function(){$('#td_year_mar_12').nohighlightday()}],
        12: [
        function(){$('#td_year_mar_13').highlightday()},
        function(){$('#td_year_mar_13').nohighlightday()}],
        13: [
        function(){$('#td_year_mar_14').highlightday()},
        function(){$('#td_year_mar_14').nohighlightday()}],
        14: [
        function(){$('#td_year_mar_15').highlightday()},
        function(){$('#td_year_mar_15').nohighlightday()}],
        15: [
        function(){$('#td_year_mar_16').highlightday()},
        function(){$('#td_year_mar_16').nohighlightday()}],
        16: [
        function(){$('#td_year_mar_17').highlightday()},
        function(){$('#td_year_mar_17').nohighlightday()}],
        17: [
        function(){$('#td_year_mar_18').highlightday()},
        function(){$('#td_year_mar_18').nohighlightday()}],
        18: [
        function(){$('#td_year_mar_19').highlightday()},
        function(){$('#td_year_mar_19').nohighlightday()}],
        19: [
        function(){$('#td_year_mar_20').highlightday()},
        function(){$('#td_year_mar_20').nohighlightday()}],
        20: [
        function(){$('#td_year_mar_21').highlightday()},
        function(){$('#td_year_mar_21').nohighlightday()}],
        21: [
        function(){$('#td_year_mar_22').highlightday()},
        function(){$('#td_year_mar_22').nohighlightday()}],
        22: [
        function(){$('#td_year_mar_23').highlightday()},
        function(){$('#td_year_mar_23').nohighlightday()}],
        23: [
        function(){$('#td_year_mar_24').highlightday()},
        function(){$('#td_year_mar_24').nohighlightday()}],
        24: [
        function(){$('#td_year_mar_25').highlightday()},
        function(){$('#td_year_mar_25').nohighlightday()}],
        25: [
        function(){$('#td_year_mar_26').highlightday()},
        function(){$('#td_year_mar_26').nohighlightday()}],
        26: [
        function(){$('#td_year_mar_27').highlightday()},
        function(){$('#td_year_mar_27').nohighlightday()}],
        27: [
        function(){$('#td_year_mar_28').highlightday()},
        function(){$('#td_year_mar_28').nohighlightday()}],
        28: [
        function(){$('#td_year_mar_29').highlightday()},
        function(){$('#td_year_mar_29').nohighlightday()}],
        29: [
        function(){$('#td_year_mar_30').highlightday()},
        function(){$('#td_year_mar_30').nohighlightday()}],
        30: [
        function(){$('#td_year_mar_31').highlightday()},
        function(){$('#td_year_mar_31').nohighlightday()}],
        31: [
        function(){$('#td_year_mar_32').highlightday()},
        function(){$('#td_year_mar_32').nohighlightday()}],
        32: [
        function(){$('#td_year_mar_33').highlightday()},
        function(){$('#td_year_mar_33').nohighlightday()}],
        33: [
        function(){$('#td_year_mar_34').highlightday()},
        function(){$('#td_year_mar_34').nohighlightday()}],
        34: [
        function(){$('#td_year_mar_35').highlightday()},
        function(){$('#td_year_mar_35').nohighlightday()}],
        35: [
        function(){$('#td_year_mar_36').highlightday()},
        function(){$('#td_year_mar_36').nohighlightday()}],
        36: [
        function(){$('#td_year_mar_37').highlightday()},
        function(){$('#td_year_mar_37').nohighlightday()}],
        37: [
        function(){$('#td_year_mar_38').highlightday()},
        function(){$('#td_year_mar_38').nohighlightday()}],
        38: [
        function(){$('#td_year_mar_39').highlightday()},
        function(){$('#td_year_mar_39').nohighlightday()}],
        39: [
        function(){$('#td_year_mar_40').highlightday()},
        function(){$('#td_year_mar_40').nohighlightday()}],
        40: [
        function(){$('#td_year_mar_41').highlightday()},
        function(){$('#td_year_mar_41').nohighlightday()}],
        41: [
        function(){$('#td_year_mar_42').highlightday()},
        function(){$('#td_year_mar_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_apr(){
    year_view_divs_apr = {
        0: [
        function(){$('#td_year_apr_1').highlightday()},
        function(){$('#td_year_apr_1').nohighlightday()}],
        1: [
        function(){$('#td_year_apr_2').highlightday()},
        function(){$('#td_year_apr_2').nohighlightday()}],
        2: [
        function(){$('#td_year_apr_3').highlightday()},
        function(){$('#td_year_apr_3').nohighlightday()}],
        3: [
        function(){$('#td_year_apr_4').highlightday()},
        function(){$('#td_year_apr_4').nohighlightday()}],
        4: [
        function(){$('#td_year_apr_5').highlightday()},
        function(){$('#td_year_apr_5').nohighlightday()}],
        5: [
        function(){$('#td_year_apr_6').highlightday()},
        function(){$('#td_year_apr_6').nohighlightday()}],
        6: [
        function(){$('#td_year_apr_7').highlightday()},
        function(){$('#td_year_apr_7').nohighlightday()}],
        7: [
        function(){$('#td_year_apr_8').highlightday()},
        function(){$('#td_year_apr_8').nohighlightday()}],
        8: [
        function(){$('#td_year_apr_9').highlightday()},
        function(){$('#td_year_apr_9').nohighlightday()}],
        9: [
        function(){$('#td_year_apr_10').highlightday()},
        function(){$('#td_year_apr_10').nohighlightday()}],
        10: [
        function(){$('#td_year_apr_11').highlightday()},
        function(){$('#td_year_apr_11').nohighlightday()}],
        11: [
        function(){$('#td_year_apr_12').highlightday()},
        function(){$('#td_year_apr_12').nohighlightday()}],
        12: [
        function(){$('#td_year_apr_13').highlightday()},
        function(){$('#td_year_apr_13').nohighlightday()}],
        13: [
        function(){$('#td_year_apr_14').highlightday()},
        function(){$('#td_year_apr_14').nohighlightday()}],
        14: [
        function(){$('#td_year_apr_15').highlightday()},
        function(){$('#td_year_apr_15').nohighlightday()}],
        15: [
        function(){$('#td_year_apr_16').highlightday()},
        function(){$('#td_year_apr_16').nohighlightday()}],
        16: [
        function(){$('#td_year_apr_17').highlightday()},
        function(){$('#td_year_apr_17').nohighlightday()}],
        17: [
        function(){$('#td_year_apr_18').highlightday()},
        function(){$('#td_year_apr_18').nohighlightday()}],
        18: [
        function(){$('#td_year_apr_19').highlightday()},
        function(){$('#td_year_apr_19').nohighlightday()}],
        19: [
        function(){$('#td_year_apr_20').highlightday()},
        function(){$('#td_year_apr_20').nohighlightday()}],
        20: [
        function(){$('#td_year_apr_21').highlightday()},
        function(){$('#td_year_apr_21').nohighlightday()}],
        21: [
        function(){$('#td_year_apr_22').highlightday()},
        function(){$('#td_year_apr_22').nohighlightday()}],
        22: [
        function(){$('#td_year_apr_23').highlightday()},
        function(){$('#td_year_apr_23').nohighlightday()}],
        23: [
        function(){$('#td_year_apr_24').highlightday()},
        function(){$('#td_year_apr_24').nohighlightday()}],
        24: [
        function(){$('#td_year_apr_25').highlightday()},
        function(){$('#td_year_apr_25').nohighlightday()}],
        25: [
        function(){$('#td_year_apr_26').highlightday()},
        function(){$('#td_year_apr_26').nohighlightday()}],
        26: [
        function(){$('#td_year_apr_27').highlightday()},
        function(){$('#td_year_apr_27').nohighlightday()}],
        27: [
        function(){$('#td_year_apr_28').highlightday()},
        function(){$('#td_year_apr_28').nohighlightday()}],
        28: [
        function(){$('#td_year_apr_29').highlightday()},
        function(){$('#td_year_apr_29').nohighlightday()}],
        29: [
        function(){$('#td_year_apr_30').highlightday()},
        function(){$('#td_year_apr_30').nohighlightday()}],
        30: [
        function(){$('#td_year_apr_31').highlightday()},
        function(){$('#td_year_apr_31').nohighlightday()}],
        31: [
        function(){$('#td_year_apr_32').highlightday()},
        function(){$('#td_year_apr_32').nohighlightday()}],
        32: [
        function(){$('#td_year_apr_33').highlightday()},
        function(){$('#td_year_apr_33').nohighlightday()}],
        33: [
        function(){$('#td_year_apr_34').highlightday()},
        function(){$('#td_year_apr_34').nohighlightday()}],
        34: [
        function(){$('#td_year_apr_35').highlightday()},
        function(){$('#td_year_apr_35').nohighlightday()}],
        35: [
        function(){$('#td_year_apr_36').highlightday()},
        function(){$('#td_year_apr_36').nohighlightday()}],
        36: [
        function(){$('#td_year_apr_37').highlightday()},
        function(){$('#td_year_apr_37').nohighlightday()}],
        37: [
        function(){$('#td_year_apr_38').highlightday()},
        function(){$('#td_year_apr_38').nohighlightday()}],
        38: [
        function(){$('#td_year_apr_39').highlightday()},
        function(){$('#td_year_apr_39').nohighlightday()}],
        39: [
        function(){$('#td_year_apr_40').highlightday()},
        function(){$('#td_year_apr_40').nohighlightday()}],
        40: [
        function(){$('#td_year_apr_41').highlightday()},
        function(){$('#td_year_apr_41').nohighlightday()}],
        41: [
        function(){$('#td_year_apr_42').highlightday()},
        function(){$('#td_year_apr_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_may(){
    year_view_divs_may = {
        0: [
        function(){$('#td_year_may_1').highlightday()},
        function(){$('#td_year_may_1').nohighlightday()}],
        1: [
        function(){$('#td_year_may_2').highlightday()},
        function(){$('#td_year_may_2').nohighlightday()}],
        2: [
        function(){$('#td_year_may_3').highlightday()},
        function(){$('#td_year_may_3').nohighlightday()}],
        3: [
        function(){$('#td_year_may_4').highlightday()},
        function(){$('#td_year_may_4').nohighlightday()}],
        4: [
        function(){$('#td_year_may_5').highlightday()},
        function(){$('#td_year_may_5').nohighlightday()}],
        5: [
        function(){$('#td_year_may_6').highlightday()},
        function(){$('#td_year_may_6').nohighlightday()}],
        6: [
        function(){$('#td_year_may_7').highlightday()},
        function(){$('#td_year_may_7').nohighlightday()}],
        7: [
        function(){$('#td_year_may_8').highlightday()},
        function(){$('#td_year_may_8').nohighlightday()}],
        8: [
        function(){$('#td_year_may_9').highlightday()},
        function(){$('#td_year_may_9').nohighlightday()}],
        9: [
        function(){$('#td_year_may_10').highlightday()},
        function(){$('#td_year_may_10').nohighlightday()}],
        10: [
        function(){$('#td_year_may_11').highlightday()},
        function(){$('#td_year_may_11').nohighlightday()}],
        11: [
        function(){$('#td_year_may_12').highlightday()},
        function(){$('#td_year_may_12').nohighlightday()}],
        12: [
        function(){$('#td_year_may_13').highlightday()},
        function(){$('#td_year_may_13').nohighlightday()}],
        13: [
        function(){$('#td_year_may_14').highlightday()},
        function(){$('#td_year_may_14').nohighlightday()}],
        14: [
        function(){$('#td_year_may_15').highlightday()},
        function(){$('#td_year_may_15').nohighlightday()}],
        15: [
        function(){$('#td_year_may_16').highlightday()},
        function(){$('#td_year_may_16').nohighlightday()}],
        16: [
        function(){$('#td_year_may_17').highlightday()},
        function(){$('#td_year_may_17').nohighlightday()}],
        17: [
        function(){$('#td_year_may_18').highlightday()},
        function(){$('#td_year_may_18').nohighlightday()}],
        18: [
        function(){$('#td_year_may_19').highlightday()},
        function(){$('#td_year_may_19').nohighlightday()}],
        19: [
        function(){$('#td_year_may_20').highlightday()},
        function(){$('#td_year_may_20').nohighlightday()}],
        20: [
        function(){$('#td_year_may_21').highlightday()},
        function(){$('#td_year_may_21').nohighlightday()}],
        21: [
        function(){$('#td_year_may_22').highlightday()},
        function(){$('#td_year_may_22').nohighlightday()}],
        22: [
        function(){$('#td_year_may_23').highlightday()},
        function(){$('#td_year_may_23').nohighlightday()}],
        23: [
        function(){$('#td_year_may_24').highlightday()},
        function(){$('#td_year_may_24').nohighlightday()}],
        24: [
        function(){$('#td_year_may_25').highlightday()},
        function(){$('#td_year_may_25').nohighlightday()}],
        25: [
        function(){$('#td_year_may_26').highlightday()},
        function(){$('#td_year_may_26').nohighlightday()}],
        26: [
        function(){$('#td_year_may_27').highlightday()},
        function(){$('#td_year_may_27').nohighlightday()}],
        27: [
        function(){$('#td_year_may_28').highlightday()},
        function(){$('#td_year_may_28').nohighlightday()}],
        28: [
        function(){$('#td_year_may_29').highlightday()},
        function(){$('#td_year_may_29').nohighlightday()}],
        29: [
        function(){$('#td_year_may_30').highlightday()},
        function(){$('#td_year_may_30').nohighlightday()}],
        30: [
        function(){$('#td_year_may_31').highlightday()},
        function(){$('#td_year_may_31').nohighlightday()}],
        31: [
        function(){$('#td_year_may_32').highlightday()},
        function(){$('#td_year_may_32').nohighlightday()}],
        32: [
        function(){$('#td_year_may_33').highlightday()},
        function(){$('#td_year_may_33').nohighlightday()}],
        33: [
        function(){$('#td_year_may_34').highlightday()},
        function(){$('#td_year_may_34').nohighlightday()}],
        34: [
        function(){$('#td_year_may_35').highlightday()},
        function(){$('#td_year_may_35').nohighlightday()}],
        35: [
        function(){$('#td_year_may_36').highlightday()},
        function(){$('#td_year_may_36').nohighlightday()}],
        36: [
        function(){$('#td_year_may_37').highlightday()},
        function(){$('#td_year_may_37').nohighlightday()}],
        37: [
        function(){$('#td_year_may_38').highlightday()},
        function(){$('#td_year_may_38').nohighlightday()}],
        38: [
        function(){$('#td_year_may_39').highlightday()},
        function(){$('#td_year_may_39').nohighlightday()}],
        39: [
        function(){$('#td_year_may_40').highlightday()},
        function(){$('#td_year_may_40').nohighlightday()}],
        40: [
        function(){$('#td_year_may_41').highlightday()},
        function(){$('#td_year_may_41').nohighlightday()}],
        41: [
        function(){$('#td_year_may_42').highlightday()},
        function(){$('#td_year_may_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_jun(){
    year_view_divs_jun = {
        0: [
        function(){$('#td_year_jun_1').highlightday()},
        function(){$('#td_year_jun_1').nohighlightday()}],
        1: [
        function(){$('#td_year_jun_2').highlightday()},
        function(){$('#td_year_jun_2').nohighlightday()}],
        2: [
        function(){$('#td_year_jun_3').highlightday()},
        function(){$('#td_year_jun_3').nohighlightday()}],
        3: [
        function(){$('#td_year_jun_4').highlightday()},
        function(){$('#td_year_jun_4').nohighlightday()}],
        4: [
        function(){$('#td_year_jun_5').highlightday()},
        function(){$('#td_year_jun_5').nohighlightday()}],
        5: [
        function(){$('#td_year_jun_6').highlightday()},
        function(){$('#td_year_jun_6').nohighlightday()}],
        6: [
        function(){$('#td_year_jun_7').highlightday()},
        function(){$('#td_year_jun_7').nohighlightday()}],
        7: [
        function(){$('#td_year_jun_8').highlightday()},
        function(){$('#td_year_jun_8').nohighlightday()}],
        8: [
        function(){$('#td_year_jun_9').highlightday()},
        function(){$('#td_year_jun_9').nohighlightday()}],
        9: [
        function(){$('#td_year_jun_10').highlightday()},
        function(){$('#td_year_jun_10').nohighlightday()}],
        10: [
        function(){$('#td_year_jun_11').highlightday()},
        function(){$('#td_year_jun_11').nohighlightday()}],
        11: [
        function(){$('#td_year_jun_12').highlightday()},
        function(){$('#td_year_jun_12').nohighlightday()}],
        12: [
        function(){$('#td_year_jun_13').highlightday()},
        function(){$('#td_year_jun_13').nohighlightday()}],
        13: [
        function(){$('#td_year_jun_14').highlightday()},
        function(){$('#td_year_jun_14').nohighlightday()}],
        14: [
        function(){$('#td_year_jun_15').highlightday()},
        function(){$('#td_year_jun_15').nohighlightday()}],
        15: [
        function(){$('#td_year_jun_16').highlightday()},
        function(){$('#td_year_jun_16').nohighlightday()}],
        16: [
        function(){$('#td_year_jun_17').highlightday()},
        function(){$('#td_year_jun_17').nohighlightday()}],
        17: [
        function(){$('#td_year_jun_18').highlightday()},
        function(){$('#td_year_jun_18').nohighlightday()}],
        18: [
        function(){$('#td_year_jun_19').highlightday()},
        function(){$('#td_year_jun_19').nohighlightday()}],
        19: [
        function(){$('#td_year_jun_20').highlightday()},
        function(){$('#td_year_jun_20').nohighlightday()}],
        20: [
        function(){$('#td_year_jun_21').highlightday()},
        function(){$('#td_year_jun_21').nohighlightday()}],
        21: [
        function(){$('#td_year_jun_22').highlightday()},
        function(){$('#td_year_jun_22').nohighlightday()}],
        22: [
        function(){$('#td_year_jun_23').highlightday()},
        function(){$('#td_year_jun_23').nohighlightday()}],
        23: [
        function(){$('#td_year_jun_24').highlightday()},
        function(){$('#td_year_jun_24').nohighlightday()}],
        24: [
        function(){$('#td_year_jun_25').highlightday()},
        function(){$('#td_year_jun_25').nohighlightday()}],
        25: [
        function(){$('#td_year_jun_26').highlightday()},
        function(){$('#td_year_jun_26').nohighlightday()}],
        26: [
        function(){$('#td_year_jun_27').highlightday()},
        function(){$('#td_year_jun_27').nohighlightday()}],
        27: [
        function(){$('#td_year_jun_28').highlightday()},
        function(){$('#td_year_jun_28').nohighlightday()}],
        28: [
        function(){$('#td_year_jun_29').highlightday()},
        function(){$('#td_year_jun_29').nohighlightday()}],
        29: [
        function(){$('#td_year_jun_30').highlightday()},
        function(){$('#td_year_jun_30').nohighlightday()}],
        30: [
        function(){$('#td_year_jun_31').highlightday()},
        function(){$('#td_year_jun_31').nohighlightday()}],
        31: [
        function(){$('#td_year_jun_32').highlightday()},
        function(){$('#td_year_jun_32').nohighlightday()}],
        32: [
        function(){$('#td_year_jun_33').highlightday()},
        function(){$('#td_year_jun_33').nohighlightday()}],
        33: [
        function(){$('#td_year_jun_34').highlightday()},
        function(){$('#td_year_jun_34').nohighlightday()}],
        34: [
        function(){$('#td_year_jun_35').highlightday()},
        function(){$('#td_year_jun_35').nohighlightday()}],
        35: [
        function(){$('#td_year_jun_36').highlightday()},
        function(){$('#td_year_jun_36').nohighlightday()}],
        36: [
        function(){$('#td_year_jun_37').highlightday()},
        function(){$('#td_year_jun_37').nohighlightday()}],
        37: [
        function(){$('#td_year_jun_38').highlightday()},
        function(){$('#td_year_jun_38').nohighlightday()}],
        38: [
        function(){$('#td_year_jun_39').highlightday()},
        function(){$('#td_year_jun_39').nohighlightday()}],
        39: [
        function(){$('#td_year_jun_40').highlightday()},
        function(){$('#td_year_jun_40').nohighlightday()}],
        40: [
        function(){$('#td_year_jun_41').highlightday()},
        function(){$('#td_year_jun_41').nohighlightday()}],
        41: [
        function(){$('#td_year_jun_42').highlightday()},
        function(){$('#td_year_jun_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_jul(){
    year_view_divs_jul = {
        0: [
        function(){$('#td_year_jul_1').highlightday()},
        function(){$('#td_year_jul_1').nohighlightday()}],
        1: [
        function(){$('#td_year_jul_2').highlightday()},
        function(){$('#td_year_jul_2').nohighlightday()}],
        2: [
        function(){$('#td_year_jul_3').highlightday()},
        function(){$('#td_year_jul_3').nohighlightday()}],
        3: [
        function(){$('#td_year_jul_4').highlightday()},
        function(){$('#td_year_jul_4').nohighlightday()}],
        4: [
        function(){$('#td_year_jul_5').highlightday()},
        function(){$('#td_year_jul_5').nohighlightday()}],
        5: [
        function(){$('#td_year_jul_6').highlightday()},
        function(){$('#td_year_jul_6').nohighlightday()}],
        6: [
        function(){$('#td_year_jul_7').highlightday()},
        function(){$('#td_year_jul_7').nohighlightday()}],
        7: [
        function(){$('#td_year_jul_8').highlightday()},
        function(){$('#td_year_jul_8').nohighlightday()}],
        8: [
        function(){$('#td_year_jul_9').highlightday()},
        function(){$('#td_year_jul_9').nohighlightday()}],
        9: [
        function(){$('#td_year_jul_10').highlightday()},
        function(){$('#td_year_jul_10').nohighlightday()}],
        10: [
        function(){$('#td_year_jul_11').highlightday()},
        function(){$('#td_year_jul_11').nohighlightday()}],
        11: [
        function(){$('#td_year_jul_12').highlightday()},
        function(){$('#td_year_jul_12').nohighlightday()}],
        12: [
        function(){$('#td_year_jul_13').highlightday()},
        function(){$('#td_year_jul_13').nohighlightday()}],
        13: [
        function(){$('#td_year_jul_14').highlightday()},
        function(){$('#td_year_jul_14').nohighlightday()}],
        14: [
        function(){$('#td_year_jul_15').highlightday()},
        function(){$('#td_year_jul_15').nohighlightday()}],
        15: [
        function(){$('#td_year_jul_16').highlightday()},
        function(){$('#td_year_jul_16').nohighlightday()}],
        16: [
        function(){$('#td_year_jul_17').highlightday()},
        function(){$('#td_year_jul_17').nohighlightday()}],
        17: [
        function(){$('#td_year_jul_18').highlightday()},
        function(){$('#td_year_jul_18').nohighlightday()}],
        18: [
        function(){$('#td_year_jul_19').highlightday()},
        function(){$('#td_year_jul_19').nohighlightday()}],
        19: [
        function(){$('#td_year_jul_20').highlightday()},
        function(){$('#td_year_jul_20').nohighlightday()}],
        20: [
        function(){$('#td_year_jul_21').highlightday()},
        function(){$('#td_year_jul_21').nohighlightday()}],
        21: [
        function(){$('#td_year_jul_22').highlightday()},
        function(){$('#td_year_jul_22').nohighlightday()}],
        22: [
        function(){$('#td_year_jul_23').highlightday()},
        function(){$('#td_year_jul_23').nohighlightday()}],
        23: [
        function(){$('#td_year_jul_24').highlightday()},
        function(){$('#td_year_jul_24').nohighlightday()}],
        24: [
        function(){$('#td_year_jul_25').highlightday()},
        function(){$('#td_year_jul_25').nohighlightday()}],
        25: [
        function(){$('#td_year_jul_26').highlightday()},
        function(){$('#td_year_jul_26').nohighlightday()}],
        26: [
        function(){$('#td_year_jul_27').highlightday()},
        function(){$('#td_year_jul_27').nohighlightday()}],
        27: [
        function(){$('#td_year_jul_28').highlightday()},
        function(){$('#td_year_jul_28').nohighlightday()}],
        28: [
        function(){$('#td_year_jul_29').highlightday()},
        function(){$('#td_year_jul_29').nohighlightday()}],
        29: [
        function(){$('#td_year_jul_30').highlightday()},
        function(){$('#td_year_jul_30').nohighlightday()}],
        30: [
        function(){$('#td_year_jul_31').highlightday()},
        function(){$('#td_year_jul_31').nohighlightday()}],
        31: [
        function(){$('#td_year_jul_32').highlightday()},
        function(){$('#td_year_jul_32').nohighlightday()}],
        32: [
        function(){$('#td_year_jul_33').highlightday()},
        function(){$('#td_year_jul_33').nohighlightday()}],
        33: [
        function(){$('#td_year_jul_34').highlightday()},
        function(){$('#td_year_jul_34').nohighlightday()}],
        34: [
        function(){$('#td_year_jul_35').highlightday()},
        function(){$('#td_year_jul_35').nohighlightday()}],
        35: [
        function(){$('#td_year_jul_36').highlightday()},
        function(){$('#td_year_jul_36').nohighlightday()}],
        36: [
        function(){$('#td_year_jul_37').highlightday()},
        function(){$('#td_year_jul_37').nohighlightday()}],
        37: [
        function(){$('#td_year_jul_38').highlightday()},
        function(){$('#td_year_jul_38').nohighlightday()}],
        38: [
        function(){$('#td_year_jul_39').highlightday()},
        function(){$('#td_year_jul_39').nohighlightday()}],
        39: [
        function(){$('#td_year_jul_40').highlightday()},
        function(){$('#td_year_jul_40').nohighlightday()}],
        40: [
        function(){$('#td_year_jul_41').highlightday()},
        function(){$('#td_year_jul_41').nohighlightday()}],
        41: [
        function(){$('#td_year_jul_42').highlightday()},
        function(){$('#td_year_jul_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_aug(){
    year_view_divs_aug = {
        0: [
        function(){$('#td_year_aug_1').highlightday()},
        function(){$('#td_year_aug_1').nohighlightday()}],
        1: [
        function(){$('#td_year_aug_2').highlightday()},
        function(){$('#td_year_aug_2').nohighlightday()}],
        2: [
        function(){$('#td_year_aug_3').highlightday()},
        function(){$('#td_year_aug_3').nohighlightday()}],
        3: [
        function(){$('#td_year_aug_4').highlightday()},
        function(){$('#td_year_aug_4').nohighlightday()}],
        4: [
        function(){$('#td_year_aug_5').highlightday()},
        function(){$('#td_year_aug_5').nohighlightday()}],
        5: [
        function(){$('#td_year_aug_6').highlightday()},
        function(){$('#td_year_aug_6').nohighlightday()}],
        6: [
        function(){$('#td_year_aug_7').highlightday()},
        function(){$('#td_year_aug_7').nohighlightday()}],
        7: [
        function(){$('#td_year_aug_8').highlightday()},
        function(){$('#td_year_aug_8').nohighlightday()}],
        8: [
        function(){$('#td_year_aug_9').highlightday()},
        function(){$('#td_year_aug_9').nohighlightday()}],
        9: [
        function(){$('#td_year_aug_10').highlightday()},
        function(){$('#td_year_aug_10').nohighlightday()}],
        10: [
        function(){$('#td_year_aug_11').highlightday()},
        function(){$('#td_year_aug_11').nohighlightday()}],
        11: [
        function(){$('#td_year_aug_12').highlightday()},
        function(){$('#td_year_aug_12').nohighlightday()}],
        12: [
        function(){$('#td_year_aug_13').highlightday()},
        function(){$('#td_year_aug_13').nohighlightday()}],
        13: [
        function(){$('#td_year_aug_14').highlightday()},
        function(){$('#td_year_aug_14').nohighlightday()}],
        14: [
        function(){$('#td_year_aug_15').highlightday()},
        function(){$('#td_year_aug_15').nohighlightday()}],
        15: [
        function(){$('#td_year_aug_16').highlightday()},
        function(){$('#td_year_aug_16').nohighlightday()}],
        16: [
        function(){$('#td_year_aug_17').highlightday()},
        function(){$('#td_year_aug_17').nohighlightday()}],
        17: [
        function(){$('#td_year_aug_18').highlightday()},
        function(){$('#td_year_aug_18').nohighlightday()}],
        18: [
        function(){$('#td_year_aug_19').highlightday()},
        function(){$('#td_year_aug_19').nohighlightday()}],
        19: [
        function(){$('#td_year_aug_20').highlightday()},
        function(){$('#td_year_aug_20').nohighlightday()}],
        20: [
        function(){$('#td_year_aug_21').highlightday()},
        function(){$('#td_year_aug_21').nohighlightday()}],
        21: [
        function(){$('#td_year_aug_22').highlightday()},
        function(){$('#td_year_aug_22').nohighlightday()}],
        22: [
        function(){$('#td_year_aug_23').highlightday()},
        function(){$('#td_year_aug_23').nohighlightday()}],
        23: [
        function(){$('#td_year_aug_24').highlightday()},
        function(){$('#td_year_aug_24').nohighlightday()}],
        24: [
        function(){$('#td_year_aug_25').highlightday()},
        function(){$('#td_year_aug_25').nohighlightday()}],
        25: [
        function(){$('#td_year_aug_26').highlightday()},
        function(){$('#td_year_aug_26').nohighlightday()}],
        26: [
        function(){$('#td_year_aug_27').highlightday()},
        function(){$('#td_year_aug_27').nohighlightday()}],
        27: [
        function(){$('#td_year_aug_28').highlightday()},
        function(){$('#td_year_aug_28').nohighlightday()}],
        28: [
        function(){$('#td_year_aug_29').highlightday()},
        function(){$('#td_year_aug_29').nohighlightday()}],
        29: [
        function(){$('#td_year_aug_30').highlightday()},
        function(){$('#td_year_aug_30').nohighlightday()}],
        30: [
        function(){$('#td_year_aug_31').highlightday()},
        function(){$('#td_year_aug_31').nohighlightday()}],
        31: [
        function(){$('#td_year_aug_32').highlightday()},
        function(){$('#td_year_aug_32').nohighlightday()}],
        32: [
        function(){$('#td_year_aug_33').highlightday()},
        function(){$('#td_year_aug_33').nohighlightday()}],
        33: [
        function(){$('#td_year_aug_34').highlightday()},
        function(){$('#td_year_aug_34').nohighlightday()}],
        34: [
        function(){$('#td_year_aug_35').highlightday()},
        function(){$('#td_year_aug_35').nohighlightday()}],
        35: [
        function(){$('#td_year_aug_36').highlightday()},
        function(){$('#td_year_aug_36').nohighlightday()}],
        36: [
        function(){$('#td_year_aug_37').highlightday()},
        function(){$('#td_year_aug_37').nohighlightday()}],
        37: [
        function(){$('#td_year_aug_38').highlightday()},
        function(){$('#td_year_aug_38').nohighlightday()}],
        38: [
        function(){$('#td_year_aug_39').highlightday()},
        function(){$('#td_year_aug_39').nohighlightday()}],
        39: [
        function(){$('#td_year_aug_40').highlightday()},
        function(){$('#td_year_aug_40').nohighlightday()}],
        40: [
        function(){$('#td_year_aug_41').highlightday()},
        function(){$('#td_year_aug_41').nohighlightday()}],
        41: [
        function(){$('#td_year_aug_42').highlightday()},
        function(){$('#td_year_aug_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_sep(){
    year_view_divs_sep = {
        0: [
        function(){$('#td_year_sep_1').highlightday()},
        function(){$('#td_year_sep_1').nohighlightday()}],
        1: [
        function(){$('#td_year_sep_2').highlightday()},
        function(){$('#td_year_sep_2').nohighlightday()}],
        2: [
        function(){$('#td_year_sep_3').highlightday()},
        function(){$('#td_year_sep_3').nohighlightday()}],
        3: [
        function(){$('#td_year_sep_4').highlightday()},
        function(){$('#td_year_sep_4').nohighlightday()}],
        4: [
        function(){$('#td_year_sep_5').highlightday()},
        function(){$('#td_year_sep_5').nohighlightday()}],
        5: [
        function(){$('#td_year_sep_6').highlightday()},
        function(){$('#td_year_sep_6').nohighlightday()}],
        6: [
        function(){$('#td_year_sep_7').highlightday()},
        function(){$('#td_year_sep_7').nohighlightday()}],
        7: [
        function(){$('#td_year_sep_8').highlightday()},
        function(){$('#td_year_sep_8').nohighlightday()}],
        8: [
        function(){$('#td_year_sep_9').highlightday()},
        function(){$('#td_year_sep_9').nohighlightday()}],
        9: [
        function(){$('#td_year_sep_10').highlightday()},
        function(){$('#td_year_sep_10').nohighlightday()}],
        10: [
        function(){$('#td_year_sep_11').highlightday()},
        function(){$('#td_year_sep_11').nohighlightday()}],
        11: [
        function(){$('#td_year_sep_12').highlightday()},
        function(){$('#td_year_sep_12').nohighlightday()}],
        12: [
        function(){$('#td_year_sep_13').highlightday()},
        function(){$('#td_year_sep_13').nohighlightday()}],
        13: [
        function(){$('#td_year_sep_14').highlightday()},
        function(){$('#td_year_sep_14').nohighlightday()}],
        14: [
        function(){$('#td_year_sep_15').highlightday()},
        function(){$('#td_year_sep_15').nohighlightday()}],
        15: [
        function(){$('#td_year_sep_16').highlightday()},
        function(){$('#td_year_sep_16').nohighlightday()}],
        16: [
        function(){$('#td_year_sep_17').highlightday()},
        function(){$('#td_year_sep_17').nohighlightday()}],
        17: [
        function(){$('#td_year_sep_18').highlightday()},
        function(){$('#td_year_sep_18').nohighlightday()}],
        18: [
        function(){$('#td_year_sep_19').highlightday()},
        function(){$('#td_year_sep_19').nohighlightday()}],
        19: [
        function(){$('#td_year_sep_20').highlightday()},
        function(){$('#td_year_sep_20').nohighlightday()}],
        20: [
        function(){$('#td_year_sep_21').highlightday()},
        function(){$('#td_year_sep_21').nohighlightday()}],
        21: [
        function(){$('#td_year_sep_22').highlightday()},
        function(){$('#td_year_sep_22').nohighlightday()}],
        22: [
        function(){$('#td_year_sep_23').highlightday()},
        function(){$('#td_year_sep_23').nohighlightday()}],
        23: [
        function(){$('#td_year_sep_24').highlightday()},
        function(){$('#td_year_sep_24').nohighlightday()}],
        24: [
        function(){$('#td_year_sep_25').highlightday()},
        function(){$('#td_year_sep_25').nohighlightday()}],
        25: [
        function(){$('#td_year_sep_26').highlightday()},
        function(){$('#td_year_sep_26').nohighlightday()}],
        26: [
        function(){$('#td_year_sep_27').highlightday()},
        function(){$('#td_year_sep_27').nohighlightday()}],
        27: [
        function(){$('#td_year_sep_28').highlightday()},
        function(){$('#td_year_sep_28').nohighlightday()}],
        28: [
        function(){$('#td_year_sep_29').highlightday()},
        function(){$('#td_year_sep_29').nohighlightday()}],
        29: [
        function(){$('#td_year_sep_30').highlightday()},
        function(){$('#td_year_sep_30').nohighlightday()}],
        30: [
        function(){$('#td_year_sep_31').highlightday()},
        function(){$('#td_year_sep_31').nohighlightday()}],
        31: [
        function(){$('#td_year_sep_32').highlightday()},
        function(){$('#td_year_sep_32').nohighlightday()}],
        32: [
        function(){$('#td_year_sep_33').highlightday()},
        function(){$('#td_year_sep_33').nohighlightday()}],
        33: [
        function(){$('#td_year_sep_34').highlightday()},
        function(){$('#td_year_sep_34').nohighlightday()}],
        34: [
        function(){$('#td_year_sep_35').highlightday()},
        function(){$('#td_year_sep_35').nohighlightday()}],
        35: [
        function(){$('#td_year_sep_36').highlightday()},
        function(){$('#td_year_sep_36').nohighlightday()}],
        36: [
        function(){$('#td_year_sep_37').highlightday()},
        function(){$('#td_year_sep_37').nohighlightday()}],
        37: [
        function(){$('#td_year_sep_38').highlightday()},
        function(){$('#td_year_sep_38').nohighlightday()}],
        38: [
        function(){$('#td_year_sep_39').highlightday()},
        function(){$('#td_year_sep_39').nohighlightday()}],
        39: [
        function(){$('#td_year_sep_40').highlightday()},
        function(){$('#td_year_sep_40').nohighlightday()}],
        40: [
        function(){$('#td_year_sep_41').highlightday()},
        function(){$('#td_year_sep_41').nohighlightday()}],
        41: [
        function(){$('#td_year_sep_42').highlightday()},
        function(){$('#td_year_sep_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_oct(){
    year_view_divs_oct = {
        0: [
        function(){$('#td_year_oct_1').highlightday()},
        function(){$('#td_year_oct_1').nohighlightday()}],
        1: [
        function(){$('#td_year_oct_2').highlightday()},
        function(){$('#td_year_oct_2').nohighlightday()}],
        2: [
        function(){$('#td_year_oct_3').highlightday()},
        function(){$('#td_year_oct_3').nohighlightday()}],
        3: [
        function(){$('#td_year_oct_4').highlightday()},
        function(){$('#td_year_oct_4').nohighlightday()}],
        4: [
        function(){$('#td_year_oct_5').highlightday()},
        function(){$('#td_year_oct_5').nohighlightday()}],
        5: [
        function(){$('#td_year_oct_6').highlightday()},
        function(){$('#td_year_oct_6').nohighlightday()}],
        6: [
        function(){$('#td_year_oct_7').highlightday()},
        function(){$('#td_year_oct_7').nohighlightday()}],
        7: [
        function(){$('#td_year_oct_8').highlightday()},
        function(){$('#td_year_oct_8').nohighlightday()}],
        8: [
        function(){$('#td_year_oct_9').highlightday()},
        function(){$('#td_year_oct_9').nohighlightday()}],
        9: [
        function(){$('#td_year_oct_10').highlightday()},
        function(){$('#td_year_oct_10').nohighlightday()}],
        10: [
        function(){$('#td_year_oct_11').highlightday()},
        function(){$('#td_year_oct_11').nohighlightday()}],
        11: [
        function(){$('#td_year_oct_12').highlightday()},
        function(){$('#td_year_oct_12').nohighlightday()}],
        12: [
        function(){$('#td_year_oct_13').highlightday()},
        function(){$('#td_year_oct_13').nohighlightday()}],
        13: [
        function(){$('#td_year_oct_14').highlightday()},
        function(){$('#td_year_oct_14').nohighlightday()}],
        14: [
        function(){$('#td_year_oct_15').highlightday()},
        function(){$('#td_year_oct_15').nohighlightday()}],
        15: [
        function(){$('#td_year_oct_16').highlightday()},
        function(){$('#td_year_oct_16').nohighlightday()}],
        16: [
        function(){$('#td_year_oct_17').highlightday()},
        function(){$('#td_year_oct_17').nohighlightday()}],
        17: [
        function(){$('#td_year_oct_18').highlightday()},
        function(){$('#td_year_oct_18').nohighlightday()}],
        18: [
        function(){$('#td_year_oct_19').highlightday()},
        function(){$('#td_year_oct_19').nohighlightday()}],
        19: [
        function(){$('#td_year_oct_20').highlightday()},
        function(){$('#td_year_oct_20').nohighlightday()}],
        20: [
        function(){$('#td_year_oct_21').highlightday()},
        function(){$('#td_year_oct_21').nohighlightday()}],
        21: [
        function(){$('#td_year_oct_22').highlightday()},
        function(){$('#td_year_oct_22').nohighlightday()}],
        22: [
        function(){$('#td_year_oct_23').highlightday()},
        function(){$('#td_year_oct_23').nohighlightday()}],
        23: [
        function(){$('#td_year_oct_24').highlightday()},
        function(){$('#td_year_oct_24').nohighlightday()}],
        24: [
        function(){$('#td_year_oct_25').highlightday()},
        function(){$('#td_year_oct_25').nohighlightday()}],
        25: [
        function(){$('#td_year_oct_26').highlightday()},
        function(){$('#td_year_oct_26').nohighlightday()}],
        26: [
        function(){$('#td_year_oct_27').highlightday()},
        function(){$('#td_year_oct_27').nohighlightday()}],
        27: [
        function(){$('#td_year_oct_28').highlightday()},
        function(){$('#td_year_oct_28').nohighlightday()}],
        28: [
        function(){$('#td_year_oct_29').highlightday()},
        function(){$('#td_year_oct_29').nohighlightday()}],
        29: [
        function(){$('#td_year_oct_30').highlightday()},
        function(){$('#td_year_oct_30').nohighlightday()}],
        30: [
        function(){$('#td_year_oct_31').highlightday()},
        function(){$('#td_year_oct_31').nohighlightday()}],
        31: [
        function(){$('#td_year_oct_32').highlightday()},
        function(){$('#td_year_oct_32').nohighlightday()}],
        32: [
        function(){$('#td_year_oct_33').highlightday()},
        function(){$('#td_year_oct_33').nohighlightday()}],
        33: [
        function(){$('#td_year_oct_34').highlightday()},
        function(){$('#td_year_oct_34').nohighlightday()}],
        34: [
        function(){$('#td_year_oct_35').highlightday()},
        function(){$('#td_year_oct_35').nohighlightday()}],
        35: [
        function(){$('#td_year_oct_36').highlightday()},
        function(){$('#td_year_oct_36').nohighlightday()}],
        36: [
        function(){$('#td_year_oct_37').highlightday()},
        function(){$('#td_year_oct_37').nohighlightday()}],
        37: [
        function(){$('#td_year_oct_38').highlightday()},
        function(){$('#td_year_oct_38').nohighlightday()}],
        38: [
        function(){$('#td_year_oct_39').highlightday()},
        function(){$('#td_year_oct_39').nohighlightday()}],
        39: [
        function(){$('#td_year_oct_40').highlightday()},
        function(){$('#td_year_oct_40').nohighlightday()}],
        40: [
        function(){$('#td_year_oct_41').highlightday()},
        function(){$('#td_year_oct_41').nohighlightday()}],
        41: [
        function(){$('#td_year_oct_42').highlightday()},
        function(){$('#td_year_oct_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_nov(){
    year_view_divs_nov = {
        0: [
        function(){$('#td_year_nov_1').highlightday()},
        function(){$('#td_year_nov_1').nohighlightday()}],
        1: [
        function(){$('#td_year_nov_2').highlightday()},
        function(){$('#td_year_nov_2').nohighlightday()}],
        2: [
        function(){$('#td_year_nov_3').highlightday()},
        function(){$('#td_year_nov_3').nohighlightday()}],
        3: [
        function(){$('#td_year_nov_4').highlightday()},
        function(){$('#td_year_nov_4').nohighlightday()}],
        4: [
        function(){$('#td_year_nov_5').highlightday()},
        function(){$('#td_year_nov_5').nohighlightday()}],
        5: [
        function(){$('#td_year_nov_6').highlightday()},
        function(){$('#td_year_nov_6').nohighlightday()}],
        6: [
        function(){$('#td_year_nov_7').highlightday()},
        function(){$('#td_year_nov_7').nohighlightday()}],
        7: [
        function(){$('#td_year_nov_8').highlightday()},
        function(){$('#td_year_nov_8').nohighlightday()}],
        8: [
        function(){$('#td_year_nov_9').highlightday()},
        function(){$('#td_year_nov_9').nohighlightday()}],
        9: [
        function(){$('#td_year_nov_10').highlightday()},
        function(){$('#td_year_nov_10').nohighlightday()}],
        10: [
        function(){$('#td_year_nov_11').highlightday()},
        function(){$('#td_year_nov_11').nohighlightday()}],
        11: [
        function(){$('#td_year_nov_12').highlightday()},
        function(){$('#td_year_nov_12').nohighlightday()}],
        12: [
        function(){$('#td_year_nov_13').highlightday()},
        function(){$('#td_year_nov_13').nohighlightday()}],
        13: [
        function(){$('#td_year_nov_14').highlightday()},
        function(){$('#td_year_nov_14').nohighlightday()}],
        14: [
        function(){$('#td_year_nov_15').highlightday()},
        function(){$('#td_year_nov_15').nohighlightday()}],
        15: [
        function(){$('#td_year_nov_16').highlightday()},
        function(){$('#td_year_nov_16').nohighlightday()}],
        16: [
        function(){$('#td_year_nov_17').highlightday()},
        function(){$('#td_year_nov_17').nohighlightday()}],
        17: [
        function(){$('#td_year_nov_18').highlightday()},
        function(){$('#td_year_nov_18').nohighlightday()}],
        18: [
        function(){$('#td_year_nov_19').highlightday()},
        function(){$('#td_year_nov_19').nohighlightday()}],
        19: [
        function(){$('#td_year_nov_20').highlightday()},
        function(){$('#td_year_nov_20').nohighlightday()}],
        20: [
        function(){$('#td_year_nov_21').highlightday()},
        function(){$('#td_year_nov_21').nohighlightday()}],
        21: [
        function(){$('#td_year_nov_22').highlightday()},
        function(){$('#td_year_nov_22').nohighlightday()}],
        22: [
        function(){$('#td_year_nov_23').highlightday()},
        function(){$('#td_year_nov_23').nohighlightday()}],
        23: [
        function(){$('#td_year_nov_24').highlightday()},
        function(){$('#td_year_nov_24').nohighlightday()}],
        24: [
        function(){$('#td_year_nov_25').highlightday()},
        function(){$('#td_year_nov_25').nohighlightday()}],
        25: [
        function(){$('#td_year_nov_26').highlightday()},
        function(){$('#td_year_nov_26').nohighlightday()}],
        26: [
        function(){$('#td_year_nov_27').highlightday()},
        function(){$('#td_year_nov_27').nohighlightday()}],
        27: [
        function(){$('#td_year_nov_28').highlightday()},
        function(){$('#td_year_nov_28').nohighlightday()}],
        28: [
        function(){$('#td_year_nov_29').highlightday()},
        function(){$('#td_year_nov_29').nohighlightday()}],
        29: [
        function(){$('#td_year_nov_30').highlightday()},
        function(){$('#td_year_nov_30').nohighlightday()}],
        30: [
        function(){$('#td_year_nov_31').highlightday()},
        function(){$('#td_year_nov_31').nohighlightday()}],
        31: [
        function(){$('#td_year_nov_32').highlightday()},
        function(){$('#td_year_nov_32').nohighlightday()}],
        32: [
        function(){$('#td_year_nov_33').highlightday()},
        function(){$('#td_year_nov_33').nohighlightday()}],
        33: [
        function(){$('#td_year_nov_34').highlightday()},
        function(){$('#td_year_nov_34').nohighlightday()}],
        34: [
        function(){$('#td_year_nov_35').highlightday()},
        function(){$('#td_year_nov_35').nohighlightday()}],
        35: [
        function(){$('#td_year_nov_36').highlightday()},
        function(){$('#td_year_nov_36').nohighlightday()}],
        36: [
        function(){$('#td_year_nov_37').highlightday()},
        function(){$('#td_year_nov_37').nohighlightday()}],
        37: [
        function(){$('#td_year_nov_38').highlightday()},
        function(){$('#td_year_nov_38').nohighlightday()}],
        38: [
        function(){$('#td_year_nov_39').highlightday()},
        function(){$('#td_year_nov_39').nohighlightday()}],
        39: [
        function(){$('#td_year_nov_40').highlightday()},
        function(){$('#td_year_nov_40').nohighlightday()}],
        40: [
        function(){$('#td_year_nov_41').highlightday()},
        function(){$('#td_year_nov_41').nohighlightday()}],
        41: [
        function(){$('#td_year_nov_42').highlightday()},
        function(){$('#td_year_nov_42').nohighlightday()}],
    }
}
function year_view_calendar_highlight_today_divs_dec(){
    year_view_divs_dec = {
        0: [
        function(){$('#td_year_dec_1').highlightday()},
        function(){$('#td_year_dec_1').nohighlightday()}],
        1: [
        function(){$('#td_year_dec_2').highlightday()},
        function(){$('#td_year_dec_2').nohighlightday()}],
        2: [
        function(){$('#td_year_dec_3').highlightday()},
        function(){$('#td_year_dec_3').nohighlightday()}],
        3: [
        function(){$('#td_year_dec_4').highlightday()},
        function(){$('#td_year_dec_4').nohighlightday()}],
        4: [
        function(){$('#td_year_dec_5').highlightday()},
        function(){$('#td_year_dec_5').nohighlightday()}],
        5: [
        function(){$('#td_year_dec_6').highlightday()},
        function(){$('#td_year_dec_6').nohighlightday()}],
        6: [
        function(){$('#td_year_dec_7').highlightday()},
        function(){$('#td_year_dec_7').nohighlightday()}],
        7: [
        function(){$('#td_year_dec_8').highlightday()},
        function(){$('#td_year_dec_8').nohighlightday()}],
        8: [
        function(){$('#td_year_dec_9').highlightday()},
        function(){$('#td_year_dec_9').nohighlightday()}],
        9: [
        function(){$('#td_year_dec_10').highlightday()},
        function(){$('#td_year_dec_10').nohighlightday()}],
        10: [
        function(){$('#td_year_dec_11').highlightday()},
        function(){$('#td_year_dec_11').nohighlightday()}],
        11: [
        function(){$('#td_year_dec_12').highlightday()},
        function(){$('#td_year_dec_12').nohighlightday()}],
        12: [
        function(){$('#td_year_dec_13').highlightday()},
        function(){$('#td_year_dec_13').nohighlightday()}],
        13: [
        function(){$('#td_year_dec_14').highlightday()},
        function(){$('#td_year_dec_14').nohighlightday()}],
        14: [
        function(){$('#td_year_dec_15').highlightday()},
        function(){$('#td_year_dec_15').nohighlightday()}],
        15: [
        function(){$('#td_year_dec_16').highlightday()},
        function(){$('#td_year_dec_16').nohighlightday()}],
        16: [
        function(){$('#td_year_dec_17').highlightday()},
        function(){$('#td_year_dec_17').nohighlightday()}],
        17: [
        function(){$('#td_year_dec_18').highlightday()},
        function(){$('#td_year_dec_18').nohighlightday()}],
        18: [
        function(){$('#td_year_dec_19').highlightday()},
        function(){$('#td_year_dec_19').nohighlightday()}],
        19: [
        function(){$('#td_year_dec_20').highlightday()},
        function(){$('#td_year_dec_20').nohighlightday()}],
        20: [
        function(){$('#td_year_dec_21').highlightday()},
        function(){$('#td_year_dec_21').nohighlightday()}],
        21: [
        function(){$('#td_year_dec_22').highlightday()},
        function(){$('#td_year_dec_22').nohighlightday()}],
        22: [
        function(){$('#td_year_dec_23').highlightday()},
        function(){$('#td_year_dec_23').nohighlightday()}],
        23: [
        function(){$('#td_year_dec_24').highlightday()},
        function(){$('#td_year_dec_24').nohighlightday()}],
        24: [
        function(){$('#td_year_dec_25').highlightday()},
        function(){$('#td_year_dec_25').nohighlightday()}],
        25: [
        function(){$('#td_year_dec_26').highlightday()},
        function(){$('#td_year_dec_26').nohighlightday()}],
        26: [
        function(){$('#td_year_dec_27').highlightday()},
        function(){$('#td_year_dec_27').nohighlightday()}],
        27: [
        function(){$('#td_year_dec_28').highlightday()},
        function(){$('#td_year_dec_28').nohighlightday()}],
        28: [
        function(){$('#td_year_dec_29').highlightday()},
        function(){$('#td_year_dec_29').nohighlightday()}],
        29: [
        function(){$('#td_year_dec_30').highlightday()},
        function(){$('#td_year_dec_30').nohighlightday()}],
        30: [
        function(){$('#td_year_dec_31').highlightday()},
        function(){$('#td_year_dec_31').nohighlightday()}],
        31: [
        function(){$('#td_year_dec_32').highlightday()},
        function(){$('#td_year_dec_32').nohighlightday()}],
        32: [
        function(){$('#td_year_dec_33').highlightday()},
        function(){$('#td_year_dec_33').nohighlightday()}],
        33: [
        function(){$('#td_year_dec_34').highlightday()},
        function(){$('#td_year_dec_34').nohighlightday()}],
        34: [
        function(){$('#td_year_dec_35').highlightday()},
        function(){$('#td_year_dec_35').nohighlightday()}],
        35: [
        function(){$('#td_year_dec_36').highlightday()},
        function(){$('#td_year_dec_36').nohighlightday()}],
        36: [
        function(){$('#td_year_dec_37').highlightday()},
        function(){$('#td_year_dec_37').nohighlightday()}],
        37: [
        function(){$('#td_year_dec_38').highlightday()},
        function(){$('#td_year_dec_38').nohighlightday()}],
        38: [
        function(){$('#td_year_dec_39').highlightday()},
        function(){$('#td_year_dec_39').nohighlightday()}],
        39: [
        function(){$('#td_year_dec_40').highlightday()},
        function(){$('#td_year_dec_40').nohighlightday()}],
        40: [
        function(){$('#td_year_dec_41').highlightday()},
        function(){$('#td_year_dec_41').nohighlightday()}],
        41: [
        function(){$('#td_year_dec_42').highlightday()},
        function(){$('#td_year_dec_42').nohighlightday()}],
    }
}

function year_view_calendar_highlight_today_check_all_months(){
    year_view_calendar_highlight_today_check_jan()
    year_view_calendar_highlight_today_check_feb()
    year_view_calendar_highlight_today_check_mar()
    year_view_calendar_highlight_today_check_apr()
    year_view_calendar_highlight_today_check_may()
    year_view_calendar_highlight_today_check_jun()
    year_view_calendar_highlight_today_check_jul()
    year_view_calendar_highlight_today_check_aug()
    year_view_calendar_highlight_today_check_sep()
    year_view_calendar_highlight_today_check_oct()
    year_view_calendar_highlight_today_check_nov()
    year_view_calendar_highlight_today_check_dec()
}


function year_view_calendar_highlight_today_divs(){
    year_view_calendar_highlight_today_divs_jan()
    year_view_calendar_highlight_today_divs_feb()
    year_view_calendar_highlight_today_divs_mar()
    year_view_calendar_highlight_today_divs_apr()
    year_view_calendar_highlight_today_divs_may()
    year_view_calendar_highlight_today_divs_jun()
    year_view_calendar_highlight_today_divs_jul()
    year_view_calendar_highlight_today_divs_aug()
    year_view_calendar_highlight_today_divs_sep()
    year_view_calendar_highlight_today_divs_oct()
    year_view_calendar_highlight_today_divs_nov()
    year_view_calendar_highlight_today_divs_dec()
}

function create_year_view_calendar(){
    year_view_calendar_highlight_today_div_list = {
        0: year_view_divs_jan,
        1: year_view_divs_feb,
        2: year_view_divs_mar,
        3: year_view_divs_apr,
        4: year_view_divs_may,
        5: year_view_divs_jun,
        6: year_view_divs_jul,
        7: year_view_divs_aug,
        8: year_view_divs_sep,
        9: year_view_divs_oct,
        10: year_view_divs_nov,
        11: year_view_divs_dec
    }
}


function create_year_view_day_of_month_list(){
    year_view_calendar_day_of_month_list = {
        0: year_view_values_jan,
        1: year_view_values_feb,
        2: year_view_values_mar,
        3: year_view_values_apr,
        4: year_view_values_may,
        5: year_view_values_jun,
        6: year_view_values_jul,
        7: year_view_values_aug,
        8: year_view_values_sep,
        9: year_view_values_oct,
        10: year_view_values_nov,
        11: year_view_values_dec
    }
}

// i=0
function year_view_calendar_highlight_today(){
    year_view_calendar_highlight_today_check_all_months()
    year_view_calendar_highlight_today_divs()
    create_year_view_calendar()
    create_year_view_day_of_month_list()
    month_select = year_view_calendar_highlight_today_div_list[month]
    var day_of_month_list = year_view_calendar_day_of_month_list[month]

    // zc : temp (select january)
    // var month_select = year_view_calendar_highlight_today_div_list[6]
    // var day_of_month_list = year_view_calendar_day_of_month_list[6]

    var j = 0
    var i = 0 
    // var z = 0
    for(i=0; i<41;){
        if(day_of_month_list[i]==''){
            j+=1
            i+=1
        }
        else if(day_of_month_list[i]==Date_Num){// ){
            month_select[i][0]()//an error was here. is it fixed? 10/26

            // console.log('found match! ' + day_of_month_list[i])
            // console.log('found match! output:' + month_select[i][0])
            // console.log('loop: j: '+ j)
            i+=1
        }
        else{
            // year_view_divs_sep[i][1]()
            i+=1
        }
        // console.log('i: '+ i)        
    }
    // console.log('loop complete: j: '+ j)
}

function year_view_calendar_labeler(){
    year_view_calendar_dictionary_grabber()
    year_view_calendar_day_of_month_labeler_jan()
    year_view_calendar_day_of_month_labeler_feb()
    year_view_calendar_day_of_month_labeler_mar()
    year_view_calendar_day_of_month_labeler_apr()
    year_view_calendar_day_of_month_labeler_may()
    year_view_calendar_day_of_month_labeler_jun()
    year_view_calendar_day_of_month_labeler_jul()
    year_view_calendar_day_of_month_labeler_aug()
    year_view_calendar_day_of_month_labeler_sep()
    year_view_calendar_day_of_month_labeler_oct()
    year_view_calendar_day_of_month_labeler_nov()
    year_view_calendar_day_of_month_labeler_dec()
}


//////////////////////////////////////////////////////////////////////////

// Year View: highlight current month


// example

$.fn.highlight_month_label = function(){
    return this.each(function(e){
        $(this).css({
            'color': color_accent_2,
            'font-weight': 'bold'
        })
    })
}

$.fn.dont_highlight_month_label = function(){
    return this.each(function(e){
        $(this).css({
            'color': color_accent_1,
            'font-weight': 'normal'
        })
    })
}



function reset_year_view_month_highlight(){
    $('#year_view_jan').dont_highlight_month_label()
    $('#year_view_feb').dont_highlight_month_label()
    $('#year_view_mar').dont_highlight_month_label()
    $('#year_view_apr').dont_highlight_month_label()
    $('#year_view_may').dont_highlight_month_label()
    $('#year_view_jun').dont_highlight_month_label()
    $('#year_view_jul').dont_highlight_month_label()
    $('#year_view_aug').dont_highlight_month_label()
    $('#year_view_sep').dont_highlight_month_label()
    $('#year_view_oct').dont_highlight_month_label()
    $('#year_view_nov').dont_highlight_month_label()
    $('#year_view_dec').dont_highlight_month_label()
}

function year_view_month_highlight(){
    reset_year_view_month_highlight()
    if(Month_Text=="January"){
        $('#year_view_jan').highlight_month_label()
    }
    else if(Month_Text=="February"){
        $('#year_view_feb').highlight_month_label()
    }
    else if(Month_Text=="March"){
        $('#year_view_mar').highlight_month_label()
    }
    else if(Month_Text=="April"){
        $('#year_view_apr').highlight_month_label()
    }
    else if(Month_Text=="May"){
        $('#year_view_may').highlight_month_label()
    }
    else if(Month_Text=="June"){
        $('#year_view_jun').highlight_month_label()
    }
    else if(Month_Text=="July"){
        $('#year_view_jul').highlight_month_label()
    }
    else if(Month_Text=="August"){
        $('#year_view_aug').highlight_month_label()
    }
    else if(Month_Text=="September"){
        $('#year_view_sep').highlight_month_label()
    }
    else if(Month_Text=="October"){
        $('#year_view_oct').highlight_month_label()
    }
    else if(Month_Text=="November"){
        $('#year_view_nov').highlight_month_label()
    }
    else if(Month_Text=="De"){
        $('#year_view_dec').highlight_month_label()
    }
}
// zcc
// year_view_jan
// year_view_feb
// year_view_mar
// year_view_apr
// year_view_may
// year_view_jun
// year_view_jul
// year_view_aug
// year_view_sep
// year_view_oct
// year_view_nov
// year_view_dec


///////////////////////////////////////////////////////////////////////////

// Month Calendar //


/////////////////////////////////
window.getMonday = function getMonday(d) {
    diff = Date_Num - DOW + (DOW == 0 ? -6:1); // adjust when day is sunday
    return (diff);
}
// getMonday(); // Mon Nov 08 2010

window.getSunday = function getSunday(){
    sunday = Date_Num - DOW
    return(sunday)

    // 31 - 6 + (6==0 ? -6:0);
    // diff = Date_Num - DOW + (DOW == 0 ? -6:0); // adjust when day is sunday
    // return (diff);
}
// getSunday()

window.getSaturday = function getSaturday(){
    diff = 6 - DOW 
    saturday = Date_Num + diff
    return(saturday)
}
// getSaturday()


week_date_range_crosses_two_months=''

window.check_if_date_crosses_two_months = function check_if_date_crosses_two_months(){
    if(getSunday()>27 & getSaturday()<10){
        if(Date_Num>27){
            week_date_range_crosses_two_months='yes_current_future' // denotes showing: current month - next month
        }
        else{
            week_date_range_crosses_two_months='yes_past_current' // denotes showing: previous month - current month
        }
        
    }
    else{
        week_date_range_crosses_two_months='no'
    }
}

window.updateWeekViewDateText = function updateWeekViewDateText() {
  // Ensure Date_Num and DOW are defined (Date_Num = today's date, DOW = today's day of week 0–6)
  const today = new Date();
  const Date_Num = today.getDate();
  const DOW = today.getDay();

  const dayIds = [
    'sunday', 'monday', 'tuesday', 'wednesday',
    'thursday', 'friday', 'saturday'
  ];

  // Calculate the Sunday of the current week
  const baseDate = new Date(today);
  baseDate.setDate(Date_Num - DOW);

  for (let i = 0; i < 7; i++) {
    const newDate = new Date(baseDate);
    newDate.setDate(baseDate.getDate() + i);
    const dayOfMonth = newDate.getDate();

    const spanId = `#week_view_${dayIds[i]}_date_text`;
    $(spanId).text(dayOfMonth);
  }
};




/////////////////////////////////


temp_month_dictionary=''
current_day_of_month_array=''
current_days_in_month=''
current_week_span=''
current_day_of_month_array=''

window.month_view_calendar_dictionary_grabber = function month_view_calendar_dictionary_grabber(){
    temp_month_dictionary= dictionary_library_array[0][month]

    // write variables from dictionary
    current_day_of_month_array = temp_month_dictionary.month
    current_days_in_month = temp_month_dictionary.days_in_month
    current_week_span = temp_month_dictionary.week_span
    current_day_of_month_array = temp_month_dictionary.day_of_month_array
}

function month_view_calendar_week_span(){
    $('#td_month_row_5').show()
    $('#td_month_row_6').show()
    if(current_week_span==5){
        $('#td_month_row_6').hide()
    }
    if(current_week_span==4){
        $('#td_month_row_5').hide()
        $('#td_month_row_6').hide()
    }
}

function month_view_calendar_day_of_month_labeler(){
    $('#td_month_cell_1_DOM').text(current_day_of_month_array[0][0])
    $('#td_month_cell_2_DOM').text(current_day_of_month_array[0][1])
    $('#td_month_cell_3_DOM').text(current_day_of_month_array[0][2])
    $('#td_month_cell_4_DOM').text(current_day_of_month_array[0][3])
    $('#td_month_cell_5_DOM').text(current_day_of_month_array[0][4])
    $('#td_month_cell_6_DOM').text(current_day_of_month_array[0][5])
    $('#td_month_cell_7_DOM').text(current_day_of_month_array[0][6])
    $('#td_month_cell_8_DOM').text(current_day_of_month_array[0][7])
    $('#td_month_cell_9_DOM').text(current_day_of_month_array[0][8])
    $('#td_month_cell_10_DOM').text(current_day_of_month_array[0][9])
    $('#td_month_cell_11_DOM').text(current_day_of_month_array[0][10])
    $('#td_month_cell_12_DOM').text(current_day_of_month_array[0][11])
    $('#td_month_cell_13_DOM').text(current_day_of_month_array[0][12])
    $('#td_month_cell_14_DOM').text(current_day_of_month_array[0][13])
    $('#td_month_cell_15_DOM').text(current_day_of_month_array[0][14])
    $('#td_month_cell_16_DOM').text(current_day_of_month_array[0][15])
    $('#td_month_cell_17_DOM').text(current_day_of_month_array[0][16])
    $('#td_month_cell_18_DOM').text(current_day_of_month_array[0][17])
    $('#td_month_cell_19_DOM').text(current_day_of_month_array[0][18])
    $('#td_month_cell_20_DOM').text(current_day_of_month_array[0][19])
    $('#td_month_cell_21_DOM').text(current_day_of_month_array[0][20])
    $('#td_month_cell_22_DOM').text(current_day_of_month_array[0][21])
    $('#td_month_cell_23_DOM').text(current_day_of_month_array[0][22])
    $('#td_month_cell_24_DOM').text(current_day_of_month_array[0][23])
    $('#td_month_cell_25_DOM').text(current_day_of_month_array[0][24])
    $('#td_month_cell_26_DOM').text(current_day_of_month_array[0][25])
    $('#td_month_cell_27_DOM').text(current_day_of_month_array[0][26])
    $('#td_month_cell_28_DOM').text(current_day_of_month_array[0][27])

    if(current_day_of_month_array[0][28]>current_days_in_month){td_month_cell_29=''}
    else{td_month_cell_29 = current_day_of_month_array[0][28]}

    if(current_day_of_month_array[0][29]>current_days_in_month){td_month_cell_30=''}
    else{td_month_cell_30 = current_day_of_month_array[0][29]}

    if(current_day_of_month_array[0][30]>current_days_in_month){td_month_cell_31=''}
    else{td_month_cell_31 = current_day_of_month_array[0][30]}

    if(current_day_of_month_array[0][31]>current_days_in_month){td_month_cell_32=''}
    else{td_month_cell_32 = current_day_of_month_array[0][31]}

    if(current_day_of_month_array[0][32]>current_days_in_month){td_month_cell_33=''}
    else{td_month_cell_33 = current_day_of_month_array[0][32]}

    if(current_day_of_month_array[0][33]>current_days_in_month){td_month_cell_34=''}
    else{td_month_cell_34 = current_day_of_month_array[0][33]}

    if(current_day_of_month_array[0][34]>current_days_in_month){td_month_cell_35=''}
    else{td_month_cell_35 = current_day_of_month_array[0][34]}

    if(current_day_of_month_array[0][35]>current_days_in_month){td_month_cell_36=''}
    else{td_month_cell_36 = current_day_of_month_array[0][35]}

    if(current_day_of_month_array[0][36]>current_days_in_month){td_month_cell_37=''}
    else{td_month_cell_37 = current_day_of_month_array[0][36]}

    if(current_day_of_month_array[0][37]>current_days_in_month){td_month_cell_38=''}
    else{td_month_cell_38 = current_day_of_month_array[0][37]}

    if(current_day_of_month_array[0][38]>current_days_in_month){td_month_cell_39=''}
    else{td_month_cell_39 = current_day_of_month_array[0][38]}

    if(current_day_of_month_array[0][39]>current_days_in_month){td_month_cell_40=''}
    else{td_month_cell_40 = current_day_of_month_array[0][39]}

    if(current_day_of_month_array[0][40]>current_days_in_month){td_month_cell_41=''}
    else{td_month_cell_41 = current_day_of_month_array[0][40]}

    if(current_day_of_month_array[0][41]>current_days_in_month){td_month_cell_42=''}
    else{td_month_cell_42 = current_day_of_month_array[0][41]}


    $('#td_month_cell_29_DOM').text(td_month_cell_29)
    $('#td_month_cell_30_DOM').text(td_month_cell_30)
    $('#td_month_cell_31_DOM').text(td_month_cell_31)
    $('#td_month_cell_32_DOM').text(td_month_cell_32)
    $('#td_month_cell_33_DOM').text(td_month_cell_33)
    $('#td_month_cell_34_DOM').text(td_month_cell_34)
    $('#td_month_cell_35_DOM').text(td_month_cell_35)
    $('#td_month_cell_36_DOM').text(td_month_cell_36)
    $('#td_month_cell_37_DOM').text(td_month_cell_37)
    $('#td_month_cell_38_DOM').text(td_month_cell_38)
    $('#td_month_cell_39_DOM').text(td_month_cell_39)
    $('#td_month_cell_40_DOM').text(td_month_cell_40)
    $('#td_month_cell_41_DOM').text(td_month_cell_41)
    $('#td_month_cell_42_DOM').text(td_month_cell_42)
}

function month_view_calendar_format_reset(){
    $('#td_month_cell_1').css('background-color', color_background)
    $('#td_month_cell_1').css('color', color_accent_1)
    $('#td_month_cell_1').css('font-weight', 'normal')
    $('#td_month_cell_2').css('background-color', color_background)
    $('#td_month_cell_2').css('color', color_accent_1)
    $('#td_month_cell_2').css('font-weight', 'normal')
    $('#td_month_cell_3').css('background-color', color_background)
    $('#td_month_cell_3').css('color', color_accent_1)
    $('#td_month_cell_3').css('font-weight', 'normal')
    $('#td_month_cell_4').css('background-color', color_background)
    $('#td_month_cell_4').css('color', color_accent_1)
    $('#td_month_cell_4').css('font-weight', 'normal')
    $('#td_month_cell_5').css('background-color', color_background)
    $('#td_month_cell_5').css('color', color_accent_1)
    $('#td_month_cell_5').css('font-weight', 'normal')
    $('#td_month_cell_6').css('background-color', color_background)
    $('#td_month_cell_6').css('color', color_accent_1)
    $('#td_month_cell_6').css('font-weight', 'normal')
    $('#td_month_cell_7').css('background-color', color_background)
    $('#td_month_cell_7').css('color', color_accent_1)
    $('#td_month_cell_7').css('font-weight', 'normal')
    $('#td_month_cell_8').css('background-color', color_background)
    $('#td_month_cell_8').css('color', color_accent_1)
    $('#td_month_cell_8').css('font-weight', 'normal')
    $('#td_month_cell_9').css('background-color', color_background)
    $('#td_month_cell_9').css('color', color_accent_1)
    $('#td_month_cell_9').css('font-weight', 'normal')
    $('#td_month_cell_10').css('background-color', color_background)
    $('#td_month_cell_10').css('color', color_accent_1)
    $('#td_month_cell_10').css('font-weight', 'normal')
    $('#td_month_cell_11').css('background-color', color_background)
    $('#td_month_cell_11').css('color', color_accent_1)
    $('#td_month_cell_11').css('font-weight', 'normal')
    $('#td_month_cell_12').css('background-color', color_background)
    $('#td_month_cell_12').css('color', color_accent_1)
    $('#td_month_cell_12').css('font-weight', 'normal')
    $('#td_month_cell_13').css('background-color', color_background)
    $('#td_month_cell_13').css('color', color_accent_1)
    $('#td_month_cell_13').css('font-weight', 'normal')
    $('#td_month_cell_14').css('background-color', color_background)
    $('#td_month_cell_14').css('color', color_accent_1)
    $('#td_month_cell_14').css('font-weight', 'normal')
    $('#td_month_cell_15').css('background-color', color_background)
    $('#td_month_cell_15').css('color', color_accent_1)
    $('#td_month_cell_15').css('font-weight', 'normal')
    $('#td_month_cell_16').css('background-color', color_background)
    $('#td_month_cell_16').css('color', color_accent_1)
    $('#td_month_cell_16').css('font-weight', 'normal')
    $('#td_month_cell_17').css('background-color', color_background)
    $('#td_month_cell_17').css('color', color_accent_1)
    $('#td_month_cell_17').css('font-weight', 'normal')
    $('#td_month_cell_18').css('background-color', color_background)
    $('#td_month_cell_18').css('color', color_accent_1)
    $('#td_month_cell_18').css('font-weight', 'normal')
    $('#td_month_cell_19').css('background-color', color_background)
    $('#td_month_cell_19').css('color', color_accent_1)
    $('#td_month_cell_19').css('font-weight', 'normal')
    $('#td_month_cell_20').css('background-color', color_background)
    $('#td_month_cell_20').css('color', color_accent_1)
    $('#td_month_cell_20').css('font-weight', 'normal')
    $('#td_month_cell_21').css('background-color', color_background)
    $('#td_month_cell_21').css('color', color_accent_1)
    $('#td_month_cell_21').css('font-weight', 'normal')
    $('#td_month_cell_22').css('background-color', color_background)
    $('#td_month_cell_22').css('color', color_accent_1)
    $('#td_month_cell_22').css('font-weight', 'normal')
    $('#td_month_cell_23').css('background-color', color_background)
    $('#td_month_cell_23').css('color', color_accent_1)
    $('#td_month_cell_23').css('font-weight', 'normal')
    $('#td_month_cell_24').css('background-color', color_background)
    $('#td_month_cell_24').css('color', color_accent_1)
    $('#td_month_cell_24').css('font-weight', 'normal')
    $('#td_month_cell_25').css('background-color', color_background)
    $('#td_month_cell_25').css('color', color_accent_1)
    $('#td_month_cell_25').css('font-weight', 'normal')
    $('#td_month_cell_26').css('background-color', color_background)
    $('#td_month_cell_26').css('color', color_accent_1)
    $('#td_month_cell_26').css('font-weight', 'normal')
    $('#td_month_cell_27').css('background-color', color_background)
    $('#td_month_cell_27').css('color', color_accent_1)
    $('#td_month_cell_27').css('font-weight', 'normal')
    $('#td_month_cell_28').css('background-color', color_background)
    $('#td_month_cell_28').css('color', color_accent_1)
    $('#td_month_cell_28').css('font-weight', 'normal')
    $('#td_month_cell_29').css('background-color', color_background)
    $('#td_month_cell_29').css('color', color_accent_1)
    $('#td_month_cell_29').css('font-weight', 'normal')
    $('#td_month_cell_30').css('background-color', color_background)
    $('#td_month_cell_30').css('color', color_accent_1)
    $('#td_month_cell_30').css('font-weight', 'normal')
    $('#td_month_cell_31').css('background-color', color_background)
    $('#td_month_cell_31').css('color', color_accent_1)
    $('#td_month_cell_31').css('font-weight', 'normal')
    $('#td_month_cell_32').css('background-color', color_background)
    $('#td_month_cell_32').css('color', color_accent_1)
    $('#td_month_cell_32').css('font-weight', 'normal')
    $('#td_month_cell_33').css('background-color', color_background)
    $('#td_month_cell_33').css('color', color_accent_1)
    $('#td_month_cell_33').css('font-weight', 'normal')
    $('#td_month_cell_34').css('background-color', color_background)
    $('#td_month_cell_34').css('color', color_accent_1)
    $('#td_month_cell_34').css('font-weight', 'normal')
    $('#td_month_cell_35').css('background-color', color_background)
    $('#td_month_cell_35').css('color', color_accent_1)
    $('#td_month_cell_35').css('font-weight', 'normal')
    $('#td_month_cell_36').css('background-color', color_background)
    $('#td_month_cell_36').css('color', color_accent_1)
    $('#td_month_cell_36').css('font-weight', 'normal')
    $('#td_month_cell_37').css('background-color', color_background)
    $('#td_month_cell_37').css('color', color_accent_1)
    $('#td_month_cell_37').css('font-weight', 'normal')
    $('#td_month_cell_38').css('background-color', color_background)
    $('#td_month_cell_38').css('color', color_accent_1)
    $('#td_month_cell_38').css('font-weight', 'normal')
    $('#td_month_cell_39').css('background-color', color_background)
    $('#td_month_cell_39').css('color', color_accent_1)
    $('#td_month_cell_39').css('font-weight', 'normal')
    $('#td_month_cell_40').css('background-color', color_background)
    $('#td_month_cell_40').css('color', color_accent_1)
    $('#td_month_cell_40').css('font-weight', 'normal')
    $('#td_month_cell_41').css('background-color', color_background)
    $('#td_month_cell_41').css('color', color_accent_1)
    $('#td_month_cell_41').css('font-weight', 'normal')
    $('#td_month_cell_42').css('background-color', color_background)
    $('#td_month_cell_42').css('color', color_accent_1)
    $('#td_month_cell_42').css('font-weight', 'normal')

}

function month_view_calendar_highlight_today(){
    if($('#td_month_cell_1_DOM').text()==Date_Num){
        $('#td_month_cell_1').css('background-color', color_accent_2)
        $('#td_month_cell_1').css('color', color_background)
        $('#td_month_cell_1').css('font-weight', 'bold')
    }
    if($('#td_month_cell_2_DOM').text()==Date_Num){
        $('#td_month_cell_2').css('background-color', color_accent_2)
        $('#td_month_cell_2').css('color', color_background)
        $('#td_month_cell_2').css('font-weight', 'bold')
    }
    if($('#td_month_cell_3_DOM').text()==Date_Num){
        $('#td_month_cell_3').css('background-color', color_accent_2)
        $('#td_month_cell_3').css('color', color_background)
        $('#td_month_cell_3').css('font-weight', 'bold')
    }
    if($('#td_month_cell_4_DOM').text()==Date_Num){
        $('#td_month_cell_4').css('background-color', color_accent_2)
        $('#td_month_cell_4').css('color', color_background)
        $('#td_month_cell_4').css('font-weight', 'bold')
    }
    if($('#td_month_cell_5_DOM').text()==Date_Num){
        $('#td_month_cell_5').css('background-color', color_accent_2)
        $('#td_month_cell_5').css('color', color_background)
        $('#td_month_cell_5').css('font-weight', 'bold')
    }
    if($('#td_month_cell_6_DOM').text()==Date_Num){
        $('#td_month_cell_6').css('background-color', color_accent_2)
        $('#td_month_cell_6').css('color', color_background)
        $('#td_month_cell_6').css('font-weight', 'bold')
    }
    if($('#td_month_cell_7_DOM').text()==Date_Num){
        $('#td_month_cell_7').css('background-color', color_accent_2)
        $('#td_month_cell_7').css('color', color_background)
        $('#td_month_cell_7').css('font-weight', 'bold')
    }
    if($('#td_month_cell_8_DOM').text()==Date_Num){
        $('#td_month_cell_8').css('background-color', color_accent_2)
        $('#td_month_cell_8').css('color', color_background)
        $('#td_month_cell_8').css('font-weight', 'bold')
    }
    if($('#td_month_cell_9_DOM').text()==Date_Num){
        $('#td_month_cell_9').css('background-color', color_accent_2)
        $('#td_month_cell_9').css('color', color_background)
        $('#td_month_cell_9').css('font-weight', 'bold')
    }
    if($('#td_month_cell_10_DOM').text()==Date_Num){
        $('#td_month_cell_10').css('background-color', color_accent_2)
        $('#td_month_cell_10').css('color', color_background)
        $('#td_month_cell_10').css('font-weight', 'bold')
    }
    if($('#td_month_cell_11_DOM').text()==Date_Num){
        $('#td_month_cell_11').css('background-color', color_accent_2)
        $('#td_month_cell_11').css('color', color_background)
        $('#td_month_cell_11').css('font-weight', 'bold')
    }
    if($('#td_month_cell_12_DOM').text()==Date_Num){
        $('#td_month_cell_12').css('background-color', color_accent_2)
        $('#td_month_cell_12').css('color', color_background)
        $('#td_month_cell_12').css('font-weight', 'bold')
    }
    if($('#td_month_cell_13_DOM').text()==Date_Num){
        $('#td_month_cell_13').css('background-color', color_accent_2)
        $('#td_month_cell_13').css('color', color_background)
        $('#td_month_cell_13').css('font-weight', 'bold')
    }
    if($('#td_month_cell_14_DOM').text()==Date_Num){
        $('#td_month_cell_14').css('background-color', color_accent_2)
        $('#td_month_cell_14').css('color', color_background)
        $('#td_month_cell_14').css('font-weight', 'bold')
    }
    if($('#td_month_cell_15_DOM').text()==Date_Num){
        $('#td_month_cell_15').css('background-color', color_accent_2)
        $('#td_month_cell_15').css('color', color_background)
        $('#td_month_cell_15').css('font-weight', 'bold')
    }
    if($('#td_month_cell_16_DOM').text()==Date_Num){
        $('#td_month_cell_16').css('background-color', color_accent_2)
        $('#td_month_cell_16').css('color', color_background)
        $('#td_month_cell_16').css('font-weight', 'bold')
    }
    if($('#td_month_cell_17_DOM').text()==Date_Num){
        $('#td_month_cell_17').css('background-color', color_accent_2)
        $('#td_month_cell_17').css('color', color_background)
        $('#td_month_cell_17').css('font-weight', 'bold')
    }
    if($('#td_month_cell_18_DOM').text()==Date_Num){
        $('#td_month_cell_18').css('background-color', color_accent_2)
        $('#td_month_cell_18').css('color', color_background)
        $('#td_month_cell_18').css('font-weight', 'bold')
    }
    if($('#td_month_cell_19_DOM').text()==Date_Num){
        $('#td_month_cell_19').css('background-color', color_accent_2)
        $('#td_month_cell_19').css('color', color_background)
        $('#td_month_cell_19').css('font-weight', 'bold')
    }
    if($('#td_month_cell_20_DOM').text()==Date_Num){
        $('#td_month_cell_20').css('background-color', color_accent_2)
        $('#td_month_cell_20').css('color', color_background)
        $('#td_month_cell_20').css('font-weight', 'bold')
    }
    if($('#td_month_cell_21_DOM').text()==Date_Num){
        $('#td_month_cell_21').css('background-color', color_accent_2)
        $('#td_month_cell_21').css('color', color_background)
        $('#td_month_cell_21').css('font-weight', 'bold')
    }
    if($('#td_month_cell_22_DOM').text()==Date_Num){
        $('#td_month_cell_22').css('background-color', color_accent_2)
        $('#td_month_cell_22').css('color', color_background)
        $('#td_month_cell_22').css('font-weight', 'bold')
    }
    if($('#td_month_cell_23_DOM').text()==Date_Num){
        $('#td_month_cell_23').css('background-color', color_accent_2)
        $('#td_month_cell_23').css('color', color_background)
        $('#td_month_cell_23').css('font-weight', 'bold')
    }
    if($('#td_month_cell_24_DOM').text()==Date_Num){
        $('#td_month_cell_24').css('background-color', color_accent_2)
        $('#td_month_cell_24').css('color', color_background)
        $('#td_month_cell_24').css('font-weight', 'bold')
    }
    if($('#td_month_cell_25_DOM').text()==Date_Num){
        $('#td_month_cell_25').css('background-color', color_accent_2)
        $('#td_month_cell_25').css('color', color_background)
        $('#td_month_cell_25').css('font-weight', 'bold')
    }
    if($('#td_month_cell_26_DOM').text()==Date_Num){
        $('#td_month_cell_26').css('background-color', color_accent_2)
        $('#td_month_cell_26').css('color', color_background)
        $('#td_month_cell_26').css('font-weight', 'bold')
    }
    if($('#td_month_cell_27_DOM').text()==Date_Num){
        $('#td_month_cell_27').css('background-color', color_accent_2)
        $('#td_month_cell_27').css('color', color_background)
        $('#td_month_cell_27').css('font-weight', 'bold')
    }
    if($('#td_month_cell_28_DOM').text()==Date_Num){
        $('#td_month_cell_28').css('background-color', color_accent_2)
        $('#td_month_cell_28').css('color', color_background)
        $('#td_month_cell_28').css('font-weight', 'bold')
    }
    if($('#td_month_cell_29_DOM').text()==Date_Num){
        $('#td_month_cell_29').css('background-color', color_accent_2)
        $('#td_month_cell_29').css('color', color_background)
        $('#td_month_cell_29').css('font-weight', 'bold')
    }
    if($('#td_month_cell_30_DOM').text()==Date_Num){
        $('#td_month_cell_30').css('background-color', color_accent_2)
        $('#td_month_cell_30').css('color', color_background)
        $('#td_month_cell_30').css('font-weight', 'bold')
    }
    if($('#td_month_cell_31_DOM').text()==Date_Num){
        $('#td_month_cell_31').css('background-color', color_accent_2)
        $('#td_month_cell_31').css('color', color_background)
        $('#td_month_cell_31').css('font-weight', 'bold')
    }
    if($('#td_month_cell_32_DOM').text()==Date_Num){
        $('#td_month_cell_32').css('background-color', color_accent_2)
        $('#td_month_cell_32').css('color', color_background)
        $('#td_month_cell_32').css('font-weight', 'bold')
    }
    if($('#td_month_cell_33_DOM').text()==Date_Num){
        $('#td_month_cell_33').css('background-color', color_accent_2)
        $('#td_month_cell_33').css('color', color_background)
        $('#td_month_cell_33').css('font-weight', 'bold')
    }
    if($('#td_month_cell_34_DOM').text()==Date_Num){
        $('#td_month_cell_34').css('background-color', color_accent_2)
        $('#td_month_cell_34').css('color', color_background)
        $('#td_month_cell_34').css('font-weight', 'bold')
    }
    if($('#td_month_cell_35_DOM').text()==Date_Num){
        $('#td_month_cell_35').css('background-color', color_accent_2)
        $('#td_month_cell_35').css('color', color_background)
        $('#td_month_cell_35').css('font-weight', 'bold')
    }
    if($('#td_month_cell_36_DOM').text()==Date_Num){
        $('#td_month_cell_36').css('background-color', color_accent_2)
        $('#td_month_cell_36').css('color', color_background)
        $('#td_month_cell_36').css('font-weight', 'bold')
    }
    if($('#td_month_cell_37_DOM').text()==Date_Num){
        $('#td_month_cell_37').css('background-color', color_accent_2)
        $('#td_month_cell_37').css('color', color_background)
        $('#td_month_cell_37').css('font-weight', 'bold')
    }
    if($('#td_month_cell_38_DOM').text()==Date_Num){
        $('#td_month_cell_38').css('background-color', color_accent_2)
        $('#td_month_cell_38').css('color', color_background)
        $('#td_month_cell_38').css('font-weight', 'bold')
    }
    if($('#td_month_cell_39_DOM').text()==Date_Num){
        $('#td_month_cell_39').css('background-color', color_accent_2)
        $('#td_month_cell_39').css('color', color_background)
        $('#td_month_cell_39').css('font-weight', 'bold')
    }
    if($('#td_month_cell_40_DOM').text()==Date_Num){
        $('#td_month_cell_40').css('background-color', color_accent_2)
        $('#td_month_cell_40').css('color', color_background)
        $('#td_month_cell_40').css('font-weight', 'bold')
    }
    if($('#td_month_cell_41_DOM').text()==Date_Num){
        $('#td_month_cell_41').css('background-color', color_accent_2)
        $('#td_month_cell_41').css('color', color_background)
        $('#td_month_cell_41').css('font-weight', 'bold')
    }
    if($('#td_month_cell_42_DOM').text()==Date_Num){
        $('#td_month_cell_42').css('background-color', color_accent_2)
        $('#td_month_cell_42').css('color', color_background)
        $('#td_month_cell_42').css('font-weight', 'bold')
    }
}

function month_view_calendar_labeler(){
    month_view_calendar_dictionary_grabber() // grab correct dictionary for relabeling
    month_view_calendar_week_span() // show/hide calendar rows as needed for each month 
    month_view_calendar_day_of_month_labeler() // number each day on calendar
    month_view_calendar_format_reset() // baseline formatting for each calendar day box
    month_view_calendar_highlight_today() // highlight today's date on calendar
}


