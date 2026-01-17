// Start writing JavaScript here!
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const carouselDots = document.querySelector('.carousel__dots')
const firstCarouselDot = carouselDots.querySelectorAll('.carousel__dot')[0]
const carouselContents = document.querySelector('.carousel__contents')
const firstSlide = carouselContents.querySelectorAll('.carousel__slide')[0]

loadInitialState()

prevBtn.addEventListener('click', () => {
  // 1. The next btn is shown
  // 2. The shift of the carousel image takes place
  // 3. Check if the prev btn needs to be hidden
})

nextBtn.addEventListener('click', () => {
  // 1. The prev btn is shown
  // 2. The shift of the carousel image takes place
  // 3. Check if the next btn needs to be hidden
})

carouselDots.addEventListener('click', e => {
  // 1. That dot that is selected will be "selected" and other dot will be deselected
  // 2. The corresponding slide will be shown
})

function loadInitialState() {
  prevBtn.setAttribute('hidden', true)
  firstCarouselDot.classList.add('is-selected')
  firstSlide.classList.add('is-selected')
}
