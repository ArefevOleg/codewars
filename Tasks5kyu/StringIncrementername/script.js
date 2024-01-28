// Description
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


// Decision: 

function incrementString (strng) {
  var numberPattern = /\d+/g;
  var matches = strng.match(numberPattern);

  if (matches && matches.length) {
    var oldNumber = matches[matches.length - 1];
    var newNumber = parseInt(oldNumber, 10) + 1;
    
    // ensure newNumber has the same amount of digits
    newNumber = newNumber.toString().padStart(oldNumber.length, '0');

    var prefix = strng.substring(0, strng.lastIndexOf(oldNumber));
    var postfix = strng.substring(strng.lastIndexOf(oldNumber) + oldNumber.length, strng.length);

    return prefix + newNumber + postfix;
  }

  return strng + '1';
}