// ОПИСАНИЕ:
// Учитывая три целых числа a, b и c, верните наибольшее число, полученное после вставки операторов +,
// * и круглых скобок (). Другими словами, попробуйте каждую комбинацию a, b и c с помощью операторов,
// не меняя порядок операндов, и верните максимальное значение.
// Пример
// Используя числа 1, 2 и 3, вот несколько возможных выражений:
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// Максимальное значение, которое может быть получено, равно 9.
// Записи
// Числа всегда положительные, в диапазоне 1 ≤ a, b, c ≤ 10.
// Вы можете использовать одну и ту же операцию более одного раза.
// Необязательно использовать все операторы или круглые скобки.
// Вы не можете поменять местами операнды. Например,
// с заданными числами вы не сможете получить выражение (1 + 3) * 2 = 8.
// Примеры ввода и вывода
// : выражения важны(1, 2, 3) ==> 9, потому что (1 + 2) * 3 = 9.
// выражения важны(1, 1, 1) ==> 3, потому что 1 + 1 + 1 = 3.
// выражения имеют значение(9, 1, 1) ==> 18, потому что 9 * (1 + 1) = 18.
function expressionMatter(a, b, c) {
  const expressions = [
    a + b + c,
    a + b * c,
    a * b + c,
    a * b * c,
    (a + b) * c,
    a * (b + c)
  ];
  return Math.max(...expressions);
  //  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}


















