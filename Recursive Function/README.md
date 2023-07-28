# Recursive Function

Sebuah kemampuan dimana sebuah function bisa memangil function dirinya sendiri. Kenapa kita membutuhkan ini? Karena kadang ada banyak problem yang lebih mudah diselesaikan menggunakan recursive funtion, seperti contohnya factorial.

### Factorial Loop

```js
function factorial(value){
    let result = 1;
    for (let i = 1; i <= value; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5))
```

### Recursive Function

```js
function factorialRecursive(value){
    if (value===1){
        return 1;
    }else {
        return value * factorialRecursive(value - 1)
    }
}
factorialRecursive(5)
```

jadi kode itu berjalan kurang lebih seperti ini

- 5 * factorialRecursive(4)
- 5 * 4 * factorialRecursive(3)
- 5 * 4 * 3 * factorialRecursive(2)
- 5 * 4 * 3 * 2 * factorialRecursive(1)
- 5 * 4 * 3 * 2 * 1