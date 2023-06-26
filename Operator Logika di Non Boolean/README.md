# Operator Logika di Non Boolean

Ada dua operator logika yang sering digunakan yaitu AND(&&) dan OR (||) digunakan unduk dua data boolean. Namun di javascript kita bisa menggunakan perator logika AND dan OR untuk tipe data non boolean.

## Operator OR(||) di Non Boolean

cara kerjanya yaitu

- Operator ini membaca dari kiri ke kanan
- Operator ini mengambil nilai pertama yang truthy
- Jika semua bernilay falsy maka, nilai terakhir yang akan diambil.

### Mencoba

```js
console.log("hello" || '')
console.log(0 || "NOL")
console.log(0 || false)
```

- `console.log("hello" || '')`

    `"hello"` itu berarti true dan `''` itu berarti false. Jadi outpunya adalah `"hello"` karena jika ada yang true maka akan di ambil

- `console.log(0 || "NOL")`

    `0` itu false dan `"NOL"` itu berarti true. Jadi outpunya adalah `"NOL"` karena jika ada yang true maka akan di ambil

- `console.log(0 || false)`

    Outputnya yang muncul harusnya adalah false, karena jika semua nya bernilai false maka yang terakhir yang akan diambil


### Kapan kita menggunakan ini?

```js
const person = {
    firstName: 'Fadhlu',
    lasName: 'Ibnu'
}
const name = person.firstName || person.lasName
```

Jadi jika salah satu dari `person.firstName` atau `person.lasName` bernilai true atau keduanya bernilai true maka salah satu dari mereka yang akan digunakan. Jadi jika code di atas dijalankan maka variabel name berisi `Fadhlu` karena `person.firstName` dan `person.lasName` bernilai true semua jadi yang diambil yang paling kiri yaitu `person.firstName`. Ingat `Operator ini membaca dari kiri ke kanan`

## Operator AND(&&) di Non Boolean

cara kerjanya yaitu

- Operator ini membaca dari kiri ke kanan
- Operator ini mengambil nilai pertama yang falsy jadi bisa dibilang ini kebalikan dari operator OR
- Jika semua bernilay falsy maka, nilai terakhir yang akan diambil.

### Mencoba

```js
console.log('Hello' && '')
console.log('0' && 'NOL')
```

- `console.log('Hello' && '')`

    Jadi harusnya muncul `''` atau kosong

- `console.log('0' && 'NOL')`

    Jadi harusnya muncul `NOL`. Karena akan menampilkan truhty yang terakhir
