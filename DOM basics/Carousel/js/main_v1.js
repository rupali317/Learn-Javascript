// 1. Select the right button / left button + add event listeners to the buttons
//  1.1. When the buttons are clicked:
//      a. Loop through all the carousel_slide and modify the left (depending on the left button / right button -> the direction of the loop will be determined)
//      b. The is-selected class will be removed from the previous and assigned to the next carousel instance in view
//      c. If the is-selected class is in the first instance of the carousel__slide, then hidden will be present in the left button
//      d. If the is-selected class is in the last instance of the carousel__slide, then hidden will be present in the right button

const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('#js-previous-button')
const nextButton = carousel.querySelector('#js-next-button')
const carouselSlideList = carousel.querySelectorAll('.carousel__slide')

previousButton.addEventListener('click', () => {
  for (let i = carouselSlideList.length - 1; i >= 0; i--) {
    console.log(carouselSlideList[i])
  }
})

nextButton.addEventListener('click', () => {
  for (let i = 0; i < carouselSlideList.length; i++) {
    console.log(carouselSlideList[i])
  }
})
