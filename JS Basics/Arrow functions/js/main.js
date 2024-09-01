// 1. Make a function named ten that takes in zero arguments and return the value 10. Try using both () and _ syntax.
const tenWithUnderscore = _ => 10

const tenWithBraces = () => 10

// 2. Make a function named logger that takes in one argument. It logs the argument you passed into it. Try it with and without parenthesis ().
const loggerWithoutBraces = arg => console.log(arg)

const loggerWithBraces = arg => console.log(arg)

// 3. Make a function called add that adds two numbers together. Try it with and without implicit returns.
const addWithImplicitReturn = (num1, num2) => num1 + num2

const addWithoutImplicitReturn = (num1, num2) => {
  return num1 + num2
}

// 4. Make a function called multiply that multiplies two numbers together. Try it with and without implicit returns.
const multiplyWithImplicitReturn = (num1, num2) => num1 * num2

const multiplyWithoutImplicitReturn = (num1, num2) => {
  return num1 * num2
}

tenWithUnderscore()
tenWithBraces()
loggerWithoutBraces()
loggerWithBraces()
console.log(addWithImplicitReturn(2, 3))
console.log(addWithoutImplicitReturn(3, 8))
console.log(multiplyWithImplicitReturn(2, 3))
console.log(multiplyWithoutImplicitReturn(6, 7))
