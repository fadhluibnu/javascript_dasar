# Statement dan Expression

oke di part sebelumnya tentang variable ada istilah `declaration statement` dan `assigment expression`

simpelnya expression itu berupa nilai dan statement itu aksi yang membutuhkan sebuah nilai dan nilainya tidak bisa di isi dengan statement juga.

contohnya pada saat membuat variable misal

```js
let name
```

kode diatas disebut stetement. nah jadi kita tidak boleh mengisi statement dengan sebuah statement seperti `let name = let name` yang mana ini akan error

```js
let name = let name
```

kenapa? sekali lagi karena statement tidak bisa diisi dengan sebuah expression berupa statement

