# Tipe Data

Tipe data merupakan pengklasifikasian data berdasarkan jenisnya. jadi setiap nilai yang ditetapkan pada sebuah variable pastinya memiliki sebuah tipe data

tipe data pada javascript yaitu 

- Undifined

    Tipe data ini akan muncul ketika kita mendeklarasikan variable yang tidak memiliki nilai. mari kita coba

    ```js
    let x
    console.log(typeof(x))
    ```

    maka jika di jalankan akan memunculkan output `undefined`

- Number

    Tipe data number adalah angka, variable yang dituliskan seperti angka pada umumnya
    
    ```js
    // number
    let z = 5
    console.log(typeof(z))
    ```

- String

    Tipe data string adalah sebuah teks. untuk membuat nilai menjadi string kita bisa gunakan tanda petik satu `' '` atau petik dua `" "` di antara teks nya. contohnya

    ```js
    let x = "Hello"
    console.log(typeof(x))
    ```

    maka akan memunculkan output `string`

- Boolean

    Tipe data boolean adalah tipe data yang hanya memiliki dua nilai yaitu `true` atau `false`. Untuk menetapkan nilai boolean dalam variabel, gunakan keyword `true` atau `false`

    ```js
    let x = true
    let y = false

    console.log(typeof(x))
    console.log(typeof(y))
    ```

- Null

    Tipe data `Null` serupa dengan undefined namun null ini perlu diinisialisasi pada variabel. Dengan adanya null kita bisa menetapkan nilai sementara pada variabel, tapi sebenarnya nilai tersebut tidak ada. 
    
    Terkadang kita perlu membuat sebuah variabel, namun kita belum memerlukan nilai apa-apa dan tidak ingin terikat oleh tipe data apa pun. Untuk mendapatkan tipe data `Null` kita dapat gunakan keyword `null` ketika variabel tersebut diinisialisasi.

    ```js
    let someLaterData = null;
    console.log(someLaterData)
    ```
    
