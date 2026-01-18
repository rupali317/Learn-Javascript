const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const carouselDots = document.querySelector('.carousel__dots')
const carouselContents = document.querySelector('.carousel__contents')
const carouselSlideList = carouselContents.querySelectorAll('.carousel__slide')
const carouselDotList = Array.from(
  carouselDots.querySelectorAll('.carousel__dot'),
)
let currentSlide = carouselContents.querySelector('.is-selected')
let currentDot = carouselDots.querySelector('.is-selected')

prevBtn.addEventListener('click', () => {
  if (currentSlide.previousElementSibling !== null) {
    shiftSlide(
      currentSlide.previousElementSibling,
      currentDot.previousElementSibling,
    )
  }
  manageVisibilityOfNavigationButtons()
})

nextBtn.addEventListener('click', () => {
  if (currentSlide.nextElementSibling !== null) {
    shiftSlide(currentSlide.nextElementSibling, currentDot.nextElementSibling)
  }
  manageVisibilityOfNavigationButtons()
})

carouselDots.addEventListener('click', e => {
  if (e.target.matches('button')) {
    currentSlide.classList.remove('is-selected')
    currentDot.classList.remove('is-selected')
    currentDot = e.target
    currentDot.classList.add('is-selected')
    index = getIndexSelectedDot()
    carouselSlideList[index].classList.add('is-selected')
    currentSlide = carouselSlideList[index]
    const left = getComputedStyle(carouselSlideList[index]).left
    carouselContents.style.left = '-' + left
    manageVisibilityOfNavigationButtons()
  }
})

function shiftSlide(targetSlide, targetDot) {
  currentSlide.classList.remove('is-selected')
  currentDot.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')
  targetDot.classList.add('is-selected')
  const left = getComputedStyle(targetSlide).left
  carouselContents.style.left = '-' + left
  currentSlide = targetSlide
  currentDot = targetDot
}

function manageVisibilityOfNavigationButtons() {
  const hasNext = currentSlide.nextElementSibling !== null
  const hasPrev = currentSlide.previousElementSibling !== null
  nextBtn.hidden = !hasNext
  prevBtn.hidden = !hasPrev
}

function getIndexSelectedDot() {
  return carouselDotList.findIndex(carouselDot => {
    if (carouselDot.classList.contains('is-selected')) return true
  })
}
