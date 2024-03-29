// Description
// Task
// Given a sequence of integers, check whether it is possible to obtain a strictly increasing sequence by erasing no more than one element from it.

// Example
// For sequence = [1, 3, 2, 1], the output should be false;

// For sequence = [1, 3, 2], the output should be true.

// Input/Output
// [input] integer array sequence

// Constraints: 2 ≤ sequence.length ≤ 1000, -10000 ≤ sequence[i] ≤ 10000.

// [output] a boolean value

// true if it is possible, false otherwise.


// Decision:

function almostIncreasingSequence(sequence) {
    var found = false;
    for (var i=0; i<sequence.length-1; i++) {
        if(sequence[i] >= sequence[i+1]) { 
            if(found) { 
                return false; 
            }
            if(i > 0 && sequence[i-1] >= sequence[i+1] && i+2 < sequence.length && sequence[i] >= sequence[i+2]) {
                return false;
            }
            found = true;
        }
    }
    return true;
}