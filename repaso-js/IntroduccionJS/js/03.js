// Tipos de datos

// Undefined

let price
console.log(typeof price);

// Number (Manejara tipo Number para variables con valores como: 15.5, -15)

let cost = 15;
console.log(typeof cost);

// String (Cadena de texto)

let edad = "15";
console.log(typeof edad);

// BigInt (Numero Grande, no se pueden mesclar con otros tipos de datos tipo Number) podemos usar la funcion Number() para convertir en un numero otro tipo de dato tal cual como BigInt para mezclarlo con tipos de dato tipo Number

let bigNumber = BigInt(130000);
console.log(typeof Number(bigNumber));  

// Object

let numbers = [1, 3, 5];
const nulo = null; 
const student = {};
console.log(typeof numbers);
console.log(typeof nulo);
console.log(typeof student)


// Boolean (True o False)

const genero = true;
console.log(typeof genero);

// Symbols (Los simbolos siempre van a ser diferentes y unicos)

const firstSymbol = Symbol(3);
const secondSymbol = Symbol(3);

console.log(firstSymbol === secondSymbol);