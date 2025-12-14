function sum(a, b, print) {
  console.log('print = ', print) /* print = ƒ printResult(sum) {
    console.log('sum = ' + sum)
  } */
  const sum = a + b
  print(sum) // If sum(2, 3, printResult()) then print = undefined, error -> print is not a function
}

function printResult(sum) {
  console.log('sum = ' + sum)
}
console.log('printResult = ', printResult) /*printResult = ƒ printResult(sum) {
  console.log('sum = ' + sum)
} */
sum(2, 3, printResult) // printResult is the callback and the sum is the callbackaccepting function, which executes the callback

const button = document.querySelector('button')
button.addEventListener('click', function () {
  // It seems that it is ok to have the anonymous function as "function btn()" as well
  console.log('Button clicked')
})

function callback() {
  console.log('callback')
}

button.addEventListener('click', callback) // if you have it as "call", error -> call is not defined.
/* If callback() is used here then the function is called immediately and only the "button clicked" 
is called and callback is not called amymore */

/* When you write button.addEventListener('click', callback), JavaScript 
looks up the value of the variable callback and passes that function reference to addEventListener.
// Translation: "callback() executes NOW, result (undefined) goes to listener"
// Click does nothing because undefined isn't a function! */

/* 
Your original code: javascript
function callback() {
  // do something
}

button.addEventListener('click', callback)
This uses function declaration syntax, which:

Creates a function named callback

Makes callback available in the current scope

Function declarations are hoisted (can be used before they're defined in the code) 

function declaration called callback is declared and it is used in the argumeny of the addEventListener, which will be executed 
on click of the function
*/

function callBackAcceptingFunction(callback) {
  console.log('callback inside callBackAcceptingFunction = ', callback)
  callback(2, 3)
}

function callback_print(param1, param2) {
  console.log('param1 = ', param1, 'param2 = ', param2)
}
console.log('callback_print =', callback_print)
console.log('callback outside callBackAcceptingFunction = ', callback)
callBackAcceptingFunction(callback_print)
