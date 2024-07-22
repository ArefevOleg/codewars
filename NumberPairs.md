Пары целых чисел из двух массивов и возврат нового массива больших чисел.

```javascript
function getLargerNumbers(a, b) {
  const result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result.push(a[i]);
    } else {
      result.push(b[i]);
    }
  }
  return result
}
getLargerNumbers([13, 64, 15, 17, 88],[23, 14, 53, 17, 80])
```
