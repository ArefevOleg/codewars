//ОПИСАНИЕ:
// Напишите функцию, которая принимает массив чисел
// и возвращает сумму чисел. Числа могут быть отрицательными 
// или нецелочисленными. Если массив не содержит чисел, вы должны вернуть 0.
function sum (numbers) {
  const res = numbers.reduce((num, acc) => {
    return num + acc
  }, 0)
    return res === 0 ? 0 : res
  };