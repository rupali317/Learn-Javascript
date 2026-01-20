// Adding/Removing a class to button via javascript
const button = document.querySelector('button')

button.addEventListener('click', () => {
  button.classList.toggle('is-active')
})
