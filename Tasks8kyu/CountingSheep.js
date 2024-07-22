// ОПИСАНИЕ:
// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать на своем месте.
// Нам нужна функция, которая подсчитывает количество овец,
// присутствующих в массиве (true означает наличие).
// For example,
//
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// Правильный ответ будет 17. Подсказка: не забудьте проверить наличие неверных значений,
// таких как null/undefined.

function countSheeps(sheep) {
  return sheep.filter(el => el === true).length
}

console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]))