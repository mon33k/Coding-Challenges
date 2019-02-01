/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Hint: Do not modify the original array.
*/

function sumTwoSmallestNumbers(numbers) {  
    let lowest1
    let lowest2

    if(numbers[0] < numbers[1]) {
        lowest1 = numbers[0]
        lowest2 = numbers[1]
    } else {
        lowest1 = numbers[1]
        lowest2 = numbers[0]
    }

    for(let i = 2; i < numbers.length; i++) {
        if(numbers[i] < lowest1) {
            let temp = lowest1
            lowest1 = numbers[i]
            lowest2 = temp
        } else if (numbers[i] < lowest2) {
            lowest2 = numbers[i]
        }
    }

    return lowest1 + lowest2

  }
  

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])) //3453455
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) //7