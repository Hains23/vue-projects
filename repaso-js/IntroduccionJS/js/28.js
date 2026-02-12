// Evento Submit

const form = document.querySelector('#formulario')

form.addEventListener('submit', e => {
    e.preventDefault()

    // Prevenir Alerta Duplicada

    const preventAlert = document.querySelector('.alert')
    preventAlert?.remove()

    // Generar Alerta

    const alert = document.createElement('DIV')
    alert.textContent = 'Todos los campos son obligatorios'
    alert.classList.add('alert', 'bg-red-500', 'text-white', 'uppercase', 'text-sm', 'text-center', 'p-2', 'font-black')



    const inputName = document.querySelector('#nombre').value
    const inputPassword = document.querySelector('#password').value
    if(inputName === '' || inputPassword === '') {
        form.appendChild(alert) 

        setTimeout(() => {
            alert.remove()
        }, 1000);
        return
    }

})