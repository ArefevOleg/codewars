// ОПИСАНИЕ:
// Создайте метод, который принимает в качестве входных данных имя,
// город и штат, чтобы поприветствовать человека. Обратите внимание,
// что имя будет представлять собой массив, состоящий из одного или нескольких значений,
// которые следует объединить с одним пробелом между каждым,
// и длина массива имен в тестовых примерах будет разной.
// Example:
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// Этот пример вернет строку
// Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))