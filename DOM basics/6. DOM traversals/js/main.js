// 1. Select .characters with document.querySelector
const characters = document.querySelector('.characters')
console.log('characters', characters) // HTMLDivElements -> HTMLElement -> Element -> Node

// 2. Select .humans from .characters
const humans = characters.querySelector('.humans')
console.log('humans', humans) // HTMLUListElement -> HTMLElement -> Element -> Node

// 3. Select all humans with querySelectorAll, starting from .humans
const allHumans = humans.querySelectorAll('li')
console.log('all humans', allHumans) // NodeList -> each will be HTMLLIElement -> HTMLElement -> Element -> Node

// 4. Select all hobbits with children
const hobbits = document.querySelector('.hobbits').children
console.log('hobbits', hobbits) // HTMLCollection -> each will be HTMLLIElement -> HTMLElement -> Element -> Node

// 5. Select the Merry (the hobbit)
const merry = hobbits[2]
console.log('Merry', merry) // HTMLLIElement -> HTMLElement -> Element -> Node

// 6. Select .elves from Merry
const elves = merry.closest('.characters').children[2]
console.log('Elves', elves) // HTMLUListElement -> HTMLElement -> Element -> Node

// 7. Select Glorfindel from .elves
const glorfindel = elves.children[1]
console.log('glorfindel', glorfindel) // HTMLLIElement -> HTMLElement -> Element -> Node

// 8. Select Elrond from Glorfindel
const elrond = glorfindel.nextElementSibling
console.log('Elrond', elrond) // HTMLLIElement -> HTMLElement -> Element -> Node

// 9. Select Legolas from Glorfindel
const legolas = glorfindel.previousElementSibling
console.log('Legolas', legolas) // HTMLLIElement -> HTMLElement -> Element -> Node

// 10. Select the .characters div from Nazgûl
const enemies = characters.querySelector('.enemies')
const nazgul = enemies.children[1]
const characters2 = nazgul.closest('.characters')
console.log(characters2)
