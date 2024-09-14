const Button = document.querySelector('button')
const NavBar = document.querySelector('nav')

Button.addEventListener('click', () => {
  NavBar.classList.toggle('hidden')
})
