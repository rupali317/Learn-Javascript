const buttonOne = document.querySelector('#button-one')
const buttonTwo = document.querySelector('#button-two')
const buttonThree = document.querySelector('#button-three')
const buttonFour = document.querySelector('#button-four')
const buttonFive = document.querySelector('#button-five')

// Use transitionend to remove elements when their transition is completes.

buttonOne.addEventListener('transitionend', () => {
  buttonOne.remove()
})

buttonTwo.addEventListener('transitionend', () => {
  buttonTwo.remove()
})

buttonThree.addEventListener('transitionend', () => {
  console.log('Button three is removed') // will be logged 4 times since this is about the borders on all 4 directions
  buttonThree.remove()
})

buttonFour.addEventListener('animationend', () => {
  buttonFour.remove()
})

buttonFive.addEventListener('animationend', () => {
  buttonFive.remove()
})
