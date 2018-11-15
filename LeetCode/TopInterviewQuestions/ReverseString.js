// Write a function that takes a string as input and returns the string reversed.

// Example:
// Given s = "hello", return "olleh".

var reverseString = function(s) {
    let newStr = s.split("").reverse().join("")
    return newStr
};

//console.log(reverseString("hello"))

// ----------------- Another way to solve it ------------------ //

function reverse(s) {
    return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}

console.log(reverse("Monique"))


//https://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/