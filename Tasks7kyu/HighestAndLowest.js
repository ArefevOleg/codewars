// ОПИСАНИЕ:
// В этом небольшом задании вам дается строка чисел,
// разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Все числа допустимы в формате Int32, проверять их не нужно.
// Во входной строке всегда будет хотя бы одно число.
// Выходная строка должна состоять из двух чисел, разделенных одним пробелом,
// и самое большое число должно быть первым.

function highAndLow(numbers) {
  const res = numbers.split(" ").map(el => Number(el))
  const min = Math.min(...res)
  const max = Math.max(...res)
  return `${max} ${min}`

}

console.log(highAndLow("1 2 -3 4 5"))