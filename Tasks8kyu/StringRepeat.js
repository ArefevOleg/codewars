// ОПИСАНИЕ:
// Напишите функцию, которая принимает целое число n и строку s в качестве параметров
// и возвращает строку s, повторенную ровно n раз.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr (n, s) {
 return s.repeat(n)
 // let result = '';
 // for (let i = 0; i < n; i++) {
 //  result += s;
 // }
 // return result;
}

console.log(repeatStr(4,"Hi"))

