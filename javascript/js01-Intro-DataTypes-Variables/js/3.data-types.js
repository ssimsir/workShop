/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
x = 15.34;
console.log(typeof x);

/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

yas = 40;
sayi = 56.87;
console.log(yas);
sonuc = sayi * 5 + 6;
console.log(sonuc);

const pi = Math.PI;
console.log(pi);

//? Ondalıklı kısmı düzenlemek içinkullanılan yöntemler , aşağıdakiler ek olarak floor ve ceilde kullanılabilir
// round

let yuvarlanmisSonuc = Math.round(sonuc);
console.log("sonuc:", sonuc);
console.log(yuvarlanmisSonuc);

// trunc
let truncSonuc = Math.trunc(sonuc);
console.log(truncSonuc);

// virgülden sonra gelen ondalıklı kısımda kaç hane göstemesini istiyorsanız toFixed(sayı)
// Bir sayıya  toFixed uygulandığında sonucu stringdir.

let fixedSonuc = sonuc.toFixed(2);
console.log(sonuc.toFixed(2));
console.log(fixedSonuc);

//!RANDOM metodu
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir
console.clear();
console.log(Math.round(Math.random() * 101));

console.log(Math.pow(5, 3)); // kuvvet alma
console.log(5 ** 3);
console.log(Math.sqrt(144)); // karekök
console.clear();

/* -------------------------------------------------------------------------- */
//! STRING DATA TYPE

ad = "George";

let str1 = 'merhaba dünya bugün" 17 Ocak';
let str2 = "merhaba dünya";
let str3 = `merhaba ${ad}`;
let str4 = new String("merhaba dünya");

console.log(typeof str4, str4);
console.log(str1);

console.log(str1[4]);
// string bu şekilde içindeki değere ulaşılır ama değiştirilemez.
// immutable
str1[4] = "ü";

str1 = "Merhaba FS16";

console.log(str1);

let kimlik=2423432432
let adSoyad="John Smith"

console.log("Personelimiz ",adSoyad,"'in Kimlik numarası:",kimlik)
//Template Literal, string literal

// stringleri dinamik olarak kullanmayı sağlar
// `` 
// stringler yazılırken değişkenlerde kullanabilmemizi sağlar

console.log(`Personelimiz ${adSoyad}'in 
Kimlik Numarası:${kimlik}`)



//! BOOLEAN
// true yada false değeri tutar

let deger=true

console.log(Boolean(deger))

let kontrol=(sifre="12x45")

if (sifre=="12x45"){
    console.log("Sistemiz açık")
}
else{
    console.log("sisteminiz kapalı")
}

/* -------------------------------------------------------------------------- */

//! NULL 
let personel=null
console.log(typeof null)
console.log(null+5)

console.clear()
//! UNDEFINED

let phoneNumber;
console.log(phoneNumber)
console.log(typeof phoneNumber)

phoneNumber="+9054689548"
console.log(typeof phoneNumber)

function sum(){
   return "toplam=4"
}

console.log(sum())

//!NaN  - Not a number

let n;

let result=5 
console.log(result)
console.log(isNaN(result))
 

// NON PRIMITIVE 
// Array,Object,function

let personelList=["Ali","Ayşe","Sema"] //Array
let personelData={name:"Ali",surname:"Güven",age:"45"} // Object

//function
function sum(){
    return "toplam=4"
 }