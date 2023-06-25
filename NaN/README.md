# NaN

NaN adalah kepanjangan dari Not A Number ini merupakan jenis dari number special yang menyebutkan bahwa ini bukanlah number. NaN ini terjadi ketika kita mencoba mengkonversi data string kedalam number namun data string tesebut bukanlah data yang valid. Dan Jika kita operasikan NaN dengan data number lainya maka hasilnya akan tetap mengasilkan NaN.

## Mendapatkan Output NaN

```js
console.log(parseint('salah'))
```

contoh di atas akan menghasilkan output `NaN`. namun jika 

```js
console.log(parseint('1Salah'))
```

contoh di atas akan menghasilkan output `1`. Kok satu bukan NaN?. itu karena `parseInt()` mentoleransi jika ada number di awal dari string yang diberikan. Bagaimana cara agar tidak mentoleransi? caranya yaitu mengguanakan `Number()`

```js
console.log(Number('1salah'))
```

dengan menggunakan `Number()` maka tidak ada toleransi sedikitpun, tidak seperti `parseInt()` yang mentoleransi jika ada sebuah number yang ada di awal sebuah string. sehingga contoh di atas akan menghasilkan `NaN`.

## Operasi Pada NaN

```js
const first = Number('Salah'); //nan
const totalNumber = first + 1; 

console.log(totalNumber)
```

maka output yang dihasilkan adalah `NaN`. itu karena variabel first memiliki valu NaN yang didapat dari hasil konversi string ke number yang tidak valid yang dilakukan oleh fungsi `Number()`. Dan jika `NaN` di dlakukan operasi dengan number apapun maka akan tetap menghsilkan `NaN`


## isNaN()

Mungkin dalam sebuah kasus kita ingin mengecek apakah number itu NaN atau bukan. Nah untuk melakukan pengecekan tersebut kita bisa gunakan function yang bernama isNaN(). nantinya function ini akan mengembalikan data boolean, true jika itu NaN, dan false jika itu bukan NaN.

Contohnya

``` js
const konversi = Number('salah')

console.log(isNaN(konversi))
```

jadi seharusna outputny yaitu true karena variabel konversi memiliki value NaN yang dihasilkan dari konversi string ke number yang tidak valid dari hasil konversi fungsi number

