// ОПИСАНИЕ:
// Вам даны два отсортированных массива, которые содержат только целые числа.
// Ваша задача - найти способ объединить их в один массив, отсортированный в порядке
// возрастания. Выполните функцию mergeArrays(arr1, arr2), где arr1 и arr2 - исходные 
// отсортированные массивы.
// Вам не нужно беспокоиться о проверке, поскольку arr1 и arr2 должны быть 
// массивами с 0 или более целыми числами. Если и arr1, и arr2 пусты, то 
// просто верните пустой массив.
// Примечание: arr1 и arr2 могут быть отсортированы в разном порядке. 
// Также arr1 и arr2 могут содержать одинаковые целые числа. 
// Удалите дублирующиеся значения в возвращаемом результате.

function mergeArrays(arr1, arr2) {
  const arr3 = [...arr1, ...arr2]
  const uniqueArr = [...new Set(arr3)];
  uniqueArr.sort((a, b) => a - b);
    return uniqueArr
  }