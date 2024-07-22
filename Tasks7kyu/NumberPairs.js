// ОПИСАНИЕ:
// Целью этого ката является сравнение каждой
// пары целых чисел из двух массивов и возврат нового массива больших чисел.
// Примечание. Оба массива имеют одинаковые размеры.
// Example:
// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

function getLargerNumbers(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result.push(a[i]);
    } else {
      result.push(b[i]);
    }
  }
  return result
}

console.log(getLargerNumbers([13, 64, 15, 17, 88],[23, 14, 53, 17, 80]))