// ОПИСАНИЕ:
// Возьмите массив и удалите из него каждый второй элемент.
// Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!
function removeEveryOther(arr){
  return arr.filter((_, index) => index % 2 === 0);
}

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]))