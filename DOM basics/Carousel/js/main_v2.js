// Taking inspiration from Zell's method
const carousel = document.querySelector('.carousel')
const nextButton = carousel.querySelector('#js-next-button')
const prevButton = carousel.querySelector('#js-previous-button')
const carouselSlides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const slideWidth = parseInt(
  getComputedStyle(carouselSlides[0]).width.replace('px', ''),
)

/* TODO: The dots should also get updated */
nextButton.addEventListener('click', () => {
  prevButton.removeAttribute('hidden')
  const currentSlide = carousel.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling
  for (let i = 0; i < carouselSlides.length; i++) {
    const carouselSlide = carouselSlides[i]
    carouselSlide.style.left =
      getLeftPositionOfSlide(carouselSlide) - slideWidth + 'px'
  }
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute('hidden', '')
  }
})

prevButton.addEventListener('click', () => {
  nextButton.removeAttribute('hidden')
  const currentSlide = carousel.querySelector('.is-selected')
  const prevSlide = currentSlide.previousElementSibling
  for (let i = carouselSlides.length - 1; i >= 0; i--) {
    const carouselSlide = carouselSlides[i]
    carouselSlide.style.left =
      getLeftPositionOfSlide(carouselSlide) + slideWidth + 'px'
  }
  currentSlide.classList.remove('is-selected')
  prevSlide.classList.add('is-selected')
  if (!prevSlide.previousElementSibling) {
    prevButton.setAttribute('hidden', '')
  }
})

function getLeftPositionOfSlide(carouselSlide) {
  return parseInt(getComputedStyle(carouselSlide).left.replace('px', ''))
}

/* My implementation for the dots */
// 1. Select all the buttons inside the carousel__dots
// 2. Assign event listener on all the three buttons
// 3. Inside Each of these buttons listener
//    a. will show the image based on the indexing of the button (update the left of all the images)
//    b. hide/show next/prev button based on the dot that is clicked
//    c. highlight the selected button
const carouseDots = carousel.querySelector('.carousel__dots')
const carouseButtons = Array.from(carouseDots.querySelectorAll('button'))
carouseButtons.forEach((carouselButton, index) => {
  carouselButton.addEventListener('click', () => {
    removeSelectedDotClass()
    carouselButton.classList.add('is-selected')
    manageVisibilityOfNavigationButtons(index, carouseButtons.length)
  })
})

function manageVisibilityOfNavigationButtons(index, length) {
  if (index === 0) {
    prevButton.setAttribute('hidden', true)
    nextButton.removeAttribute('hidden')
  } else if (index === length - 1) {
    prevButton.removeAttribute('hidden')
    nextButton.setAttribute('hidden', true)
  } else {
    prevButton.removeAttribute('hidden')
    nextButton.removeAttribute('hidden')
  }
}

function removeSelectedDotClass() {
  carouseButtons.forEach(carouseButton => {
    carouseButton.classList.remove('is-selected')
  })
}

/* Zell's implementation for the dots */
