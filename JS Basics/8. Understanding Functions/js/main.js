console.log(logger('Hello'))
console.log(add(2, 3))
console.log(multiply(2, 3))
console.log(substract(2, 3))

function logger(str) {
  console.log(str)
}

function add(num1, num2) {
  return num1 + num2
}

function substract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

console.log(typeof multiply)

// console.log('-' + funcExp()) //TODO: explore hoising for function and variables
/*
If funcExp is const then console.log(funcExp) and console.log(funcExp()) will throw "Uncaught ReferenceError: Cannot access 'funcExp' before initialization"
If funcExp is var then console.log(funcExp) will undefined. printing funcExp() is liked undefined() = TypeError: funcExp is not a function
 */

const funcExp = function name() {
  // without 'name' it is anonymous function, otheriwse it is a named function
  console.log(typeof name) // accessible here but not outside
  return 'I am a function expression'
}

const callbackname = function () {
  console.log('callback name')
}

console.log(callbackname)

console.log(funcExp())
console.log(funcExp)
/*
ƒ name() {
  // without 'name' it is anonymous function, otheriwse it is a named function
  console.log(typeof name) // accessible here but not outside
  return 'I am a function expression'
}
*/

console.log(multiply)
/* ƒ multiply(num1, num2) {
  return num1 * num2
} */
// console.log(name())
