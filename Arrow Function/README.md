# Arrow Function

Sebuah alternatif pembuatan function yang lebih sederhana dari function biasanya. Namun arrow function ini terdapat sebuah keterbatasan. Dinamakan arrow function karena menggunakan tanda `=>`. 

### Kekurangan Arrow Function

- Tidak memiliki fitur arguments object
- Tidak bisa menggunakan function generator
- Tidak bisa mengakses this
- Tidak bisa mengakses super


## Membuat Arrow Function 

```js
const sayHello = (name) => {
    const say = `Hello ${name}`
    console.log(say)
}
sayHello('Ibnu')
```

## Arrow Function Tanpa Block `{}`

Kita bisa membuat arrow function tanpa harus menggunakan block namun isinya tidak boleh lebih dari satu baris.

```js
const sayHello = (name) => console.log(`Hello ${name}`)
sayHello('Ibnu')
```

## Arrow Function Return Value

Arrow function bisa mengembalikan value sama seperti function biasanya. Jika menggunakan block maka kita perlu menggunakan kata kunci return. Jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return

```js
const sum = (first, seccond) => {
    return first + seccond
}
console.log(sum(100,100))
```

atau 

```js
const sum = (first, seccond) => first + seccond
console.log(sum(100,100))
```

## Arrow Function Tanpa Kurung Parameter

- Jika parameter di arrow function hanya satu, kita bisa tidak menggunakan kurun parameter

```js
const sayHello = name => console.log(`Hello ${name}`)
sayHello('Ibnu')
```

## Arrow Function Sebagai Parameter

```js
function giveMeName(callback) {
    callback("Ibnu")
}
giveMeName((name) => console.log(`Hello ${name}`))
```