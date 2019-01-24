
// Given two strings s and t , write a function to determine if t is an anagram of s.
// You may assume the string contains only lowercase alphabets.

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;    
    }

    let obj = {}
    t.split('').forEach(elem => {
        obj[elem] ? obj[elem]++ : obj[elem] = 1;
    })
    for(var i = 0; i < s.length; i++) {
      if(!obj[s[i]]){   // If obj doesn't contain letters in s return false
        return false
      } else {          // Else if it does contain letters from s beginning from the start of s's index then negate it and loop through again       
         obj[s[i]] -= 1;
      }
    }
    return true // At the end of the iteration of string s if they are all negated then that means it is true and obj is equal to s 
};

console.log(isAnagram("car", "caadad"))