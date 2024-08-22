// ОПИСАНИЕ:
// Удалите n восклицательных знаков в предложении слева направо. n — положительное целое число.
// remove("Hi!",1) === "Hi"
// remove("Hi!",100) === "Hi"
// remove("Hi!!!",1) === "Hi!!"
// remove("Hi!!!",100) === "Hi"
// remove("!Hi",1) === "Hi"
// remove("!Hi!",1) === "Hi!"
// remove("!Hi!",100) === "Hi"
// remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
// remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

function remove(s,n){
  let count = 0;
  const result = s.split('').filter(char => {
    if (char === '!' && count < n) {
      count++;
      return false;
    }
    return true;
  }).join('');
  return result;
  // return n>0 ? remove(s.replace('!', ''), n-1) : s;
}

console.log(remove("Hi!!!",1))
// Используем метод split для разделения строки на массив символов.
// Используем метод filter для удаления восклицательных знаков, пока количество
// удаленных знаков меньше n.
// Используем метод join для объединения массива символов обратно в строку.