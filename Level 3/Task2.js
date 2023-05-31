/* 
Perulangan atau juga sering dikenal dengan looping merupakan pernyataan atau instruksi yang diberikan kepada komputer agar ia mau melakukan sesuatu entah itu memproses data, menampilkan data, atau yang lainnya secara berulang.

for(let i = 0; i < 5; i++){
argumen
}

i = 0
while(i < 5){
argumen
i++
}

i = 0
do {
argumen
i++
} while (i < 5)
*/

console.log("Soal 2")

for(let i = 20; i >= 15; i--){
    console.log(i)
}

console.log("Soal 3")

for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FazzTrack")
    } else if (i % 3 == 0) {
      console.log("Fazz")
    } else if (i % 5 == 0) {
      console.log("Track")
    } else {
      console.log(i)
    }
}