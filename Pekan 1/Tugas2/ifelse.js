var nama = "Seno";
var peran = "";

console.log("Input nama = " + nama + " dan peran = " + peran);
if (nama == "john") {
  console.log("halo " + nama + "pilih peran untuk memulai game ");
} else if (nama == "jane" || peran == "penyihir") {
  console.log("Selamat datang di dunia werewolf" + nama);
  console.log(
    "halo " + peran + nama + ", kamu dapat melihat siapa yang menjadi werewolf"
  );
} else if (nama == "jenita" || peran == "guard") {
  console.log(" selamat datang di dunia werewolf" + nama);
  console.log(
    "halo " +
      peran +
      nama +
      ", kamu akan membantu melindungi temanmu dari serangan werewolf "
  );
} else if (nama == "junaedi" || peran == "werewolf") {
  console.log("selamat datang di dunia werewolf " + nama);
  console.log(
    "halo " + peran + nama + ", Kamu akan memakan mangsa setiap malam!"
  );
} else {
  console.log("mohon masukkan nama");
}
