const nextButton = document.querySelector('#js-next-button')
const previousButton = document.querySelector('#js-previous-button')
const carouselContents = document.querySelector('.carousel__contents')

nextButton.addEventListener('click', () => {
  const currentContent = carouselContents.querySelector('.is-selected')
  const nextContent = currentContent.nextElementSibling
  const updatedLeftPosition = '-' + getComputedStyle(nextContent).left
  currentContent.style.left = updatedLeftPosition
  nextContent.style.left = '0px'
  currentContent.classList.remove('is-selected')
  nextContent.classList.add('is-selected')
  previousButton.removeAttribute('hidden') // hidden is like display:none -> it won't be visible in document
  if (!nextContent.nextElementSibling) {
    nextButton.setAttribute('hidden', true)
  }
})

previousButton.addEventListener('click', () => {
  const currentContent = carouselContents.querySelector('.is-selected')
  const previousContent = currentContent.previousElementSibling
  const updatedLeftPosition = getComputedStyle(previousContent).left
  currentContent.style.left = updatedLeftPosition
  previousContent.style.left = '0px'
  currentContent.classList.remove('is-selected')
  previousContent.classList.add('is-selected')
  nextButton.removeAttribute('hidden')
  if (!previousContent.previousElementSibling) {
    previousButton.setAttribute('hidden', true)
  }
})
