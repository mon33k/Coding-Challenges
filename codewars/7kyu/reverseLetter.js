/*
Given a string str, reverse it omitting all non-alphabetic characters.
*/

// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    let arr = str.split('').reverse()
    let result = []
    let abc = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26
    }
    for (let i = 0; i < arr.length; i++) {
        if (abc[arr[i]]) {
            result.push(arr[i])
        }
    }
    return result.join('').toString()
}

console.log(reverseLetter("i?k*btxus@v")) // nahsirk
console.log(reverseLetter('ultr53o?n')) // nortlu


///////////////////////////////////////
// This guy's solution

// ADAMMS, Artur Kudla
// function reverseLetter(string) {
//   //coding and coding..
//   var new_str = "";
//   for(var i = string.length -1 ; i >= 0 ; i--){
//     var test = string[i].toUpperCase();
//     if(test.toLowerCase() != test){
//       new_str+=string[i];
//     }
//   }

//   return new_str;

// }