// URLify: 

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

