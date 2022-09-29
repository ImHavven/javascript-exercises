const ftoc = function(degree) {
  let holdAnw = 0;
  holdAnw += (degree - 32) * 5/9;
  let roundedNum = roundNum(holdAnw);
  return roundedNum;
};

const ctof = function(degree) {
  let holdAnw = 0;
  holdAnw += degree * 9/5 + 32;
  let roundedNum = roundNum(holdAnw);
  return roundedNum;
};

function roundNum(degree) {
  return Math.round(degree * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
