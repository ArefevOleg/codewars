//ОПИСАНИЕ:
// Напишите функцию RemoveExclamationMarks,
// которая удаляет все восклицательные знаки из заданной строки.
function removeExclamationMarks(s) {
  return s.replace(/!+$/, "").replace(/!/g, "");
}

console.log(removeExclamationMarks("YxpSjUiVjy!QLmdcNjciS eUBlRpMpgO!TOgifqLvMZ!"))