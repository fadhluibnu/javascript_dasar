# Rest Paramter

Rest parameter adalah fitur yang membantu kita untuk mengirim data sebanyak banyak dalam satu parameter dan secara otomatis akan dikonversi kedalam array. 

Untuk membuat rest parameter ada ketentuanya. 

- hanya boleh ada satu dalam function, 
- harus berposis di paling akhir, tidak ditengah ataupun di depan

```js
function contoh(name, ...data){
    // blok kode
}
```

## Mencoba

```js
function sum(name, ...data){
    let total = 0
    for (const item of data) {
        total += item
    }

    console.log(`Total ${name} is ${total}`)
}

sum('Jeruk', 10,20,30,40,50, 60)
```

funtion diatas memiliki dua parameter yaitu `name` dan satu reset parameter yaitu `...data`. Nah dalam pemanggilanya parameter pertama yaitu `Jeruk` akan masuk kedalam parameter `name` sedangkan `10,20,30,40,50,60` akan masuk kedalam rest parameter `...data` dimana data data tersbut akan dikonversi kedalam sebuah array. 

## Spread Syntax

Kalau tadi kan kita mengirim `10,20,30,40,50, 60` bukan lah sebuah array. Di rest parameter juga bisa mengirimkan langsung sebuah array. Namun kita harus menggunakan `...` (titik tiga) yang diikuti dengan array ketika pemanggilan function. Fitur ini disebuat Spread Syntax

```js
function sum(name, ...data){
    let total = 0
    for (const item of data) {
        total += item
    }

    console.log(`Total ${name} is ${total}`)
}

sum('Jeruk', ...[10,20,30,40,50,60])
```

atau jika array itu ada didalam sebuah variabel

```js
function sum(name, ...data){
    let total = 0
    for (const item of data) {
        total += item
    }

    console.log(`Total ${name} is ${total}`)
}

const values = [10,20,30,40,50,60]

sum('Jeruk', ...values)
```

namun jangan pernah lakukan ini

```js
function sum(name, ...data){
    let total = 0
    for (const item of data) {
        total += item
    }

    console.log(`Total ${name} is ${total}`)
}

const values = [10,20,30,40,50,60]

sum('Jeruk', values)
```

dan seperti ini

```js
function sum(name, ...data){
    let total = 0
    for (const item of data) {
        total += item
    }

    console.log(`Total ${name} is ${total}`)
}

sum('Jeruk', [10,20,30,40,50,60])
```

## Arguments Object

Fitur yang memungkinkan kita untuk mengambil semua parameter dalam bentuk array dengan menggunakan object bernama arguments