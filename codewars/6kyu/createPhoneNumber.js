// FINISHED 

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge. 
// Don't forget the space after the closing parentheses!

const createPhoneNumber = (arr) => {
    if(arr.length !== 10) {
        return 'error'
    }
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(i === 0) {
            result.push('(' + arr[i])
        } else if(i === 2) {
            result.push(arr[i] + ')')
        } else if (i === 3) {
            result.push(' ' + arr[i])
        } else if(i === 5) {
            result.push(arr[i] + '-')
        } else {
            result.push(arr[i])
        }
    }
    return result.join('')
}

console.log(createPhoneNumber([2,1,2,6,4,6,1,2,5,3]))
console.log(createPhoneNumber([1,3,5,2,4]))
console.log(createPhoneNumber([1,2,5,2,7,4,9,2,0,3,1,4]))

