// Ваша задача - создать функцию, которая выполняет четыре основные математические операции.
//   Функция должна принимать три аргумента - operation(строка/символ), value1(число), value2(число).
//   Функция должна возвращать результат в виде чисел после применения выбранной операции.
// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
  return eval(value1 + operation + value2)
}

// if( operation == "+") {
//   return value1 + value2
// }
// if( operation == "-") {
//   return value1 - value2
// }
// if( operation == "*") {
//   return value1 * value2
// }
// if( operation == "/") {
//   return value1 / value2
// }