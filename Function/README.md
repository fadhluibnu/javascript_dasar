# Function

Sebuah blok kode program yang akan berjalan ketika dipanggil. Untuk membuat function kita bisa buat dengan `function namafuntionnya(){ // blok kode programnya }` 

contoh

```js
function nama(){
    // blok kodenya
}
```

**Aturan**
- Jangan buat nama function yang mengandung with space seperti `Hello World` tapi buat nama function menjadi `helloWorld`. jangan sampai ada with space atau spasi. dan bisanya menggunakan camelCase

## Membuat dan Memanggil Function

```js
function sayHelloWorld(){
    console.log("Hello World!");
}
```

Jadi funtion ini akan menampikan ke console yaitu `Hello World!`. namun kalau kita eksekusi sekarang tidak akan menampilkan apapun. Kenapa? karena funtion ini belum dipangil untuk memanggilnya kita gunakan cara berikut

```js
sayHelloWorld()
```

Jadi kode diatas itu digunakan untuk memanggil funtion yang bernama `sayHelloWorld`. Maka kalau kita jalankan ulang maka akan memunculkan `Hello World!` ke konsol.

Dan kita juga bisa memanggil function sebanyak yang kita mau misal kita ingin memanggil funtion  `sayHelloWorld` sebanyak tiga kali maka akan memunculkan `Hello World!` ke konsol sebanyak 3 kali juga

contoh

```js
sayHelloWorld()
sayHelloWorld()
sayHelloWorld()
```

