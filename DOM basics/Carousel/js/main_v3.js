// Zell's method
const carousel = document.querySelector('.carousel')
const prevButton = carousel.querySelector('#js-previous-button')
const nextButton = carousel.querySelector('#js-next-button')
const contents = carousel.querySelector('.carousel__contents')

nextButton.addEventListener('click', () => {
  prevButton.removeAttribute('hidden')
  const currentSlide = contents.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling
  const destination = getComputedStyle(nextSlide).left
  contents.style.left = '-' + destination
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute('hidden', true)
  }
})

prevButton.addEventListener('click', () => {
  nextButton.removeAttribute('hidden')
  const currentSlide = contents.querySelector('.is-selected')
  const prevSlide = currentSlide.previousElementSibling
  const destination = getComputedStyle(prevSlide).left
  contents.style.left = '-' + destination
  currentSlide.classList.remove('is-selected')
  prevSlide.classList.add('is-selected')
  if (!prevSlide.previousElementSibling) {
    prevButton.setAttribute('hidden', true)
  }
})
