//ОПИСАНИЕ:
// Завершите функцию square sum так, чтобы она возводила в квадрат каждое 
// переданное ей число, а затем суммировала результаты.
// 
function squareSum(numbers){
  if (numbers.length === 0) return 0
  const res = numbers.map(el => {
    const sum = el * el
    return sum
  })
return res.reduce((a, b) => (a + b))
}