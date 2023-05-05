# If Else Statement

Kita bisa menyebutnya dengan percabangan. saat kita membuat program pastinya tidak akan lepas dengan sebuah pertabangan dimana digunakan untuk mengecek sebuah kondisi di dalam javascript

Statement if akan menguji suatu kondisi. jika kondisi yang dihasilkan true maka blok kode didalamnya itu akan di eksekusi/dijalankan. sebaliknya jik bernilai false maka proses akan dilewatkan

contoh

```js
const hujan = true

if (hujan){
    console.log("Hari ini sedang hujan. jangan lupa payungnya")
}
```

jika hujan itu true maka akan menampilkan output `Hari ini sedang hujan. jangan lupa payungnya` sebaliknya jika hujan itu false maka kode yang didalam if tidak akan dieksekusi dan dilewati atau bisa diartikan tidak akan muncul output apapun

lalu bagaimana cara agar tetap menampilkan sebuah data jika hujan itu bernilai false?

kita bisa gunakan yang namanya `else`

kita ganti study kasus. agar lebih nyambung wkkw

```js
const nilai = 60

if (nilai > 70){
    console.log("Lulus")
}else{
    console.log("Gagal")
}
```

nah dari kasus diatas, variabel nilai itu memiliki value 60, nah di pengecekan pertama jika dibuat sebuah kalimat maka `Hai JavaScript, apakah variabel nilai lebih besar dari 70?"` maka jika jawabanya benar maka akan memunculkan output `Lulus`, namun jika jawabanya salah maka pengecekan pertama akan diabaikan sehingga tidak akan memunculkan output `Lulus` dan akan dilanjutkan ke pengecekan terakhit yaitu `else`. Maka akan memunculkan output `Gagal`

## Else If

Selanjutnya kita juga bisa mengbukan `else` dan `if` agar kita bisa membuat pengkondisian yang lebih banyak

```js
let nilai = 90

if (nilai>90){
    console.log("A")
}else if (nilai>80){
    console.log("B")
}else if (nilai>70){
    console.log("C")
}else{
    console.log("Gagal")
}
```