// Async Await

const url = "https://jsonplaceholder.typicode.com/comments"


const consultAPI = async () => {
    try {
        const response = await fetch(url)
        const resultado = await response.json()

        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}


consultAPI()