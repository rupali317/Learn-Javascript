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
    currImageNum = index + 1
    let startPositionOfFirstSlide = -1 * index * slideWidth
    manageVisibilityOfNavigationButtons()
    carouselSlides.forEach((carouselSlide, innerIndex) => {
      let NewLeft = startPositionOfFirstSlide + innerIndex * slideWidth
      carouselSlide.style.left = NewLeft + 'px'
    })
  })
})

function manageVisibilityOfNavigationButtons() {
  nextBtn.dataset.currImageNum = currImageNum
  prevBtn.dataset.currImageNum = currImageNum
  if (currImageNum === totalSlides) {
    nextBtn.setAttribute('hidden', true)
  } else {
    nextBtn.removeAttribute('hidden')
  }
  if (currImageNum === 1) {
    prevBtn.setAttribute('hidden', true)
  } else {
    prevBtn.removeAttribute('hidden')
  }
}

/**
1 Jan 2026
when next/prev button are clicked, manage visibility of buttons (next and prev) if needed
 -> maintain length of slides,
 -> when next is clicked increment currimagenum for next and prev
 -> when prev is clicked decrement currimagenum for next and prev
 -> if next button reaches last image then set the hidden attribute otherwise there is no hidden attribute
 -> if prev button recahes first image then set the hidden attribute otherwise there is no hidden attribute
Show the appropriate image to show , the current image to show
 -> 
 Working with dots
 -> In each of the dots attach event listener because there is a click
 -> when clicked updated the currimagenum based on the index of the dot
 -> magnage the visiblity of the arrows
 -> set the start position of the slide based on the index of the dot. After that set the left position of the next slides
 Selecting the dots
 -> when user clicks
 -> when next/prev buttons are clicked
 */
