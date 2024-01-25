// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

//? for düngüsünde kosul cümlesinde == veya != operatorlerini kullanmak sonsuz veya girilmeyen donguye yol açması muhtemeldir. Bu sebeple, genelde >, <, <=, >= islemleri kullanilir.

//! girilmeyen dongu
// for (let i = 1; i == 50; i = i * 2) {
//   console.log(i)
// }
//! sonsuz dongu
// for (let i = 1; i != 50; i = i * 2) {
//     console.log(i)
// }
console.log("Bitti")

//? sonsuz dongu
// for (let i = 1; ; i /= 2) {
//   console.log(i)
// }

//? Ornek 50 kişinin notu girerek ortalaması hesaplayan kodu yazınız.
let sum = 0
for (let i = 1; i <= 5; i++) {
  const grade = Number(prompt(`Enter ${i}. grade:`))
  sum = sum + grade
}

console.log(`AVG:${sum / i}`)
