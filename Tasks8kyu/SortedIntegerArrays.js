// ОПИСАНИЕ:
// Напишите функцию, объединяющую два отсортированных массива в один.
// Массивы содержат только целые числа. Кроме того,
// конечный результат должен быть отсортирован и не иметь дубликатов.

function mergeArrays(a, b) {
  const newArr = [...a, b].flat(Infinity).sort((a,b) => a - b)
  return Array.from(new Set(newArr))
  // return [...new Set(a.concat(b))].sort((a,b)=>a-b);
}

console.log(mergeArrays([2, 4, 8], [2, 4, 6]))