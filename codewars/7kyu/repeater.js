/*
Write a class function named repeat() that takes two arguments (a string and a long integer), and returns a new string where the input string is repeated that many times.

Example:
Repeater.repeat("a", 5)
should return

"aaaaa"
*/

class Repeater {
    
    repeat(str, int) {
        let result = ''
        for(let i = 0; i < int; i++) {
            result += str
        }
        return result
    }

}
let a = new Repeater()
a.repeat('a', 5)
