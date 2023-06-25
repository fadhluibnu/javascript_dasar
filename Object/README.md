# Associative Array

Jika kita pernah belajar bahasa pemrograman PHP, kita bisa mengubah index dari array tersebut dengan sebuah string.

contoh syntax nya di php

```php
$array = [
    'first' => 'Fadhlu',
    'last' => 'Ibnu'
]
```

Fitur diatas biasa disebut Associative Array. Sayangnya di array tidak bisa menggunakan fitur seperti di atas.

Namun ketika kita memaksa memasukkan data bukan number di index array. maka array tersebut akan otomatis menjadi sebuah object. Ini akan menjadi sebuah masalah. Karena operasi atau fungsi fungsi yang berada di array tidak bisa digunakan di tipe data Object. 

# Tipe Data Object

Tipe data object sebenarnya mirip dengan tipe data array. yang mebedakan hanya di index nya saja. Dimana kita bisa mengubah index nya menjadi sebuah string. Dan index ini dalam object sering dikatakan sebagai attribute atau properties

## Cara membuat Object

Cara memulai membuat object adalah dengan menggunakan `{}` kurung kurawal.

Contoh

```js
const orang = {}
```

Contoh di atas adalah cara membuat sebuah object kosong.

### Mengisi langsung object

Cara langsung mengisi sebuah object kita bisa menggunakan cara berikut

```js
const orang = {
    'first' : 'Fadhlu',
    last : 'Ibnu'
}
```

### Menambah dan Mengubah Property Object

Untuk menambah property object kita bisa gunakan metode `namaobject[nama_property]`.

contoh

```js
const orang = {
    'first' : 'Fadhlu'
}
orang['last'] = 'Ibnu' 

console.log(orang)
```

seharusnya sekarang property object dari variabel orang bertambah menjadi

```json
{
    'first' : 'Fadhlu',
    'last' : 'Ibnu'
}
```

selain utuk menambah. metode di atas juga bisa kita gunakan untuk mengubah value dari property object.

```js
const orang = {
    'first' : 'Fadhlu',
    'last' : 'Ibnu'
}
orang['last'] = 'Abbad' 

console.log(orang)
```

Seharusnya sekarang object diatas berubah menjadi

```json
{
    'first' : 'Fadhlu',
    'last' : 'Abbad'
}
```

### Menghapus Property Object 

Untuk menghapus property object kita bisa gunakan metode berikut `delete nama_variabel[nama_property]`

```js
const orang = {
    'first' : 'Fadhlu',
    'last' : 'Abbad'
}
delete orang['last']
```

Jadi seharusnya object nya sekarang berubah menjadi

```json
{
    'first' : 'Fadhlu',
}
```

Karena Property last sudah dihapus

### Mengakses property object

Untuk mengakses property object kita bisa gunakan metode `nama_variabel.nama_property`.

```js
const orang = {
    'first' : 'Fadhlu',
    'last' : 'Ibnu'
}
console.log(`First Name : ${orang.first}`)
```

Jadi seharunya output yang keluar adalah `First Name : Fadhlu`. karena `orang.first` berarti memanggil variabel dengan propertynya.