# Function Generator

Function yg digunakan untuk membuat data generator. Dan datanya seperti array sehingga bisa di iterasi. Untuk membuat function generator kita harus menggunakan tanda * (bintang) setelah kara function. Dan untuk mengembalikan data di tiap iterasi, kita bisa gunakan kara kunci yeild diikuti datanya.

### Sifat Function Generator

- Lazy Evaluation

    Jika datanya belum diambil dari generator, maka yield selanjutnya tidak akan di eksekusi
    

## Function Generator Sederhana

```js
function* createNames(){
    yield "Fadhlu"
    yield "Ibnu"
    yield "'Abbad"
}

const names = createNames()
console.log(names[0]) // walaupun mirip array namun ini tidak biasa diakses melalui index dan juga tidak bisa diubah datanya

for (const name of names){
    console.log(name)
}
```

## Function Generator Kompleks

```js
function buatGanjil(value){
    for (let i = 1; i <= value; i++){
        if(i % 2 === 1){
            yield i;
        }
    }
}

const numbers = buatGanjil(100)
for (const number of numbers){
    console.log(number)
}
```