const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')

box1.addEventListener(
  'click',
  e => console.log('box1 clicked', e.eventPhase),
  true,
)

box2.addEventListener(
  'click',
  e => console.log('box2 clicked', e.eventPhase),
  true,
)

box3.addEventListener(
  'click',
  e => console.log('box3 clicked', e.eventPhase),
  true,
)

box3.addEventListener(
  'click',
  e => console.log('box3 clicked again', e.eventPhase),
  true,
)

box4.addEventListener(
  'click',
  e => console.log('box4 clicked', e.eventPhase),
  true,
)

/*
NOTES on e.eventPhase:
1 = capturing 
2 = target
3 = bubbling

when usecapture argument is true then when you click on a child box, capturing will occur from parent to child
usecapture = true means callback is called during the capture phase

Mouse event bubbles but not focus event (practically it does not make sense to bubble focus event since this will create
infine focus up to the parent)
MouseEvent (only mouse) is a subset of PointervEvent (mouse, pen, touch)

when you click on box 4, the output will be:
box1 clicked 1
box2 clicked 1
box3 clicked 1
box4 clicked 2

when you click on box 3, the output will be:
box1 clicked 1
box2 clicked 1
box3 clicked 2

*/
