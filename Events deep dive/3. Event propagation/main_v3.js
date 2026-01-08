const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')

box1.addEventListener('click', e => console.log('box1 clicked', e.eventPhase))

box2.addEventListener('click', e => console.log('box2 clicked', e.eventPhase))

box3.addEventListener('click', e => console.log('box3 clicked', e.eventPhase))
box3.addEventListener(
  'click',
  e => console.log('box3 clicked again', e.eventPhase), // "box3 clicked again" will always be logged after the "box3 clicked" because it is defined later
)

box4.addEventListener('click', e => console.log('box4 clicked', e.eventPhase))

/*
NOTES on e.eventPhase:
1 = capturing 
2 = target
3 = bubbling

when usecapture argument is false or left blank then when you click on a child box, bubbling will occur from child to parent
usecapture = false means callback is not called during the capture phase

when you click on box 4, the output will be:
box4 clicked 2
box3 clicked 3
box2 clicked 3
box1 clicked 3

when you click on box 3, the output will be:
box3 clicked 2
box2 clicked 3
box1 clicked 3

*/
