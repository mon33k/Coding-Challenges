/*  
___________UNFINISHED____________
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

longestPalindrome=function(s){
    let arr = s.split('')
    let same = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]) {
            same.push(arr[i])
        }
    }
    return same
}

console.log(longestPalindrome('aab'))