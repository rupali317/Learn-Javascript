const link = document.querySelector('a')
const checkbox = document.querySelector('input')

link.addEventListener('click', e => {
  console.log(e.defaultPrevented) // is false
  e.preventDefault() // when default action is prevented, browsers set the defaultPrevented property to true
  console.log(e.defaultPrevented) // is true. After this, the link's default action of navigating to google.com will not happen
})

checkbox.addEventListener('click', e => {
  console.log(e.defaultPrevented)
  e.preventDefault()
  console.log(e.defaultPrevented) // After this, the default action of checking will not work
})
