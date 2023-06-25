# String Template

Untuk menambahkan string dengan data lain, kita bisa menggunakan operator + (plus). Namun pada kasus tertentu penggunaan operator ini akan sedikit menyulitkan jika dalam jumlah yang banyak.

JavaScript memiliki fitur yang bernama string template, dimana kita bisa memsubsitusi data dari luar String ke dalam String, seperti mengembil data variabel, atau bahkan melakukan operasi matematika

Untuk menggunakan string template cara pembuatanya stringnya harus menggunakanan tanda backtik (`) ini berada di bawah samping kiri angka satu.

## Mari coba

buat script seperti berikut

```js
const name = 'Fadhlu Ibnu Abbad';
const template = `Name : ${name}`;

console.info(template)
```

Jadi di baris pertama ada sebuah variabel yang bernama `name` dengan value `Fadhlu Ibnu 'Abbad`. Selanjutnya ada variabel yang bernama `template` dengan value `Name: ${name}`. Nah apa arti dari `${name}`? ini adalah cara menggabungkan dan memanggil value di dalam variabel yang menggunakan metode string template. Jadi `console.info(template)` akan menampilkan output `Name : Fadhlu Ibnu 'Abbad

## Expression Di String Template

jadi kita juga bisa melakukan operasi expression di dalam string template. dengan cara seperti berikut

```js
const name = 'Fadhlu Ibnu Abbad';
const nilai = 80;
const template = `Name : ${name}, Lulus : ${nilai > 70}`;
console.log(template);
```

jadi di baris kode

```js
const template = `Name : ${name}, Lulus : ${nilai > 70}`;
```

`${name}` diartikan sebagai pemanggilan variabel name dan `${nilai > 70}` diartikan sebagai operasi expression dimana sedang membandingkan apakah variabel nilai lebih besar dari 70. 

maka output nya seharusnya menampilkan `Name : Fadhlu Ibnu Abbad, Lulus : true`


## Multiline String

Selain bisa manambahakan expression. kita jiga bisa menerapkan multi line string

```js
const multiLine = `Nama Saya : Fadhlu Ibnu,
Sekarang sedang bekerja,
Dan berbagi kontent terkait Programming`

document.writeln('<pre>')
document.writeln(multiLine)
document.writeln('</pre>')
```

jadi seharusya outpunya adalah seperti berikut

```
Nama Saya : Fadhlu Ibnu,
Sekarang sedang bekerja,
Dan berbagi kontent terkait Programming
```