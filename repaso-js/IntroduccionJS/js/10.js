// Arrays

const numbers = [1, 5, 9, 10, 30, 2];

// numbers.push(90);  Añadir elemento al final
// numbers.unshift(10);  Añadir elemento al inicio
// numbers.pop();  Eliminar elemento al final
// numbers.shift();  Elimianr elemento al inicio

// numbers.splice(2, 1);  Con splice el primer parametro es decir el 2 es el punto de partida desde que elemento comenzara a eliminr otros, el segundo parametro es la cantidad de elemenos, especificamente para ponerle un fin

// Crea un nuevo arreglo en base al original

const numbersSecond = numbers.filter(function (tech) {
  //   console.log(tech);
  return tech !== 5;
});

console.table(numbersSecond);

// const newArray = [...numbers];  Generar copia de un array

// console.table(numbers);
// console.table(newArray);
