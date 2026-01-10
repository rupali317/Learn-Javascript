const button = document.querySelector('button')
const input = document.querySelector('input')

// button.addEventListener('click', () => {
//   console.log('Button is clicked')
// })

// button.removeEventListener('click', () => {
//   console.log('Button is clicked')
// })
let count = 5

button.addEventListener('click', logging)

function logging() {
  if (count > 0) {
    console.log('Button is clicked')
    count--
  }
  if (count === 0) button.removeEventListener('click', logging)
}

/* For callback to run only once, in the callback remove the event listene */
input.addEventListener('click', inputCallback)

function inputCallback(e) {
  console.log(e.currentTarget)
  e.currentTarget.removeEventListener('click', inputCallback)
}
