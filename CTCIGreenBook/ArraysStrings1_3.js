// URLify: Write a method that replaces all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place)

/*
Ex.
Input:  "Mr John Smith", 13
Output: "Mr%20John%20Smith"
*/

const URLify = (str) => {
    let strArr = str.split("")
    let emptArr = []

    for(i = 0; i < strArr.length; i++) {
        if(strArr[i] === " ") {
            emptArr.push("%")
        }else{
            emptArr.push(strArr[i])
        }
    }
    console.log(emptArr)
    return emptArr
}

URLify("h el  lo")
URLify("pea c he s")
URLify("honey Blo ss om")


/* Do it another way */

