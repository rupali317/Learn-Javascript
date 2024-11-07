const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')

box1.addEventListener('click', () => {
  console.log('box 1 clicked')
})

// Add an event listener in the capturing phase
box2.addEventListener(
  'click',
  () => {
    console.log('box 2 clicked')
  },
  true,
)

box3.addEventListener('click', e => {
  console.log('box 3 is clicked')
  e.stopPropagation() // This will prevent the other 2 consoles from being logged
  e.stopImmediatePropagation() // This will prevent the box 3 from being called again at line 25
})

box3.addEventListener('click', () => {
  console.log('box 3 is clicked again')
})

box4.addEventListener('click', () => {
  console.log('box 4 is clicked')
})

// Familiarize yourself with the sequence of events that occur.

// Add an event listener in the bubbling phase
// Answer these questions:

// Which phase comes first? The capturing phase or the bubbling phase? Capturing
// What event listeners are fired in the capturing phase? all event listeners with useCapture as true
// What event listeners are fired in the target phase? all event listeners listening to the element
// What event listeners are fired in the bubbling phase? all event listeners with useCapture as false
// How do you stop an event from bubbling? e.stopPropagation()
