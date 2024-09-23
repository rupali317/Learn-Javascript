// 1. Select .characters with document.querySelector
const allCharacters = document.querySelector('.characters')
console.log(allCharacters)

// 2. Select .humans from .characters
const humans = allCharacters.querySelector('.humans')
console.log(humans)

// 3. Select all humans with querySelectorAll, starting from .humans
const allHumans = humans.querySelectorAll('li')
console.log(allHumans)

// 4. Select all hobbits with children
const allHobbits = allCharacters.querySelector('.hobbits').children
console.log(allHobbits)

// 5. Select the Merry (the hobbit)
const merry = allHobbits[2]
console.log(merry)

// 6. Select .elves from Merry
const elves = merry.closest('.characters').children[2]
console.log(elves)

// 7. Select Glorfindel from .elves
const glorfindel = elves.children[1]
console.log(glorfindel)

// 8. Select Elrond from Glorfindel
const elrond = glorfindel.nextElementSibling
console.log(elrond)

// 9. Select Legolas from Glorfindel
const legolas = glorfindel.previousElementSibling
console.log(legolas)

// 10. Select the .characters div from Nazgûl
const nazgul = allCharacters.querySelector('.enemies').children[1]
const characters = nazgul.closest('.characters')
console.log(characters)
