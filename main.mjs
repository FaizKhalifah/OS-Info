import os from "os";
import process from "process";
import readlinePromises from "readline/promises";

const input = readlinePromises.createInterface({
    input:process.stdin,
    output:process.stdout
})

const jawaban = await input.question("Kamu ingin layanan apa? ");
console.log(`Layanan yang kamu pilih adalah ${jawaban}`);
input.close();
