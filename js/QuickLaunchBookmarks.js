

window.update_quick_launch_bookmark_labels = function update_quick_launch_bookmark_labels(){
	$('#bookmark_1_text').text(bk_1_label)
	$('#bookmark_2_text').text(bk_2_label)
	$('#bookmark_3_text').text(bk_3_label)
	$('#bookmark_4_text').text(bk_4_label)
	$('#bookmark_5_text').text(bk_5_label)
	$('#bookmark_6_text').text(bk_6_label)
	$('#bookmark_7_text').text(bk_7_label)
	$('#bookmark_8_text').text(bk_8_label)
	$('#bookmark_9_text').text(bk_9_label)
	$('#bookmark_10_text').text(bk_10_label)
	$('#bookmark_11_text').text(bk_11_label)
	$('#bookmark_12_text').text(bk_12_label)
	$('#bookmark_13_text').text(bk_13_label)
	$('#bookmark_14_text').text(bk_14_label)
	$('#bookmark_15_text').text(bk_15_label)
	$('#bookmark_16_text').text(bk_16_label)
	$('#bookmark_17_text').text(bk_17_label)
	$('#bookmark_18_text').text(bk_18_label)
	$('#bookmark_19_text').text(bk_19_label)
	$('#bookmark_20_text').text(bk_20_label)
}


window.update_quick_launch_bookmark_icons = function update_quick_launch_bookmark_icons() {
  const prefix = "https://www.google.com/s2/favicons?domain=";
  const suffix = "&sz=128";

  for (let i = 1; i <= 20; i++) {
    const website = window[`bk_${i}_website`]; // e.g., "example.com"
    if (!website) continue;

    const src = `${prefix}${website}${suffix}`;
    $(`#bookmark_${i}_icon`).attr("src", src);
  }
}

window.show_hide_quick_launch_bookmarks = function show_hide_quick_launch_bookmarks(){
	// _1
	if(bk_1_website==''){
		$('#bookmark_1').hide()
	}
	else{
		$('#bookmark_1').show()
	}
	// _2
	if(bk_2_website==''){
		$('#bookmark_2').hide()
	}
	else{
		$('#bookmark_2').show()
	}
	// _3
	if(bk_3_website==''){
		$('#bookmark_3').hide()
	}
	else{
		$('#bookmark_3').show()
	}
	// _4
	if(bk_4_website==''){
		$('#bookmark_4').hide()
	}
	else{
		$('#bookmark_4').show()
	}
	// _5
	if(bk_5_website==''){
		$('#bookmark_5').hide()
	}
	else{
		$('#bookmark_5').show()
	}
	// _6
	if(bk_6_website==''){
		$('#bookmark_6').hide()
	}
	else{
		$('#bookmark_6').show()
	}
	// _7
	if(bk_7_website==''){
		$('#bookmark_7').hide()
	}
	else{
		$('#bookmark_7').show()
	}
	// _8
	if(bk_8_website==''){
		$('#bookmark_8').hide()
	}
	else{
		$('#bookmark_8').show()
	}
	// _9
	if(bk_9_website==''){
		$('#bookmark_9').hide()
	}
	else{
		$('#bookmark_9').show()
	}
	// _10
	if(bk_10_website==''){
		$('#bookmark_10').hide()
	}
	else{
		$('#bookmark_10').show()
	}
	// _11
	if(bk_11_website==''){
		$('#bookmark_11').hide()
	}
	else{
		$('#bookmark_11').show()
	}
	// _12
	if(bk_12_website==''){
		$('#bookmark_12').hide()
	}
	else{
		$('#bookmark_12').show()
	}
	// _13
	if(bk_13_website==''){
		$('#bookmark_13').hide()
	}
	else{
		$('#bookmark_13').show()
	}
	// _14
	if(bk_14_website==''){
		$('#bookmark_14').hide()
	}
	else{
		$('#bookmark_14').show()
	}
	// _15
	if(bk_15_website==''){
		$('#bookmark_15').hide()
	}
	else{
		$('#bookmark_15').show()
	}
	// _16
	if(bk_16_website==''){
		$('#bookmark_16').hide()
	}
	else{
		$('#bookmark_16').show()
	}
	// _17
	if(bk_17_website==''){
		$('#bookmark_17').hide()
	}
	else{
		$('#bookmark_17').show()
	}
	// _18
	if(bk_18_website==''){
		$('#bookmark_18').hide()
	}
	else{
		$('#bookmark_18').show()
	}
	// _19
	if(bk_19_website==''){
		$('#bookmark_19').hide()
	}
	else{
		$('#bookmark_19').show()
	}
	// _20
	if(bk_20_website==''){
		$('#bookmark_20').hide()
	}
	else{
		$('#bookmark_20').show()
	}
}

window.update_quick_launch_bookmarks = function update_quick_launch_bookmarks(){
	update_quick_launch_bookmark_labels()
	update_quick_launch_bookmark_icons()
	show_hide_quick_launch_bookmarks()
}

