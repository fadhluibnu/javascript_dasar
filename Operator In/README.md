# Operator In

Adalah sebuah opertor yang digunakan untuk mengecek apakah sebuah property ada di dalam object atau array ada atau tidak. Jika property tersbut ada di object pengecekan ataupun index di array, maka hasilnya true, sedangkan jika tidak, maka hasilnya false. 

contoh

```js
const person = {
    firstName : 'John',
    lastName : 'Ji'
}
if('firstName' in person) {
    alert(person.firstName)
}else {
    alert('Hello')
}
```

## Note

Ingat operator ini hanya akan mengecek apakah sebuah properti atau index ada atau tidak. jadi walaupun nilai atau valuenya null atau undefined maka itu akan tetap dianggap ada. Bukan berarti jika value nya null atau undefined maka tidak terdeteksi, mereka akan tetap di anggap ada.