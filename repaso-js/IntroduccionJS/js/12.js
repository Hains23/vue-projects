// Iteradores

const numbers = [1, 5, 9, 10, 30, 2];

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   console.log(element);
// }

const numberTwo = numbers.forEach(function (numberOne) {
  return numberOne;
});

// forEach con function

// numbers.forEach(function (number) {
//   console.log(number);
// });

// Map

const numbersMap = numbers.map(function (number) {
  return number;
});

console.log(numberTwo);
console.log(numbersMap);

// Diferencia entre map y forEach, map genera un nuevo arrelgo con return, mientras que forEach itera sobre los elementos de un arreglo ya existentes, forEach solo sirve para iterar, mientras que map sirve tanto para iterar como para generar un nuevo arreglo mediante una condicion o return
