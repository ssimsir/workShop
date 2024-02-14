console.log("** NEW OPERATORS **");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
  id: "12345",
  brand: "Apple",
  type: "smart phone",
  price: 3000,
};

const product1 = {
  id: "12346",
  brand: "Samsung",
  type: "smart phone",
  price: 2500,
};

//? . notasyonu
console.log(product.price);
let proPrice = product.price;
console.log(proPrice);
proPrice += 100;
console.log(proPrice);

//? square bracket
const proId = product["id"];
console.log(proId);

//? Destructuring
//? degisike isimleri objedeki key'lere es olmalıdır.
let { id, price } = product;
console.log("ID:", id);

price += 500;
console.log("Price:", price);
console.log(product);

// product.price = price
// console.log(product)

const { type } = product;
console.log("Type:", type);

//? key'ler isim değişikliği : ile yapılablir
const { id: pro1Id, price: pro1Price } = product1;
console.log("PRO1:", pro1Id);
console.log("PRO1:", pro1Price);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];
console.log("************");

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("************");
  console.log(name);
  console.log(surname);
  console.log(job);
  console.log(age);
});

team.forEach(( { name, surname, job, age }) => {
  console.log("************");
  console.log(name);
  console.log(surname);
  console.log(job);
  console.log(age);
});


/* Fonksiyonlarda Desct kullanımı
*/
const objGorster = function(){
  return   {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  }
} 

console.log(objGorster())
const {name, surname, job, age}=objGorster();
console.log(name, surname, job, age)


/* Function parameteri olarak obje
*/

const data={
  id:"123",
  desc:"This is top secret information",
  createdTime:"1900"
}

const printDate = (data) => {
  console.log(` ${data.id} - ${data.desc} - ${data.createdTime}`)
}

const printDateDestr = ({id, desc, createdTime}) => {
  const {id, desc, createdTime} =data;
  console.log(` ${id} - ${desc} - ${createdTime}`)
}

const printDateDestrAir = (data) => {
  const {id, desc, createdTime} =data;
  console.log(` ${id} - ${desc} - ${createdTime}`)
}


printDate(data)

printDateDestr(data)

printDateDestrAir(data)

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

//* ==============================================
//*  REST (...)
//* =============================================

//* =============================================
//*  SPREAD (...)
//* =============================================

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

//* ==============================================
//*  REST (...)
//* =============================================

//* =============================================
//*  SPREAD (...)
//* =============================================
