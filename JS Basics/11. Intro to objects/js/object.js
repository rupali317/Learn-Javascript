const obj = {
  '1property': 34,
  'First name': 'Zell',
  valid_property: false,
}

console.log(obj.valid_property)
console.log(obj[`1property`])
console.log(obj[`First name`])
// console.log(obj.1property)  // invalid because the propety name starts with a num
// console.log(obj.First name) //invalid because the property has a space

const propertyToGet = 'valid_property'
console.log(obj[propertyToGet])
console.log(obj.propertyToGet) // undefined

obj['Last name'] = 'Liew'
obj.age = 89

delete obj.age

console.log(obj)

const new_obj = {
  name: 'Songbird',
  released_on: 1987,
  artist: 'Weeknd',
  playMusic: function () {
    console.log('playing a music')
  },
}

console.log(new_obj.name)
console.log(new_obj.real)
new_obj.playMusic()
new_obj['playMusic']()

// 1 . Make an empty object
const obj1 = {}
console.log(obj1)

const obj2 = {
  color: 'brown',
  'Place of residence': 'Singapore',
}

console.log(obj2.color)
console.log(obj2['Place of residence'])

obj2.dob = '12/1/1908'
obj2['Full name'] = 'Rhonda Roy'

obj2.playSound = function () {
  console.log('Play a sound')
}

obj2.playSound()

obj2.markSound = function (param1) {
  console.log(`mark the sound ${param1}`)
}

obj2.markSound('wheeeee!!!')

console.log(obj2)

function newFn() {
  g: 8 // invalid
  console.log('New function')
}

newFn()
console.log(newFn)
newFn.age = 54
console.log(newFn.age)
console.log('mewFn.g = ' + newFn.g) // undefined

newFn.new_method = function () {
  console.log("A function's method because function is an object")
}

console.log(newFn.new_method())
