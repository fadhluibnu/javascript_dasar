# Null

Sebuah Representasi dari data kosong. Ingat Null tidak sama dnegan Undefined. Null itu variabel yang sudah di inisialisasi dengan nilai. sedangkan undefined belum diinisialisasi dengan sebuah nilai.

contoh

```js
let name = null
if(name === undefined){
    alert('Undefined')
}else if(name === null){
    alert('Null')
}else{
    alert(name)
}
```

Maka seharusnnya alert yang muncul adalah `Null`
