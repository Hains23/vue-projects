// Eventos JS - Clicks
const head = document.querySelector('.heading');
const links = document.querySelectorAll('.navegacion a')


head.addEventListener('click', () => {
    head.textContent = "Este texto ha sido modificado mediante un click";
})

head.addEventListener('dblclick', () => {
    head.textContent = "Este texto ha sido modificado mediante dos clicks";
})

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        link.textContent = "Nuevo Enlace"
    })
})

