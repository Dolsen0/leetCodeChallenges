/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let xRev = x.toString().split('').reverse().join('')
    if(xRev == x){
        return true
    }else{
        return false
    }
};


console.log(isPalindrome(-121))