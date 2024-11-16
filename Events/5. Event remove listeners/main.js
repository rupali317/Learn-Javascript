const button = document.querySelector('button')

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
