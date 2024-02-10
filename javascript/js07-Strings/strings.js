
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

// "Escape characters" (kaçış karakterleri), özel bir anlamı olan karakterlerin belirtilmiş bir amaç için kullanılmasını sağlayan karakterlerdir

//  \ Escape karakterler \işareti ile kullanılır

// \ hemen yanındaki karkateri göz ardı edilmesini sağlar

let metin='Ömer\'in kalemi'
let path="c:\\Users\\Kullanıcılar"
console.log(path)   // users\kullanıcılar

// \n  new line => bir alt satıra geçmesini sağlar
// \t tab boşluğu verir ( 8 karakterlik boşluk)
const parag="\tMerhaba Cohort 16 sakinleri\nGününüz güzel geçsin"
console.log(parag)

// Unicode karakterleri için 
console.log("\u2615")
console.log("\uD83C\uDF39")
console.log("\uD83D\uDCB2")
console.log("\u00A9") 

console.log(`       Merhaba Cohort 16 sakinleri   🌹  

Gününüz güzel geçsin`)
// console.clear()
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//!                        STRING YAPISI VE INDEXLEME                         */
/* -------------------------------------------------------------------------- */

let course="Clarusway"
console.log(course)

console.log(course[0])
console.log(course[4])
console.log(course[7])
// Stringler,primitive bir tür olduğu için parça olarak değiştiremezsiniz
// immutable - not mutable
course[4]="a" // değişim yapılamaz
course="Clarusway Bootcamp"
console.log(course)

for (let i=0; i<=17;i++){
    console.log(course[i])
}

/* -------------------------------------------------------------------------- */
//!                         STRING PROPERTY AND METHODS                       */
/* -------------------------------------------------------------------------- */

//! ************STRING PROPERTY (Özellikleri) ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir bu nedenle parantez açıp kapatmaya gerek yoktur

//? length
//? prototype

console.log(course.length)

for (let i=0; i<course.length;i++){
    console.log(course[i])
}
console.clear()
for (let i=course.length-1; i>=0;i--){
    console.log(course[i])
}
const emoji="🎆"
console.log(emoji.length)


//! ************STRING METHODS ************
//! -------------------------------------------------------------------------- */
// charAt()             Returns the character at the specified index.
// charCodeAt()	        Returns the Unicode of the character at the specified index.
// concat()	            Joins two or more strings, and returns a new string.
// endsWith()	        Checks whether a string ends with a specified substring.
// fromCharCode()	    Converts Unicode values to characters.
// includes()	        Checks whether a string contains the specified substring.
// indexOf()	        Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
// localeCompare()	    Compares two strings in the current locale.
// match()	            Matches a string against a regular expression, and returns an array of all matches.
// repeat()	            Returns a new string which contains the specified number of copies of the original string.
// replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()	             Searches a string against a regular expression, and returns the index of the first match.
// slice()	            Extracts a portion of a string and returns it as a new string.
// split()	            Splits a string into an array of substrings.
// startsWith()	        Checks whether a string begins with a specified substring.
// substr()	            Extracts the part of a string between the start index and a number of characters after it.
// substring()	        Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()	    Converts a string to lowercase letters.
// toString()	        Returns a string representing the specified object.
// toUpperCase()	    Converts a string to uppercase letters.
// trim()	            Removes whitespace from both ends of a string.
// valueOf()	        Returns the primitive value of a String object.
/* -------------------------------------------------------------------------- */
//! String Birleştirme

const name="John"
const surname="Due"
const job="Developer"

// + 
console.log("Our customer's name: "+name+" surname:"+surname+" and his job:"+job)
console.log(`our customers's name:${name} surname:${surname} and his job: ${job}`)
const fullname=name.concat(surname)
console.log(fullname)

// toLowerCase()
// console.log(fullname.toLowerCase())

// const giris="clarusway"
// const girisKodu=prompt("Giriş kodunu girin:")
// if (giris===girisKodu.toLowerCase()){
//     console.log("Girişiniz onaylandı")
// }
// else{
//     console.log("giriş hatalı")
// }
console.clear()
// toUpperCase()  Büyük harfe çevirir

const statement="Güzel bir gün, kahve ve hurma ile iyi gidiyor"
console.log(statement.toUpperCase())
console.log(statement)
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
//!                              String PARÇALAMA                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   split()                                  */
/* -------------------------------------------------------------------------- */
//split parçaladığı bölümleri diziye çevirir.
// str.split(seperator) => seperator bir ayraç, "" , " " , ", ", "/"

let text="Clarusway It bootcamp"
console.log(text.split(""))
const splittedText=text.split(" ")
console.log(splittedText)
console.log(splittedText[2])

for (let i=splittedText.length-1;i>=0;i--){
    console.log(splittedText[i])
}

let months="Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec"

console.log(months.toUpperCase().split("/"))

let  liste="Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand"
let yeniListe=liste.split(";")
console.log(yeniListe[2])

//! DİKKAT JOİN ve REVERSE string metodu değildir ama splitle çok kullanılır

let cumle="Merhaba Değerli Cohort 16 sakinleri"
// bu cümleyi terseten string olarak yazın
let yeniCumle=cumle.split(" ")
console.log(yeniCumle)
console.log(yeniCumle[2])
// reverse tersten yazdırma  - Array metodu
console.log(yeniCumle.reverse().join(" - "))

// Join - array metodu

// polindrom kelime : Girilen kelime polindrom mudur
// let kelime=prompt("Kelime Girin:")    
// let tersten=kelime.split("").reverse().join("")
// console.log(tersten)

// kelime===tersten ? console.log("polindrom") : console.log("polindrom değil")

/* -------------------------------------------------------------------------- */
//!Slice 
//? String içinde bir bölümü almak için kullanılır. (immmutable, kalıcı değişiklik olmaz)
// Slice(başlangıç index numarası, bitiş index numarası(bu numara dahil değildir))

let ataSoz="Oku da adam ol"
console.log(ataSoz.slice(7,11))
console.log(ataSoz.slice(7))

// tersten de erişim sağlanabilir : negatif değer kullanılır
console.log(ataSoz.slice(-6,-2))

//! substring(başlangıç index numarası,bitiş index numarası) 
// slicedan tek farkı negatif değer kullanılmaz
console.log(ataSoz.substring(3,8))
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                        //!Stringde Değişiklik yapma                        */
/* -------------------------------------------------------------------------- */
// ! replace(aranan,değişirilecek) - ReplaceAll( aranan,değişirilecek)
let ozlusoz="Tecrübe tarak gibidir; ama hayat insana kel olduğu zaman verir."

console.log(ozlusoz.replace("kel","saçlı"))

let variable="kullanıcı adı"
let yeni=variable.replace(" ","_")
console.log(yeni)

let yeniDeger=yeni.replaceAll("a","â")
console.log(yeniDeger)

/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                      //!String içinde Arama işlemleri                      */
/* -------------------------------------------------------------------------- */
// includes, indexOf, search ,match() metodlarını kullanabiliriz

//! includes()   ... yı içeriyor mu -> true yada false bir değer döndürür.caseSensitive (küçük büyük harfe duyarlı) bir özelliktir.

console.log(`ozlusozde tarak kelimesi geçiyor mu:${ozlusoz.includes("tarak")}`)

let url="https://clarusway.com"

let msg= url.includes("https") ? "Bu site güvenilir" :" Bu site güvenli değil"

console.log(msg)

let email="helenclarusway.com"

msg=email.includes("@") ? "Mail adresi geçerli" : "Mail adresi geçersiz"
console.log(msg)

//!indexOf (aranacak metin)
//? Bir karakter yada karakter grubumun kaçıncı sırada olduğunu yani index numarasını verir. 

console.log(email.indexOf("com"))

//?Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir

console.log(email.indexOf("edu"))

msg=email.indexOf("edu")=== -1 ? "Bu bir eğitim sitesi değildir" : " Bu bir eğitim sitesidir"
console.log(msg)

//! search()

// bir string içindeki aranan elemanda ilk bulduğunun index numarasını yazar. Bulamazsa -1 dönderir.

let metin1="Clarusway it bootcamp IT .Clarusway develop you IT field"

console.log(metin1.search("IT"))
console.log(metin1.search("it"))

// Regex - regular Expression 
//   / ile ifade edilir
//  /g => global , bütün cümle içinde uygula
// /i => case sensitive özlliğini kaldır.Küçük büyük olmasına bakmadan bul
console.log(metin1.search(/[aeiıoöuü]/ig))
console.log(metin1.replace(/IT/gi,"Communication"))

//! Match 
// string içinde aranan metin bulunur ve bir dizi dönderir.
// Regex ifadeler de kullanılabilir

let metin2="Bugün gerçekten çok güzel , hafif serin  bugün"
console.log(metin2.match(/bugün/gi))

let değistirilmisMetin=metin2.match(/[e]/gi)
console.log(değistirilmisMetin.length)



// trim ,startsWith , endsWith
let sentence1="     Clarusway  "
console.log(sentence1.trim())

metin="Clarusway"
console.log(metin.startsWith("c"))
console.log(metin.endsWith("y"))


let str5 = "Hello FS Cohort 16"
console.log(str5.slice(9))

let str = "Once a day"
let index = str.indexOf("a");
console.log(index)
let index2=str.lastIndexOf("a")
console.log(index2)

console.log(str.indexOf("a", index+1) === index2)

console.log(str.indexOf("a", index+1))





