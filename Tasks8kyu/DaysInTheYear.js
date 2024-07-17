//ОПИСАНИЕ:
// Вариант определения високосных лет,
// предполагающий, что используются только целые числа,
// а годы могут быть отрицательными и положительными.
// Напишите функцию, которая будет возвращать дни в году и год,
// введенные в строку. Например:
// yearDays(2000) returns "2000 has 366 days"
// Есть несколько предположений, что мы примем год 0,
// хотя в григорианском календаре года 0 нет.
// Также основные правила проверки високосного года заключаются в следующем:
// Большинство лет, которые можно разделить на 4 поровну, являются високосными.
// Исключение: вековые годы НЕ являются високосными,
// ЕСЛИ их нельзя разделить на 400 поровну.
// Таким образом, годы 0, -64 и 2016 вернут 366 дней. А 1974, -10 и 666 вернут 365 дней.
// function yearDays(year) {
// if (year / 4 ) {
//     return `${year} has 365 days`
//   } else {
//     return `${year} has 366 days`
//   }
// }
//
// console.log(yearDays(-1800))
// // console.log(-1800 % 400)