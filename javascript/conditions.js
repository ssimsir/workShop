

// * ============================================
// *               KARAR YAPILARI
// * ============================================

console.log("*** CONDITIONS ***")


//!Örnek 1
// const num1 = +prompt("Bir sayi giriniz:")
//const num1 = Number(prompt("Bir sayi giriniz:"))
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

//!Örnek 2 girilen sayının en büyüğü

const  sayi1=45
const  sayi2=345
const  sayi3=23

//? 1. yöntem build in fonksiyon yardımıyla
console.log(Math.max(sayi1, sayi2, sayi3))   

//? 2. yöntem nested if
if (sayi1>sayi2){
    if (sayi1>sayi3){
        console.log("Enbüyük sayi ", sayi1)
    }
}

if (sayi2>sayi1){
    if (sayi2>sayi3){
        console.log("Enbüyük sayi ", sayi2)
    }
}

if (sayi3>sayi2){
    if (sayi3>sayi1){
        console.log("Enbüyük sayi ", sayi3)
    }
}

//? 3. yöntem logic operatorler

if (sayi1>=sayi2 && sayi1>=sayi3){
    console.log("En büyük sayi", sayi1)
} else if (sayi2>=sayi1 && sayi2>=sayi3){
    console.log("En büyük sayi", sayi2)
} else if (sayi3>=sayi1 && sayi3>=sayi2){
    console.log("En büyük sayi", sayi3)
} else {
    console.log("yanlış işlem")
}



//?  4. yöntem


let enBuyuk=sayi1;

if (sayi2>enBuyuk){
    enBuyuk=sayi2
}

if (sayi3>enBuyuk){
    enBuyuk=sayi3
}

console.log("En Büyük Sayi", enBuyuk)



//! Ornek: Condition birleştirme

const yaş = 20;
const cinsiyet = "Erkek";
const sağlıklı = true;

//?   built in fonksiyon js içinde tanımlı olan fonksiyonlar
const koşul = yaş >= 18 && cinsiyet.toLowerCase() === "erkek" && sağlıklı===true;

if (koşul===true) {
	console.log("Askerlik Yapmalı");
} else {
	console.log("Askerlik Yapması gerekmez");
}