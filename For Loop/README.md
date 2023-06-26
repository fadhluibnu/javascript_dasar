# For Loop

For adalah Salah satu kunci yang bisa digunakan untuk melakukan perulangan. Blok kode yang terdapat di dalam for akan selalu diulangi sela kondisi for terpenuhi.

**Syntax**

```js
for(init statement; kondisi; post statement) {
    // block perulangan
}
```

- Init Statement

    Dieksekusi sekali dalam sebuah perulangan

- Kondisi

    Merupakan bagian pengecekan dalam setiap perulangan, jika true akan dilakukan, jika false akan berhenti.

- Post Statement

    Post Statement akan dieksekusi setiap kali diakhir perulangan

Note: jika ingin mendapatkan perulangan yang tidak berhenti maka bagian init statement, kondisi, dan post statement tidak usah di isi

### Perluangan Tanpa Henti

```js
for(; ;){
    console.log('tanpa henti')
}
```

jadi kode di atas tidak akan berhenti menampilkan output `tanpa henti` ke console

### Perulangan Dengan Kondisi

```js
let counter = 1
for(;counter <= 10; ){
    console.log(`perulangan ke ${counter}`)
    counter++
}
```

### Perulangan Dengan Init Statement dan Kondisi

```js
for(let counter = 1 ;counter <= 10; ){
    console.log(`perulangan ke ${counter}`)
    counter++
}
```

### Perulangan Dengan Init Statement dan Kondisi dan Post Statement

```js
for(let counter = 1 ;counter <= 10; counter++){
    console.log(`perulangan ke ${counter}`)
}
```

