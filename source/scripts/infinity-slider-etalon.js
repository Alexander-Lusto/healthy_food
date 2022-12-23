class InfinitySlider {
  constructor(element) {
    this.root = element;
    this.wrapper = this.root.querySelector(`.slider__wrapper`);
    this.list = this.root.querySelector(`.slider__list`);
    this.slides = Array.from(this.root.querySelectorAll(`.slider__item`));
    this.leftButton = this.root.querySelector(`.slider__button--prev`);
    this.rightButton = this.root.querySelector(`.slider__button--next`);

    this._slideWidth = this.slides[0].offsetWidth;
    this._wrapperWidth = this.wrapper.offsetWidth;
    this._wrapperPadding = parseInt(window.getComputedStyle(this.wrapper, null).getPropertyValue(`padding-left`));

    this._SLIDER_WIDTH = this._wrapperWidth - this._wrapperPadding;
    this._SLIDES_NUMBER = this._SLIDER_WIDTH / this._slideWidth;
    this._MIN_SLIDES_NUMBER = 10;

    this._shift = 0;
    this._left = 0;

    this._positionIndex = 0;
    this._positionIndexMax = this.slides.length / this._SLIDES_NUMBER - 1;
  }

  init() {
    if (this.slides.length < this._MIN_SLIDES_NUMBER) {
      this.leftButton.style.display = `none`;
      this.rightButton.style.display = `none`;
    }
    this._setRightButtonClickHandler();
    this._setLeftButtonClickHandler();
  }

  _setLeftButtonClickHandler() {
    this.leftButton.addEventListener(`click`, () => {

      if (this._positionIndex === 0) {
        this._addSlidesToTheBegining();
        this._left -= this._SLIDER_WIDTH;

        this.list.style.left = this._left + `px`;
      } else {
        this._positionIndex--;
      }

      this._shift += this._SLIDER_WIDTH;
      this.list.style.transform = `translateX(${this._shift}px)`;

      console.log(this._positionIndex);
    });
  }

  _setRightButtonClickHandler() {
    this.rightButton.addEventListener(`click`, () => {

      if (this._positionIndex === this._positionIndexMax) {
        this._addSlidesToTheEnd();
        this._left += this._SLIDER_WIDTH;

        this.list.style.left = this._left + `px`;
      } else {
        this._positionIndex++;
      }

      this._shift -= this._SLIDER_WIDTH;
      this.list.style.transform = `translateX(${this._shift}px)`;

      console.log(this._positionIndex);
    });
  }

  _addSlidesToTheEnd() {
    const firstSlides = this.slides.splice(0, this._SLIDES_NUMBER);
    this.slides = [].concat(this.slides, firstSlides);

    firstSlides.forEach((slide) => this.list.insertAdjacentElement(`beforeend`, slide));
  }

  _addSlidesToTheBegining() {
    const lastSlides = this.slides.splice(this.slides.length - this._SLIDES_NUMBER, this._SLIDES_NUMBER);
    this.slides = [].concat(lastSlides, this.slides);

    lastSlides.reverse().forEach((slide) => this.list.insertAdjacentElement(`afterbegin`, slide));
  }
}

const element = document.querySelector(`.slider`);
const infinitySlider = new InfinitySlider(element);

infinitySlider.init();

const slider = document.querySelector(`.infinity-slider`);
const sliderContainer = slider.querySelector(`.infinity-slider__container`);
const sliderList = slider.querySelector(`.infinity-slider__list`);
const sliderItems = slider.querySelectorAll(`.infinity-slider__item`);
const sliderControlLeft = slider.querySelector(`.infinity-slider__control--left`);
const sliderControlRight = slider.querySelector(`.infinity-slider__control--right`);


sliderControlLeft.addEventListener(`click`, () => {
  console.log(`click left`);
  sliderList.style.transform = `translateX(-200px)`;
});

sliderControlRight.addEventListener(`click`, () => {
  console.log(`click right`);
  sliderList.style.transform = `translateX(200px)`;
});


