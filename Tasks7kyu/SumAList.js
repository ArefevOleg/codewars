// ОПИСАНИЕ:
// Напишите функцию, которая суммирует список, но игнорирует любые повторяющиеся элементы в списке.
// Например, для списка [3, 4, 3, 6] функция должна вернуть 10,
// а для списка [1, 10, 3, 10, 10] функция должна возвращать 4.

// function sumNoDuplicates(numList) {
//   return numList.filter((elem, index) => numList.findIndex(e => e === elem) !== index);
// }
// console.log(sumNoDuplicates([1, 10, 3, 10, 10]))