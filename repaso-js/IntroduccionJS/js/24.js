const head = document.querySelector('.heading');
head.textContent = "Manipulacion del Codigo HTML desde JS"
head.classList.add('header')
head.classList.remove('heading')

const inputNombre = document.querySelector('#nombre');
inputNombre.value = "Juan";
const inputPassword = document.querySelector('#password')
inputPassword.value = 123;

const links = document.querySelectorAll('.navegacion a')

links.forEach(links => links.textContent = 'Nuevo Enlace');