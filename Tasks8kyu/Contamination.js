// ОПИСАНИЕ:
// Искусственный интеллект заразил текст символом!!
// Теперь этот текст полностью преобразован в этот символ.
// Если текст или символ пусты, верните пустую строку.
// Никогда не будет случая, когда оба они будут пустыми, поскольку ничего не происходит!!
// Примечание: Символ представляет собой строку длиной 1 или пустую строку.
// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char) {
  let b = ""
  for (let i = 0;i < text.length; i++) {
    b += char
  }
  return b
  // return char.repeat(text.length)
}

console.log(contamination("abc", "z"))