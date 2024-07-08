//ОПИСАНИЕ:
// Создайте функцию с именем joinNames,
// которая принимает два параметра (имя и фамилию).
// Функция должна возвращать полное имя.
const combineNames = (first,last) => {
  return first + " " + last
  // `${first} ${last}`
}

console.log(combineNames('James', 'Stevens'))