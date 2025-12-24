const button = document.querySelector('button')

button.addEventListener('click', () => {
  button.style.color = 'red'
  button.style.backgroundColor = 'blue'
  button.style.width = '40px'
  button.style.height = '10px'
  // button.style.setProperty('color', 'red')
  // button.style.setProperty('background-color', 'blue')
  // button.style.setProperty('width', '40px')
  // button.style.setProperty('height', '20px')
})
