/*
Given a string str, reverse it omitting all non-alphabetic characters.
*/

// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".

function reverseLetter(str) {
    let arr = str.split('').reverse()
    let result = []
    let abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < abc.length; j++) {
            if(arr[i] === abc[j]) {
                result.push(arr[i])
            } 
        }
    }
    return result
}
  console.log(reverseLetter("i?k*btxus@v")) // nahsirk
  console.log(reverseLetter('ultr53o?n')) // nortlu
