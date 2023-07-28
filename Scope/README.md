# Scope 

Merupakan area akses sebuah data, Ada dua jenis scope yaitu global scope dan local scope. Data global scope bisa diakses dari local scope, namun data di local scope hanya bisa diakses di local scope tersebut atau di scope local dibawahnya (seperti karus inner function)

Contoh


- Global Scope

```js
// global function
let counter = 0

function hitMe1(){
    // local scope function hitMe()
    counter++
}

function hitMe2(){
    // local scope function hitMe2()
    hitMe1()
}
hitMe1()
hitMe2()
```

- Local Scope

```js
function first(){
    // local scope first
    let fistVariable = "First";
}
function second(){
    // local scope second
    let seccondVariable = "Seccond";
    console.log(fistVariable) //error
}
first()
seccond()

console.log(fistVariable)
console.log(seccondVariable) //error
```

- Local Scope (nested funtion)

```js
function first() {
    // local scope first
    let firstVariable = "FirstVariable";

    funtion firstNestedVariable(){
        console.log(firstVariable);
        const firstNestedVariable = "First Nested"
    }

    firstNested()
    console.log(firstNestedVariable) //error karena variable termasuk di dalam golongan local variable
}
```