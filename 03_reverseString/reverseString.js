const reverseString = function(str) {
    let splitString = str.split("");
    let reversedStr = splitString.reverse();
    let joinStr = reversedStr.join("");
    return joinStr;
};

// Do not edit below this line
module.exports = reverseString;
