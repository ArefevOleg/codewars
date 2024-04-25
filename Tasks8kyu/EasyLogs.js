// Description
// Add two logs with base X, with the value of A and B. 
// Example log A + log B where the base is X.



// Decision: 

function logs(x, a, b){
  // calculate log(a*b) base x
  return Math.log(a * b) / Math.log(x);
}