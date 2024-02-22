console.log("***** SELECTORS *****")

document.title = "FS16 🚧"
//*===========================================
//*            GETELEMENTBYID()
//*===========================================
console.log(document.getElementById("add-new-item"))

//? id'si add-new-item olan elementi secer
const headerText = document.getElementById("add-new-item")
console.log(headerText)

//! secilen elementin style propertysini manipule ettik
//? her sey key-value şeklinde yazılır.
headerText.style.color = "blue"
headerText.style.backgroundColor = "yellow"
headerText.style.border = "2px solid red"
//! NOTE: property 'ler de kebap-case değil camelCase notasyonu kullanılır.

//? NOTE
// headerText.style = "font-family: tahoma; font-size: 30px" //? CSS vari erişim

//? id'si btn olan elementi secer
const addBtn = document.getElementById("btn")
console.log(addBtn)

document.getElementById("js-li").innerText="JS"


const myInput =document.getElementById("input")
console.log(myInput.value)
//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
