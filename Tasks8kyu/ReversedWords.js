// Описание
// Дополните решение так, чтобы оно перевернуло все слова в переданной строке.
// Слова разделены ровно одним пробелом, и начальные или конечные пробелы отсутствуют.
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  return str.split(' ').reverse().join(' '); // reverse those words
}

console.log(reverseWords("The greatest victory is that which requires no battle"))