# Masalah Variable Var

Alasan var tidak direkomendasikan untuk digunakan adalah karena vari tidak memiliki block scope, artinya dia itu tidak mengika ke local scope.


## Perbandingan

- let

```js
// global scope
let i = 20

for (let i = 0; i < 10; i++) {
    // local scope
    console.log(`local ${i}`)
}

console.log(`Global ${i}`)
```

Jadi i yang ada di global scope tidak akan berubah dan terpengaruh oleh `let i = 0` yang ada di `for` 

- var

```js
// global scope
var i = 20

for (var i = 0; i < 10; i++) {
    // local scope
    console.log(`local ${i}`)
}

console.log(`Global ${i}`)
```

Jadi ketika kita sudah mendefinisikan sebuah variabel dan didevinisikan ulang dengan nama yang sama. Maka variabel yang pertama kali kita buat akan di override oleh variabel yang barusaja kita buat dengan nama yang sama. Jadi variabel `var i = 20` di override oleh `var i = 0` yang ada di for
