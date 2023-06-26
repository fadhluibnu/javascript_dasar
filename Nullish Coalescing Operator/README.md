# Nullish Coalescing Operator

Nullish value bisa disebuat null dan undefined. Operator ini mirip dengan ternary operator. bedanya jika ternary operator menggunakan tanda `?`. kalau nullish operator menggunakan `??` 

contoh

```js
// tanpa metode Nullish Coalescing Operator
let parameter;

let data = parameter;
if(data ===undefined || data === null){
    data = "Nilai Default"
}
console.log(data)
```
 
jika kita konversi ke Nullish Coalescing Operator

```js
let parameter;

let data = parameter ?? "Nilai default"
console.log(data)
```