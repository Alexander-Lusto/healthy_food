const slider = document.querySelector(`.slider`);
const sliderItems = Array.from(slider.querySelectorAll(`.slider__item`)).sort((a, b) => a.dataset.mobileOrder - b.dataset.mobileOrder);
const sliderInputs = sliderItems.map(el => el.querySelector(`input`));
const sliderControlLeft = slider.querySelector(`.slider__control--left`);
const sliderControlRight = slider.querySelector(`.slider__control--right`);

const ACTIVE_CLASS_NAME = `slider__item--current`;
const DISABLED_CLASS_NAME = `slider__control--disabled`;

sliderControlLeft.addEventListener(`click`, (evt) => {
  const currentIndex = Number(Array.from(sliderInputs).find(el => el.checked).value);
  const currentSlide = sliderItems[currentIndex];
  const minIndex = 0;

  const newIndex = (currentIndex - 1 < minIndex) ? minIndex : currentIndex - 1;
  const newSlide = sliderItems[newIndex];

  currentSlide.classList.remove(ACTIVE_CLASS_NAME);
  newSlide.classList.add(ACTIVE_CLASS_NAME);
  sliderInputs[newIndex].checked = true;
  if (newIndex === minIndex) sliderControlLeft.disabled = true;
  else sliderControlRight.disabled = false;
});

sliderControlRight.addEventListener(`click`, (evt) => {
  const currentIndex = Number(Array.from(sliderInputs).find(el => el.checked).value);
  const currentSlide = sliderItems[currentIndex];
  const maxIndex = sliderItems.length - 1;

  const newIndex = (currentIndex + 1 > maxIndex) ? maxIndex : currentIndex + 1;
  const newSlide = sliderItems[newIndex];

  currentSlide.classList.remove(ACTIVE_CLASS_NAME);
  newSlide.classList.add(ACTIVE_CLASS_NAME);
  sliderInputs[newIndex].checked = true;
  if (newIndex === maxIndex) sliderControlRight.disabled = true;
  else sliderControlLeft.disabled = false;
});

