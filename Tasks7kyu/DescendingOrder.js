// ОПИСАНИЕ:
// Ваша задача - создать функцию, которая может принимать
// любое неотрицательное целое число в качестве аргумента
// и возвращать его с цифрами в порядке убывания. По сути,
// переставьте цифры, чтобы получить максимально возможное число.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321
function descendingOrder(n){
  const str = String(n)
  const res = str.split("").map(el => Number(el)).sort().reverse().join('')
  return str.length === 1 ? Number(str) :Number(res)
  // return parseInt(String(n).split('').sort().reverse().join(''))
}

console.log(descendingOrder(111))