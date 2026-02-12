// Objectos

// const productoName = "Tablet";
// const productPrice = 300;
// const available = true;


const product = {
    name : "Tablet",
    price : 300,
    available : true, 
}

// Con console.table formateamos la manera en la que se muestra el objecto en consola, en este caso en forma de tabla

console.table(product)
console.log(product.name);
console.log(product.available)
console.log(product['price'])


// Destructuring

const { price, available } = product;
console.log(price)
console.log(available)


// Object Literal

const authen = true
const user = "Pedro"
const salary = 5000;

const newObject = {
    authen,
    usuario : user,
    salary : salary
}

console.table(newObject)