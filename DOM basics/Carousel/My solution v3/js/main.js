// Improvements as suggested by AI:
const carousel = document.querySelector('.carousel')
const nextBtn = carousel.querySelector('#next-btn')
const prevBtn = carousel.querySelector('#prev-btn')
const carouselSlides = carousel.querySelectorAll('.carousel__slide')
const carouselDots = carousel.querySelectorAll('.carousel__dot')
let selectedDot = carousel.querySelector('.carousel__dot.is-selected')

let currImageNum = parseInt(nextBtn.dataset.currImageNum)
let slideWidth = parseInt(getComputedStyle(carouselSlides[0]).width)
const totalSlides = carouselSlides.length

nextBtn.addEventListener('click', () => {
  currImageNum += 1
  selectedDot.classList.remove('is-selected')
  selectedDot.nextElementSibling.classList.add('is-selected')
  selectedDot = selectedDot.nextElementSibling
  manageVisibilityOfNavigationButtons()
  carouselSlides.forEach(carouselSlide => {
    let left = parseInt(getComputedStyle(carouselSlide).left)
    let NewLeft = left - slideWidth
    carouselSlide.style.left = NewLeft + 'px'
  })
})

prevBtn.addEventListener('click', () => {
  currImageNum -= 1
  selectedDot.classList.remove('is-selected')
  selectedDot.previousElementSibling.classList.add('is-selected')
  selectedDot = selectedDot.previousElementSibling
  manageVisibilityOfNavigationButtons()
  carouselSlides.forEach(carouselSlide => {
    let left = parseInt(getComputedStyle(carouselSlide).left)
    let NewLeft = left + slideWidth
    carouselSlide.style.left = NewLeft + 'px'
  })
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
