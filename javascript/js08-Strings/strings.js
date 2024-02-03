
/* -------------------------------------------------------------------------- */
/*                                   STRINGS                                  */
/* -------------------------------------------------------------------------- */
// Bir string, metin veya karakter dizisi olarak adlandırılan verileri temsil eder. JavaScript'te stringler çift tırnak ("), tek tırnak ('), veya backtick (`) içinde tanımlanabilir. 

//? String oluşuturma yöntemleri
const str1="new string"
const str2='new string'
const deger="merhaba"
const str3=`new string ${deger}`   // backtickler ile template literal
const str4=new String("new string")
console.log(str1)
console.log(str2)
console.log(str3)
console.log(str4)
console.log("🎈🎆🎇🧨✨")
console.log("©")
/* -------------------------------------------------------------------------- */
//! ---------------------------- ESCAPE CHARACTERS -------------------------- */

//Escape character \ ile kullanılır
// \ hemen yanındaki karakteri gözardı eder

let metin = 'Ömer\'in kalemi';
let path = 'c:\\users\\kullanıcılar';
console.log(path)

// \n yani satıra geçer
const parag=`Merhaba cohort 16 sakinleri \ngününüz güzel geçsin`;
console.log(parag)

// \t bir tab boşluk verir
const parag1=`\tMerhaba cohort 16 sakinleri \ngününüz güzel geçsin`;
console.log(parag1)

//Unicod karakterleri için kullanılır   
console.log("\u2615");
console.log("\u00A9");
console.log("\u2615")
console.log("\uD83C\uDF39")
console.log("\uD83D\uDCB2")
console.log("\u00A9") 

let metin1=`Ömer'in kalemi` ;


//String yapısı ve indexleme

let course = `Clarusway`
console.log(course);
console.log(course[0])
console.log(course[1])
console.log(course[2])
console.log(course[3])
//string parça halde değiştirilemez immutable olduğu için
// course[1]="p"
// console.log(course)  //değer değişmez

for(let i=0; i<9;i++){
    console.log(course[i]);
}
console.log("💎 💐 🤵 👰 🎩 💑 💒 ⛪ 🔔 💕");

/* -------------------------------------------------------------------------- */
//!                         STRING PROPERTY AND METHODS                       */
/* -------------------------------------------------------------------------- */

//! ************STRING PROPERTY (Özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur


console.log(course.length)


for(let i=0; i<course.length;i++) console.log(course[i]);

for(let i=course.length-1;i>=0;i--) console.log(course[i]);

