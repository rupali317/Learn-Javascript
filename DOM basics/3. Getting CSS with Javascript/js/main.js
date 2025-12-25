// Difference between style property and getComputedStyle
// 1. Editing via style object is possible but editing via getComputedStyle is not
// 2. style object is for inline style and if an inline style is not present then style object's
// property (eg element.style.fontColor) will be '', for css in separate file, we use getComputedStyle
// 3. The values in properties of style object will be presented as it is. For getComputedStyle relative units get converted to absolute ones such as rem to px

const container = document.querySelector('div')
const paragraph = document.querySelector('p')

// Get styles with style object
console.log(container.style.fontSize) // 5em
console.log(container.style.backgroundColor) // white
console.log(container.style.color) // red

// Get styles with getComputedStyle
const computedStyle = getComputedStyle(container)
console.log(computedStyle.fontSize) // 80px
console.log(computedStyle.backgroundColor) // rgb(255, 255, 255)
console.log(computedStyle.color) // rgb(255, 0, 0)

// Further experiments with <p> element
console.log(paragraph.textContent) // shows just the text in <p> and not part of pseudo element
pseudoElementComputedStyle = getComputedStyle(paragraph, '::before')
console.log(pseudoElementComputedStyle.color) // rgb(0, 0, 255)
console.log(pseudoElementComputedStyle.content) // shows "before paragraph text"
