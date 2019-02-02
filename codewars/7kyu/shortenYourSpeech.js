/*
You are given a String of one or more words. Your task is to check the length of each word and if it's less than 4, you keep it unmodified otherwise you find out the first vowel which is coming after 3-rd character and replace vowel and rest of word with a dot. Finally, you should return the same string but shorten (only if the length of words is more then 3 characters).

Please note :

1) You are not asked to trim anything.

2) Apostrophes are part of words.

3) Commas following shortened words are considered characters and should be removed.

Examples:

shortenSpeech( "Hello, do you want a coffee ? " ) => returns "Hell. do you want a coff. ? "

shortenSpeech( "Hey fellow warriors !" ) => returns "Hey fell. warr. !"

shortenSpeech( "This is a test") => returns "This is a test"
*/

const shortenSpeech = (str) => {
    let arr = str.split(' ')
    let obj = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }
    let result = []
    for(let i = 0; i < arr.length; i++) {
        if(!arr[i].length < 4) {
            let segment = arr[i].slice(3, arr[i].length - 1)
            console.log(segment)
            if(Object.keys(obj).includes(segment[i])) {
                result.push('.')
                console.log(segment[i])
            }
        } else {
            result.push(arr[i])
        }
        
    }
    return console.log(result)
}

shortenSpeech("Hey fellow warriors !")
