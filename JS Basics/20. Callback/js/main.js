function sum(a, b, print) {
  const sum = a + b
  print(sum)
}

function printResult(sum) {
  console.log('sum = ' + sum)
}

sum(2, 3, printResult)
