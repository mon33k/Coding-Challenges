/*

I will give you an integer. Give me back a shape 
that is as long and wide as the integer. 
The integer will be a whole number between 0 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++
*/
// The way I solved it
function generateShape(int){
    if(int > 50) {
        return 'error'
    }
    let result = []
   for(let i = 0; i < int; i++) {
       result.push('+'.repeat(int))
   }
   return result.join('\n')
}


// Someone from codewars solution 
function generateShape(int){
  let acc = ''; 
  for (let i = 0; i < int; i++){
    for (let j = 0; j < int; j++){
      acc += '+'
      console.log(acc)
    }
    console.log(acc)
    acc += '\n'
  }
  console.log(acc)
  return acc.substring(0, acc.length - 1);
}

console.log(generateShape(3))
