// --- reuse your hexToRgb(hex) from above ---

// tint an <img> in-place, preserving alpha, using a canvas dataURL
function tintImgInPlace(imgEl, hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return;

  const paint = () => {
    const w = imgEl.naturalWidth || imgEl.width;
    const h = imgEl.naturalHeight || imgEl.height;
    if (!w || !h) return;

    const canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    ctx.drawImage(imgEl, 0, 0, w, h);
    const imgd = ctx.getImageData(0, 0, w, h);
    const pix = imgd.data;

    for (let i = 0; i < pix.length; i += 4) {
      // keep transparency; recolor only visible pixels
      if (pix[i + 3] !== 0) {
        pix[i]     = rgb.r; // R
        pix[i + 1] = rgb.g; // G
        pix[i + 2] = rgb.b; // B
      }
    }

    ctx.putImageData(imgd, 0, 0);
    imgEl.src = canvas.toDataURL(); // swap image to the tinted version
  };

  // ensure the image is loaded before painting
  if (imgEl.complete) paint();
  else imgEl.onload = paint;
}

// Initialize bookmark icon colors + hover swap
function initBookmarkIconHover() {
  const offImg = document.getElementById('bookmark_image_off'); // default state
  const onImg  = document.getElementById('bookmark_image_on');  // hover state

  // pick your theme colors (swap as you like)
  // const offColor = typeof color_accent_2 !== 'undefined' ? color_accent_2 : '#8D8D8D';
  // const onColor  = typeof color_accent_1 !== 'undefined' ? color_accent_1 : '#FFFFFF';
  const offColor = color_accent_2;
  const onColor = color_accent_2;


  tintImgInPlace(offImg, offColor);
  tintImgInPlace(onImg,  onColor);

  // hover/focus handlers on the container
  $('#edit_quick_launch_bookmarks')
    .on('mouseenter focusin', function () {
      $('#bookmark_image_off').hide();
      $('#bookmark_image_on').show();
    })
    .on('mouseleave focusout', function () {
      $('#bookmark_image_on').hide();
      $('#bookmark_image_off').show();
    });
}

// call once after DOM is ready (and after your theme colors are set)
// $(initBookmarkIconHover);
