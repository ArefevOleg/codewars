// ОПИСАНИЕ:
// Вы перестраиваете дизайн блога, и записи в нем отображаются в формате Дня недели,
// месяца, времени для отображения даты и времени, когда была сделана запись,
// например, пятница, 2 мая, 19:00.
// Вам не хватает места на экране, и на некоторых страницах вы хотите отображать сокращенный формат,
// например, День недели, месяц, без указания времени.
// Напишите функцию, которая принимает дату/время веб-сайта в исходном
// строковом формате и возвращает сокращенный формат.
// Ввод
// Ввод всегда будет строкой, например, "Friday May 2, 7pm".
// Выход
// Результатом будет сокращенная строка, например, "Friday May 2".

function shortenToDate(longDate) {
return longDate.split(',')[0]
}

console.log(shortenToDate("Friday May 2, 9am"))

// let str = "Пример строки, с запятой";
// let index = str.indexOf(',');
// let result = str.substring(0, index);
// console.log(result); // Вывод: "Пример строки"

// let str = "Пример строки, с запятой";
// let index = str.indexOf(',');
// let result = str.slice(0, index);
// console.log(result); // Вывод: "Пример строки"

// let str = "Пример строки, с запятой";
// let result = str.match(/[^,]+/)[0];
// console.log(result); // Вывод: "Пример строки"