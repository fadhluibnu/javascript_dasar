# Tipe Data Array

Sebuah tipe data yang berisikan kumpulan data/banyak data. Array di javascript bersifat dinamis, bisa bertambah dengan sendirinya.

Seperti pengertianya, Array memudahkan kita jika ingin menyimpan banyak data dalam satu variabel. Jadi semisal kita ingin menyimpan sebuah nama, kita bisa hanyak membuat satu variabel dan diisi dengan array yang memiliki banyak nilai.

## Cara membuat array

Untuk membuat array kita bisa gunakan sebuah kurung siku `[]` seperti ini

```js
let arrayKosong = []
let arrayName = ['Fadhlu', 'Ibnu', 'Abbad']
```

## Cara kerja array

Setiap data yang disimpan di array akan disimpan dalam posisi berurutan, dimana urutan pertama dimulai dari nomor 0 atau bisanya di katakan index ke 0. Saat kita manambahkan data ke array, otomatis data akan disimpan di urutan terakhir. urutan di array kita sebut dengan index.


## Operasi di array

- `.push()`

    Untuk menambah data bisa menggunakan fungsi `.push()`. dalam proses penambahan array ini, Nilai yang ditambahakan akan berposisi di akhir array

    Contoh

    ```js
    const names = []
    names.push('Fadhlu')
    ```

    cara diatas adalah contoh untuk menambah satu data. Untuk menambahkan lebih dari satu data kita hanya perlu memisahkan dengan tanda koma

    ```js
    const names = []
    names.push('Fadhlu', 'Ibnu', 'Abbad')
    ```

    cara diatas adalah contoh untuk menambah lebih dari satu data

- `.length`

    Untuk mendapatkan panjang array. 

- `array[index]`

    Mendapatkan data dari posisi index

    Contoh

    ```js
    const names = ['Fadhlu', 'Ibnu', 'Abbad']
    console.log(names[0])
    ```

    Jadi seharusnya output yang keluar adalah `Fadhlu`. Karena `names[0]` artinya mengambil data dari variabel array dengan nama `names` di index ke 0. Sedangkan index ke 0 adalah `Fadhlu`.

    Selain untuk mendapatkan array. Kita juga bisa mengubah array dengan cara berikut

    ```js
    const names = ['Fadhlu', 'Ibnu', 'Abbad']
    names[0] = 'Array Diubah' 
    console.log(names)
    ```

    Jadi seharusnya output yang keluar adalah array dengan nilai `Array Diubah, Ibnu, Abbad`. Itu karena di kode `names[0] = 'Array Diubah'` kita sedang mengubah array index ke 0 yang ada di variabel names menjadi `Array Diubah`

- `delete array[index]`

    Untuk menghapus data dari posisi index