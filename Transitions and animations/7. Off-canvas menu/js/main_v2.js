const button = document.querySelector('button')
const body = document.body
button.addEventListener('click', function () {
  body.classList.toggle('menu-closed')
})
