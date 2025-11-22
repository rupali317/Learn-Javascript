// 1. Create a String and console.log it.

// 2. Add two strings together.

// 3. Create a Number and console.log it.

// 4. Add 27 and 73.

// 5. Subtract 30 from 50.

// 6. Multiply 5 and 10.

// 7. Divide 100 by 10.

// 8. Get the remainder of 500 divided by 3.

// 9. Create a Boolean and console.log it.

console.log('Max safe integer: ' + Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log('Min safe integer' + Number.MIN_SAFE_INTEGER) // -9007199254740991

/* BigInt is needed for precious calculation otherwise with number inaccurate calculation happens */
console.log(Number.MAX_SAFE_INTEGER + 30) //9007199254741020
console.log(BigInt(9007199254740991) + BigInt(30)) //9007199254741020n . The 'n' distingusihes Number from BigInt

/* Symbols are guaranteed-unique tokens you can use as object property keys that won't clash with any other properties. */
console.log(typeof Symbol('foo'))
const sym1 = Symbol()
const sym2 = Symbol()
console.log(sym1 === sym2)

// Serialisation is changing into string

/*
We cannot send object over HTTP. we can send strings

They can't be serialized because:
- Symbols: Lose their meaning outside the original runtime context
- BigInt: Not part of the JSON standard specification
- Functions: Represent executable code, which is a security risk and loses execution context. It is more of behaviour not a data. If function has deletefiles operation and runs in another environment -> this will be risky
*/
