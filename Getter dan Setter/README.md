# Getter dan Setter

Kemampuan membuat function yang berbeda untuk mengambil data (Getter) dan mengubah data (Setter) pada sebuah properti di Object. Dengan menggunakan Getter dan Setter, kita bisa melakukan hal apapun di dalam function sebelum sebuah property di akses atau diubah. jadi dengan adanya setter dan getter kita bisa mengakses sebuah function seperti sebuah property

## Getter

```js
const person = {
    firstName: "Fadhlu",
    lastName: "Ibnu",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

// memanggil get fullName()
console.log(person.fullName)
```

Untuk membuat get kita bisa langsung buat seperti halnya membuat property pada sebuah Object dengan keyword `get nama_function() { }`. Untuk memanggil getter tadi kita bisa langsung saja seperti memanggil sebuah property di object karena sejatinya function get itu akan menjadi property.

## Setter

```js
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
```