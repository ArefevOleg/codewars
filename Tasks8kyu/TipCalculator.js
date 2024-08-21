// ОПИСАНИЕ:
// Воспользуйтесь функцией, которая рассчитает, сколько вам нужно оставить чаевых,
// исходя из общей суммы счета и качества обслуживания.
// Вам необходимо учитывать следующие оценки:
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// Рейтинг не зависит от регистра (so "great" = "GREAT"). Если получен нераспознанный рейтинг,
// то вам нужно вернуть:
// "Rating not recognised" в Javascript, Python и Ruby...
// ...или null в Java
// ...или -1 в C#
// Поскольку вы приятный человек, вы всегда увеличиваете чаевые, независимо от качества обслуживания.

function calculateTip(amount, rating) {
  if (rating === "Excellent") {
    return amount / 5
  }
}

console.log(calculateTip(20, "Excellent"))