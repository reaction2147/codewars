// DESCRIPTION:
// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n) {
    let list = []
    for(let i = 1; i <= n; i++) {
      let num = ""
      if(i % 3 === 0 && i % 5 === 0) {
        num = "FizzBuzz"
        list.push(num)
      } else if(i % 3 === 0) {
        num = "Fizz"
        list.push(num)
      } else if(i % 5 === 0) {
        num = "Buzz"
        list.push(num)
      } else {
        num = i
        list.push(num)
      }
    }
     return list
  }