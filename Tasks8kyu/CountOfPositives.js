// ОПИСАНИЕ:
// Задан массив целых чисел.
// Возвращает массив, где первый элемент - количество положительных чисел,
// а второй элемент - сумма отрицательных чисел. 0 не является ни положительным, ни отрицательным.
// Если входные данные представляют собой пустой массив или null, возвращает пустой массив.
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
// if (input === null || input.length === []) {
//   return []
// } else {
//   const positive = input.filter(x => x > 0).length
//   const negative = input.filter(x => x < 0).reduce((a,b) => a + b)
//
//
//   const newArr = [positive, negative]
//   return newArr
// }
// }
//
// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))