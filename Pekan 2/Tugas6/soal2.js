function shoppingTime(memberid = "", uang){
    var barangDibeli = [0];
    var uangAwal = uang;
    var counterSepatu = 1;
    var counterZoro = 1;
    var counterHN = 1;
    var counterUniklooh = 1;
    var counterCasing = 1;

    if(memberid == ""){
        return("Mohon maaf, toko X hanya berlaku untuk member saja");
    }
    else if(uang < 50000){
        return("Mohon maaf, uang tidak cukup")
    }
    else{
        while(uang >= 50000){
            if(uang >= 1500000 && counterSepatu != 0){
                barangDibeli.push("Sepatu Stacattu");
                uang -= 1500000;
                counterSepatu -= 1;
            }
            else if(uang >= 500000 && counterZoro != 0){
                barangDibeli.push("Baju Zoro");
                uang -= 500000;
                counterZoro -= 1;
            }
            else if(uang >= 250000 && counterHN != 0){
                barangDibeli.push("Baju H&N");
                uang -= 250000;
                counterHN -= 1;
            }
            else if(uang >= 175000 && counterUniklooh != 0){
                barangDibeli.push("Sweater Uniklooh");
                uang -= 175000;
                counterUniklooh -= 1;
            }
            else if(uang >= 50000 && counterCasing != 0){
                barangDibeli.push("Casing Handphone");
                uang -= 50000;
                counterCasing -= 1;
            }
            else{ 
                break;
            }
        }
        barangDibeli.shift();

        var pelanggan = {
            memberId : memberid,
            money : uangAwal,
            listPurchased: barangDibeli,
            changeMoney : uang
        }
        return pelanggan;
    }
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000)); 
console.log(shoppingTime());