console.log(this)

function sample() {
    console.log(this)

    function inner() {
        console.log(this)
    }

    inner()
}
sample()

const person = {
    name: "Ibnu",
    sayHello : function (value){
        console.log(`Hello ${value} My Name is ${this.name}`)
    }
}

person.sayHello('Fadhlu')