//ОПИСАНИЕ:
// Создайте боевую функцию, которая принимает текущее здоровье игрока
// и количество полученного урона и возвращает новое здоровье игрока.
// Здоровье не может быть меньше 0.

function combat(health, damage) {
  const res = health - damage
  return res < 0 ? 0 : res
  }
//return health < damage ? 0 : health - damage