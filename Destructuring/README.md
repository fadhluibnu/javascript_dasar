# Destructuring

Destructuring adalah fitur yang bisa digunakan untuk membongkar value - value di array atau object ke dalam variable variable. Firu ini sangant mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan satu persatu.

## Mengambil Data dari Array


- tanpa menerapkan destructuring

    ```js
    const names = ['Fadhlu', 'Ibnu', 'Abbad']
    const firstName = names[0]
    const middleName = names[1]
    const lastName = names[2]
    ```

    Jika tanpa teknik destructuring kita harus mengakses data array satu persatu

- menggunakan destructuring

    ```js
    const names = ['Fadhlu', 'Ibnu', 'Abbad', 'Jhon', 'Cena']
    const [firstName, middleName, lastName, ...others] = names;

    console.log(firstName)
    console.log(middleName)
    console.log(lastName)
    ```

    Jadi `firstName` akan mengakses data array index 0, `middleName` akan mengakses data array index ke 1, `lastName` akan mengakses data array index ke 2, dan `...others` itu adalah spread operator akan mengakses sisa data data yang belum dipanggil yaitu index ke 3 dan 4.

## Mengambil Data di Object

```js
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
const {firstName, lastName} = person

console.log(firstName)
console.log(lastName)
```

berbeda dengan array, jika array untuk mengakses datanya berdasarkan posisi index nya, sedangkan object kita harus memanggil sesuai nama propertynya.

### Destructuring Nested Object

```js
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
const {firstName, lastName, address:{street, city, coutry}} = person

console.log(firstName)
console.log(lastName)
```

### Destructuring di Function Parameter (Object)

Destructurin tidak hanya bisa dilakukan di variable, tapi juga bisa dilakukan di function parameter, Hal ini membuat kita mudah ketika ingin mengambil nested data dalam array atau object dalm function 

```js
function displayPerson({firstName, middleName, lastName}){
    console.info(firstName)
    console.info(middleName)
    console.info(lastName)
}

const person = {
    fisrtName: "Fadhlu",
    middleName: "Ibnu",
    lastName: "Abbad"
}

displayPerson(person)
```

Ada function `displayPerson` dimana parameter yang akan diterima adalah sebuah object, yang nantinya objectnya langsung dilakukan sebuah destructuring.

### Destructuring di Function Parameter (Array)

```js
function sum([first, second]) {
    console.log(first)
    console.log(second)
}

sun([2,5])
```

## Destructuring Default Value

Kita bisa menambakan default value pada sebuah destructuring. Jadi saat kita mencoba mengakses data array namun ternyata datanya tidak ada, maka kita bisa menambahkan defaullt value. Beitu juga pada object, jika ternyata property nya tidak ada maka kita bisa manambahkan default value.

```js
const names = ["Fadhlu", "Ibnu"]
const [firstName, middleName, lastName = "Abbbad"] = names

console.log(firstName)
console.log(middleName)
console.log(lastName)
```

Jadi diatas kita mencoba menggunakan destructuring default value. Diatas ada variable `names` dengan 2 value yaitu `Fadhlu` dan `Ibnu` sedangkan dibawahnya kita mengakses/melakukan destructuring sebanyak 3 kali yaitu `firstName` , `middleName` dan `lastName`. dan berarti `lastName` tidak memiliki sebuah value. maka dari itu kita bisa gunakan `lastName = "Abbad"` untuk menetapkan nilai default saat value itu tidak ada.

## Menggunakan Nama Variable Yang Berbeda Saat Melakukan Destructuring Pada Object

Saat melakukan destructuring pada array kita dengan mudahnya melakukan membuat nama variable sesuka kita. Berbeda dengan saat melakukan destructuring pada object, disini kita harus membuat nama variable yang sama dengan nama propertynya. Sebenarnya Kita juga bisa mengubah nama variablenya saat melakukan destructuring object jika kita mau

```js
const person = {
    fisrtName: "Fadhlu",
    middleName: "Ibnu",
    lastName: "Abbad"
}

let {
    fisrtName: namaDepan,
    middleName: namaTengah,
    lastName: namaBelakang = "Ini cara menambahkan default value"
} = person
```