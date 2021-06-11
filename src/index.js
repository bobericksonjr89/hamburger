const menu = document.querySelector(".js-hamburger");
const hamburger = document.querySelector(".js-hamburger");
const hamburgerHeader = document.querySelector(".nav__header");
const navButton = document.querySelector(".nav__button");
const nav = document.querySelector(".nav");
const dropDown = document.querySelector(".drop-down");

function toggleHeader() {
  hamburger.classList.toggle("js-hamburger--hidden");
  hamburgerHeader.classList.toggle("nav__header--hidden");
  navButton.classList.toggle("nav__button--hidden");
  nav.classList.toggle("nav--mobile");
}

function hideMenu() {
  const dropDownClose = document.querySelector(".drop-down__close");
  dropDownClose.removeEventListener("click", hideMenu);
  dropDown.classList.toggle("drop-down--visible");
  toggleHeader();
}

function expandMenu() {
  toggleHeader();
  dropDown.classList.toggle("drop-down--visible");
  const dropDownClose = document.querySelector(".drop-down__close");
  dropDownClose.addEventListener("click", hideMenu);
}

menu.addEventListener("click", expandMenu);
