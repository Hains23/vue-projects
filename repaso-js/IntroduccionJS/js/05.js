const product = {
    name : "Tablet",
    price : 300,
    available : true, 
}

// Object.freeze previene la modificacion de un objecto

// Object.freeze(product)
// Object.seal(product)

// Reescribir valores, añadir nuevo valor

product.name = "Monitor"

// Añadir valor

product.description = "HDMI, VGA, 144Hz"

// Eliminar un valor

delete product.available

// Segunda manera de eliminar valores de un objecto

const { available, price, ...product2 } = product
console.table(product)
console.table(product2)