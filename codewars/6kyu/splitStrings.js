/*

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/



function solution(str){
   let arr = str.split('')
   let two = ''
   if(arr.length % 2 !== 0) {
        return 'err'
   }
   for(let i = 0; i < arr.length; i++) {
        
   }
   console.log(arr)
}

console.log(solution('abc'))
// console.log(solution('abcdef'))
