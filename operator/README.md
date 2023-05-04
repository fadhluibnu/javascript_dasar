# Operator

Operator dalam bahasa pemrograman sendiri adalah simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematika, relasional, atau logika untuk memberikan hasil tertentu.

## Assignment Operator

Pada dasarnya Assignment Operator itu adalah tanda sama dengan `=` yang digunakan untuk menginisialisasi sebuah variabel

```js
let x = 5
let y = 10

x = y

console.log(x)
```

expression di atas berarti kita menginisialisasi variabel y pada variabel x = sehingga sekarang nilai x = sama dengan nilai yang dimiliki oleh y

terdapat operasi Assignment Operator yang lain. kita bisa menyebutnya sebagai shortcut contohnya

```js
let x = 5
let y = 10

x += y

console.log(x)
```

expression `x+=y` itu artinya assignment operator yang digunakan sebagai shortcut dari x = x + y. tidak hanya untuk `+` tapi yang lain juga bisa


```js
let x = 5
let y = 10

x += y
x -= y
x *= y
x /= y
x %= y

console.log(x)
```

## Comparison Operator

Comparison Operator adalah operator pembanding/komparasi yang dapat mengevaluasi dan membandingkan dua nilai. berikut operator dan fungsinya

- `==`

    Digunakan untuk membandingkan kedua nilai apakah sama namun tidak identik

    ```js
    let x = '10'
    let y = 10

    console.log(x == y)
    ```

    maka outpunya akan menghasilkan `true` karena sama sama 10 walaupun berbeda tipe data antara string dan integer. ini yang saya maksud tentang `tidak identik`

- `!=`

    Digunakan untuk membandingkan kedua nilai apakah tidak sama namun tidak identik

    ```js
    let x = '10'
    let y = 11

    console.log(x != y)
    ```

    maka outpunya akan menghasilkan `true` karena 10 tidak sama dengan 11. Tapi perlu di garis bawahi bahwa pengecekan di atas tidak menghiraukan perbedaan tipe data antara string dan integer

- `===`

    Membandingkan kedua nilai apakah identik.

    ```js
    let x = '10'
    let y = '10'

    console.log(x === y)
    ```

    ini akan menghasilkan true. karena operator ini akan membandingkan apakah nilainya sama dan tipe datanya juga sama.

- `!==`

    Membandingkan kedua nilai apakah tidak identik.

    ```js
    let x = '10'
    let y = '11'

    console.log(x !== y)
    ```

    ini akan menghasilkan true. karena operator ini akan membandingkan apakah nilainya tidak sama dan tipe datanya juga tidak sama.

- `>`

    Membandingkan dua nilai apakah nilai pertama lebih dari besar nilai kedua.

    ```js
    let x = 5
    let y = 3

    console.log(x > y)
    ```

    maka akan memunculkan output `true` karena 5 lebih besar daripada 3

- `>=`

    Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.


    ```js
    let x = 5
    let y = 5

    console.log(x >= y)
    ```

    maka akan memunculkan output `true`, karena operator ini akan membandingkan dua kali, apakah nilai pertama (5) lebih besar dari (5) atau nilai pertama(5) sama dengan (5) 

- `<`

    Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.

- `<=`

    Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.

## Logicial Operator

Logicial Operator kita gunakan untuk menetapkan logika yang lebih kompleks. disini kita bisa menggunakan kombinasi daru dua nilai bolean bahkan lebih dari menetapkan logika

Berikut macam-macam logical operator dan fungsinya:

- `&&`

    Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).

- `||`

    Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).

- `!`

    Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.

contoh :

```js
let a = 10;
let b = 12;

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true

/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false
```