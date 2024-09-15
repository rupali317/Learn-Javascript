const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

// Loop through the numbers and console.log each number within
console.log('For loop:')
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

console.log('For of loop:')
for (const number of numbers) {
  console.log(number)
}

// Loop through the numbers. If the numbers are greater than 5, console.log them
console.log('For loop:')
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    console.log(numbers[i])
  }
}

console.log('For of loop:')
for (const number of numbers) {
  if (number > 5) {
    console.log(number)
  }
}

// Create a new array. Add all numbers that are greater than 10 into this new array.
// (Hint: You have to loop through the numbers array first)
const newNumbersOne = []
for (const number of numbers) {
  if (number > 10) {
    newNumbersOne.push(number)
  }
}
console.log(`newNumbersOne = ${newNumbersOne}`)

const newNumbersTwo = []
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    newNumbersTwo.push(numbers[i])
  }
}
console.log(`newNumbersTwo = ${newNumbersTwo}`)

// Create a new array. Multiply all numbers by 5 and put them into the new array.
// (Hint: You have to loop through the numbers array first)
const newNumbersThree = []
for (const number of numbers) {
  newNumbersThree.push(number * 5)
}
console.log(`newNumbersThree = ${newNumbersThree}`)

const newNumbersFour = []
for (let i = 0; i < numbers.length; i++) {
  newNumbersFour.push(numbers[i] * 5)
}
console.log(`newNumbersFour = ${newNumbersFour}`)
