function cekOngkir(jarak){
    let ongkir = 0
    if(jarak <= 2){
        ongkir = 5000
    } else{
        jarak = jarak - 2
        ongkir = 5000 + jarak * 3000
    }
    return console.log("Ongkos kirim dengan jarak " + jarak + " Km adalah " + ongkir)
}

cekOngkir(5)
cekOngkir(2)