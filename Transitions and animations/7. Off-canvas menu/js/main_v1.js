const button = document.querySelector('button')
const menu = document.querySelector('menu')
const main = document.querySelector('main')
const body = document.body
button.addEventListener('click', function () {
  // menu.classList.toggle('menu-closed')
  // main.classList.toggle('menu-closed')
  body.classList.toggle('menu-closed')
})
