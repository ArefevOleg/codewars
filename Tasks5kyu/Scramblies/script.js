// Description
// Complete the function scramble(str1, str2) 
// that returns true if a portion of str1 characters can be rearranged to match str2, 
// otherwise returns false.

// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.


// Example
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False



// Decision: 

function scramble(str1, str2) {
  const charCount = new Array(26).fill(0);  // initialize an array to hold character frequencies

  for (let i = 0; i < str1.length; i++) charCount[str1[i].charCodeAt(0) - 97]++;  // fill in char frequencies of str1
  for (let i = 0; i < str2.length; i++) {
      if (--charCount[str2[i].charCodeAt(0) - 97] < 0) return false; // decrement char freq by one each time we find the char in str2, and if char freq < 0 return false
  }

  return true; 
}