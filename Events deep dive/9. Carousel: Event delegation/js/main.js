// Start writing JavaScript here!
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const carouselDots = document.querySelector('.carousel__dots')
const carouselContents = document.querySelector('.carousel__contents')
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
    currentDot.classList.remove('is-selected')
    e.target.classList.add('is-selected')
    currentDot = e.target
  }

  // 2. The corresponding slide will be shown
})
