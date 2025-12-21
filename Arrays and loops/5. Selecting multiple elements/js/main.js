// 1. Select all good guys with attributes
const AllGoodGuys = document.querySelectorAll("[data-type='good-guy']")
console.log(AllGoodGuys)

// 2. Give good guys a yay class
AllGoodGuys.forEach(GoodGuy => GoodGuy.classList.add('yay'))

// 3. Select all villains with attributes
const AllVillains = document.querySelectorAll("[data-type='villain']")
console.log(AllVillains)

// 4. Give villains a nay class
AllVillains.forEach(villain => villain.classList.add('nay'))

// 5. Select all characters through the character class
const AllCharacters = document.querySelectorAll('.character')
console.log(AllCharacters)

// 6. Give all characters a star-wars class
AllCharacters.forEach(character => character.classList.add('star-wars'))
