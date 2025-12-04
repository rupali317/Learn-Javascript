const arrowfn1 = (param1, param2) =>
  console.log(`arrowfn with 2 parameters:${param1} and ${param2}`)
// const arrowfn1 = (param1, param2) => console.log(arrowfn with 2 parameters:${param1} and ${param2});console.log("hi") // This basically means that console.log is not treated part of the arrow function's body
// const arrowfn1 = (param1, param2) => console.log(arrowfn with 2 parameters:${param1} and ${param2});console.log("hi");return 2 // This return is also not part of the body and hence we get Uncaught SyntaxError: Illegal return statement
// Having a {} means the return will need to mentioned explicitly
const arrowfn3 = _ => console.log(`arrowfn without parameters`)

console.log(arrowfn1(2, 3))
//console.log(arrowfn2(1))
console.log(arrowfn3())

const ten1 = _ => {
  return 10
}
const ten2 = () => 10 // This cannot be const ten2 = () => return 10; return will be treated like unexpected token 'return'. If you need to use return then enclose it within {}

const logger1 = param => console.log(param)
const logger2 = param => {
  return console.log(param)
}

const add1 = (param1, param2) => {
  return param1 + param2
}
const add2 = (param1, param2) => param1 + param2

const multiply1 = (param1, param2) => param1 * param2
const multiply2 = (param1, param2) => {
  return param1 * param2
}

const obj = {
  a: 1,
  b: 2,
}

const objFn1 = _ => ({
  // implicit return for object
  a: 1,
  b: 2, // Instead if this was 'a' then only {a:2} will be considered
})
const objFn2 = _ => {
  // explicit return for object
  return {
    a: 1,
    b: 2,
  }
}
const objFn3 = _ => {
  return obj
}

console.log(ten1())
console.log(ten2())
logger1('Ohhhh yeahhh!')
logger2('Buhhh Byeeee')
console.log(add1(4, 5))
console.log(add2(45, 78))
console.log(multiply1(4, 5))
console.log(multiply2(45, 78))
console.log(objFn1())
console.log(objFn2())
console.log(objFn3())
