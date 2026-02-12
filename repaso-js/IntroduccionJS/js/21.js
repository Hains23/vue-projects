// Optional Chaining

const student = {
    name : 'Juan',
    class : 'Programming 1',
    age : 10
}

setTimeout(() => {
    student.test = {
        test1: 100, test2: 50, test3: 80,
    }

    console.log(student.test?.test2)
}, 3000);



console.log(student.test?.test1)
console.log('Hello World')