const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  initialSlide: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 18,
      initialSlide: 1,
      loopAdditionalSlides: 10,
      width: 663,
      centeredSlides: true,
    },
    769: {
      slidesPerView: 1,
      initialSlide: 0,
      loopAdditionalSlides: 10,
      centeredSlides: true,
    },
    1560: {
      slidesPerView: 1,
      spaceBetween: 18,
      width: 663,
      initialSlide: 0,
      loopAdditionalSlides: 10,
      centeredSlides: true,
    }
  }
});
