const menuButton = document.querySelector(`.header__mobile-menu-button`);
const menuLinks = document.querySelectorAll(`.header__navigation-link`);
const overlay = document.querySelector(`.overlay`);
const header = document.querySelector(`.header`);
const footer = document.querySelector(`.footer`);
const content = document.querySelector(`.content`);


const HEADER_MENU_OPENED_CLASS = `header--menu-opened`;
const BUTTON_MENU_OPENED_CLASS = `mobile-menu-button--menu-opened`;
const OVERLAY_MENU_OPENED_CLASS = `overlay--menu-opened`;
const HIDE_CLASS_NAME = `hidden`;

let isOpen = false;

const toggleMenu = (evt) => {
  evt.preventDefault();

  overlay.classList.toggle(OVERLAY_MENU_OPENED_CLASS);
  header.classList.toggle(HEADER_MENU_OPENED_CLASS);
  menuButton.classList.toggle(BUTTON_MENU_OPENED_CLASS);
  content.classList.toggle(HIDE_CLASS_NAME);
  footer.classList.toggle(HIDE_CLASS_NAME);

  isOpen = !isOpen;
  if (isOpen) menuLinks.forEach((link) => link.addEventListener(`click`, toggleMenu));
  else menuLinks.forEach((link) => link.removeEventListener(`click`, toggleMenu));
};

menuButton.addEventListener(`click`, toggleMenu);

