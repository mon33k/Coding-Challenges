/* You are given a two-digit integer n. Return the sum of its digits.

Example:

For n = 29, the output should be
addTwoDigits(n) = 11.

*/

function addTwoDigits(n) {
    let numStr = n.toString().split('')
    if(numStr < 2){
      return 'invalid number'
    }else{
      return parseInt(numStr[0]) + parseInt(numStr[1])
    }
}