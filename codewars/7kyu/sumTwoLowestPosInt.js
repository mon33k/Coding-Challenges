/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Hint: Do not modify the original array.
*/

function sumTwoSmallestNumbers(numbers) {  
    var low = numbers[0];
    for(let i=0; i<=numbers.length; i++){
      if(numbers[i] < low){
        low = numbers[i]
      }
    }
    return low 
    
    let low2 = numbers[0];
    for(let j=1; j<=numbers.length; j++){
      if(numbers[j] != low){
        // console.log(numbers[j]);
        if(numbers[j] < low2){
          low2 = numbers[j];
        }
      }
    }
    
    return low2
  }
  