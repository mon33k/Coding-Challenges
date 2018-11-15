// Format a string of names like 'Bart, Lisa & Maggie'.

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'
// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'
// list([ {name: 'Bart'} ])
// // returns 'Bart'
// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

const list = (arr) => {
    if(arr.length === 1) {
        return arr[0].name
    }

    if(arr.length === 2) {
        return arr[0].name + "&" + arr[1].name
    } 
    let str = ''
    for(var i = 0; i < arr.length; i++) {
        if(i === arr.length -2){ // if the index refers to the second to last element then take whatever str is and that element and add a space 
            str = str + arr[i].name + ' '
        }
        else if(i === arr.length - 1) { // if the index refers to the last element then take wutevr str is and add an & before the last element
            str = str + "& " + arr[arr.length -1].name
        }
        else { // if i isnt the last or second to last element then take wutevr is already in str and for all other elems add a comma
            str = str + arr[i].name + ", " 
        }
    }
    return str
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))


// ----------------- Another way to solve it ------------------ //

const list2 = (arr) => {

}