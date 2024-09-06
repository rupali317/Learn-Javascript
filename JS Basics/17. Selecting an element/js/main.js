// 1. Get the #star-wars-characters list with id and tag selectors.
const starWarsCharactersListId = document.querySelector('#star-wars-characters')
console.log(starWarsCharactersListId)

const starWarsCharactersListTag = document.querySelector('ul')
console.log(starWarsCharactersListTag)

// 2. From the #star-wars-characters list, get the following:
// a. Luke Skywalker with class, tag and attribute selectors
// b. Yoda with class and attribute selectors
// c. Darth Vader with class and attribute selectors
const LukeClass = starWarsCharactersListId.querySelector('.luke')
console.log(LukeClass)

const LukeTag = starWarsCharactersListId.querySelector('li')
console.log(LukeTag)

const LukeAttribute =
  starWarsCharactersListId.querySelector('[data-type="hero"]')
console.log(LukeAttribute)

const YodaClass = starWarsCharactersListId.querySelector('.yoda')
console.log(YodaClass)

const YodaAttribute = starWarsCharactersListId.querySelector(
  '[data-type="master"]'
)
console.log(YodaAttribute)

const DartVaderClass = starWarsCharactersListId.querySelector('.badboy')
console.log(DartVaderClass)

const DartVaderAttribute = starWarsCharactersListId.querySelector(
  '[data-type="villain"]'
)
console.log(DartVaderAttribute)

// 3. Notice how you can’t select Yoda and Darth Vader with tags when you use querySelector.
