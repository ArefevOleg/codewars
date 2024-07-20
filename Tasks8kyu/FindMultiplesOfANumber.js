// ОПИСАНИЕ:
// В этом простом упражнении вы создадите программу,
// которая принимает значение integer и возвращает список значений,
// кратных этому значению, вплоть до другого значения limit . Если limit кратно целому числу,
// его также следует включить. В функцию всегда будут передаваться только целые положительные числа,
// не состоящие из 0. Предел всегда будет выше основания.
// Например, если переданные параметры равны (2, 6), функция должна возвращать [2, 4, 6],
// поскольку 2, 4 и 6 являются кратными от 2 до 6.

function findMultiples(integer, limit) {
  const multiples = [];
  for (let i = integer; i <= limit; i++) {
    if (i % integer === 0 ) {
      multiples.push(i);
    }
  }
  return multiples
}

console.log(findMultiples(2, 6))