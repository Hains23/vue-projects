// Seleccionar elementos de HTML

const head = document.querySelector('.heading');
head.textContent = "Manipulacion del Codigo HTML desde JS"

console.log(head)
console.log(head.innerHTML)
console.log(head.tagName)
console.log(head.id)
console.log(head.classList)

const links = document.querySelectorAll('.navegacion a')

console.log(links)