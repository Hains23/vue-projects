// Eventos JS - Input


const head = document.querySelector('.heading')

const inputName = document.querySelector('#nombre')
const inputPassword = document.querySelector('#password')

inputName.addEventListener('input', (e) => {
    head.textContent = e.target.value
    // console.log(e.target.value)
    // console.log(e.target.value.length)
    // console.log(e.target)
    // console.log("Escribiendo en el input");
})

inputPassword.addEventListener('input', () => {
    inputPassword.type = 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 100);
})