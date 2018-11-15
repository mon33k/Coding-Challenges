/*  Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Ex: For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

*/

function adjacentElementsProduct(arr) {
    return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))