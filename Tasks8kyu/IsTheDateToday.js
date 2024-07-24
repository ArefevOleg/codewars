// ОПИСАНИЕ:
// Напишите простую функцию, которая принимает в качестве параметра объект даты
// и возвращает логическое значение, указывающее, сегодняшняя дата или нет. Убедитесь,
// что ваша функция не возвращает ложное срабатывание, проверяя только день.

function isToday(date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Сбрасываем время текущей даты в 00:00:00.000
  const inputDate = new Date(date);
  inputDate.setHours(0, 0, 0, 0); // Сбрасываем время входной даты в 00:00:00.000
  return today.getTime() === inputDate.getTime();
  // return new Date().toDateString() === date.toDateString();
}

console.log(isToday(new Date()))
// const now = new Date();
// const year = now.getFullYear();
// const month = (now.getMonth() + 1).toString().padStart(2, '0');
// const day = now.getDate().toString().padStart(2, '0');
// const hours = now.getHours().toString().padStart(2, '0');
// const minutes = now.getMinutes().toString().padStart(2, '0');
// const seconds = now.getSeconds().toString().padStart(2, '0');
// console.log(`${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`);