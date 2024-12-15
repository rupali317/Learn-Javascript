// Taking inspiration from Zell's method
const carousel = document.querySelector('.carousel')
const nextButton = carousel.querySelector('#js-next-button')
const prevButton = carousel.querySelector('#js-previous-button')
const carouselSlides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const slideWidth = parseInt(
  getComputedStyle(carouselSlides[0]).width.replace('px', ''),
)

assignInitialLeftPosition()

nextButton.addEventListener('click', () => {
  prevButton.removeAttribute('hidden')
  const currentSlide = carousel.querySelector('.is-selected')
  const currentDot = carouselDots.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling
  const nextDot = currentDot.nextElementSibling
  for (let i = 0; i < carouselSlides.length; i++) {
    const carouselSlide = carouselSlides[i]
    const updatedLeftPosition =
      getLeftPositionOfSlide(carouselSlide) - slideWidth
    carouselSlide.style.left = updatedLeftPosition + 'px'
    carouselSlide.style.transform =
      'translateX(' + updatedLeftPosition + 'px' + ')'
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
  const currentDot = carouselDots.querySelector('.is-selected')
  const prevSlide = currentSlide.previousElementSibling
  const prevDot = currentDot.previousElementSibling
  for (let i = carouselSlides.length - 1; i >= 0; i--) {
    const carouselSlide = carouselSlides[i]
    const updatedLeftPosition =
      getLeftPositionOfSlide(carouselSlide) + slideWidth
    carouselSlide.style.left = updatedLeftPosition + 'px'
    carouselSlide.style.transform =
      'translateX(' + updatedLeftPosition + 'px' + ')'
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
carouselDots.addEventListener('click', e => {
  const targetCarouselDot = e.target
  if (targetCarouselDot.matches('.carousel__dot')) {
    removeClassFromList(carouselDotButtons)
    removeClassFromList(carouselSlides)
    targetCarouselDot.classList.add('is-selected')
    const index = carouselDotButtons.indexOf(targetCarouselDot)
    reassignLeftPositionsOfSlides(index)
    carouselSlides[index].classList.add('is-selected')
    manageVisibilityOfNavigationButtons(index, carouselDotButtons.length)
  }
})

function reassignLeftPositionsOfSlides(index) {
  const startPositionOfCarouselSlide = index * -1 * slideWidth
  carouselSlides.forEach((carouselSlide, idx) => {
    const updatedLeftPosition = startPositionOfCarouselSlide + slideWidth * idx
    carouselSlide.style.left = updatedLeftPosition + 'px'
    carouselSlide.style.transform =
      'translateX(' + updatedLeftPosition + 'px' + ')'
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

function assignInitialLeftPosition() {
  carouselSlides.forEach((carouselSlide, index) => {
    const updatedLeftPosition =
      getLeftPositionOfSlide(carouselSlide) + index * slideWidth
    carouselSlide.style.left = updatedLeftPosition + 'px'
    carouselSlide.style.transform =
      'translateX(' + updatedLeftPosition + 'px' + ')'
  })
}

// function assignInitialLeftPosition2() {
//   const rect = carouselSlides[0].getBoundingClientRect()
//   const width = rect.width
//   carouselSlides.forEach((carouselSlide, index) => {
//     carouselSlide.style.left = index * width + 'px'
//   })
// }
