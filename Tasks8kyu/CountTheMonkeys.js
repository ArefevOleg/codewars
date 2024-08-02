// ОПИСАНИЕ:
// Вы берете своего сына в лес, чтобы посмотреть на обезьян.
// Вы знаете, что их там определенное количество (n), но ваш сын еще слишком мал,
// чтобы просто оценить все количество, он должен начинать считать их с 1.
// Как хороший родитель, вы будете сидеть и считать вместе с ним. Учитывая число (n),
// заполните массив всеми числами вплоть до этого числа включительно, но исключая ноль.
// For example(Input --> Output):
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

function monkeyCount(n) {
  const arr = [];
  const length = n + 1;
  for (let i = 1; i < length; i++) {
    arr.push(i);
  }
  return arr
}

console.log(monkeyCount(20))