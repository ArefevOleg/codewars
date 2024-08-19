// ОПИСАНИЕ:
// Ваш начальник решил сэкономить деньги, купив дешевое программное обеспечение для оптического
// распознавания символов, которое позволяет сканировать текст старых романов в вашу базу данных.
// Сначала кажется, что оно хорошо фиксирует слова, но вы быстро замечаете,
// что оно вставляет множество цифр в случайные места текста.
// Examples (input -> output)
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// "Dsa32 cdsc34232 csa!!! 1I 4Am cool!" -> "Dsa cdsc csa!!! I Am cool!"
// Ваши измученные коллеги обращаются к вам за решением,
// как взять этот искаженный текст и удалить все цифры.
// Ваша программа введет строку, удалит все числовые символы и вернет строку
// с интервалами и специальными символами ~#$%^&!@*():;"'.,? все без изменений.

function stringClean(s){
  return s.replace(/[0-9]/g, '');
}

console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"))