# Object Method

Sebenarnya function adalah sebuah tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di object. Cara pembuatanya pun sama dengan function sebagai value. Function di object kada disebuat sebagai object method.

## Membuat object dengan method

```js
const person = {
    name: "Ibnu",
    sayHello: function (name){
        console.log(`Hello ${name}`)
    }
}

person.sayHello('Ibnu')
```

## Menambahkan Method ke Object

```js
const person = {
    name: "Ibnu",
}

person.sayHello = function (name){
    console.log(`Hello ${name}`)
}
```