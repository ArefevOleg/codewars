//ОПИСАНИЕ:
// Учитывая набор чисел, верните аддитивное значение, обратное каждому из них. 
//Каждое положительное значение становится отрицательным, а отрицательные значения становятся положительными.

function invert(array) {
  const oppositeArr = [];

for (let i = 0; i < array.length; i++) {
  oppositeArr.push(-array[i]);
}
   return oppositeArr;
}