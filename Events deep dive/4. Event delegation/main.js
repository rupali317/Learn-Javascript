const list = document.querySelector('ul')
const button = document.querySelector('button')

list.addEventListener('click', e => {
  if (e.target.matches('li')) console.log(e.target)
  //console.log(e.target) // will log other like li, a, ul
})

list.addEventListener('click', e => {
  if (e.target.closest('ul')) {
    console.log('it is ul')
  }
})

button.addEventListener('click', logging)

function logging(e) {
  console.log(e.target)
}
