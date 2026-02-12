// Evento Submit

const form = document.querySelector('#formulario')

form.addEventListener('submit', e => {
    e.preventDefault()
    const inputName = document.querySelector('#nombre').value
    const inputPassword = document.querySelector('#password').value
    if(inputName === '' || inputPassword === '') {
        console.log("Todos los campos son obligatorios")
        return
    }
    console.log('Todo bien, enviando formulario...')
    // if(inputName === 'Juan' && inputPassword === '123') {
    //     console.log("Has iniciado sesion")
    // } else {
    //     console.log("Credenciales incorectas")
    // }
})