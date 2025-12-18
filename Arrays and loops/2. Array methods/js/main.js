const people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Mahatma Gandhi',
  'Napoleon Bonaparte',
  'Abraham Lincoln',
]

// What is the index of Mahatma Gandhi in this list of people?

// Add Winston Churchill and Albert Einstein to the start of the list using unshift and splice

// Add Charles Darwin and Walt Disney to the end of the list using push and splice

// Add Pablo Picasso and Ludwig van Beethoven after Mahatma Gandhi

// Remove Benjamin Franklin and Thomas Edison using shift and splice

// Remove Napoleon Bonaparte and Abraham Lincoln using pop and splice

// Remove Mahatma Gandhi with splice

// Insert at the beg
const arr_1 = [3, 4, 5, 6, 7, 8]
const len_1 = arr_1.unshift(...[2, 3, 1]) // valid [2, 3, 1, 3, 4, 5, 6, 7, 8]; length = 9
console.log('arr_1 = ', arr_1, 'len_1 = ', len_1)
const len_2 = arr_1.unshift([2, 3, 1]) // valid [[2, 3, 1], 2, 3, 1, 3, 4, 5, 6, 7, 8]; length = 10
console.log('arr_1 = ', arr_1, 'len_2 = ', len_2)
const len_3 = arr_1.unshift(1, 2, 3) // valid [1, 2, 3, [2, 3, 1], 2, 3, 1, 3, 4, 5, 6, 7, 8]; length = 13
console.log('arr_1 = ', arr_1, 'len_3 = ', len_3)
const item_removed_1 = arr_1.shift()
console.log('arr_1 = ', arr_1, 'item_removed_1 = ', item_removed_1)
const item_removed_2 = arr_1.shift()
console.log('arr_1 = ', arr_1, 'item_removed_2 = ', item_removed_2)

// Insert at the end
const arr_2 = [3, 4, 5, 6, 7, 8]
const len_4 = arr_2.push(2, 3, 4) // [3, 4, 5, 6, 7, 8, 2, 3, 4]
console.log('arr_2 = ', arr_2, 'len_4 = ', len_4)
const len_5 = arr_2.push([2, 3, 4]) // [3, 4, 5, 6, 7, 8, 2, 3, 4, [2, 3, 4]]
console.log('arr_2 = ', arr_2, 'len_5 = ', len_5)
const len_6 = arr_2.push(...[2, 3, 4]) // [3, 4, 5, 6, 7, 8, 2, 3, 4, [2, 3, 4], 2, 3, 4]
console.log('arr_2 = ', arr_2, 'len_6 = ', len_6)
const item_removed_3 = arr_2.pop()
console.log('arr_2 = ', arr_2, 'item_removed_3 = ', item_removed_3)
const item_removed_4 = arr_2.pop()
console.log('arr_2 = ', arr_2, 'item_removed_4 = ', item_removed_4) // [3, 4, 5, 6, 7, 8, 2, 3, 4, [2, 3, 4], 2]

// Insert in the middle
console.log(arr_2.splice(1, 2, 67, 78)) // returns [4, 5]
console.log(arr_2) // [3, 67, 78, 6, 7, 8, 2, 3, 4, [2, 3, 4], 2]

/**
 * Challenge 5:
javascript
const items = ['x', 'y', 'z'];
const result = items.splice(0);
// What is items? What is result?

Challenge 6 (Tricky edge case):
javascript
const arr = [100, 200, 300, 400];
arr.splice(5, 1, 'new');
// What is arr now?
 */
