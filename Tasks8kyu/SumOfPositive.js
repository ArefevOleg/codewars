// ОПИСАНИЕ:
// Вы получаете массив чисел, возвращаете сумму всех положительных значений.
// Пример [1,-4,7,12] => 1 + 7 + 12 = 20
// Примечание: если суммировать нечего, сумма по умолчанию равна 0.
function positiveSum(arr) {
  if (arr.length === 0) {
    return 0
  }
  const newArr = arr.filter(el => el > 0);
  const sum = newArr.reduce((a, b) => a + b, 0);
  return sum
  // return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(positiveSum([]))