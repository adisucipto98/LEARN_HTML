//Perbedaan var, let, dengan const adalah variabel var dapat diperbaharui dan dideklarasikan ulang didalam scope nya; variabel let dapat diperbaharui namun tidak dapat dideklarasikan ulang; variabel const juga tidak dapat diperbaharui maupun di deklarasikan ulang.
// Implementasi 
// Let sebagai block scope
let nilai = 2;
if(nilai == 2){
    let nilai = 3
    console.log(nilai)
}
console.log(nilai)

// var bukan block scope
var value = 2;
if(value == 2){
    var value = 3
    console.log(value)
}
console.log(value)

//const
const angka = 2;
if(angka == 2){
    //angka = 3 (JIka komen dihilangkan maka akan terjadi error karena const merupakan nilai variabel yang tidak dapat diganti)
    console.log(angka)
}
console.log(angka)

const angkaPertama = 10
const angkaKedua = 2
let hasil

// Penjumlahan
console.log(angkaPertama + angkaKedua)

// Pengurangan
console.log(angkaPertama - angkaKedua)

// Perkalian
console.log(angkaPertama * angkaKedua)

// Pembagian
console.log(angkaPertama / angkaKedua)