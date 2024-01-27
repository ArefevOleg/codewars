// Description
// Write this function


// for i from 1 to n, do i % m and return the sum

// f(n=10, m=5) // returns 20 (1+2+3+4+0 + 1+2+3+4+0)
// You'll need to get a little clever with performance, since n can be a very large number

// Decision:

function f(n, m) {
  let q = Math.floor(n / m);
  let r = n % m;
  
  let sumOneCycle = m * (m - 1) / 2;
  let sumIncompleteCycle = r * (r + 1) / 2;

  return q * sumOneCycle + sumIncompleteCycle;
}