function introduce(nama, umur, alamat, hoby) {
    return (
        "Nama saya " +
        nama +
        ", umur saya " +
        umur +
        " tahun, alamat saya di " +
        alamat +
        ", dan saya punya hobby yaitu " +
        hoby +
        "!"
    );
}

var name = "Seno Agung Pradityo";
var age = 30;
var address = "Jalan Tomang Tinggi XVI/22 Grogol Petamburan Jakarta Barat";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);