//ОПИСАНИЕ:
// Создайте функцию, которая возвращает CSV-представление двумерного числового массива.
// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 
    
// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

function toCsvText(arr) {
  // return array.join('\n');
  return arr.reduce((acc, el, i) => {
     if (i === arr.length -1) {
       return acc + el.join()
     } else {
       return acc + el.join() + "\n"
     }
     
   },"")
 }