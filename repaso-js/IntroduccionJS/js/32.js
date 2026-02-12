const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

// const consultarAPI = async () => {
//     const response = await fetch(url)
//     const resultado = await response.json()
    

//     console.log(resultado)
// }

const consultarAPI2 = async () => {

    const inicio = performance.now()

    const [respuesta, respuesta2] = await Promise.all([
        fetch(url),
        fetch(url2)
    ])

    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    const fin = performance.now()

    console.log(`Tiempo estimado es de: ${fin - inicio} ms`)
}

// consultarAPI()
consultarAPI2()