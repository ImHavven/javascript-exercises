const palindromes = function (string) {
    let splitString = string.split('');
    let reversedStr = splitString.reverse();
    let joinString = reversedStr.join("")
    if (string === joinString){
        return 'true'
    }
};

// Do not edit below this line
module.exports = palindromes;
