//String Data Type

var ad='George';

let str1="merhaba dünya"
let str2='merhaba dünya'
let str3=`merhaba ${ad}`

console.log(str3)

console.log(typeof str1, str1)

//bu şekilde içindeki değere ulaşırız fakat değiştiremeyiz 
//Stringler immutable oldukları için içeriği değişmez
str1[4]="a"


//const ile tanımlana ifade değiştirilemez hata verir
// const str4 = "merhaba fs16"
// str4="deneme"
// console.log(str4)


let kimlik=32542342332;
let adSoyad="John Smith"

console.log("Personelimiz ", adSoyad, "'ın Kimlik numarası : ", kimlik)

//template literal veya string literal back thick adı
console.log(`Personelimiz ${adSoyad} 'ın Kimlik numarası : ${kimlik}`)

//BOOLEAN Data type
//true veya false değer tutar


//let deger=0;   0 false dönderir
//let deger=1;   0 harici bir sayı true dönderir
//let deger="";  boş string false dönderir
//let deger = undefined;   false değer gönderir
//let deger=NaN;  false değer dönderir
//console.log(Boolean(deger))


let isOpen =true;

if (isOpen){
    console.log("sistem açık")
} else {
    console.log("sistem kapalı")
}



//Null veri türü

let personel=null;


console.log(typeof null)
console.log(null+5)

//Undefined

let phoneNumber;
console.log(phoneNumber)
console.log(typeof phoneNumber)

phoneNumber = "+90998098409384"
console.log(phoneNumber)
console.log(typeof phoneNumber)

//NaN  - Not a number açılımı

let n;
let result = undefined+15;
console.log(result)
console.log(isNaN(result))


//nonprimative yapılar
//Object, Array ve Function

let personleList = ["Ali", "Ayşe", "Sema"]
let personelData = {name1:"Ali", suname1:"Güven", age1:"45"}

let sum = (a, b) => {
    return a+b;
}

console.log(sum(5,6))

