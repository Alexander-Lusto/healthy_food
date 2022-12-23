const links = Array.from(document.querySelectorAll(`.header__navigation-link`))
  .concat(Array.from(document.querySelectorAll(`.promo__button`)))
  .concat(Array.from(document.querySelectorAll(`.footer__navigation-link`)))
  .concat(Array.from(document.querySelectorAll(`.footer__logo`)));

links.forEach((link) => link.addEventListener(`click`, (evt) => {
  const index = link.href.lastIndexOf(`#`);
    if(index === -1) return;

  evt.preventDefault();

  setTimeout(() => {
    const id = link.href.substring(index);
    const Y = document.querySelector(id).offsetTop - 50;

    window.scrollTo({
      top: Y,
      behavior: 'smooth'
    });
  }, 0)
}));
