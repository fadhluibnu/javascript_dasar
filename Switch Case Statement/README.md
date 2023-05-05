# Switch Case Statement

Selain if, JavaScript juga mendukung switch statement untuk melakukan pengecekan banyak kondisi dengan lebih mudan dan ringkas

Struktur Switch case

``` js
switch (expression) {
  case value1:
    // do something
    break;
  case value2:
    // do something
    break;
  ...
  ...
  default:
    // do something else
}
```

Tanda kurung seleah keyword `switch` berisi variabel atau expression yang akan dievaluasi. kemudian untuk mengecek setiap kondisi kita masukkan value nya setelah keyword `case`. nah jika kondisi case sama dengan variabel pada switch maka blok kode setelah titik dua `:` akan di jalankan. dan keyword break digunakan untuk keluar dari proses switch. lalu ada keyword `default`, sebenernya ini itu sama seperti `else` yaitu tidak aka nilai yang sama dengan variabel switch maka blok kode ini akan dijalankan

contoh kode :

```js
let language = "French";
let greeting = null;

switch (language) {
  case "English":
    greeting = "Good Morning!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimasu!";
    break;
  default:
    greeting = "Selamat Pagi!";
}

console.log(greeting);
```