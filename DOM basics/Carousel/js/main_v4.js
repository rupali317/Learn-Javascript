// Method: Not using any DOM manipulation while next/prev buttons are clicked
const carousel = document.querySelector('.carousel')
const nextButton = carousel.querySelector('#js-next-button')
const prevButton = carousel.querySelector('#js-previous-button')
const carouselSlides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const slideWidth = parseInt(
  getComputedStyle(carouselSlides[0]).width.replace('px', ''),
)
let currentIndex = 0

nextButton.addEventListener('click', () => {
  prevButton.hidden = false
  updateCarousel(carouselSlides, ++currentIndex)
  nextButton.hidden = currentIndex === carouselSlides.length - 1
})

prevButton.addEventListener('click', () => {
  nextButton.hidden = false
  updateCarousel(carouselSlides, --currentIndex)
  prevButton.hidden = currentIndex === 0
})

function updateCarousel(carouselSlides, currentIndex) {
  carouselSlides.forEach((carouseSlide, index) => {
    const updatedLeftPosition = (index - currentIndex) * slideWidth
    carouseSlide.style.left = updatedLeftPosition + 'px'
  })
}
