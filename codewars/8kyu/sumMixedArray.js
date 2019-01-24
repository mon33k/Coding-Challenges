/*
*
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.
Return your answer as a number.
* 
*/

function sumMix(x){
    let sum = 0
    for(let i = 0; i < x.length; i++) {
        if(typeof x[i] !== 'number') {
            sum += Number(x[i])
        } else {
            sum += x[i]
        }
    }
    return sum
}

sumMix([9, 3, '7', '3'])
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])