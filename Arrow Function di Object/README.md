# Arrow Function di Object

Kita bisa gunakan ini sebagai object method. Namun perlu diketahui Arrow Function tidak bisa digunakan untuk mengakses arguments object, function generator, kata kunci this dan kunci super. Jadi pastikan gunakan Arrow funtion hanya memang kita tidak butuh fitur fitur diatas.

```js
const person = {
    name: "Ibnu",
    sayHello: (name) => {
        console.log(`Hello ${name}`)
    }
}
person.sayHello("Fadhlu")
```

## Kita tidak bisa menggunakan this di arrow function

Sebenarnya kita bisa memanggil this namun itu bukan mengembalikan object melainkan akan mengembalikan `window` 

```js
const person = {
    name: "Ibnu",
    sayHello: (name) => {
        console.log(this)
    }
}
person.sayHello("Fadhlu")
```