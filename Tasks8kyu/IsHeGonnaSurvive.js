//ОПИСАНИЕ:
// Герой направляется в замок, чтобы завершить свою миссию. Однако ему сказали, что замок окружен парой могущественных драконов! для победы над каждым драконом требуется 2 пули, наш герой понятия не имеет, сколько пуль у него должно быть с собой.. Если предположить, что он захватит определенное количество пуль и двинется вперед, чтобы сразиться с другим определенным количеством драконов, выживет ли он?
// Верните true, если да, или false в противном случае :)

function hero(bullets, dragons){
  const bulletsRequired = dragons * 2;
 
   if (bullets >= bulletsRequired) {
     return true;
   } else {
     return false;
   }
 }