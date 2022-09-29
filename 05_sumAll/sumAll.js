const sumAll = function(num1, num2) {
    let holdSum = 0;
    if (typeof num1 === 'string' || typeof num2 === 'object' || typeof num2 === 'string' || typeof num1 === 'object'){
        return 'ERROR';
        } else if (num1 > -1 && num2 > -1) {
            if (num1 < num2){
                for (let i = num1; i <= num2; i++){
                    holdSum += i;
                    };
                } else { 
                    for (let i = num1; i >= num2; i--){
                        holdSum += i;
                    };
            };
    } else {
        return 'ERROR';
    };
        return holdSum;
};

// Do not edit below this line
module.exports = sumAll;
