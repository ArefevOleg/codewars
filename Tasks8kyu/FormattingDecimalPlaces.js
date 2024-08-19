// ОПИСАНИЕ:
// Каждое число должно быть отформатировано таким образом,
// чтобы оно округлялось до двух знаков после запятой.
// Вам не нужно проверять, является ли введенное число корректным,
// поскольку в тестах используются только корректные числа.
// Example:
// 5.5589 is rounded 5.56
// 3.3424 is rounded 3.34
function twoDecimalPlaces(n) {
  return parseFloat(n.toFixed(2))
}
// const twoDecimalPlaces = n =>  Number(n.toFixed(2))
console.log(twoDecimalPlaces(4.659725356))