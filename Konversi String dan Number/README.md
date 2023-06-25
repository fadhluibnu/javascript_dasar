# Konversi String dan Number

Kadang Saat membuat sebuah program yang mengharuskan meminta input dari pengguna selalu dalam bentuk string. Namun kita perlu mengolahnya dalam bentuk number dan solusinya hanyalah mengkonversi dari bentuk string ke number atau sebaliknya. Jika tidak akan muncul bug atau masalh seperti contoh berikut

```js
const x = '1';
const y = 1;
const sum = x + y;
console.log(sum)
```

jadi disiini ada variabel x dengan value string 1 dan y dengan value number 1. dan di baris selanjutnya ada variabel sum yang menampung hasil penambahan dari variabel x dan y. terus apa yang akan terjadi? harsilnya dalah 11. loh kok 11 padahal 1 + 1 itu 2, kenapa ini 11. ini karena jika ada string 1 ditembah dengan number maka akan menghasilkan string. jadi bukanlah seerti operasi matematika dimana number di tambah number.

## Macam macam method konversi

- `parseInt()`

    Mengkonversi dari string kedalam sebuah number / bilangan bulat

- `parseFloat()`

    Mengkonversi dari string kedalam bilangan pecahan atau Float

- `Number()` 

    Mengkonversi dari string ke number (bilangan bulat atau pecahan)

- `Number.toString()` 

    Mengkonversi dari number ke string

