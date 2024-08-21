// ОПИСАНИЕ:
// В вашем классе был тест, и вы его сдали. Поздравляю!
// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.
// Вы получаете таблицу с результатами тестов ваших сверстников.
// Теперь рассчитайте среднее значение и сравните свои результаты!
// Верните значение true, если вам лучше, иначе значение false!
// Примечание:
// Ваши баллы не учитываются в сумме баллов вашего класса. Не забывайте о них при подсчете среднего балла!
function betterThanAverage(classPoints, yourPoints) {
  if (classPoints.length === 0) {
    return 0; // или можно вернуть null, NaN или бросить исключение
  }

  const sum = classPoints.reduce((acc, val) => acc + val, 0);
  const average = sum / classPoints.length;

  return average < yourPoints
  // return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))