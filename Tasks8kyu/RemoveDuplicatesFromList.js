// ОПИСАНИЕ:
// Определите функцию, которая удаляет дубликаты из массива неотрицательных чисел
// и возвращает их в результате. Порядок последовательности должен оставаться прежним.
// Examples:
// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
function distinct(a) {
  return [...new Set(a)]
}
console.log(distinct([1, 2, 1, 1, 3, 2]))