# With Statement

Fitur yang digunakan untuk menurunkan sebuah scope data. Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya.

## Tanpa With Statement

```js
// tanpa with statement
const person = {
    firstName : 'Fadhlu',
    middleName : 'Ibnu',
    lastName : 'Abbad'
}
console.log(person.firstName)
console.log(person.middleName)
console.log(person.lastName)
```

## Dengan with statement

```js
const person = {
    firstName: 'Fadhlu',
    middleName: 'Ibnu',
    lastName: 'Abbad'
}
with (person) {
    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
}
```

Jadi kita bisa mempersingkat dalam penulisan, dimana kitatidak mengulang penulisan `person`

# With Statement Tidak Direkomendasikan

Walaupun ini sangat mempersingkat. Namun tidak direkomendasikan karena dengan ini membuat kode menjadi ambigu

contoh

```js
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
```