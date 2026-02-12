// Arrays Methods con Arrows Methods

const names = ['Juan', 'Pedro', 'Pepe', 'Charlie'];
const numbers = [1, 4, 9, 20, 15];

// Includes - Busca en el array que se le indique el elemento que exista o coincida dentro del array si existe = true si no existe = false, guardándolo en una variable
let result = names.includes('Pedro');

// findIndex - Busca el indice del elemento que exista en el array
result = names.findIndex(name => name === 'Pepe')

// Some - Busca dentro del array un elemento que cumpla con una condicion devolviendo true o false

result = numbers.some(number => number > 20)

// Find - Devuelve el primer elemento que cumpla con la condicion en este caso vendria a ser "4"

result = numbers.find(number => number > 15)

// Every - Devuelve un true si todos los elementos dentro de un array cumplen con una condicion, devuelve un false si hay al menos un elemento que no cumpla con la condicion

result = numbers.every(number => number >= 1)

// Reduce - retorna un acumulado

result = numbers.reduce( (total, number) => number + total)

console.log(result)
