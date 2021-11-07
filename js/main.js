// Main menu click change active.
let dropDownsMain = Array.from(document.querySelectorAll("ul.nav-menu > li"));

// On click event main.
const handleClickMain = (e) => {
  e.preventDefault();
  dropDownsMain.forEach((li) => {
    li.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

// Add click listener to each li item.
dropDownsMain.forEach((li) => {
  li.addEventListener("click", handleClickMain);
});

// Sub menu click change active.
let dropDownsSub = Array.from(
  document.querySelectorAll("ul.nav-menu-sub > li")
);

// On click event sub.
const handleClickSub = (e) => {
  e.preventDefault();
  dropDownsSub.forEach((li) => {
    li.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

// Add click listener to each li item.
dropDownsSub.forEach((li) => {
  li.addEventListener("click", handleClickSub);
});

// On scroll function.
window.onscroll = function (e) {
  if (this.oldScroll < this.scrollY) {
    // If scrolling down.
    if (document.querySelector("nav.navbar").classList.contains("sticky")) {
      // If contains sticky, toggle.
      document.querySelector("nav.navbar").classList.toggle("sticky");
    }
    if (
      document.querySelector("nav.navbar-sub").classList.contains("sub-sticky")
    ) {
      // If contains sub-sticky, toggle.
      document.querySelector("nav.navbar-sub").classList.toggle("sub-sticky");
    }
  } else {
    // If scrolling up.
    if (!document.querySelector("nav.navbar").classList.contains("sticky")) {
      // If not contains sticky, add sticky.
      document.querySelector("nav.navbar").className += " sticky";
    }
    if (
      !document.querySelector("nav.navbar-sub").classList.contains("sub-sticky")
    ) {
      // If not contains sticky, add sub-sticky.
      document.querySelector("nav.navbar-sub").className += " sub-sticky";
    }
  }
  this.oldScroll = this.scrollY;
};

// Add or remove hamburger menu on mobile on click event.
document.querySelector("div.hamburger").onclick = function (e) {
  e.preventDefault();
  if (document.querySelector("div.hamburger").classList.contains("active")) {
    // If hamburger contains active class, remove.
    document.querySelector("div.hamburger").classList.toggle("active");
    document.querySelector("ul.nav-menu").classList.toggle("active");
  } else {
    // Not contains, add active.
    document.querySelector("div.hamburger").className += " active";
    document.querySelector("ul.nav-menu").className += " active";
  }
};
