// ОПИСАНИЕ:
// Наступил конец учебного года, решающий момент для вашего школьного отчета.
// Необходимо подсчитать средние показатели. Все ученики приходят к вам и умоляют вас
// подсчитать для них средние показатели. Легко! Вам просто нужно написать сценарий.
// Возвращает среднее значение данного массива,
// округленное в меньшую сторону до ближайшего целого числа.
// Массив никогда не будет пустым.

function getAverage(marks){
  if (marks.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  let average = sum / marks.length;
  return Math.floor(average);
  // return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

console.log(getAverage([1,5,87,45,8,8 ]))