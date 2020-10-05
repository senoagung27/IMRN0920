function naikAngkot (listPenumpang=''){
    var rute = ['A','B','C','D','E','F'];
    var dataPenumpang = [];
    var nol = [];

    if(listPenumpang == ''){
        return nol;
    }

    for(var idPenumpang = 0; idPenumpang < listPenumpang.length; idPenumpang++){
        var idNaikDari = 0;
        var idTujuan = 0;

        while(listPenumpang[idPenumpang][1]){ 
            if(listPenumpang[idPenumpang][1] == rute[idNaikDari]){
                break;
            }
            else{
                idNaikDari++;
            }
        }

        while(listPenumpang[idPenumpang][2]){ 
            if(listPenumpang[idPenumpang][2] == rute[idTujuan]){
                break;
            }
            else{
                idTujuan++;
            }
        }

        dataPenumpang.push({
            penumpang : listPenumpang[idPenumpang][0],
            naikDari : listPenumpang[idPenumpang][1],
            tujuan : listPenumpang[idPenumpang][2],
            bayar : (idTujuan-idNaikDari)*2000 
        })
    }
    return dataPenumpang;
}
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
console.log(naikAngkot([]));