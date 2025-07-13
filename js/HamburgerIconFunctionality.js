///////////////////////////////////
// Hamburger Icon Color Changing //
///////////////////////////////////
    
window.hexToRgb = function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

window.hamburger_color_changer = function hamburger_color_changer(){
    // http://jsfiddle.net/loktar/qduSR/1/
    var canvas= document.getElementById('canvas'),
        ctx = canvas.getContext('2d', { willReadFrequently: true }),
        image = document.getElementById("testImage");

    ctx.drawImage(image,0,0);

    var imgd = ctx.getImageData(0, 0, 128, 128),
    pix = imgd.data,
    uniqueColor = hexToRgb(color_accent_2) // converts hex to rgb

    uniqueColor_temp = Array(uniqueColor.r, uniqueColor.b, uniqueColor.g)

    // Loops through all of the pixels and modifies the components.
    for (var i = 0, n = pix.length; i <n; i += 4) {
        pix[i] = uniqueColor_temp[0] // red
        pix[i+1] = uniqueColor_temp[2] // green
        pix[i+2] = uniqueColor_temp[1] // blue
    }

    ctx.putImageData(imgd, 0, 0);
    var savedImageData = document.getElementById("imageData");
    // $('#testImage').css('opacity', '.5')
    $("#ham_icon").addClass("hi_off")
}