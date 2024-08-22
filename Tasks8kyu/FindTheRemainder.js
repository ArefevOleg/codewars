// ОПИСАНИЕ:
// Напишите функцию, которая принимает два целых числа и возвращает
// остаток от деления большего значения на меньшее. Деление на ноль должно возвращать NaN.
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
// n = 0
// m = 1
// результат — деление на ноль (о том, как это сделать на вашем языке, см. в спецификациях)

function remainder(n, m){
if (n > m) {
  return n % m
} else if (n < m) {
  return m % n
} else if (n === 0 || m === 0) {
  return NaN
} else if (n < 0 || m < 0) {
  return 0
}
// return a > b ? a % b : b % a;
}

console.log(remainder(-13, -13))