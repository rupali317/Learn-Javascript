const Button = document.querySelector('button')
const NavBar = document.querySelector('nav')
const Main = document.querySelector('main')

Button.addEventListener('click', () => {
  NavBar.classList.toggle('push-offsite')
  Main.classList.toggle('push-offsite')
  Button.classList.toggle('push-offsite')
})
