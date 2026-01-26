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

buttonThree.addEventListener('transitionend', e => {
  console.log('Button three is removed') // will be logged 4 times since this is about the borders on all 4 directions - if the buttonThree.remove() is not present
  buttonThree.remove()
}) // It runs first because event will bubble up

/*
I mean now with color and border are ending their animation after 1s. I notice that 
the this is called 5 times: buttonThree.addEventListener('transitionend', e => { console.log('Button three is removed') buttonThree.remove() }) 
but document.addEventListener('transitionend', e => { console.log('transition e.target', e.target) 
/ console.log('transition e.propertyName', e.propertyName) }) is called once. I thought buttonThree.addEventListe.., 
should be called once especially after encountering buttonThree.remove

JS event loop starts processing:

First event → your handler runs → remove()

Second event → still runs (already queued!)

Third event → still runs

Fourth event → still runs

Cleanup event → still runs

🧠 Critical principle

Removing a DOM node does NOT cancel already-dispatched events.

Events already queued will still run on that node object.

❓ Then why does document only fire once?

Because bubbling happens at dispatch time, not when queued.

Once the element is removed:

It is no longer in the DOM tree

So bubbling path is broken

Remaining queued events cannot bubble to document

*/
