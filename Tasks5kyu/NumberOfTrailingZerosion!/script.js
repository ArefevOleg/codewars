// Description
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.



// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


// Decision: 
function zeros(n) {
  var result = 0;
  for (var i = 5; n / i >= 1; i *= 5) {
    result += Math.floor(n / i);
  }
  return result;
}