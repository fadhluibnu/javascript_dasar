# Closure

Closure adalah kombinasi function dan bundel referensi ke data sekitarnya. Kita sudah tau bahwa local scope tidak bisa diakses di luar scopenya. Dengan kemampuan closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitrar local scope tersebut, keluar scopenya

```js
function createAdder(value){
    const owner = "Ibnu"
    function add(param){
        console.log(owner)
        return value + param
    }
    return add
}

const addTwo = createAdder(2)
console.log(addTwo(10))
```