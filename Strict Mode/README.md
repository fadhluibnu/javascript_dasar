# Strict Mode

Saat kita menjalanan kode JavaScript, secara default kode program kita berjalan dalam mode tidak strict atau istilahnya sloppy mode. Pada ECMAScript 5, diperkenalakan mode strictm dimanaka ketika strict momde dijalankan, maka akan merubah beberapa cara kera di JavaScript, seperti :

- Merubah beberapa JavaScript error yang tadinya silent error, menjadi throw error
- Memperbaiki beberapa kesalahan engine JavaScript untuk optimasi
- Menolah beberapa kode perintah yan kedepanya akan diunakan di ECMAScript

## Cara Menyalakan Strict Mode

Untuk mengaktifkan kita bisa menambahakan `use strict` pada baris awal javascript atau di awal function kita

```js
'use strict';
const person = {
    firstName: "Ibnu",
}
with(person){
    console.log(firstName)
}
```