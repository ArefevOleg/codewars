// ОПИСАНИЕ:
// Теперь изготовим реагент.
// На выбор предлагается восемь материалов,
// пронумерованных 1,2,..., 8 соответственно.
// Мы знаем правила конфекта:
// материал 1 и материал 2 не могут быть выбраны одновременно
// материал 3 и материал 4 не могут быть выбраны одновременно
// материал 5 и материал 6 должны быть выбраны одновременно
// материал 7 или материал 8 должны быть выбраны (по крайней мере, один или оба).
// Задача Вам дана формула целочисленного массива.
// Массив содержит только цифры 1–8, обозначающие материал 1–8.
// Ваша задача — определить, верна ли формула.
// Возвращает true,если оно действительно, и false в противном случае.
// Example
//   For formula = [1,3,7] // 11, The output should be true. 7
//   For formula = [7,1,2,3] // 13, The output should be false. 1,2
//   For formula = [1,3,5,7] // 16, The output should be false. 5 нет 6
//   For formula = [1,5,6,7,3] // 22, The output should be true. 5,6
//   For formula = [5,6,7] // 18, The output should be true. 5,6
//   For formula = [5,6,7,8] // 26, The output should be true. 5,6
//   For formula = [6,7,8] // 21, The output should be false. 6 нет 5
//   For formula = [7,8] // 15, The output should be true. 7/8

// function isValid(formula) {
// const x = formula.filter(el => {
//   if (el === 7) {
//     return
//   }
//   return x
// })
//
// }
//
// console.log(isValid([7,1,2,3]))
