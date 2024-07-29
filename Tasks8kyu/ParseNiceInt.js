// ОПИСАНИЕ:
// Вы спрашиваете маленькую девочку: "Сколько тебе лет?" Она всегда отвечает: "x лет",
// где x - случайное число от 0 до 9.
// Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа.
// Предположим, что тестовая строка ввода всегда является допустимой. Например,
// тестовым вводом может быть "1 год" или "5 лет". Первым символом в строке всегда является число.

function getAge(inputString) {
  const res = inputString[0]
  return Number(res);
  // return Number(inputString[0]);
  // return parseInt(inputString);
}
console.log(getAge("4 years old"))

// parseInt(inputString) - это функция JavaScript, которая преобразует строку inputString в целое число.
// Эта функция возвращает целое число, которое соответствует началу строки inputString,
// и игнорирует все символы, следующие за первым целым числом.
// Если строка inputString не может быть преобразована в целое число,
// функция parseInt() возвращает значение NaN (Not-a-Number).