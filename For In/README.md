# For In

For In merupakan perulangan for yang digunakan untuk mengiteasi seluruh data property di object atau index di array. Namun tidak direkomendasikan untuk digunakan pada Array, karena biasanya kita butuh sekali index untuk array, nah untuk array kita bisa gunakan [For Of](../For%20Of/)

## For In di Object

```js
const person = {
    firstName : 'Fadhlu',
    middleName : 'Ibnu',
    lastName : 'Abbad'
}

for (const property in person) {
    console.log(`${property} : ${person[property]}`)
}
```

Jadi for in akan melooping object dan mengembalikan propertynya bukan valunya. artinya di deklarasi variabel `const property` akan menerima nama property dari hasil looping object `person` satu per satu.

## For In di Array

```js
const names = ['Fadhlu', 'Ibnu', 'Abbad']

for (const index in names) {
    console.log(`${index} : ${names[index]}`)
}
```

Kalau di array mengembalikan nama propertynya. Nah kalo di array akan mengembalikan indexnya