const person = {
    firstName : 'Fadhlu',
    middleName : 'Ibnu',
    lastName : 'Abbad'
}

for (const property in person) {
    console.log(`${property} : ${person[property]}`)
}


const names = ['Fadhlu', 'Ibnu', 'Abbad']

for (const index in names) {
    console.log(`${index} : ${names[index]}`)
}