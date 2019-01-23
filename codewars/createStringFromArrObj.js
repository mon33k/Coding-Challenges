// You're given a string containing a sequence of words separated with whitespaces. Let's say it is a sequence of patterns: a name and a corresponding number - like this:

// "red 1 yellow 2 black 3 white 4"

// You want to turn it into a different string of objects you plan to work with later on - like this:

// "[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]"

// Doing this manually is a pain. So you've decided to write a short function that would make the computer do the job for you. Keep in mind, the pattern isn't necessarily a word and a number. Consider anything separeted by a whitespace, just don't forget: an array of objects with two elements: name and id.

// As a result you'll have a string you may just copy-paste whenever you feel like defining a list of objects - now without the need to put in names, IDs, curly brackets, colon signs, screw up everything, fail searching for a typo and begin anew. This might come in handy with large lists.

/**
 * 1) Separate elements on a space
 * 2) Every two elements create an object where the key name is equal to the frist element 
 * and the key id is equal to the second 
 * 3) Add each of those objects to an array and solve
 * 
 * 
 */
function wordsToObject (input) {
    let arr = input.split(' ')
    console.log(arr)
    let result = []
    if(arr.length === 2) {
        return result.push({name: arr[0], id: arr[1]})
    }
    for(i = 0; i < arr.length; i+=2) {
        result.push({name: arr[i], id: arr[i + 1]})
    }
    return result

}

console.log(wordsToObject("red 1 yellow 2 black 3 white 4"))



















// function wordsToObject(input) {
//     let splited = input.split(' ')
//     console.log(splited)
//     let result = input.split(' ').map((e) => {
//         let temp    
//         let obj = {name: '', id: 0}
//         if(e % 2 === 0) {
//             obj.name = e
//         } else {
//             obj.id = e
//         }
//         return obj
//     })
//     console.log(result)
// }
// console.log(wordsToObject("red 1 yellow 2 black 3 white 4"))