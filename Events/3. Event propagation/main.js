const boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
  box.addEventListener('click', e => {
    console.log(e.eventPhase + '' + e.currentTarget)
  })
})

// boxes.forEach(box => {
//   box.addEventListener(
//     'click',
//     e => {
//       console.log(e.eventPhase + '' + e.currentTarget)
//     },
//     true,
//   )
// })
