// Scope Variables

// Alcance, estamos definiendo una variable global para acceder a ella de manera global

let price = 1500;

function functioOne() {
    // Creamos y definimos una variable que solamente existe en el bloque de codigo de la funcion, si no tuviera let, significaria que estariamos accediendo a la variable ya definida anteriormente de manera global y reescribiendo su valor
    let price = 3000;
    console.log(price)
}

functioOne()
console.log(price)