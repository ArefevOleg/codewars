// ОПИСАНИЕ:
// Создайте функцию с именем _if, которая принимает
// 3 аргумента: значение bool и 2 функции (которые не принимают никаких параметров): func1 и func2
// Если значение bool истинно, следует вызвать функцию func1,
// в противном случае вызовите функцию func2.
// Example:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.
function _if(bool, func1, func2) {
  if (bool) {
    func1();
  } else {
    func2();
  }
}

console.log(_if(true, function(){console.log("True")}, function(){console.log("false")}))