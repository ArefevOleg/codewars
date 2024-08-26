// ОПИСАНИЕ:
// От вас требуется создать простой калькулятор, который возвращает результат сложения,
// вычитания, умножения или деления двух чисел.
// Ваша функция будет принимать три аргумента:
// Первым и вторым аргументом должны быть числа.
// Третий аргумент должен представлять собой знак, указывающий на операцию,
// которую необходимо выполнить с этими двумя числами.
// если переменные не являются числами или знак не входит в приведенный выше список,
// должно быть возвращено сообщение "неизвестное значение".
// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"

function calculator(a, b, sign) {
  if (typeof a === "number" && typeof b === "number") {
    switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return "unknown value";
    }
  } else {
    return "unknown value";
  }
}

console.log(calculator(1,2,"+"))