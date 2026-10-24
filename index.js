const nilaiSatu = [80, 83, 86];
const nilaiDua = [89, 92, 95];
const totalNilai = [...nilaiSatu, ...nilaiDua];

let max = 0;

for (let i = 0; i < totalNilai.length; i++) {
  if (totalNilai[i] > max) {
    max = totalNilai[i];
  }
}
console.log(max);

let min = totalNilai[1];

for (let a = 0; a < totalNilai.length; a++) {
  if (totalNilai[a] < min) {
    min = totalNilai[a];
  }
}
console.log(min);

let average = 0;

for (let x = 0; x < totalNilai.length; x++) {
  average = totalNilai[x];
}
let totalAvg = average / totalNilai.length;
console.log(totalAvg);
