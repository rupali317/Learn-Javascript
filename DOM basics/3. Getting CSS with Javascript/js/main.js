// What’s the difference between the values of these properties?

const divElement = document.querySelector('div')

console.log(divElement.style.color) // red
console.log(divElement.style.backgroundColor) // white
console.log(divElement.style.fontSize) // 5em

const style = getComputedStyle(divElement)
console.log(style.color) // rgb(255, 0, 0)
console.log(style.backgroundColor) // rgb(255, 255, 255)
console.log(style.fontSize) // 80px
