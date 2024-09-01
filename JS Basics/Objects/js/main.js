// 1. Make an empty object.
const song = {}
console.log(song)

// 2. Make a property for your object that can be accessed with a dot notation. Get the value of this property.
song.name = 'Desire'
console.log(song.name)

// 3. Make a property for your object that can only be accessed with the bracket notation. Get the value of this property.
song['Release date'] = 2020
console.log(song['Release date'])

// 4. Set the value of a property with the dot notation.
song.name = 'Keep holding on'
console.log(song.name)

// 5. Set the value of a property with the square bracket notation.
song['Release date'] = 2016
console.log(song['Release date'])

// 6. Make a method. Call this method.
song.playMusic = function () {
  console.log('Music played!')
}
song.playMusic()

// 7. Make a method that takes in an argument. Call this method.
song.stopMusic = function (name) {
  console.log(`${name} is stopped`)
}

song.stopMusic('Keep holding on')
