console.log("**** CREATE NODE ****")

const newLi = document.createElement("li");


const textLi = document.createTextNode("Go");

newLi.appendChild(textLi)

console.log(newLi)  

document.querySelector("ul").appendChild(newLi);


// ID CLASS GİBİ OZELLİKLERİ ATAMA


//? 1- element.attribute =   "yeni dğer "
newLi.className= "list";

newLi.id="new-li"

newLi.name="new-li-name"

//? 2- setAttribute(atr, "deger")  yazma
//?    getAttribute("atr")  değer okuma

newLi.setAttribute("class", "class")
newLi.setAttribute("id", "id2")

newLi.getAttribute("id")

