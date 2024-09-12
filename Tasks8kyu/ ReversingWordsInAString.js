// Описание:
// Вам нужно написать функцию, которая меняет местами слова в заданной строке.
// Слова всегда разделяются одним пробелом. Поскольку ввод может содержать конечные пробелы,
// вам также придется игнорировать ненужные пробелы.
// Example (Input --> Output)
// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string){
  const arr = string.split(' ');
  return arr.reverse().join(' ')
  // return string.split(' ').reverse().join(' ');
}

console.log(reverse('I am an expert at this')) //[ 'Hello', 'World' ]
