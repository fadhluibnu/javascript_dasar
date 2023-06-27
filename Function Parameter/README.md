# Function Parameter

kita bisa mengirimkan data kedalam function yang kita panggil. Untuk melakukan hal tersebut kita perlu menambahakn parameter/argumen pada function yang kita buat. Parameter/argumen ini ditempatkan di dalam kurung `()` di deklarasi method. untuk membuat paramter kita bisa membuatnya seperti nama variabel bedanya ini tidak menggunakan kata kunci. serta parameter ini kita bebas menambahkannya, jika lebih dari satu pisahkan denan tanda koma.

## Membuat dan Memanggil Function dengan Parameter

```js
function sayHelloWorld(firstaName, lastName){
    console.log(`Hello ${firstaName} ${lastName}`);
}
```

Jadi di atas adlah contoh function paramter dengan nama `sayHelloWorld`. Funtion ini memiliki peramater yaitu `firstName` dan `lastName`. yang artinya saat kita nanti memanggil function ini kita wajib mengirimkan data yang dibutuhkan. cara pemanggilanya yaitu

```js
sayHelloWorld('Fadhlu', 'Ibnu')
```

Cara diatas adalah bagaimana cara memanggil function yang membutuhkan parameter. Jadi `Fadhlu` akan masuk ke parameter `firstName`, dan `Ibnu` akan masuk ke dalam parameter `lastName`. Kita juga bisa memanggilnya semau kita seperti ini

```js
sayHelloWorld('Fadhlu', 'Ibnu')
sayHelloWorld('Mark', 'Zuck')
sayHelloWorld('Elon', 'Musk')
```