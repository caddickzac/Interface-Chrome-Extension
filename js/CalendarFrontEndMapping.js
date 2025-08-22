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
            'background-color': window.color_accent_2,
            'color': window.color_background,
            'font-weight': 'bold'
        })
    })
}

$.fn.nohighlightday = function(){
    return this.each(function(e){
        $(this).css({
            'background-color': window.color_background,
            'color': window.color_accent_1,
            'font-weight': 'normal'
        })
    })
}

// 0) Month keys + index map
const YEAR_MONTH_KEYS = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
const MONTH_INDEX = { jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11 };

// --- Year-view helpers: compute reliable day->cell mapping without globals ---
window.getYearViewDayList = function getYearViewDayList(monthIdx) {
  const dict = (window.dictionary_library_array?.[0]?.[monthIdx]) || {};
  const daysInMonth = Number(dict.days_in_month) || 31;
  const arr = (dict.day_of_month_array?.[0]) || [];
  return arr.map(v => (Number(v) >= 1 && Number(v) <= daysInMonth) ? Number(v) : '');
};

window.yearCellSelector = function yearCellSelector(monthIdx, day) {
  const list = getYearViewDayList(monthIdx);
  const idx = list.findIndex(v => v === Number(day));
  if (idx < 0) return null;
  const key = YEAR_MONTH_KEYS[monthIdx];
  return `#td_year_${key}_${idx + 1}`;
};

window.attachYearEventPopup = function attachYearEventPopup(event) {
  const dt = new Date(event.start); // adapt if your event shape differs
  const sel = yearCellSelector(dt.getMonth(), dt.getDate());
  if (!sel) return;
  // Example behavior: append a trigger/badge or bind a click
  $(sel).append(event.popupHtml || '');
  // or: $(sel).on('click', () => openPopup(event));
};

window.highlightTodayInYear = function highlightTodayInYear() {
  const now = new Date();
  const list = getYearViewDayList(now.getMonth());
  const idx = list.findIndex(v => v === now.getDate());
  if (idx < 0) return;
  const key = YEAR_MONTH_KEYS[now.getMonth()];
  $(`#td_year_${key}_${idx + 1}`).highlightday();
};


// 1) Build the 0..41 -> [highlight, nohighlight] map for any month
window.build_year_view_calendar_highlight_map = function build_year_view_calendar_highlight_map(monthKey) {
  const map = {};
  const nodes = Array.from({ length: 42 }, (_, i) => $(`#td_year_${monthKey}_${i + 1}`));
  for (let i = 0; i < 42; i++) map[i] = [() => nodes[i].highlightday(), () => nodes[i].nohighlightday()];
  return map;
};

// 2) Ensure a month map exists
function ensureMonthMap(monthKey) {
  const varName = `year_view_divs_${monthKey}`;
  if (!window[varName]) window[varName] = window.build_year_view_calendar_highlight_map(monthKey);
  return window[varName];
}

// 3) Clear all highlights for a month
function clearMonthHighlights(monthKey) {
  const map = ensureMonthMap(monthKey);
  for (let i = 0; i < 42; i++) map[i][1]();
}

// 4) Highlight "today" cell for a month using your *_dictionary objects
window.year_view_calendar_highlight_today_check = function year_view_calendar_highlight_today_check(monthKey) {
  const dict = window[`${monthKey}_dictionary`];
  if (!dict) return;

  // always clear first
  clearMonthHighlights(monthKey);

  const now = new Date();
  if (now.getMonth() !== MONTH_INDEX[monthKey]) return; // only highlight the current month

  const arr = (dict.day_of_month_array && dict.day_of_month_array[0]) || [];
  const idx = arr.findIndex(v => v === now.getDate());
  if (idx >= 0) ensureMonthMap(monthKey)[idx][0]();
};

// 5) Init all 12 maps once (call this after the year view DOM exists)
window.init_year_view_calendar_highlight_maps = function init_year_view_calendar_highlight_maps() {
  YEAR_MONTH_KEYS.forEach(m => {
    window[`year_view_divs_${m}`] = window.build_year_view_calendar_highlight_map(m);
  });
};

// 6) Generic "check all months"
window.year_view_calendar_highlight_today_check_all_months = function year_view_calendar_highlight_today_check_all_months() {
  YEAR_MONTH_KEYS.forEach(m => window.year_view_calendar_highlight_today_check(m));
};

// 7) Back-compat wrappers so you don't have to touch old call sites
YEAR_MONTH_KEYS.forEach(m => {
  // replaces year_view_calendar_highlight_today_divs_<mon>()
  window[`year_view_calendar_highlight_today_divs_${m}`] = function () {
    window[`year_view_divs_${m}`] = window.build_year_view_calendar_highlight_map(m);
  };
  // replaces year_view_calendar_highlight_today_check_<mon>()
  window[`year_view_calendar_highlight_today_check_${m}`] = function () {
    window.year_view_calendar_highlight_today_check(m);
  };
});

// 8) Single entry point equivalent to your old "divs" function
window.year_view_calendar_highlight_today_divs = function year_view_calendar_highlight_today_divs() {
  window.init_year_view_calendar_highlight_maps();
};


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

function year_view_calendar_highlight_today(){
  // keep your existing setup calls if you still need them elsewhere
  year_view_calendar_highlight_today_check_all_months();
  year_view_calendar_highlight_today_divs();
  create_year_view_calendar();
  create_year_view_day_of_month_list();

  // New: reliable highlight of today's cell in the year grid
  highlightTodayInYear();
}


// function year_view_calendar_highlight_today(){
//     year_view_calendar_highlight_today_check_all_months()
//     year_view_calendar_highlight_today_divs()
//     create_year_view_calendar()
//     create_year_view_day_of_month_list()
//     month_select = year_view_calendar_highlight_today_div_list[month]
//     var day_of_month_list = year_view_calendar_day_of_month_list[month]

//     // zc : temp (select january)
//     // var month_select = year_view_calendar_highlight_today_div_list[6]
//     // var day_of_month_list = year_view_calendar_day_of_month_list[6]

//     var j = 0
//     var i = 0 
//     // var z = 0
//     for(i=0; i<41;){
//         if(day_of_month_list[i]==''){
//             j+=1
//             i+=1
//         }
//         else if(day_of_month_list[i]==Date_Num){// ){
//             month_select[i][0]()//an error was here. is it fixed? 10/26

//             // console.log('found match! ' + day_of_month_list[i])
//             // console.log('found match! output:' + month_select[i][0])
//             // console.log('loop: j: '+ j)
//             i+=1
//         }
//         else{
//             // year_view_divs_sep[i][1]()
//             i+=1
//         }
//         // console.log('i: '+ i)        
//     }
//     // console.log('loop complete: j: '+ j)
// }

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

$(function(){
  // labels & structure
  year_view_calendar_labeler();     // populates #td_year_<mon>_<1..42> text
  year_view_month_highlight();      // optional: highlight current month name
  highlightTodayInYear();           // highlight today (year grid)

  // if you have GCal events already:
  // renderAllYearEvents(events); // or loop: events.forEach(attachYearEventPopup)
});


//////////////////////////////////////////////////////////////////////////

// Year View: highlight current month


// example

$.fn.highlight_month_label = function(){
    return this.each(function(e){
        $(this).css({
            'color': window.color_accent_2,
            'font-weight': 'bold'
        })
    })
}

$.fn.dont_highlight_month_label = function(){
    return this.each(function(e){
        $(this).css({
            'color': window.color_accent_1,
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

// Ensure Month_Text exists for legacy code
window.Month_Text = window.Month_Text || new Date().toLocaleString('en-US', { month: 'long' });

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTH_IDS   = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];

function year_view_month_highlight(){
  reset_year_view_month_highlight();

  // figure out the month index safely:
  let idx = -1;

  // 1) prefer explicit numeric month if your app sets it (0..11)
  if (typeof window.month === 'number' && window.month >= 0 && window.month <= 11) {
    idx = window.month;
  }
  // 2) fallback to Month_Text if present
  else if (typeof window.Month_Text === 'string') {
    idx = MONTH_NAMES.indexOf(window.Month_Text);
  }
  // 3) final fallback: the real current month
  if (idx < 0) idx = new Date().getMonth();

  // highlight
  const id = MONTH_IDS[idx];
  $(`#year_view_${id}`).highlight_month_label();
}


// function year_view_month_highlight(){
//     reset_year_view_month_highlight()
//     if(Month_Text=="January"){
//         $('#year_view_jan').highlight_month_label()
//     }
//     else if(Month_Text=="February"){
//         $('#year_view_feb').highlight_month_label()
//     }
//     else if(Month_Text=="March"){
//         $('#year_view_mar').highlight_month_label()
//     }
//     else if(Month_Text=="April"){
//         $('#year_view_apr').highlight_month_label()
//     }
//     else if(Month_Text=="May"){
//         $('#year_view_may').highlight_month_label()
//     }
//     else if(Month_Text=="June"){
//         $('#year_view_jun').highlight_month_label()
//     }
//     else if(Month_Text=="July"){
//         $('#year_view_jul').highlight_month_label()
//     }
//     else if(Month_Text=="August"){
//         $('#year_view_aug').highlight_month_label()
//     }
//     else if(Month_Text=="September"){
//         $('#year_view_sep').highlight_month_label()
//     }
//     else if(Month_Text=="October"){
//         $('#year_view_oct').highlight_month_label()
//     }
//     else if(Month_Text=="November"){
//         $('#year_view_nov').highlight_month_label()
//     }
//     else if(Month_Text=="December"){
//         $('#year_view_dec').highlight_month_label()
//     }
// }
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

// CalendarFrontEndMapping.js
window.month_view_calendar_dictionary_grabber = function month_view_calendar_dictionary_grabber(){
  // pick the month’s dictionary (month is your 0..11 global)
  temp_month_dictionary = dictionary_library_array[0][month];

  // write variables from dictionary
  current_days_in_month       = temp_month_dictionary.days_in_month;
  current_week_span           = temp_month_dictionary.week_span;
  current_day_of_month_array  = temp_month_dictionary.day_of_month_array;

  // ✅ make month/year explicit globals for the month renderer
  window.month = month; // 0..11
  window.year  = (temp_month_dictionary.year && +temp_month_dictionary.year[0])
              || window.current_year
              || new Date().getFullYear();
};


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

/////////////////////////////////////////////////////////////////////////////
// Cache the 42 month cells once (rebuild if you re-render the month grid)
(function initMonthCellsCache(){
  window._month_dom_cells = Array.from({ length: 42 }, (_, i) =>
    document.getElementById(`td_month_cell_${i + 1}_DOM`)
  );
})();

window.rebuild_month_view_dom_cache = function rebuild_month_view_dom_cache(){
  window._month_dom_cells = Array.from({ length: 42 }, (_, i) =>
    document.getElementById(`td_month_cell_${i + 1}_DOM`)
  );
};

window.month_view_calendar_day_of_month_labeler = function month_view_calendar_day_of_month_labeler(){
  const arr = (window.current_day_of_month_array && window.current_day_of_month_array[0]) || [];
  const max = Number(window.current_days_in_month) || 31;

  for (let i = 0; i < 42; i++) {
    const el = window._month_dom_cells[i] || document.getElementById(`td_month_cell_${i + 1}_DOM`);
    if (!el) continue;

    const v = Number(arr[i]) || 0;                // guard bad/missing values
    el.textContent = (v >= 1 && v <= max) ? v : ''; // blank out non-month days
  }
};

/////////////////////////////////////////////////////////////////////////////
// Cache the 42 month cells (ids: td_month_cell_1 ... td_month_cell_42)
(function initMonthCellsCache(){
  window._month_cells = Array.from({ length: 42 }, (_, i) =>
    document.getElementById(`td_month_cell_${i + 1}`)
  );
})();

window.rebuild_month_cells_cache = function rebuild_month_cells_cache(){
  window._month_cells = Array.from({ length: 42 }, (_, i) =>
    document.getElementById(`td_month_cell_${i + 1}`)
  );
};

window.month_view_calendar_format_reset = function month_view_calendar_format_reset(){
  // If DOM was rebuilt, refresh the cache
  if (!Array.isArray(window._month_cells) || window._month_cells.some(el => !el)) {
    window.rebuild_month_cells_cache();
  }

  const elements = window._month_cells.filter(Boolean);

  // One jQuery call applies to all 42 cells at once
  $(elements).css({
    'background-color': window.color_background,
    'color':            window.color_accent_1,
    'font-weight':      'normal'
  });
};
/////////////////////////////////////////////////////////////////////////////

// Ensure caches exist (reuse the ones we created earlier)
window._month_dom_cells = window._month_dom_cells || Array.from({ length: 42 }, (_, i) =>
  document.getElementById(`td_month_cell_${i + 1}_DOM`)
);
window._month_cells = window._month_cells || Array.from({ length: 42 }, (_, i) =>
  document.getElementById(`td_month_cell_${i + 1}`)
);

// If your month grid gets re-rendered dynamically, call this to rebuild caches.
window.rebuild_month_caches = function rebuild_month_caches() {
  window._month_dom_cells = Array.from({ length: 42 }, (_, i) =>
    document.getElementById(`td_month_cell_${i + 1}_DOM`)
  );
  window._month_cells = Array.from({ length: 42 }, (_, i) =>
    document.getElementById(`td_month_cell_${i + 1}`)
  );
};

window.month_view_calendar_highlight_today = function month_view_calendar_highlight_today() {
  // Optional: if you aren't already doing it, you can reset formatting first:
  // if (typeof window.month_view_calendar_format_reset === 'function') month_view_calendar_format_reset();

  // Guard caches (in case DOM rebuilt)
  if (!Array.isArray(window._month_dom_cells) || window._month_dom_cells.some(el => !el) ||
      !Array.isArray(window._month_cells)     || window._month_cells.some(el => !el)) {
    window.rebuild_month_caches();
  }

  const target = String(window.Date_Num); // compare as string like original code
  let idx = -1;

  for (let i = 0; i < 42; i++) {
    const labelEl = window._month_dom_cells[i];
    if (labelEl && labelEl.textContent === target) { idx = i; break; }
  }
  if (idx === -1) return; // day not visible in this month grid

  const cellEl = window._month_cells[idx];
  if (!cellEl) return;

  // Apply highlight styles to the single matching cell
  $(cellEl).css({
    'background-color': window.color_accent_2,
    'color':            window.color_background,
    'font-weight':      'bold'
  });
};

/////////////////////////////////////////////////////////////////////////////

function month_view_calendar_labeler(){
    month_view_calendar_dictionary_grabber() // grab correct dictionary for relabeling
    month_view_calendar_week_span() // show/hide calendar rows as needed for each month 
    month_view_calendar_day_of_month_labeler() // number each day on calendar
    month_view_calendar_format_reset() // baseline formatting for each calendar day box
    month_view_calendar_highlight_today() // highlight today's date on calendar
}
/////////////////////////////////////////////////////////////////////////////
