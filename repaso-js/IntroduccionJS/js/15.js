// Arrow functions

const multiply = (n1 = 5, n2 = 10) => {
  console.log(n1 * n2);
};

multiply();

const numbers = [1, 4, 9, 20, 15];

numbers.forEach((parametro) => {
  return parametro;
});

const mapNumbers = numbers.map((parametro) => {
  return parametro;
});


const numbersTwo = numbers.filter( parametro => {return parametro !== 10})

console.table(numbersTwo);