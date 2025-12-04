sayMyName()

// console.log("var variable a before declaration = " + c);

// 1. With var
console.log('var variable a before declaration = ' + a)
var a = 9
console.log('var variable a after declaration = ' + a)

// 2. With const
// console.log("const b before declaration = " + b); // Uncaught ReferenceError: Cannot access 'b' before initialization
const b = 10 // line 1 to 11 is the TDZ
console.log('const b after declaration = ' + b)

// 3. With let
// console.log("let c before declaration = " + c);
let c = 11 // line 1 to 16 is the TDZ
console.log('let c after declaration = ' + c)

sayMyName()

function sayMyName() {
  console.log('The function says my name')
}
console.log('sayMyNameExp = ' + sayMyNameExp) // Uncaught ReferenceError: Cannot access 'sayMyNameExp' before initialization only if declared as const. If var then it is undefined

var sayMyNameExp = function () {
  console.log('It is an expression function')
}
sayMyNameExp()
sayMyName()
