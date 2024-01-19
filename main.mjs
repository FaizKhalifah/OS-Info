import os from "os";
import process from "process";
import readlinePromises from "readline/promises";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

let condition = true

const opsi = ["Versi","platform","mesin","nama host","perilisan", "tipe"];


while(condition){
    console.log("Daftar Layanan : ")


    for(let i in opsi){
    console.log(`${Number(i)+1}. ${opsi[i]}`);
    }
    console.log("Ketik \'Keluar\' untuk keluar dari program");


    const jawaban = await input.question("Kamu ingin layanan apa? ");
    


    if(jawaban==1 || jawaban.toLowerCase()===opsi[0].toLowerCase()){
        console.log(`Informasi mengenai Versi : \n ${os.version()} \n\n`);
    }else if(jawaban==2 || jawaban.toLowerCase()==opsi[1].toLowerCase()){
        console.log(`Informasi mengenai platform : \n ${os.platform()} \n\n`);
    }else if(jawaban==3 || jawaban.toLowerCase()==opsi[2].toLowerCase()){
        console.log(`Informasi mengenai mesin : \n ${os.machine()} \n\n`);
    }
    else if(jawaban==4 || jawaban.toLowerCase()==opsi[3].toLowerCase()){
        console.log(`Informasi mengenai nama host : \n ${os.hostname()} \n\n`);
    }
    else if(jawaban==5 || jawaban.toLowerCase()==opsi[4].toLowerCase()){
        console.log(`Informasi mengenai perilisan : \n ${os.release()} \n\n`);
    }
    else if(jawaban==6 || jawaban.toLowerCase()==opsi[5].toLowerCase()){
        console.log(`Informasi mengenai tipe : \n ${os.type()} \n\n`);
    }else if(jawaban.toLowerCase()==="keluar".toLowerCase()){
        console.log("Anda memilih keluar dari program");
        condition=false;
    }else{
        console.log("Opsi tidak dikenal \n\n");
    }
    
}

input.close();
