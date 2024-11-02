const link = document.querySelector('a')
const checkbox = document.querySelector('input')

link.addEventListener('click', e => {
  console.log(e.defaultPrevented) // is false
  e.preventDefault()
  console.log(e.defaultPrevented) // is true
})

checkbox.addEventListener('click', e => {
  console.log(e.defaultPrevented)
  e.preventDefault()
  console.log(e.defaultPrevented)
})
