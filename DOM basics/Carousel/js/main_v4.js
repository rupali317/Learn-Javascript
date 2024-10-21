const carousel = document.querySelector('.carousel')
const nextButton = carousel.querySelector('#js-next-button')
const prevButton = carousel.querySelector('#js-previous-button')
const carouselSlides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const slideWidth = parseInt(
  getComputedStyle(carouselSlides[0]).width.replace('px', ''),
)
let currentIndex = 0

nextButton.addEventListener('click', () => {
  prevButton.removeAttribute('hidden')
  const currentSlide = carousel.querySelector('.is-selected')
  const nextSlide = currentSlide.nextElementSibling
  updateCarousel(carouselSlides, ++currentIndex)
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
  updateCarousel(carouselSlides, --currentIndex)
  currentSlide.classList.remove('is-selected')
  prevSlide.classList.add('is-selected')
  if (!prevSlide.previousElementSibling) {
    prevButton.setAttribute('hidden', '')
  }
})

function updateCarousel(carouselSlides, currentIndex) {
  carouselSlides.forEach((carouseSlide, index) => {
    const updatedLeftPosition = (index - currentIndex) * slideWidth
    carouseSlide.style.left = updatedLeftPosition + 'px'
  })
}
