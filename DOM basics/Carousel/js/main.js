const nextButton = document.querySelector('#js-next-button')
const previousButton = document.querySelector('#js-previous-button')
const carouselSlideList = document.querySelectorAll('.carousel__slide')

previousButton.style.display = 'none'

nextButton.addEventListener('click', () => {
  previousButton.style.display = 'block'
  carouselSlideList.forEach((currentCarouselSlide, index) => {
    setLeftPositionOfCarouselSlides(currentCarouselSlide, true)
    setCurrentCarouselSlideAsVisible(currentCarouselSlide)
    setVisibilityOfNextButton(currentCarouselSlide, index)
  })
})

previousButton.addEventListener('click', () => {
  nextButton.style.display = 'block'
  for (let index = carouselSlideList.length - 1; index >= 0; index--) {
    const currentCarouselSlide = carouselSlideList[index]
    setLeftPositionOfCarouselSlides(currentCarouselSlide, false)
    setCurrentCarouselSlideAsVisible(currentCarouselSlide)
    setVisibilityOfPreviousButton(currentCarouselSlide, index)
  }
})

function setLeftPositionOfCarouselSlides(currentCarouselSlide, isSlideLeft) {
  const leftPosition = getComputedStyle(currentCarouselSlide).left.replace(
    'px',
    '',
  )
  if (isSlideLeft) {
    currentCarouselSlide.style.left = parseInt(leftPosition) - 800 + 'px'
  } else {
    currentCarouselSlide.style.left = parseInt(leftPosition) + 800 + 'px'
  }
}

function setCurrentCarouselSlideAsVisible(currentCarouselSlide) {
  if (currentCarouselSlide.style.left === '0px') {
    currentCarouselSlide.dataset.shownStatus = 'true'
  } else {
    currentCarouselSlide.dataset.shownStatus = 'false'
  }
}

function setVisibilityOfNextButton(currentCarouselSlide, index) {
  if (index === carouselSlideList.length - 1) {
    if (currentCarouselSlide.dataset.shownStatus === 'true') {
      nextButton.style.display = 'none'
    }
  } else {
    nextButton.style.display = 'block'
  }
}

function setVisibilityOfPreviousButton(currentCarouselSlide, index) {
  if (index === 0) {
    if (currentCarouselSlide.dataset.shownStatus === 'true') {
      previousButton.style.display = 'none'
    }
  } else {
    previousButton.style.display = 'block'
  }
}
