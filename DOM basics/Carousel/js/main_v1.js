// ----------------- Element selection ------------------------------
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('#js-previous-button')
const nextButton = carousel.querySelector('#js-next-button')
const carouselSlideList = Array.from(
  carousel.querySelectorAll('.carousel__slide'),
)
const totalSlides = carouselSlideList.length
const slideWidth = parseInt(
  getComputedStyle(carouselSlideList[0]).width.replace('px', ''),
)

// ----------------- Click previous button --------------------------
previousButton.addEventListener('click', () => {
  nextButton.removeAttribute('hidden')
  for (let i = carouselSlideList.length - 1; i >= 0; i--) {
    const carouselSlide = carouselSlideList[i]
    const left = getLeftPositionOfSlide(carouselSlide)
    const updatedLeft = left + slideWidth
    carouselSlide.style.left = updatedLeft + 'px'
    manageCarouselSelectionClass(carouselSlide, updatedLeft)
  }
  manageNavigationButtonVisibility()
})

// ----------------- Click next button ------------------------------
nextButton.addEventListener('click', () => {
  previousButton.removeAttribute('hidden')
  for (let i = 0; i < carouselSlideList.length; i++) {
    const carouselSlide = carouselSlideList[i]
    const left = getLeftPositionOfSlide(carouselSlide)
    const updatedLeft = left - slideWidth
    carouselSlide.style.left = updatedLeft + 'px'
    manageCarouselSelectionClass(carouselSlide, updatedLeft)
  }
  manageNavigationButtonVisibility()
})

// ----------------- Helper functions -------------------------------
function getLeftPositionOfSlide(carouselSlide) {
  return parseInt(getComputedStyle(carouselSlide).left.replace('px', ''))
}

function manageCarouselSelectionClass(carouselSlide, leftPosition) {
  if (leftPosition === 0) {
    carouselSlide.classList.add('is-selected')
  } else {
    carouselSlide.classList.remove('is-selected')
  }
}

function manageNavigationButtonVisibility() {
  if (carouselSlideList[0].classList.contains('is-selected')) {
    previousButton.setAttribute('hidden', '')
  } else if (
    carouselSlideList[totalSlides - 1].classList.contains('is-selected')
  ) {
    nextButton.setAttribute('hidden', '')
  }
}
// ------------------------------------------------------------------
