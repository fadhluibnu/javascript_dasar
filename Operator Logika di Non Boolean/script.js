console.log("hello" || '')
console.log(0 || "NOL")
console.log(0 || false)


const person = {
    firstName: 'Fadhlu',
    lasName: 'Ibnu'
}
const name = person.firstName || person.lasName
console.log(name)