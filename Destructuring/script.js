// const names = ['Fadhlu', 'Ibnu', 'Abbad', 'Jhon', 'Cena']
// const [firstName, middleName, lastName, ...others] = names;

// console.log(firstName)
// console.log(middleName)
// console.log(lastName)
// console.log(others)

const person = {
    firstName: "Fadhlu",
    middleName: "Ibnu",
    lastName: "Abbad",
    address: {
        street: "Jl. Kritig",
        city: "Jl. Kritig",
        country: "Indonesia",
    },
    hobby: "Game",
    channel: "Fadhlu Ibnu"
}
// const {firstName, lastName} = person

// console.log(firstName)
// console.log(lastName)


const {firstName, lastName, address:{street, city, coutry}} = person

console.log(firstName)
console.log(street)

function displayPerson({firstName, middleName, lastName}){
    console.info(firstName)
    console.info(middleName)
    console.info(lastName)
}

const person2 = {
    firstName: "Fadhlu",
    middleName: "Ibnu",
    lastName: "Abbad"
}

displayPerson(person2)