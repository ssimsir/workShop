// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")


//! Square bracket (Array Literal)
const names=["Ahmet" , "ismet", "Saffet", "Can", true, 6.6,  [1,2,3,4]]
console.log(names)
console.log("Uzunluk", names.length)
console.log(typeof names)  //! Object

//?Diziden veri okuma indisleme

console.log(names[3])
console.log(names[6][0])

console.log(names[names.length-1])


//?Yazma
names[4]="Canan"
console.log(names)

//! 2. Yöntem (Object Concructor)

const programingsLans = new Array("Go", "js", "Java")

const myArr = new Array(2);   //[empty x 2]


//! 3. Yöntem (Array.of())

const sayilar = Array.of(4)


//?=====================================================================
//?  Diziyi Değiştiren (Mutator Metodlar)
//?=====================================================================

const cars = ["BMW", "Mercedes"]

cars[cars.length] = "Şahin"
console.log(cars)

//? push() dizinin sonuna eleman ekler dizinin son eleman sayısını dönderir
const el = cars.push("Kartal")


//? pop() dizinin son elemanın siler sildiği değeri dönderir

const deletedCar = cars.pop()
console.log(deletedCar, cars)

//? shift() dizinin 0. index elemanını siler ve silinen elemanı dönderir

const bmw  = cars.shift()
console.log(bmw, cars)

//? unsift dizini 0. indexine eleman ekler ve dizinin son eleman sayısını dönderir
const newEl = cars.unshift("Toros");
console.log(cars, newEl)

//? splice()
//? 1. parametre : eklenecek indis numarası
//? 2. parametre : 0 ise araya ekleme 1 ise üzerine yazma
//? 3. parametre : yeni eklenecek veri

cars.splice(1, 0, "porsche")
console.log(cars)

cars.splice(4, 0, "Serçe", "Tofaş")
console.log(cars)

//* reverse()

cars.reverse()

console.log(cars)

//? sort() sıralama   ascii tablosuna göre sıralar
cars.sort()
console.log(cars)

cars.sort().reverse()
console.log(cars)

const numbers=[3,2,11, 22,6,1,9,3]
numbers.sort()
console.log(numbers)

numbers.sort((a,b)=>a-b)   //Küçükten büyüğe
console.log(numbers)

numbers.sort((a,b)=>b-a)   //Büyükten küçüge

//? fill()

const degerler= [2,2.45,43,23,12,124,343,,234,,234,,12,]
degerler.fill(0)  //dizinin bütün elemanlarını 0 yapar
console.log(degerler)

//* Dizinin elemanlarını birleştirip stringe çevirir
""
const joinedArray = numbers.join(" ")
console.log(joinedArray)


//* toString()
console.log(numbers.toString())


//* concat()


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]
console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]