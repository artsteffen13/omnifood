$('.js--section-features').waypoint(function (direction) {
  if (direction == "down") {
    $('nav').addClass('sticky');
  } else {
    $('nav').removeClass('sticky');
  }
}, {
  offset: '60px;'
});

$('.js--scroll-to-plans').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
});

$('.js--scroll-to-start').click(function () {
  $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('.waypoint-1').waypoint(function (direction) {
    $('.waypoint-1').addClass('animated fadeInUp');
}, {
  offset: '350px;'
});

$('.waypoint-2').waypoint(function (direction) {
  $('.waypoint-2').addClass('animated fadeInUp');
}, {
  offset: '350px;'
});

$('.waypoint-3').waypoint(function (direction) {
  $('.waypoint-3').addClass('animated fadeInLeft');
}, {
  offset: '400px;'
});

$('.waypoint-4').waypoint(function (direction) {
  $('.waypoint-4').addClass('animated fadeInRight');
}, {
  offset: '400px;'
});

$('.waypoint-5').waypoint(function (direction) {
  $('.waypoint-5').addClass('animated fadeInUp');
}, {
  offset: '350px;'
});

$('.waypoint-6').waypoint(function (direction) {
  $('.waypoint-6').addClass('animated bounce');
}, {
  offset: '250px;'
});

$('.js--nav-icon').click(function () {
  const nav = $('.js--main-nav');
  nav.slideToggle(200);

});
