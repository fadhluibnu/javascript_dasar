# For Of

Jika for in melakukan iterasi/mengembalikan property dan index, sedangkan For Of digunakan untuk melakukan iterasi/mengembalikan value dari itrable object, array, string, dll.

For of tidak bisa digunakan di object karena object bukanlah iterable

## For Of di Array

```js
const names = ['Fadhlu', 'Ibnu', 'Abbad']

for (const name of names) {
    console.log(`${name}`)
}
```

Jadi jika kode di atas akan mengembalikan value nya yaitu `'Fadhlu', 'Ibnu', 'Abbad'` bukanlah index seperti yang dihasilkan for in

## For Of di String

```js
const fullName = 'Fadhlu Ibnu Abbad'

for (const character of fullName) {
    console.log(character)
}
```

Jadi jika for of ini digunakan di string, maka akan mengembalikan setiap character huruf/angka di variable tersebut dan menampilkan satu persatu.
