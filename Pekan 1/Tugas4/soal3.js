function introduce(name, age, address, hobby){
    var kalimat = ("Nama saya "+ name + ", umur saya "+age+ " tahun, alamat saya di "+address+ ", dan saya punya hobby yaitu "+ hobby+ "!");
    return kalimat
}
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!" 