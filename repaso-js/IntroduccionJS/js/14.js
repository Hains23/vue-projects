// Function Expression

multiply();

// const multiply = function (n1, n2) {
//   n1 = 5;
//   n2 = 5;
//   console.log(n1 * n2);
// };

// multiply();

function multiply(n1, n2) {
  n1 = 5;
  n2 = 5;
  console.log(n1 * n2);
}

// Diferencia entre las dos funciones, la funcion de arriba es una variable declarada que recibe el valor de una funcion haciendo que si intentamos acceder a dicha funcion antes de ser declarada, aparecera un error debido al orden en el que se ejecuta las lineas de codigo, mientras que la funcion de abajo al ser declara directamente como una funcion permite acceder a ella sin importar el orden o lugar desde el que se este accediendo
