//ОПИСАНИЕ:
// Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0»,
// а любую цифру от 5 и выше на «1». Верните полученную строку.
// Примечание: ввод никогда не будет пустой строкой.
const str = "32357895345677213"
function fakeBin(x){
 const newStr = x.split("").map(Number => Number >= 5 ? Number = 1 : Number = 0)
  return newStr.join("")
  // return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
