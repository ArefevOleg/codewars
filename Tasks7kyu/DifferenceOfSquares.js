// ОПИСАНИЕ:
// Найдите разность квадрата суммы первых n натуральных чисел (1 <= n <= 100) и суммы их квадратов.
// Пример Например, когда n = 10:
// Квадрат суммы чисел равен:
// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)² = 55² = 3025
// The sum of the squares of the numbers is:
// 1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10² = 385
// Следовательно, разница между квадратом суммы первых десяти натуральных чисел
// и суммой квадратов этих чисел равна: 3025 - 385 = 2640.

function differenceOfSquares(n) {
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  const newNumb = numbers.reduce((a, b) => a + b)
  const res = numbers.map(el => el * el).reduce((a,b) => a +b)
  return newNumb * newNumb - res
  //  return Math.pow(x * (x + 1) / 2, 2) - Math.round(x / 6 * (x + 1) * (2 * x + 1))
}

console.log(differenceOfSquares(10))
