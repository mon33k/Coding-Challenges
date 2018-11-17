//Check Permutation: Given two strings, wrtie a method to decide if one is a permutation of the other. 

const checkPermutation = (str1, str2) => {

    if (str1.length !== str2.length) {
        return false
    } else if (str1 === str2) {
        return true
    }

    let dict = {}
    
    for(i = 0; i < str1.length; i++) {
        dict[str1[i]] = dict[str1[i]] ? 1 + dict[str1[i]] : 1
        
    }
    console.log(dict)

    for (i = 0; i < str2.length; i++) {     // Why doesn't a for in loop work
        if (!dict[str2[i]]){
            return false
        } else {
            dict[str2[i]] -= 1
        }
    }
    return true
}


console.log(checkPermutation("ellop", "hello")) // false
console.log(checkPermutation("elloh", "hello")) // true 

// Another way to do it!