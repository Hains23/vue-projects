// Template strings, concatenacion

const client = "Pedro";
const salary = 3500; 

console.log('El cliente: ' , client , ' Saldo del cliente: ' , salary)
console.log(`Cliente: ${client} Su saldo respectivo es de: ${salary}`)

const product = {
    name : "Tablet",
    price : 300,
    available : true, 
}

const { name, price } = product

console.log(`El producto: ${product.name} 
Tiene un respectivo precio de: ${product.price}`)
console.log(`El producto: ${name}
Tiene un respectivo precio de: ${price}`)