// Operador || (OR) y && (AND)

const available = 100;
const total = 500; 
const mastercard = true;

if(mastercard) {
    console.log("Si puedes pagar")
} else if (available > total) {
    console.log("Si puedes pagar")
} else {
    console.log("No puedes pagar")
}


if(mastercard && available > total) {
    console.log("Si puedes pagar")
} else {
    console.log("No puedes pagar")
}