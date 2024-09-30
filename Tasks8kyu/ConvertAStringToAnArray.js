// Описание:
// Напишите функцию для разбиения строки и преобразования ее в массив слов.
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
return string.split(" ")
}

console.log(stringToArray("I love arrays they are my favorite"))