// ОПИСАНИЕ:
// Создайте функцию, которая принимает целое число в качестве аргумента
// и возвращает "Even" для четных чисел или "Odd" для нечетных чисел.

function evenOrOdd(number) {
return number % 2 === 0 ? "Even" : "Odd"
}

console.log(evenOrOdd(4))