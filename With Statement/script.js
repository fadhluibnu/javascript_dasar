// tanpa with statement
// const person = {
//     firstName : 'Fadhlu',
//     middleName : 'Ibnu',
//     lastName : 'Abbad'
// }
// console.log(person.firstName)
// console.log(person.middleName)
// console.log(person.lastName)

// dengan with statement
const person = {
    firstName: 'Fadhlu',
    middleName: 'Ibnu',
    lastName: 'Abbad'
}
const firstName = "Budi"
const lastName = "Nugraha"
with (person) {
    console.log(firstName) // niatnya ingin akses Budi malah akses Fadhlu
    console.log(middleName)
    console.log(lastName) // niatnya ingin akses Nugraha malah Akses Abbad
}