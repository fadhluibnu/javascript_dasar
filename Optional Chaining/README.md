# Optional Chaining

Operator ini diwaliki oleh tanda `?` yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah object dari data nullish. Jadi saat kita mencoba untuk mengakses property dari sebuah object dari data nullish tanpa menggunakan ooperator ini, maka akn terjadi error

contoh

```js
const person = {}
const country = person.address.country

console.log(country)
```

Jadi jika kode diatas itu di jalankan maka akan muncul error `Cannot read property 'country' of undefined`. Kenapa tidak memunculkan undefined. Jadi seperti iini prosesnya. Pertama kita mengakses object person dengan property address. Ini akan menghasilkan undefined. Namun ketika kita mencoba atau memaksa untuk mengakses property country yang dimana address itu undefined, Maka yang akan terjadi adalah error.

Solusinya optional chanining

```js
const person = {}
alert(person?.address?.country)
```

Yang terjadi yaitu pertama tama javascript akan mengecek `person?` apakah nullish atau bukan. Dan jika bukan nullish maka akan dilanjutkan ke `address?`. Disitu pun sama akan mengecek apakah nullish atau bukan. Jika bukan akan dilanjutkan ke `country`. Jika ada yang terindikasi nullish maka akan mengembalikan `undefined`.