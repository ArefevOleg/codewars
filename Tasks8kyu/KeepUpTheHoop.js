//ОПИСАНИЕ:
// Алексу только что купили новый обруч, он в восторге от него, но чувствует себя обескураженным, потому что его младший брат лучше его.
// Напишите программу, в которую Алекс сможет ввести (n) количество оборотов обруча, и она отправит ему ободряющее сообщение:
// Если Алекс соберет 10 или более обручей, верните строку "Отлично, теперь переходим к трюкам".
// Если он не соберет 10 обручей, верните строку "Продолжай, пока не добьешься этого".
function hoopCount(n) {
  return n >= 10 ?  "Great, now move on to tricks" : "Keep at it until you get it"
}