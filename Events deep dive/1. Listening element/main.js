const button = document.querySelector('button')

button.addEventListener('click', () => {
  console.log('button.style = ')
  console.log(button.style)
  button.style.backgroundColor = 'red'
})

button.addEventListener('click', () => {
  button.style.color = 'green'
})

button.addEventListener('click', changeColor)

button.addEventListener('click', e => {
  console.log('arrow function = ')
  console.log(this)
  console.log('arrow function = ')
  console.log(e)
  console.log('arrow function = ')
  console.log(e.currentTarget)
  console.log('Button clicked')
})

function changeColor(e) {
  console.log('change color function = ')
  console.log(this)
  console.log('change color function = ')
  console.log(e)
  console.log('change color function = ')
  console.log(e.currentTarget)
  button.style.color = 'blue'
}

const inputElement = document.querySelector('input')
inputElement.addEventListener('click', e => {
  console.log('input element arrow function = ')
  console.log(this) // arrow function -> global this
  console.log(e.currentTarget)
})

inputElement.addEventListener('click', function (e) {
  console.log('input element normal function = ')
  console.log(this) // normal function, this will be the input
})

const changeInputColor = e => {
  console.log('input element arrow function changeInputColor = ')
  console.log(this) // arrow function -> global this
  console.log(e.target)
  e.target.style.backgroundColor = 'yellow'
}

inputElement.addEventListener('click', changeInputColor)
