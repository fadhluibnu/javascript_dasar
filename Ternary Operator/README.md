# Ternary Operator

Sebuah bentuk sederhana dari sebuah if statement. Ternary operator terdiri dari kondisi yang dievaluasi, jika menghasulkan true maka nilai pertama diambil, jika false nilai kedua yang diambil.

contoh

```js
const nilai = 80
let ucapan;
if(nilai >= 75){
    ucapan = 'Selamat Anda Lulus'
}else{
    ucapan = 'Silahkan Coba Lagi';
}
console.log(ucapan)
```

sekarang kita konversi ke dalam ternary operator

```js
const nilai = 80
const ucapan = nilai >= 75 ? 'Selamat Anda Lulus' : 'Silahkan Coba Lagi'
console.log(ucapan)
```
