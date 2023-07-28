# Function Didalam Function (inner function)

Kita dibebaskan untuk membuat sebuah function, termasuk membuat function di dalam sebuah function. Function di dalam function disebut inner function. Inner function hanya bisa diakses di tempat kita membuat di dalam function nya. 

```js
function outer(){
    function inner(){
        console.log('inner function')
    }
    inner()
    inner()
}
outer()
```