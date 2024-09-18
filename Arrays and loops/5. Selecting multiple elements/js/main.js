// 1. Select all good guys with attributes
const AllGoodGuys = document.querySelectorAll('[data-type="good-guy"]')

// 2. Give good guys a yay class
AllGoodGuys.forEach(goodGuy => goodGuy.classList.add('yay'))
console.log(AllGoodGuys)

// 3. Select all villains with attributes
const AllVillains = document.querySelectorAll('[data-type="villain"]')

// 4. Give villains a nay class
AllVillains.forEach(villain => villain.classList.add('nay'))
console.log(AllVillains)

// 5. Select all characters through the character class
const AllCharacters = document.querySelectorAll('.character')

// 6. Give all characters a star-wars class
AllCharacters.forEach(character => character.classList.add('star-wars'))
console.log(AllCharacters)
