// Unir dos objectos en uno solo

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

// const newObject = Object.assign(client, product)

const newObject = {
    product,
    client
}

console.table(newObject)

