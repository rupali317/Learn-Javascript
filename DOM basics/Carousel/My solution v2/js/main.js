/* Improvements as suggested by AI:
1. Instead of looping through each carousel slide, we apply the left on the oevrall carousel slide content without modifying
the left of each carousel slide
*/
const carousel = document.querySelector('.carousel')
const nextBtn = carousel.querySelector('#next-btn')
const prevBtn = carousel.querySelector('#prev-btn')
const carouselContents = carousel.querySelector('.carousel__contents')
const carouselSlides = carousel.querySelectorAll('.carousel__slide')
const carouselDots = carousel.querySelectorAll('.carousel__dot')
let selectedDot = carousel.querySelector('.carousel__dot.is-selected')

let slideWidth = parseInt(getComputedStyle(carouselSlides[0]).width)
const totalSlides = carouselSlides.length

nextBtn.addEventListener('click', () => {
  selectedDot.classList.remove('is-selected')
  selectedDot.nextElementSibling.classList.add('is-selected')
  selectedDot = selectedDot.nextElementSibling
  let currentSlide = carouselContents.querySelector('.is-selected') // Improvement 1
  let nextSlide = currentSlide.nextElementSibling
  prevBtn.hidden = false
  nextBtn.hidden = nextSlide.nextElementSibling === null
  let left = getComputedStyle(nextSlide).left
  carouselContents.style.left = '-' + left
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')
})

prevBtn.addEventListener('click', () => {
  selectedDot.classList.remove('is-selected')
  selectedDot.previousElementSibling.classList.add('is-selected')
  selectedDot = selectedDot.previousElementSibling
  let currentSlide = carouselContents.querySelector('.is-selected') // Improvement 1
  let prevSlide = currentSlide.previousElementSibling
  nextBtn.hidden = false
  prevBtn.hidden = prevSlide.previousElementSibling === null
  let left = getComputedStyle(prevSlide).left
  carouselContents.style.left = '-' + left
  currentSlide.classList.remove('is-selected')
  prevSlide.classList.add('is-selected')
})

carouselDots.forEach((carouselDot, index) => {
  carouselDot.addEventListener('click', () => {
    carouselDots.forEach(dot => dot.classList.remove('is-selected'))
    carouselDot.classList.add('is-selected')
    selectedDot = carouselDot
    let left = -1 * index * slideWidth
    if (index === 0) {
      nextBtn.hidden = false
      prevBtn.hidden = true
    } else if (index === totalSlides - 1) {
      nextBtn.hidden = true
      prevBtn.hidden = false
    } else {
      nextBtn.hidden = false
      prevBtn.hidden = false
    }
    carouselContents.style.left = left + 'px'
  })
})
