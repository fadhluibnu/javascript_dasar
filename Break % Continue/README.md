# Break and Continue

Saat kita belajar [Switch Statement](../Switch%20Case%20Statement/) kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch. Nah selain di switch case kita juga bisa menggunakannya di perulangan, yang berarti untuk menghentikan seluruh perulangan. 

Sedangkan continue digunakan untuk menghentikan perluangan saat ini, lalu melanjutkan ke perulangan selanjutnya..

## Break

```js
let counter = 1
while(true){
    console.log(`Perulangan ke : ${counter}`)
    counter++
    if(counter > 10){
        break
    }
}
```

Jadi pertama ada variabel `counter` dengan value number `1`. selanjutnya digunakan perulangan while dengan kondisi true, yang artinya tidak akan berhenti. selanjunya kode ``console.log(`Perulangan ke : ${counter}`)`` ini akan menampilkan output dan `counter++` untuk incremant atau menambakan + 1 ke variable counter counter. lalu bagaimana menghentikannya? menghentikanya yaitu dengan menggunakan kode

```js
if(counter > 10){
    break
}
```

jadi jika counter sudah lebih besar dari sepuluh maka akan mengeksekusi kode `break` yang dimana ini akan menghentikan seluruh perulangan nya yaitu `while`. 

## Continue

```js
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        continue
    }
    console.log(`Perulangan ganjil : ${i}`)
}
```

Jadi alurnya seperti ini. diatas ada sebuah perulangan for dengan init statement yaitu variabel `i` dengan nilai `1` dan kondisi statement harus `i` kurang dari sama dengan `100` dan post statement `i++` yang artinya menambahakan 1 setiap perulangan. oke pertama yang akan diksekusi yaitu mengecek apakah `i` lebih kecil sama dengan `100` kalau iya maka akan dilanjutkan ke pengkondisian `if`. disitu `if` melakukan pengecekan **apakah i jika dibagi 2 memiliki sisa bagi 0**. jika iya/false maka akan mengeksekusi `continue` yang berarti tidak akan menampilkan/mengeksekusi kode ``console.log(`Perulangan ganjil : ${i}`)`` dan langsung mengeksekusi post statement atau `i++` dan melanjutkan mengeksekusi kondisi statement yaitu `i <= 100`. nah jika `if` tadi bernilai false maka akan mengeksekusi ``console.log(`Perulangan ganjil : ${i}`)`` dan selanjutnya mengeksekusi post statement `i++`