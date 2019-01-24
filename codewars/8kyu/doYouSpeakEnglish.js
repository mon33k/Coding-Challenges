// UNFINISHED

/*
Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.

*/

function spEng(sentence){
    //write your code here
    let check = 'english'
    // let arrEng = [ 'e', 'n', 'g', 'l', 'i', 's', 'h' ]
    // let eng = {
    //     'e': 'e',
    //     'n': 'n',
    //     'g': 'g',
    //     'l': 'l',
    //     'i': 'i',
    //     's': 's',
    //     'h': 'h'
    // }
    let newnew = sentence.split('')
    if(newnew.includes(check)) {
        return true
    } else {
        return false
    }
}

spEng('okayenglishwhateevristhis')





