// ОПИСАНИЕ:
// Учитывая случайное неотрицательное число,
// вам необходимо вернуть цифры этого числа в массиве в обратном порядке.
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
function digitize(n) {
  return [n].toString().split('').map(Number).reverse()
}
console.log(digitize(35231))