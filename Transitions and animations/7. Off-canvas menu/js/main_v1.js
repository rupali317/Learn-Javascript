const button = document.querySelector('button')
const menu = document.querySelector('menu')
button.addEventListener('click', function () {
  menu.classList.toggle('menu-closed')
})
