$(document).ready(function () {
  "use strict";

  $("ul.nav-menu > li").click(function (e) {
    e.preventDefault();
    $("ul.nav-menu > li").removeClass("active");
    $(this).addClass("active");
  });

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
});

// const hamburger = document.getElementsByClassName(".hamburger");
// const navMenu = document.getElementsByClassName(".nav-menu");

// console.log(hamburger);

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//   console.log("here");
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// }
