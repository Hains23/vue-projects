// Destructuring de 2 o más objectos

const product = {
    name : "Tablet",
    price : 300,
    available : true, 
}

const client = {
    name : "Pedro",
    age : 15,
    active : true,
}

const { name: nameProduct } = product;
const { name: nameClient } = client;