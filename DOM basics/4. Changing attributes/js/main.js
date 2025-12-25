const input = document.querySelector('input')

// Set an attribute with Element.setAttribute
input.setAttribute('placeholder', 'enter...')
input.setAttribute('data-color', 'red')
input.setAttribute('max', 100)

// Get an attribute with Element.getAttribute
console.log(input.getAttribute('data-color')) // red
console.log(input.getAttribute('data-max')) // null
console.log(input.getAttribute('placeholder')) // enter...

// Set an attribute with Element.dataset
input.dataset.min = 0 // logged as data-min="0"
input.dataset.favoriteColor =
  'yellow' /* If input.dataset.FavoriteColor it shows data--favorite-color -> They capital "C" becomes -c, 
the first letter -> will always have "-", F = -f so the double --f */ // logged as data-favorite-color="yellow"

// Get an attribute with Element.dataset
console.log(input.dataset.favoriteColor) // yellow
console.log(input.dataset.color) // red

// Remove attribute with Element.removeAttribute
input.removeAttribute('data-color')
input.removeAttribute('max')
