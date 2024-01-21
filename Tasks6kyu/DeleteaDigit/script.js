// Description
// Given an integer n, find the maximal number you can obtain 
//by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be 52;
//For n = 1001, the output should be 101.

// Input/Output
// [input] integer n
// Constraints: 10 ≤ n ≤ 1000000.
// [output] an integer

// Decision: 

function deleteDigit(n) {
  const numStr = String(n);
  let maxNum = 0;
  
  for(let i = 0; i < numStr.length; i++) {
      const newNum = parseInt(numStr.slice(0, i) + numStr.slice(i + 1), 10);
      maxNum = Math.max(maxNum, newNum);
  }
  
  return maxNum;
}