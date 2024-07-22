// ОПИСАНИЕ:
// Получив строку str, переверните ее и опустите все неалфавитные символы.
// Пример
// For str = "krishan", the output should be "nahsirk".
// For str = "ultr53o?n", the output should be "nortlu".
// Ввод/вывод данных
// [input] string str
// Строка состоит из строчных латинских букв, цифр и символов.
// [output] a string

function reverseLetter(str) {
return str.replace(/[^a-zA-Z]/g, '').split('').reverse().join('');
}

console.log(reverseLetter("krish21an"))