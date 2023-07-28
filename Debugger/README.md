# Debugger

Debugger digunakan untuk melakukan proses debugging adalah proses mencari bug atau masalah yan bisa terjadi di kode perogram kita. Dengan debugger kita bisa menhentikan kode program di posisi yang kita inginkan , lalau melihat semuai isi variable yang ada pada saat kode program sedang berhenti.

```js
function createFullName(firstName, middleName, lastName){
    debugger;
    const fullname = `${firstName} ${middleName} ${lastName}`;
    return fullname;
}
createFullName("Fadhlu", "Ibnu", 'Abbad')
```