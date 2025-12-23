const unorderedList = document.querySelector('ul')
const paragraph = unorderedList.querySelector('p')

console.log(paragraph.parentElement)
console.log(paragraph.textContent) // textcontent print sthe text inside as well as the descendant's text
console.log(unorderedList.textContent)
