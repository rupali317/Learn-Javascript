const buttonOne = document.querySelector('#button-one')
const buttonTwo = document.querySelector('#button-two')
const buttonThree = document.querySelector('#button-three')
const buttonFour = document.querySelector('#button-four')
const buttonFive = document.querySelector('#button-five')

// Use transitionend to remove elements when their transition is completes.

buttonOne.addEventListener('transitionend', () => {
  buttonOne.remove() // removed from the DOM
})

buttonTwo.addEventListener('transitionend', () => {
  buttonTwo.setAttribute('style', 'display:none') // remains in the DOM
})

buttonThree.addEventListener('transitionend', () => {
  console.log('Button three is removed') // will be logged 4 times since this is about the borders on all 4 directions
  buttonThree.remove()
})

buttonThree.addEventListener('click', () => {
  buttonThree.classList.add('is-highlighted')
})

buttonFour.addEventListener('animationend', () => {
  buttonFour.remove()
})

buttonFive.addEventListener('animationend', () => {
  buttonFive.remove()
})

document.addEventListener('transitionend', e => {
  console.log('transition e.target', e.target) // e is TransitionEvent
  console.log('transition e.propertyName', e.propertyName) // The property that was transitioned
  // e will print all properties that are transitioned like color, border-bottom-width, border-left-width, border-right-width, border-top-width
})

document.addEventListener('animationend', e => {
  console.log('animation e.target', e.target) // e is AnimationEvent
  console.log('animation e.propertyName', e.animationName)
})
