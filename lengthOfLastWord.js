let s = 'hello world'


function lengthOfLastWord(s){
    let sArr = s.trim().split(' ')
    let lastWord = sArr.pop()
    return lastWord.length;
}



console.log(lengthOfLastWord(s))