const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]

// Loop through the numbers and console.log each number within
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

for (let number of numbers) {
  console.log(number)
}

// Loop through the numbers. If the numbers are greater than 5, console.log them
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5) {
    console.log(numbers[i])
  }
}

for (let number of numbers) {
  if (number > 5) {
    console.log(number)
  }
}

// Create a new array. Add all numbers that are greater than 10 into this new array.
// (Hint: You have to loop through the numbers array first)
const arr_1 = []
const arr_2 = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    arr_1.push(numbers[i])
  }
}
console.log('arr_1 = ', arr_1)

for (let number of numbers) {
  if (number > 10) {
    arr_2.splice(arr_2.length, 0, number)
  }
}
console.log('arr_2 = ', arr_2)

// Create a new array. Multiply all numbers by 5 and put them into the new array.
// (Hint: You have to loop through the numbers array first)
const arr_3 = []
const arr_4 = []

for (let i = 0; i < numbers.length; i++) {
  arr_3.push(numbers[i] * 5)
}
console.log('arr_3 = ', arr_3)

for (let number of numbers) {
  arr_4.splice(arr_4.length, 0, number * 5)
}
console.log('arr_3 = ', arr_4)
