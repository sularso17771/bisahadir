function copyText(el) {
    var content = jQuery(el).siblings('div.copy-content').html()
    var temp = jQuery("<textarea>");
    jQuery("body").append(temp);
    temp.val(content.replace(/<br ?\/?>/g, "\n")).select();
    document.execCommand("copy");
    temp.remove();
    var text = jQuery(el).html()
    jQuery(el).html(jQuery(el).data('message'))
    var counter = 0;
    var interval = setInterval(function() {
        counter++;
        if (counter == 1) {
            jQuery(el).html(text)
        }
    }, 500);
}


function toggleFullscreen(elem) {
  elem = elem || document.documentElement;

  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

document.getElementById('btnFullscreen').addEventListener('click', function() {
  toggleFullscreen();
});

document.getElementsByClassName("wdp-button-wrapper").addEventListener('click', function() {
  toggleFullscreen();
});	