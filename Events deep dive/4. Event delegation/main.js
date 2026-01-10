const list = document.querySelector('ul')
const button = document.querySelector('button')

list.addEventListener('click', e => {
  console.log('list clicked')
  console.log('e.target = ', e.target) // returns the element where the event occurs
  console.log('e.currentTarget = ', e.currentTarget) // returns wthe element where the event listener is attached
  if (e.target.matches('li')) console.log(e.target)
})

list.addEventListener('click', e => {
  if (e.target.closest('ul')) {
    console.log('it is ul')
  }
})

button.addEventListener('click', logging)

function logging(e) {
  console.log(e.target) // will log button htmlbuttonelement since css has pointer-event set as none. without none it may print svg or the text depending on where we are clicking
}
