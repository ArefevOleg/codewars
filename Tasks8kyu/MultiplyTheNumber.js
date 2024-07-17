//ОПИСАНИЕ:
// Джеку очень нравится его число пять: хитрость здесь в том,
// что вам нужно умножить каждое число на 5,
// возведенное в число цифр каждого числа, так, например:
//  3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

function multiply(number){
  const result = Math.abs(number).toString().length;
  return number * (5 ** result)
  // return number * Math.pow(5, Math.abs(number).toString().length);
}

console.log(multiply(10))
