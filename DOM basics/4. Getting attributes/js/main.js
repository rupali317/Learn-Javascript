const input = document.querySelector('input')

// Set an attribute with Element.setAttribute
input.setAttribute('type', 'email') // built-in attrinute
input.setAttribute('data-max-age', 100) // customer attribute

// Get an attribute with Element.getAttribute
console.log(input.getAttribute('type'))
console.log(input.getAttribute('data-max-age'))

// Set an attribute with Element.dataset
// input.dataset.type = 'text' --> logged as data-type
input.dataset.maxAge = 110 // logged as data-max-age, MaxAge will be data--max-age, dataMaxAge -> data-data-max-age

// Get an attribute with Element.dataset
console.log(input.dataset.maxAge)
console.log(input.dataset)

// Remove attribute with Element.removeAttribute
input.removeAttribute('type')
input.removeAttribute('data-age-limit')
console.log(input.dataset)
