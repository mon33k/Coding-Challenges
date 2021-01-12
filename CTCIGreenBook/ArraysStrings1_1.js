// Is Unique

// ---------------- Using two for loops ----------------//
const isUnique = (str) => {
    for(i = 0; i <= str.length; i++){
        for(j = i; j <= str.length; j++){
            if(i != j && str[i] == str[j]){
                return true
            }
        }
    }
    return false
}


// console.log(isUnique('hello')) // returns true
// console.log(isUnique('dog')) // returns false 

// ----------------- Using an empty array -----------------//
const isUnique2 = (str) => {
    let count = []
    for(i = 0; i <= str.length; i++) {
        if(!count[str[i]]) {
            count[str[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
}

// console.log(isUnique2('hello')) // True
// console.log(isUnique2('okay'))  // False

// ------------------ Using a hash map ---------------------//
const isUnique3 = (str) => {
    let dict = {}
    for(i = 0; i < str.length; i++) {
        if(!dict[str[i]]){
            dict[str[i]] = 1
        }else{
            dict[str[i]] += 1
        }
    }
    console.log(dict)
    for(key in dict) {
        if(dict[key] >= 2) {    // Look over this again 
            return false
        } else {
            return true
        }
    }
} 

console.log(isUnique3('hello'))
console.log(isUnique3('dog'))

// --------------- Using Set to grab the unique characters ---------------//
var arr = ["a", "a", "b"];
 var uniqueArray = Array.from(new Set(arr));

 console.log(uniqueArray)

