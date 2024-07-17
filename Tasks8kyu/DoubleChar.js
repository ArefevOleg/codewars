//ОПИСАНИЕ:
// Учитывая строку, вы должны вернуть строку,
// в которой каждый символ (с учетом регистра) повторяется один раз.
// "String"  -> "SSttrriinngg"

function doubleChar(str) {
  const newStr = str.split("").map(el => {return el + el}).join("")
  return newStr
}
