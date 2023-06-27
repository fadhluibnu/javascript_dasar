## Function Return Value

Funtion itu sebnarnya/secara default tidak menghasilkan apapun, namun jika kita ingin, kita bisa membuat sebuah function yang mengembalikan value. Contoh function yang tidak menghasilkan value adalah function yang pernah kita buat sebelumya..

Agar function bisa menghasikan value, kita bisa gunakan kata kunci return di dalam function nya. Lalu diikuti dengan data yang ingin kita kembalikan/hasilkan. Dan ingat function hanya bisa mengembalikan satu data. Jika ingin mengembalikan beberapa data sekaligus, kita bisa gunakan Array return value.

## Membuat

```js
// membuat function dengan parameter dan return value
function sayHelloWorld(firstaName, lastName){
    const say = `Hello ${firstaName} ${lastName}`
    return say
}

// memanggil function dan menangkap return value
const result = sayHelloWorld('Fadhlu', 'Ibnu')
console.log(result)
```

Jadi diatas ada sebuah function dengan parameter `firstName` dan `lastName`. Didalamnya terdapat variable `say` dan berisi value gabungan dari `Hello`, `firstName` dan `lastName`. selanjutnya variable itu di kembalikan kode `return say`. Selanjutnya  ada variabel result yang memanggil function `sayHelloWorld`. Kita tau kalau function ini mengembalikan variabel `say` sehingga saat function ini di panggil di variabel `result` maka otomatis variable `result` akan memiliki nilai dari variabel `say`. selanjunya variabel `result` di tampilkan ke konsol.

## Menghentikan Eksekusi dengan Return

saat kita menggunakan return maka kode setelah return tidak akan dieksekusi lagi. sehingga kita bisa menggunakan return untuk menghentikan sebuah function.

```js
function isContains(array, searchValue) {
    for (const element of array) {
        if (element === searchValue) {
            return true
        }
    }

    return false
}

console.log(isContains([1,2,3,4,5,6,7,8,9], 5))
```

Jadi function ini memiliki paramater array, dan searchValue. Function diberikan value ke parameternya yaitu untuk array yaitu `[1,2,3,4,5,6,7,8,9]` dan `searchValue` yaitu `5`. Selanjutnya function itu akan melakukan perulangan [For Of](../For%20Of/). Dan di dalam perulangan tersebuat terdapat pengecekan apakah array yang di looping memiliki kesamaan dengan `searchValue` jika iya maka akan mengeksekusi `return true` dimana kode ini akan menghentikan seluruh operasi looping dan function itu sendiri, benar benar berakir. dan jika kondisi atadi tidak terpenuhi maka akan mengembalikan `return false`
