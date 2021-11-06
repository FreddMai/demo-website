$(document).ready(function () {
  "use strict";

  // Add or remove active class on main menu.
  $("ul.nav-menu > li").click(function (e) {
    e.preventDefault();
    $("ul.nav-menu > li").removeClass("active");
    $(this).addClass("active");
  });

  // Add or remove active class on sub menu.
  $("ul.nav-menu-sub > li").click(function (e) {
    e.preventDefault();
    $("ul.nav-menu-sub > li").removeClass("active");
    $(this).addClass("active");
  });

  // Add or remove hamburger menu on mobile.
  $("div.hamburger").click(function (e) {
    e.preventDefault();
    if ($("div.hamburger").hasClass("active")) {
      $("div.hamburger").removeClass("active");
      $("ul.nav-menu").removeClass("active");
    } else {
      $("div.hamburger").addClass("active");
      $("ul.nav-menu").addClass("active");
    }
  });

  var lastScrollTop = 0,
    delta = 5;

  var $window = $(window);
  var windowsize = $window.width();
  if (windowsize > 950) {
    $(window).scroll(function (event) {
      // On scroll.
      var st = $(this).scrollTop();

      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop) {
        // If scrolling down.
        $("nav.navbar").removeClass("sticky");
        $("nav.navbar-sub").removeClass("sub-sticky");
      } else {
        // If scrolling up.
        $("nav.navbar").addClass("sticky");
        $("nav.navbar-sub").addClass("sub-sticky");
      }
      lastScrollTop = st;
    });
  }
});
