//collapse navbar after click
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });

//smooth scroll
  var $body = $('html, body');
  $('a').click(function() {
    $body.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-63
    }, 800);
    return false;
  });
});