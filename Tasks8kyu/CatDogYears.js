// ОПИСАНИЕ:
// У меня есть кошка и собака.
// Я завел их в то же время, что и котенка / щенка. Это было в humanYears много лет назад.
// Верните их соответствующий возраст в виде [humanYears,catYears,dogYears]
// записи:
// человеческие годы >= 1
// Человеческие годы - это только целые числа
// Кошачьи годы
// 15 cat years for first year  // 15 кошачьих лет за первый год
// +9 cat years for second year // +9 кошачьих лет за второй год
// +4 cat years for each year after that // +4 кошачьих года за каждый последующий год
// Собачьи годы
// 15 dog years for first year // 15 собачьих лет за первый год
// +9 dog years for second year // +9 собачьих лет за второй год
// +5 dog years for each year after that // +5 собачьих лет за каждый последующий год

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0;
  let dogYears = 0;

  if (humanYears === 1) {
    catYears = 15
    dogYears = 15
  } else if (humanYears === 2) {
    catYears = 15 + 9
    dogYears = 15 + 9
  } else if (humanYears > 2) {
    catYears = 24 + (humanYears - 2) * 4
    dogYears = 24 + (humanYears - 2) * 5
  }
  return [humanYears, catYears, dogYears]
}

  console.log(humanYearsCatYearsDogYears(10))
