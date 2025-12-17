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

// Insert at the beg
const arr_1 = [3, 4, 5, 6, 7, 8]
const len_1 = arr_1.unshift(...[2, 3, 1]) // valid [2, 3, 1, 3, 4, 5, 6, 7, 8]; length = 9
console.log('arr_1 = ', arr_1, 'len_1 = ', len_1)
const len_2 = arr_1.unshift([2, 3, 1]) // valid [[2, 3, 1], 2, 3, 1, 3, 4, 5, 6, 7, 8]; length = 10
console.log('arr_1 = ', arr_1, 'len_2 = ', len_2)
const len_3 = arr_1.unshift(1, 2, 3) // valid [1, 2, 3, [2, 3, 1], 2, 3, 1, 3, 4, 5, 6, 7, 8]; length = 13
console.log('arr_1 = ', arr_1, 'len_3 = ', len_3)

// Insert at the end
const arr_2 = [3, 4, 5, 6, 7, 8]
const len_4 = arr_2.push(2, 3, 4) // [3, 4, 5, 6, 7, 8, 2, 3, 4]
console.log('arr_2 = ', arr_2, 'len_4 = ', len_4)
const len_5 = arr_2.push([2, 3, 4]) // [3, 4, 5, 6, 7, 8, 2, 3, 4, [2, 3, 4]]
console.log('arr_2 = ', arr_2, 'len_5 = ', len_5)
const len_6 = arr_2.push(...[2, 3, 4]) // [3, 4, 5, 6, 7, 8, 2, 3, 4, [2, 3, 4], 2, 3, 4]
console.log('arr_2 = ', arr_2, 'len_6 = ', len_6)
