//***********************************/
//*        CHECKOUT APP
//***********************************/


//! Donguler ile event tanımlamak mümkündür ancak fazla sayida event fazla tuketimi demektir. Bunun yerine bubbling ile parent elementler tek bir event tanımlanarak aşağıdaki elementlerin eventler yakalabilir. Yakalan event event.target ile ayrıştırılabilir. 
// function createEventsForPlusMinus() {
//   const minusBtns = document.querySelectorAll(".fa-minus")
//   const plusBtns = document.querySelectorAll(".fa-plus")

//   console.log(minusBtns)
//   console.log(plusBtns)

//   minusBtns.forEach((minus) => {
//     minus.addEventListener("click", () => {
//       //? Eksilme islemleri
//     })
//   })

//   plusBtns.forEach((plus) => {
//     plus.addEventListener("click", () => {
//       //? Arttirma islemleri
//     })
//   })
// }

