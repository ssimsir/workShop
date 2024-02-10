//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********")

const sayilar=[4, 5, 1,4,6]

sayilar.forEach((s) => console.log(s))

const sayilar1=[4, 5, 1,4,6]

let sum=0;
sayilar1.forEach((sayi)=>sum += sayi)
console.log(sum)

const notlar=[40, 50, 10,40,60,90]
notlar.forEach((not, indis, array)=>{

    array[indis]=not*1.1
})

console.log(notlar)

/* forEach  return yapmaz void functiondur*/ M




/*----------------------- MAP Method------------------------*/

// //? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
// const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"]

// const copiedNames =  names.map((n)=> n.toLowerCase())
// console.log(copiedNames)



const euro = 32.97;
const dolar = 30.5;

const iPhoneTl = [90000, 75000, 60000, 40000, 30000] 

const iPhoneDolar = iPhoneTl.map((tl)=> Math.trunc(tl/dolar) )

const iPhoneEuro = iPhoneTl.map((tl)=> Math.trunc(tl/euro) )
console.log(iPhoneDolar)
console.log(iPhoneEuro)




const salary = [90000, 75000, 60000, 40000, 30000] 
 
zamliMaas =  salary.filter((m)=>m<50000).map((m)=>m*1.2)
console.log(zamliMaas)