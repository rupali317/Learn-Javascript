// Taking inspiration from Zell's method
const carousel = document.querySelector('.carousel')
const nextButton = carousel.querySelector('#js-next-button')
const prevButton = carousel.querySelector('#js-previous-button')
const carouselSlides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const slideWidth = parseInt(
  getComputedStyle(carouselSlides[0]).width.replace('px', ''),
)

// TODO: Positioning the slides with JavaScript
/*
For our carousels to be responsive, we need to let our user’s browsers determine the width of each slide
*/

nextButton.addEventListener('click', () => {
  prevButton.removeAttribute('hidden')
  const currentSlide = carousel.querySelector('.is-selected')
  const currentDot = carouselDots.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling
  const nextDot = currentDot.nextElementSibling
  for (let i = 0; i < carouselSlides.length; i++) {
    const carouselSlide = carouselSlides[i]
    carouselSlide.style.left =
      getLeftPositionOfSlide(carouselSlide) - slideWidth + 'px'
  }
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')
  currentDot.classList.remove('is-selected')
  nextDot.classList.add('is-selected')
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute('hidden', '')
  }
})

prevButton.addEventListener('click', () => {
  nextButton.removeAttribute('hidden')
  const currentSlide = carousel.querySelector('.is-selected')
  const currentDot = carouselDots.querySelectorAll('is-selected')
  const prevSlide = currentSlide.previousElementSibling
  const prevDot = currentDot.previousElementSibling
  for (let i = carouselSlides.length - 1; i >= 0; i--) {
    const carouselSlide = carouselSlides[i]
    carouselSlide.style.left =
      getLeftPositionOfSlide(carouselSlide) + slideWidth + 'px'
  }
  currentSlide.classList.remove('is-selected')
  prevSlide.classList.add('is-selected')
  currentDot.classList.remove('is-selected')
  prevDot.classList.add('is-selected')
  if (!prevSlide.previousElementSibling) {
    prevButton.setAttribute('hidden', '')
  }
})

function getLeftPositionOfSlide(carouselSlide) {
  return parseInt(getComputedStyle(carouselSlide).left.replace('px', ''))
}

/* My implementation for the dots */
const carouselDots = carousel.querySelector('.carousel__dots')
const carouselDotButtons = Array.from(carouselDots.querySelectorAll('button'))
carouselDotButtons[0].classList.add('is-selected')
carouselDotButtons.forEach((carouselDotButton, index) => {
  carouselDotButton.addEventListener('click', () => {
    assignLeftPosition(index)
    removeClassFromList(carouselDotButtons)
    removeClassFromList(carouselSlides)
    carouselSlides[index].classList.add('is-selected')
    carouselDotButton.classList.add('is-selected')
    manageVisibilityOfNavigationButtons(index, carouselDotButtons.length)
  })
})

function assignLeftPosition(index) {
  let currenLeftPosition = -1 * index * slideWidth
  carouselSlides.forEach(carouselSlide => {
    carouselSlide.style.left = currenLeftPosition + 'px'
    currenLeftPosition += slideWidth
  })
}

function manageVisibilityOfNavigationButtons(index, length) {
  prevButton.toggleAttribute('hidden', index === 0)
  nextButton.toggleAttribute('hidden', index === length - 1)
}

function removeClassFromList(elements) {
  elements.forEach(element => {
    element.classList.remove('is-selected')
  })
}
