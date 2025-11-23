const StrVar = 'a string'
console.log(StrVar)

let sum = 0
const num1 = 300
const num2 = 50
sum = num1 + num2
console.log(sum)

console.log('let variable before initialisation = ' + letVar)
console.log('const variable before initialisation = ' + constVar)
console.log('var variable before initialisation = ' + varVar)
let letVar = 0 // not necessary to initialize. If accessed before declaration it leads to reference error because the area from top to the point of declration is Temporal Dead Zone for let and const. let can be reassigned
const constVar = 0 // const needs to be initialised unlike let and var. If accessed before declaration it leads to reference error. const cannot be reassigned
var varVar = 0 // all variables let, const and var are accessed at the top
console.log('let variable after initialisation = ' + letVar)
console.log('const variable after initialisation = ' + constVar)
console.log('var variable after initialisation = ' + varVar)
