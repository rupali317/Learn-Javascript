const button = document.querySelector('button')

button.addEventListener('click', () => {
  button.style.backgroundColor = 'red'
})

button.addEventListener('click', () => {
  button.style.color = 'green'
})

button.addEventListener('click', changeColor)

button.addEventListener('click', e => {
  console.log(this)
  console.log(e)
  console.log(e.currentTarget)
  console.log('Button clicked')
})

function changeColor(e) {
  console.log(this)
  console.log(e)
  console.log(e.currentTarget)
  button.style.color = 'blue'
}

const inputElement = document.querySelector('input')
inputElement.addEventListener('click', e => {
  console.log('arrow function')
  console.log(this) // arrow function -> global this
  console.log(e.currentTarget)
})

inputElement.addEventListener('click', function (e) {
  console.log('normal function = ')
  console.log(this) // normal function, this will be the input
})
