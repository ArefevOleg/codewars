//ОПИСАНИЕ:
// На каждую хорошую идею ката, похоже,
// приходится немало плохих идей!
//   В этом ката вам нужно проверить предоставленный
//   массив (x) на наличие хороших идей
//   "good" и плохих идей "bad". Если есть
//   одна или две хорошие идеи, верните "Publish!",
//   если их больше двух, верните "I smell a series!".
//   Если хороших идей нет, как это часто бывает, верните "Fail!".

function well(x){
const g = x.filter(el => {
  return el.toLowerCase().startsWith('good')
})
  if (g.length === 1 || g.length === 2) {
    return "Publish!"
  } else if (g.length > 2) {
    return "I smell a series!"
  } else if (g.length === 0){
    return "Fail!"
  }
}

console.log(well(['good', 'good','good','bad', 'bad', 'bad', 'bad']))
