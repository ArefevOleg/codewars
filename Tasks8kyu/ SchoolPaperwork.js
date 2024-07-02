//ОПИСАНИЕ:
// Ваши одноклассники попросили вас скопировать для них некоторые документы.
// Вы знаете, что есть n одноклассников, а в документах m страниц.
// Ваша задача - подсчитать, сколько чистых страниц вам нужно.
// Если n < 0 или m < 0, верните 0.
// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

function paperwork(n, m) {
  if(n <= 0 || m < 0) return 0
    return n * m
  }