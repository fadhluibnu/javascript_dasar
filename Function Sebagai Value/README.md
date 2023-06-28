# Function Sebagai Value

Function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value. Artinya function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya.

## Function di variabel

```js
function sayHello(name){
    console.log(`Hello ${name}`);
}

let say = sayHello

sayHello('Fadhlu')
say('Ibnu')
```

jadi di atas ada function yang bernama `sayHello`. Kita ingin function tersebut dimamsukkan kedalam sebuah variabel menjadi `let say = sayHello`. Kenapa tidak menggunakan `()` seperti `let say = sayHello()`? itu karana jika kita langsung menambahkan `()` artinya kita langsung memangil/mengeksekusi function nya. Jadi kita bisa memanggil function `sayHello` dengan dua cara yaitu dengan memanggil lansung function nya `sayHello('Fadhlu')` atau lewat variabel `say` menjadi `say('Ibnu')`.

## Function Di Parameter

```js
function sayHello(name){
    console.log(`Hello ${name}`);
}

let say = sayHello

function giveMeName(callback){
    callback("Ibnu")
}

giveMeName(sayHello)
giveMeName(say)
```

jadi di atas sebuah ada sebuah function `giveMeName` dengan satu parameter yaitu `callback` dimana parameter ini nantinya digunakan untuk mengeksekusi funtion yang dimasikkan kedalam parameternya.

Disini funtionnya dipanggil dengan cara `giveMeName(sayHello)` yang kita tau `sayHello` yang ada diparameter tersebut adalah sebuah function yang bernama `sayHello`. Nah nantinya nama function ini masuk ke parameter `callback`. Sehingga saat kode `callback("Ibnu")` dikesekusi itu sama dengan `sayHello("Ibnu")`.