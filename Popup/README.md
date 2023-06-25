# Popup

Di Javascript ada fitur yang bernama alert, promet dan confirm. 

- Alert digunakan untuk memberi peringatan berupa popup text di browser. 
- Prompt digunakan untuk meminta input string dari pengguna di browser dalam bentuk popup inut teks.
- Confirm digunakan untuk meminta input boolean dari pengguna di browser dalam bentuk popup inut pilihan.


## Cara membuat

- Alert

    ```js
    alert('hello world!');
    ```

- Prompt

    ```js
    const name = prompt('Siapa Nama Anda ? : ');
    console.log(name);
    ```

    Jadi dengan prompt, maka akan muncul input di browser dan yang diinputkan akan ditampung di variabel name

- Confirm

    ```js
    const masuk = confirm('Anda Yakin Mau Keluar?');
    if(masuk){
        const name = prompt('Siapa Nama Anda?')
        alert(name);
    }else{
        alert('bye');
    }
    ```