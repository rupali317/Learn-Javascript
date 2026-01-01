const carousel = document.querySelector('.carousel')
const nextBtn = carousel.querySelector('#next-btn')
const prevBtn = carousel.querySelector('#prev-btn')
const carouselContents = carousel.querySelector('.carousel__contents')
const carouselSlides = carousel.querySelectorAll('.carousel__slide')
const carouselDots = carousel.querySelectorAll('.carousel__dot')
let selectedDot = carousel.querySelector('.carousel__dot.is-selected')

let slideWidth = carouselSlides[0].getBoundingClientRect().width // Improvement 2
const totalSlides = carouselSlides.length

carouselSlides.forEach((slide, index) => {
  slide.style.left = index * slideWidth + 'px'
})

nextBtn.addEventListener('click', () => {
  selectedDot.classList.remove('is-selected')
  selectedDot.nextElementSibling.classList.add('is-selected')
  selectedDot = selectedDot.nextElementSibling
  let currentSlide = carouselContents.querySelector('.is-selected') // Improvement 1
  let nextSlide = currentSlide.nextElementSibling
  prevBtn.hidden = false
  nextBtn.hidden = nextSlide.nextElementSibling === null
  moveToSlide(currentSlide, nextSlide) // Improvement 3
})

prevBtn.addEventListener('click', () => {
  selectedDot.classList.remove('is-selected')
  selectedDot.previousElementSibling.classList.add('is-selected')
  selectedDot = selectedDot.previousElementSibling
  let currentSlide = carouselContents.querySelector('.is-selected') // Improvement 1
  let prevSlide = currentSlide.previousElementSibling
  nextBtn.hidden = false
  prevBtn.hidden = prevSlide.previousElementSibling === null
  moveToSlide(currentSlide, prevSlide) // Improvement 3
})

function moveToSlide(currentSlide, targetSlide) {
  let left = getComputedStyle(targetSlide).left
  carouselContents.style.left = '-' + left
  currentSlide.classList.remove('is-selected')
  targetSlide.classList.add('is-selected')
}

carouselDots.forEach((carouselDot, index) => {
  carouselDot.addEventListener('click', () => {
    carouselDots.forEach(dot => dot.classList.remove('is-selected'))
    carouselDot.classList.add('is-selected')
    selectedDot = carouselDot
    let left = index * slideWidth + 'px'
    nextBtn.hidden = index === totalSlides - 1 // Improvement 4
    prevBtn.hidden = index === 0
    carouselContents.style.left = '-' + left
    carouselSlides.forEach(carouselSlide => {
      carouselSlide.classList.remove('is-selected')
    })
    carouselSlides[index].classList.add('is-selected')
  })
})

/* Improvements as suggested by AI:
1. Instead of looping through each carousel slide, we apply the left on the oevrall carousel slide content without modifying
the left of each carousel slide
2. The approach to getting/using slide positions could be more consistent and robust. Consider using getBoundingClientRect() 
for better accuracy and parseFloat() instead of parseInt() to handle fractional pixel values.
3. Repeated logic in one helper function
4. Button Visibility Logic
*/
