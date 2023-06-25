# Undefined

Sebuah kata kunci dan Tipe Data di javascript. Ini terjadi ketika sebuah variabel belum diinisialsisasi atau belum ditamabah nilai atau ketika kita mengakses sebuah array yang tidak ada. Perlu diingat undefined tidak sama dengan null.

Contoh

```js

//undefined di variabel
let name;
if(name === undefined){
    alert('Undefined');
}else{
    alert('Defined');
}

//undefined di array
const names = ['Fadhlu', 'Ibnu']
if(names[3] === undefined){
    alert('Undefined');
}else{
    alert('Defined');
}

//undefined saat mengakses object property yang tidak ada
const orang = {}
if(orang.first === undefined){
    alert('Undefined');
}else{
    alert('Defined');
}
```

maka alert yang akan muncul adlah `Undefined` karena variable name tidak memliki sebuah nilai sehingga akan menghasilkan undefined.