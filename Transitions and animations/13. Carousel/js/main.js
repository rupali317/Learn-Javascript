const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const carouselDots = document.querySelector('.carousel__dots')
const carouselContents = document.querySelector('.carousel__contents')
const carouselSlideList = carouselContents.querySelectorAll('.carousel__slide')
const carouselDotList = Array.from(
  carouselDots.querySelectorAll('.carousel__dot'),
)
let currentSlide = carouselContents.querySelector('.js-is-selected')
let currentDot = carouselDots.querySelector('.js-is-selected')

carouselSlideList.forEach((carouselSlide, index) => {
  carouselSlide.style.left = index * getWidthOfSlideContainer() + 'px'
})

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
    currentSlide.classList.remove('js-is-selected')
    currentDot.classList.remove('js-is-selected')
    e.target.classList.add('js-is-selected')
    currentDot = e.target
    index = getIndexSelectedDot()
    carouselSlideList[index].classList.add('js-is-selected')
    currentSlide = carouselSlideList[index]
    const left = getComputedStyle(carouselSlideList[index]).left
    carouselContents.style.transform = 'translateX(-' + left + ')'
    manageVisibilityOfNavigationButtons()
  }
})

function getWidthOfSlideContainer() {
  return carouselContents.getBoundingClientRect().width
}

function shiftSlide(targetSlide, targetDot) {
  currentSlide.classList.remove('js-is-selected')
  currentDot.classList.remove('js-is-selected')
  targetSlide.classList.add('js-is-selected')
  targetDot.classList.add('js-is-selected')
  const left = getComputedStyle(targetSlide).left
  carouselContents.style.transform = 'translateX(-' + left + ')'
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
    if (carouselDot.classList.contains('js-is-selected')) return true
  })
}
