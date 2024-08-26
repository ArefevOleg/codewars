// ОПИСАНИЕ:
// Напишите функцию, которая удаляет пробелы из строки, а затем возвращает результирующую строку.
// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"

function noSpace(x){ return x.replace(/ /g, "");}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))