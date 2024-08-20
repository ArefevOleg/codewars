// ОПИСАНИЕ:
// Привет, приятель!
// Добро пожаловать в семь морей.
// Ты капитан пиратского корабля.
// Ты сражаешься против королевского флота.
// У тебя есть пушки наготове.... или это они?
// Ваша задача - проверить, заряжены ли стрелки и готовы ли они к стрельбе, если да, то стреляйте! Fire!
// Если они не готовы, то бейте меня по голове! Shiver me timbers!
// У вас есть 2, 3 или 4 стрелка для каждого теста.
// Когда вы проверите, готовы ли они, их ответы можно найти в словаре, и они будут либо "aye", либо "nay"
// Стрельба, когда наготове не все стрелки, не является оптимальной (это не произвольный огонь,
// это огонь по приказу капитана, или иди по доске, грязный морской волк!)
// Если все ответы "око", то стреляйте! если один или несколько ответов "нет",
// то трясите меня как следует!

const cannonsReady = (gunners) => {
  const allValues = Object.values(gunners)
  const allElementsAreEqual = allValues.every(element => element === allValues[0]);
  if (allElementsAreEqual) {
   return "Fire!"
  } else {
    return  "Shiver me timbers!"
  }
  // return Object.values(gunners).some(m => m === 'nay') ? 'Shiver me timbers!' : 'Fire!';
  // return Object.values(gunners).includes('nay')?'Shiver me timbers!':'Fire!';
}
let a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
let b = {'Mike':'aye','Joe':'nay','Johnson':'aye','Peter':'aye'};
console.log(cannonsReady(a))