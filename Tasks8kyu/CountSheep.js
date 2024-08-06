// ОПИСАНИЕ:
// Учитывая неотрицательное целое число,
// например, 3, верните строку с бормотанием: "1 sheep...2 sheep...3 sheep...".
// Ввод всегда будет корректным, т.е. никаких отрицательных целых чисел.

var countSheep = function (num) {
  if (num <= 0) {
    return "";
  } else {
    let result = "";
    for (let i = 0; i < num; i++) {
      result += `${i + 1} sheep...`;
    }
    return result;
  }
}


console.log(countSheep(4))
