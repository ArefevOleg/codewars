//ОПИСАНИЕ:
// Я новичок в программировании и теперь хочу получить сумму двух массивов...
// Фактически сумму всех их элементов. Я буду признателен за вашу помощь. P.S.
// Каждый массив содержит только целые числа. Выходные данные тоже являются числом.

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => (a + b))
}