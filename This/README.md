# This

Kata kunci this adalah referensi ke object miliki siapa. Jadi tiap lokasi kata kunci this, bisa berbeda beda referensi pemiliknya. Di dalam object method, this merupakan referensi ke object pemilik function nya. di global scope dan dalam function, this merupakan referensi ke global object

Dalam event this merupakan referensi ke element yang menerima event.

## This di Global Scope

```js
console.log(this)

function sample() {
    console.log(this)

    function inner() {
        console.log(this)
    }

    inner()
}
sample()
```

Dimanapun this di panggil maka akan menampilkan window

## This di Object Method

```js
const person = {
    name: "Ibnu",
    sayHello : function (name){
        console.log(this)
    }
}

person.sayHello('ibnu')
```

Jika kode diatas dijalankan maka `this` akan menampilkan object person bukan `window`

```js
const person = {
    name: "Ibnu",
    sayHello : function (value){
        console.log(`Hello ${value} My Name is ${this.name}`)
    }
}

person.sayHello('Fadhlu')
```

jadi kode diatas saat dijalankan harunya akan menampilkan `Hello Fadhlu My Name is Ibnu` karena `${value}` akan mengambil parameter dan valuenya `Fadhlu` dan `${this.name}` akan mengakses property name milik object person 