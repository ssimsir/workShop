//* ============================================
//*                FOR LOOP
//* ============================================
console.log("**** LOOPS IN ARRAYS ***")

//? notlar dizisindeki notların 50den büyük olanları ve küçük olanları 2 ayrı diziye kaydediniz

const notlar1 =  [50, 45, 67, 100, 10]

const ellidenKucukNotlar1=[];
const ellidenBuyukNotlar1=[];

for(let i=0; i<notlar1.length; i++){
    if(notlar1[i]<50){
        ellidenKucukNotlar1.push(notlar1[i]);
    }else if(notlar1[i]>50){
        ellidenBuyukNotlar1.push(notlar1[i]);
    }
}
console.log(notlar1)
console.log(ellidenKucukNotlar1)
console.log(ellidenBuyukNotlar1)



//* ====================FOR IN========================

const sayilar = [50000, 35000, 12000, 44000]

let total=0;
for (const i in sayilar) {
    total += sayilar[i]
}
console.log(`AVG = ${total/sayilar.length}`)


//? notlar dizisindeki notların 50den büyük olanları ve küçük olanları 2 ayrı diziye kaydediniz

const notlar2 =  [50, 45, 67, 100, 10]

const ellidenKucukNotlar2=[];
const ellidenBuyukNotlar2=[];

for(let i in notlar2){
    notlar2[i]<50 ?  ellidenKucukNotlar2.push(notlar2[i]) : ellidenBuyukNotlar2.push(notlar2[i]);

}
console.log(notlar2)
console.log(ellidenKucukNotlar2)
console.log(ellidenBuyukNotlar2)


//* ==================== FOR OF ========================

const students = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]

const strArrayUpperCase = (students) => {

    const upperCasedArray=[]
    for(const student of students){
        upperCasedArray.push(student.toUpperCase())
    }
    return upperCasedArray;
}

console.log(strArrayUpperCase(students))



//*-------------------------------------------------------
//* SORU: ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu ana programa dondurecek bir
//* fonksiyon yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------
const ogrenciler2 = ["ahmet", "mehmet", "ismet", "saffet", "ahmet", "saffet"]



