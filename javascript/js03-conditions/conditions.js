// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***")

//! Ornek1
// const num1 = +prompt("Bir sayi giriniz:")
// const num1 = Number(prompt("Bir sayi giriniz:"))
const num1 = 5
// console.log(num1, typeof num1)
// console.log("Toplam:", num1 + num2) //? String birleştirme (concatination)

if (num1 < 0) {
  console.log("Girilen sayi negatiftir")
} else if (num1 > 0) {
  console.log("Girilen sayi pozitiftir")
} else {
  console.log("Girilen sayi 0'a eşittir")
}
//! Ornek2: 3 sayinin en buyugu

// const sayi1 = NaN
// const sayi2 = ""
// const sayi3 = 3

//? 1.yontem built-in fonks yardimiyla
// const enBuyuk = Math.max(sayi1, sayi2, sayi3)
// console.log("EnBuyuk:", enBuyuk)

//? 2.yontem (nested if)
// if (sayi1 >= sayi2) {
//   if (sayi1 >= sayi3) {
//     console.log("Enbuyuk:", sayi1)
//   }
// }
// if (sayi2 >= sayi1) {
//   if (sayi2 >= sayi3) {
//     console.log("Enbuyuk:", sayi2)
//   }
// }
// if (sayi3 >= sayi1) {
//   if (sayi3 >= sayi2) {
//     console.log("Enbuyuk:", sayi3)
//   }
// }

//? 3.yontem (Logic operatorler ile)
// if (sayi1 >= sayi2 && sayi1 >= sayi3) {
//   console.log("Enbuyuk:", sayi1)
// } else if (sayi2 >= sayi1 && sayi2 >= sayi3) {
//   console.log("Enbuyuk:", sayi2)
// } else if (sayi3 >= sayi1 && sayi3 >= sayi2) {
//   console.log("Enbuyuk:", sayi3)
// } else {
//   console.log("yanlis sayi formati")
// }

// console.log(sayi2 === sayi3) //? 3'lü operatorler type kontrolü yapar
// console.log(true == "true")

//? 4.yontem (Logic operatorler ile)
const sayi1 = 5
const sayi2 = 6
const sayi3 = 7

let enBuyuk = sayi1

if (sayi2 > enBuyuk) {
  enBuyuk = sayi2
}
if (sayi3 > enBuyuk) {
  enBuyuk = sayi3
}

console.log("EnBuyuk:", enBuyuk)

//! Ornek: Condition birleştirme

const yaş = 20
const cinsiyet = "erkek"
const sağlıklı = true

//? string.toLowerCase()  --> built-in fonksiyon (JS nin içerisinde tanımlı olan fonksiyonlar)

const koşul =
  yaş >= 18 && cinsiyet.toLowerCase() === "erkek" && sağlıklı === true

if (koşul) {
  console.log("Askerlik Yapmalı")
} else {
  console.log("Askerlik Yapması gerekmez")
}

//? if(koşul === true)  ==> if(koşul)
//* if(koşul === false)  ==> if(!koşul)

const cumle = "Bugün günlerden Cumartesi"
const kucukHarfler = cumle.toLowerCase()
const buyukHarfler = cumle.toUpperCase()
console.log(kucukHarfler)
console.log(buyukHarfler)

//*********************************************
//* TERNARY
//*********************************************

const yas = 14
//? Ternary
yas >= 18 ? console.log("Askerlik yapmalı") : console.log("Askerlik yapmaz")

//? if-else
if (yas > 18) {
  console.log("Askerlik yapmalı")
} else {
  console.log("Askerlik yapmaz")
}

//? nested ternary
const age = 19
const sonuc = age <= 14 ? "cocuk " : age <= 18 ? "ergen" : "yetiskin"
console.log(sonuc)

//? if-else hali
let durum = ""
if (age <= 14) {
  durum = "cocuk"
} else if (age <= 18) {
  durum = "ergen"
} else {
  durum = "yetiskin"
}

console.log(durum)

//! Ornek
const calismaSuresi = 9
let maas = 30000

//? tek durumlu senaryoda ternary icinde işlem yapma
// calismaSuresi >= 10 ? (maas = maas * 1.5) : ""

//? tek durumlu senaryoda ternary'nin bir degiskene deger aktarması işlemi
maas = calismaSuresi >= 10 ? maas * 1.5 : maas
console.log("MAAS:", maas)

//*********************************************
//* SHORT - CIRCUIT
//*********************************************

let salary = 40000
let year = 5
let marriage = true

//! && operatorü (true ise yanındaki ifadeyi calistir.)
//? Tek condition ve tek durum
year >= 10 && (salary = salary * 1.5)

//? 2 condition var ve tek durum
// year >= 10 && marriage === true && (salary = salary * 1.5)

console.log("SALARY:", salary)

//! || operatorü (false ise yanındaki ifadeyi calistir.))
const sene = 14
let result = "ahmet"

sene >= 18 || (result = "cocuk")
console.log(result)

//? falsy bir degerin tespit edilip buna göre bir degiskene baslangic degeri vermek için kullanıma çok uygundur.
result = ""
let myVar = result || "noname"
console.log(myVar)

//? tek durum var ise short-circuit
//? 2 durum var ise ternary
//? 3-6 arasi durum var ise if-else
//? 6 dan fazla ise switch-case

//*********************************************
//* SWITCH-CASE
//*********************************************

const s1 = +prompt("1.sayiyi griniz:")
const islem = prompt("İslemi girinz: +, - , /, *")
const s2 = Number(prompt("2.sayiyi griniz:"))

//? null,undefined, "", false, NaN, Boolean(0)  => falsy 5 li
if (isNaN(s1) || isNaN(s2)) {
  alert("Lütfen gecerli bir sayi girinz:")
}

if (islem === "/" && s2 === 0) {
  alert("Sifira bolme hatasi")
}

let yekun = 0
switch (islem) {
  case "+":
    yekun = s1 + s2
    break
  case "-":
    yekun = s1 - s2
    break
  case "/":
    yekun = s1 / s2
    break
  case "*":
    yekun = s1 * s2
    break
  default:
    alert("Yanlis islem")
    break
}
console.log(`${s1} ${islem} ${s2} = ${yekun.toFixed(3)}`)
