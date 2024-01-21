// Description
// Create range generator function that will take up to 3 parameters - start value, step and stop value. 
// This function should return an iterable object with numbers. 
// For simplicity, assume all parameters to be positive numbers.

// Example
// range(5) --> 1,2,3,4,5
// range(3, 7) --> 3,4,5,6,7
// range(2, 3, 15) --> 2,5,8,11,14

// Decision: 

function *range(start, step, stop) {

  // if only one argument is provided, then it's stop parameter
  if (arguments.length === 1) {
      stop = start;
      start = 1;
      step = 1;
  } 
  // if only two arguments are provided, then they are start and stop parameters
  else if (arguments.length === 2) {
      stop = step;
      step = 1;
  }

  for(let i = start; i <= stop; i += step) {
      yield i;
  }
}