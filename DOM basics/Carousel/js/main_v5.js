// when next/prev button are clicked, manage visibility of buttons (next and prev) if needed
//  -> maintain length of slides,
//  -> when next is clicked increment currimagenum for next and prev
//  -> when prev is clicked decrement currimagenum for next and prev
//  -> if next button reaches last image then set the hidden attribute otherwise there is no hidden attribute
//  -> if prev button recahes first image then set the hidden attribute otherwise there is no hidden attribute
// Show the appropriate image to show , the current image to show

const carousel = document.querySelector('.carousel')
const nextBtn = carousel.querySelector('#next-btn')
const prevBtn = carousel.querySelector('#prev-btn')
const carouselSlides = carousel.querySelectorAll('.carousel__slide')

let currImageNum = parseInt(nextBtn.dataset.currImageNum)
let slideWidth = parseInt(getComputedStyle(carouselSlides[0]).width)
const totalSlides = carouselSlides.length

nextBtn.addEventListener('click', () => {
  currImageNum += 1
  manageVisibilityOfNavigationButtons()
  carouselSlides.forEach(carouselSlide => {
    let left = parseInt(getComputedStyle(carouselSlide).left)
    let NewLeft = left - slideWidth
    carouselSlide.style.left = NewLeft + 'px'
  })
})

prevBtn.addEventListener('click', () => {
  currImageNum -= 1
  manageVisibilityOfNavigationButtons()
  carouselSlides.forEach(carouselSlide => {
    let left = parseInt(getComputedStyle(carouselSlide).left)
    let NewLeft = left + slideWidth
    carouselSlide.style.left = NewLeft + 'px'
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
