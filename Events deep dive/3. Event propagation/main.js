const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const input = document.querySelector('input')

box1.addEventListener(
  'click',
  e => {
    console.log('box 1 clicked', e.eventPhase)
  },
  true,
)

// Add an event listener in the capturing phase
box2.addEventListener('click', e => {
  console.log('box 2 clicked', e.eventPhase)
})

box3.addEventListener('click', e => {
  console.log('box 3 is clicked', e.eventPhase)
  e.stopPropagation() // This will prevent the other 2 consoles from being logged from box1 and box2 but will log "box 3 is clicked again" if e.stopImmediatePropagation is not present
  e.stopImmediatePropagation() // This will prevent the box 3 from being called again at "box 3 is clicked again" as well as the other 2 consoles from being logged from box1 and box2
})

box3.addEventListener('click', e => {
  console.log('box 3 is clicked again', e.eventPhase)
})

// input is inside the box3
input.addEventListener('click', e => {
  console.log('input is clicked', e.eventPhase)
  e.stopPropagation() // This will prevent logs for box3, box2, box1 from being logged but "input is clicked again" will be logged in e.stopImmediatePropagation is not present
  e.stopImmediatePropagation() // This will prevent logs for box3, box2, box1 and "input is clicked again" from being logged
})

input.addEventListener('click', e => {
  console.log('input is clicked again', e.eventPhase)
})

input.addEventListener('mouseup', e => {
  console.log('mouseup on input', e.eventPhase)
  e.stopPropagation() // Having this here will still run line input because mouseup and click are different events
  e.stopImmediatePropagation() // Having this here will still run line input because mouseup and click are different events
})

box4.addEventListener('click', e => {
  console.log('box 4 is clicked', e.eventPhase)
})

// stopPropagation -> prevents parent elements (bubbling phase) but allows other handlers on the same element to run.
// stopImmediatePropagation -> prevents bubbling and stops the events of the same event type on the same element from running

// Familiarize yourself with the sequence of events that occur.
// Add an event listener in the bubbling phase
// Answer these questions:

// Which phase comes first? The capturing phase or the bubbling phase? Capturing
// What event listeners are fired in the capturing phase? all event listeners with useCapture as true
// What event listeners are fired in the target phase? all event listeners listening to the element
// What event listeners are fired in the bubbling phase? all event listeners with useCapture as false
// How do you stop an event from bubbling? e.stopPropagation()
