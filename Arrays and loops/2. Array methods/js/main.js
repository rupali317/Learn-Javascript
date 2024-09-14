const people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Mahatma Gandhi',
  'Napoleon Bonaparte',
  'Abraham Lincoln',
]

// What is the index of Mahatma Gandhi in this list of people?
const indexOfGandhi = people.indexOf('Mahatma Gandhi')
console.log(`1. Index of Gandhi = ${indexOfGandhi}`)

// Add Winston Churchill and Albert Einstein to the start of the list using unshift and splice
const addedPeopleUnshift = people.slice()
const addedPeopleSpliceStart = people.slice()

addedPeopleUnshift.unshift('Winston Churchill', 'Albert Einstein')
console.log(`2. addedPeopleUnshift = ${addedPeopleUnshift}`)
addedPeopleSpliceStart.splice(0, 0, 'Winston Churchill', 'Albert Einstein')
console.log(`3. addedPeopleSpliceStart = ${addedPeopleSpliceStart}`)

// Add Charles Darwin and Walt Disney to the end of the list using push and splice
const addedPeoplePush = people.slice()
const addedPeopleSpliceEnd = people.slice()

addedPeoplePush.push('Charles Darwin', 'Walt Disney')
console.log(`4. addedPeoplePush = ${addedPeoplePush}`)
addedPeopleSpliceEnd.splice(people.length, 0, 'Charles Darwin', 'Walt Disney')
console.log(`5. addedPeopleSpliceEnd = ${addedPeopleSpliceEnd}`)

// Add Pablo Picasso and Ludwig van Beethoven after Mahatma Gandhi
const addMiddleItem = people.slice()
addMiddleItem.splice(
  indexOfGandhi + 1,
  0,
  'Pablo Picasso',
  'Ludwig van Beethoven',
)
console.log(`6. addMiddleItem = ${addMiddleItem}`)

// Remove Benjamin Franklin and Thomas Edison using shift and splice
const removePeopleShiftStart = people.slice()
const removePeopleSpliceStart = people.slice()

removePeopleShiftStart.shift()
removePeopleShiftStart.shift()
console.log(`7. removePeopleShiftStart = ${removePeopleShiftStart}`)
removePeopleSpliceStart.splice(0, 2)
console.log(`8. removePeopleSpliceStart = ${removePeopleSpliceStart}`)

// Remove Napoleon Bonaparte and Abraham Lincoln using pop and splice
const removePeoplePopEnd = people.slice()
const removePeopleSpliceEnd = people.slice()

removePeoplePopEnd.pop()
removePeoplePopEnd.pop()
console.log(`9. removePeoplePopEnd = ${removePeoplePopEnd}`)
removePeopleSpliceEnd.splice(people.length, 2)
console.log(`10. removePeopleSpliceEnd = ${removePeopleSpliceEnd}`)

// Remove Mahatma Gandhi with splice
const removeGandhiSplice = people.slice()
removeGandhiSplice.splice(3, 1)
console.log(`11. removeGandhiSplice = ${removeGandhiSplice}`)
