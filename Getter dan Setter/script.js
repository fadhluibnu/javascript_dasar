const person = {
    firstName: "Fadhlu",
    lastName: "Ibnu",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const array = value.split(" ")
        this.firstName = array[0]
        this.lastName = array[1]
    }
}

// memanggil set fullName()
person.firstName = "Fadhlu Ibnu"
console.table(person)

// memanggil set fullName()
person.firstName = "Ibnu 'Abbad"
console.table(person)
