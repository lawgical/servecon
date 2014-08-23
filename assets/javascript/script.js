
$(document).ready(function() {

  windowHeight = null

  setHeader = function() {
    windowHeight = $(window).innerHeight();

    if ($(window).innerWidth() > 1030) {
      return $('.js_win_height').css('min-height', windowHeight);
    } else {
      return $('.js_win_height').css('min-height', '0');
    }
  };

  setHeader();

  $(window).resize(function(e) {
    return setHeader();
  });

  $('.app_header_bg').delay(750).fadeIn(2500);

  $('a img').parent('a').addClass('remove_border_bottom');

  $('[data-anchor]').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).data('anchor')).offset().top
    }, 1500);
  });

  $('[data-toggle]').click(function(e){
    e.preventDefault();
    $($(this).data('toggle')).toggle();
  });

});
