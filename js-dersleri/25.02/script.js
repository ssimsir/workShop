//!kullanıcı bilgilerine Destructuring oluşturarak erişelim.

const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];


// const[user1,user2] = users


// const{id:user1Id,name:user1Name,email:user1Email} = user1

// console.log(user1Name);


// users.forEach(({id,name,email}) => {
//   console.log(`id: ${id}, name: ${name}, email: ${email}`)
// })

//! Verileri kullanarak her kullanıcının adını, şehrini ve yaşını içeren bir dizi oluşturun

const data = {
    results: [
      {
        gender: 'female',
        name: { title: 'Miss', first: 'Alice', last: 'Johnson' },
        location: {
          street: { number: 123, name: 'Main Street' },
          city: 'New York',
          state: 'NY',
          country: 'USA',
          postcode: '10001'
        },
        email: 'alice@example.com',
        login: { username: 'alice123' },
        dob: { date: '1990-01-01', age: 32 },
        phone: '123-456-7890',
        cell: '987-654-3210'
      },
      {
        gender: 'male',
        name: { title: 'Mr', first: 'Bob', last: 'Smith' },
        location: {
          street: { number: 456, name: 'Elm Street' },
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA',
          postcode: '90001'
        },
        email: 'bob@example.com',
        login: { username: 'bob456' },
        dob: { date: '1985-05-15', age: 37 },
        phone: '987-654-3210',
        cell: '123-456-7890'
      }
    ]
  };
  


  //? Tek Tek incelersek.
// const [user1,user2] = data.results

// const{name,area:{city},dob:{age}} = user1
// console.log(age);


//? Map ile döngü
// const info = data.results.map(user => ({
//     name:user.name.first,
//     city: user.area.city,
//     age:user.dob.age
// }))

// console.log(info);


//? Map döngüsü ve Destructuring

// const info = data.results.map(({name:{first}, area:{city}, dob:{age} }) => ({first,city,age}))
// console.log(info);
  

//?Reduce Denemesi
// const { results } = data;
// const arr = results.reduce((acc, cur) => {
//   const {
//     name: { title, first, last },
//     location: { city },
//     dob: { age },
//   } = cur;

//   acc.name = first
//   acc.city = city
//   acc.age = age
//   return acc;
// }, {});
// console.log(arr);

//! Destructuring kullanarak en sık tekrar eden özelliği(rengi) bulan bir fonksiyon yazın sonuc red olmalı

// const data = [
//     { id: 1, color: 'red' },
//     { id: 2, color: 'blue' },
//     { id: 3, color: 'green' },
//     { id: 4, color: 'red' },
//     { id: 5, color: 'red' },
//     { id: 6, color: 'blue' }
//   ];
 
//? Reduce ve for-in kullanma
// const colorGroups = data.reduce((acc,cur) => {
//   acc[cur.color] = (acc[cur.color] || 0) + 1 
//   return acc
// },{})
// console.log(colorGroups);

// let maxCount = 0
// let maxColor = ''
// for(const color in colorGroups) {
//   if(colorGroups[color] > maxCount ) {
//       maxCount = colorGroups[color]
//       maxColor=color
//   } 
// }

// console.log(maxColor);

//? Destr. ve for-in 

//! for (const item of data) {
//!   const {color} = item
//!   console.log(color);
//! }

// const findMaxColor = arr => {
//   const counts = {};
  
//   for (const { color } of arr) {
//     counts[color] = (counts[color] || 0) + 1;
//   }

//   let maxCount = 0
//   let maxColor = ''
// for(const color in counts) {
// if(counts[color] > maxCount ) {
//     maxCount = counts[color]
//     maxColor=color
// } 
// }
//   return maxColor
  
// };

// console.log(findMaxColor(data));
  


//! Destructuring kullanarak nesnelerin içindeki dizi özelliğini birleştiren bir fonksiyon yazın sonuc [1, 2, 3, 4, 5, 6, 7, 8, 9] olmalı
// const data = [
//     { id: 1, values: [1, 2, 3] },
//     { id: 2, values: [4, 5] },
//     { id: 3, values: [6, 7, 8, 9] }
//   ];
  
  
// const concanetArr = []
// for(const {values} of data) {
//     concanetArr.push(...values)
// }
// console.log(concanetArr);

//?Adem Hocam..
// const concatArr = []

// for(const {values} of data) {
//   concatArr.push(values)
// }
// console.log(concatArr.flat(3)) //! flat() ile nested dizileri çıkarıyoruz.

//?Veysel Hocam
// const mergedArray = [].concat(...data.map(({ values }) => values));
// console.log(mergedArray)

// const mergedArray = Object.assign([],...data.map(({ values }) => values));
//   console.log(mergedArray)


//?Akmaral Hocam

// const obj = {
//   arr1: [1, 2, 3],
//   arr2: [4, 5, 6],
//   arr3: [7, 8, 9]
// };
// function xArrays(obj) {
//   return [...obj.arr1, ...obj.arr2, ...obj.arr3];
// }

// console.log(xArrays(obj))
  //! Spread operatörünü kullanarak iki nesnenin belirli özelliklerini birleştiren ve çakışan özelliklerin değerlerini toplayan bir fonksiyon yazın  {a: 10, b: 35, c: 55, d: 35} olmalı

const object1 = {
    a: 10,
    b: 20,
    c: 30
  };
  
  const object2 = {
    b: 15,
    c: 25,
    d: 35
  };
  
  const newObj = {...object1, ...object2} //! Yoksa ekler, varsa değiştirir.


  const copyObj = {...object1}

  for(const key in object2) {
      if(copyObj.hasOwnProperty(key)){
          copyObj[key] += object2[key]
      }else{
          copyObj[key] = object2[key]
      }
  }
  
  console.log(copyObj);
  
 
 //! Rest operatörünü kullanarak n tane dizi içindeki elemanların toplamını bulan bir fonksiyon yazın. rneğin fonksiyona [1, 2, 3], [4, 5, 6], [7, 8, 9] yazıldığında sonuç 45 olmalı


//  const toplam = (...arrlist) => {
//   let toplam = 0

//   for(const arr of arrlist) {
//       for(const num of arr) {
//           toplam += num
          
//       }
//   }
//   return toplam
// }

//? Reduce ve rest ile toplama

// const toplam = (...arrlist) => {
//   return arrlist.reduce((acc,arr) => {
//       return acc + arr.reduce((acc2,cur) => acc2 + cur)
//   },0)
// }

// console.log(toplam([1, 2, 3], [4, 5, 6]));
  


//?Akmaral Hocam

// function toplam(...arrays) {
//   return arrays.flat().reduce((total, current) => total + current, 0);
// }

// console.log(toplam([1, 2, 3], [4, 5, 6], [7, 8, 9],[10,11,12]));




//? Adem hocam
// function myFunction(...arrays) {
//   let sum = arrays.reduce((acc,cur) => acc += cur,0)
//   return sum;
// }
// console.log(myFunction(...[1, 2, 3], ...[4,5,6], ...[7,8,9], ...[10, 11, 12]));