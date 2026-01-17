// Start writing JavaScript here!
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
  nextBtn.removeAttribute('hidden')

  if (currentSlide.previousElementSibling !== null) {
    currentSlide.classList.remove('is-selected')
    currentDot.classList.remove('is-selected')
    currentSlide.previousElementSibling.classList.add('is-selected')
    currentDot.previousElementSibling.classList.add('is-selected')
    const left = getComputedStyle(currentSlide.previousElementSibling).left
    carouselContents.style.left = '-' + left
    currentSlide = currentSlide.previousElementSibling
    currentDot = currentDot.previousElementSibling
  }

  if (currentSlide.previousElementSibling === null) {
    prevBtn.setAttribute('hidden', true)
  }
})

nextBtn.addEventListener('click', () => {
  prevBtn.removeAttribute('hidden')

  if (currentSlide.nextElementSibling !== null) {
    currentSlide.classList.remove('is-selected')
    currentDot.classList.remove('is-selected')
    currentSlide.nextElementSibling.classList.add('is-selected')
    currentDot.nextElementSibling.classList.add('is-selected')
    const left = getComputedStyle(currentSlide.nextElementSibling).left
    carouselContents.style.left = '-' + left
    currentSlide = currentSlide.nextElementSibling
    currentDot = currentDot.nextElementSibling
  }

  if (currentSlide.nextElementSibling === null) {
    nextBtn.setAttribute('hidden', true)
  }
})

carouselDots.addEventListener('click', e => {
  if (e.target.matches('button')) {
    nextBtn.removeAttribute('hidden')
    prevBtn.removeAttribute('hidden')
    currentDot.classList.remove('is-selected')
    e.target.classList.add('is-selected')
    currentDot = e.target
    index = getIndexSelectedDot()
    currentSlide.classList.remove('is-selected')
    carouselSlideList[index].classList.add('is-selected')
    currentSlide = carouselSlideList[index]
    const left = getComputedStyle(carouselSlideList[index]).left
    carouselContents.style.left = '-' + left
    if (currentSlide.nextElementSibling === null) {
      nextBtn.setAttribute('hidden', true)
    }
    if (currentSlide.previousElementSibling === null) {
      prevBtn.setAttribute('hidden', true)
    }
  }
})

function getIndexSelectedDot() {
  return carouselDotList.findIndex(carouselDot => {
    if (carouselDot.classList.contains('is-selected')) return true
  })
}
