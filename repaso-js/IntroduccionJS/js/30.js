const url = "https://jsonplaceholder.typicode.com/comments"

const consultAPI = () => {
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then(resultado => {
            console.log(resultado)
        })
        .catch(error => {
            console.log(error)
        })
        .finally( () => {
            console.log('Todo listo')
        })
}

consultAPI()