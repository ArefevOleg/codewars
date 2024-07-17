//ОПИСАНИЕ:
// Вы пишете код для управления светофорами в вашем городе.
// Вам нужна функция для обработки каждого перехода с зеленого на желтый,
// красный и затем снова на зеленый.
// Завершите работу функции, которая принимает в качестве аргумента строку,
// представляющую текущее состояние светофора, и возвращает строку,
// представляющую состояние, в которое должен перейти светофор.
// Например, если на входе зеленый, на выходе должен быть желтый.

function updateLight(current) {
  if (current === "green") {
    return "yellow"
  } else if (current === "yellow") {
    return "red"
  } else if (current === "red") {
    return "green"
  }
  // return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

console.log(updateLight("green"))