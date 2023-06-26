# Falsy dan Truthy

## Falsy

Bisa dikaatakan adalah value jika yang ketika dalam koteks boolean, Dia itu sama dengan false. Jadi di javascript itu agak unik atau beda dengan bahasa pemrograman lain. Sebenarnya ini berguna sekali

### Kapan data dianggap falsy

- false

    Boolean false

- 0, -0

    Number 0 dan -0 dianggap false

- "", '', ``

    Semua string kosong dianggap false

- null

    Null dianggap false

- undefined

    Undefined dianggap false

- NaN

    Not A Number atau NaN dianggap false


## Truthy

Semua perilaku atau kapan data dianggap Falsy. Truthy itu kebalikan dari Falsy 


## Mencoba

```js
let data = '';
if (data) {
    console.log('TRUE');
}else{
    console.log('FALSE')
}
```

jadi jika kode di atas di jalankan maka akan memunculkan output `FALSE`. karena data dengan string `''` kosong itu sama dengan false