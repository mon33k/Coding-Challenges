// Palindrome Permutation:


const isPalindrome = (str1, str2) => {
    let reversed2ndStr = str2.split('').reverse().join('')
    if(str1 === reversed2ndStr) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isPalindrome('racecar', 'racecar')  // true
isPalindrome('hello', 'whutis')     // false


// ----- Do a diff solution with regex ----------- //