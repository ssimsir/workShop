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



//?Selectors

const deleteAllBtn = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector("article.products")

deleteAllBtn.addEventListener("click", () => {
    products.textContent = "No product"
    products.classList.add("no-product")

    document.querySelector(".delete-div").remove();  //tamamiyle kaldırır
    // document.querySelector(".delete-div").style.display = "none";    //sadece görünmez yapar
})

products.addEventListener("click", (e) => {
    // if (e.target.classList.contains("fa-plus")) {
    //     alert("plus")
    // } else if (e.target.classList.contains("fa-minus")) {
    //     alert("minus")
    // } else if (e.target.classList.contains("fa-trash-can")) {
    //     alert("trash")
    // } else {

    // }

        if (e.target.classList.contains("fa-plus")) {
            // const discountedPrice = document.getElementById("discounted-price")
            // console.log(discountedPrice.innerText)

            // const quantity = document.getElementById("quantity")
            // quantity.textContent++

            //?Statik kullandığımızda akıştaki ilk yeri kullanır

            //? Traversing DOM yapısı kullanılabilir
            e.target.previousElementSibling.textContent++

            calculatePrice(e.target)
        } else if (e.target.classList.contains("fa-minus")) {
            // const discountedPrice = document.getElementById("discounted-price")
            // console.log(discountedPrice.innerText)

            // const quantity = document.getElementById("quantity")
            // quantity.textContent++

            //?Statik kullandığımızda akıştaki ilk yeri kullanır

            //? Traversing DOM yapısı kullanılabilir

            if (e.target.nextElementSibling.textContent > 1) e.target.nextElementSibling.textContent--

            calculatePrice(e.target)

        } else if (e.target.classList.contains("fa-trash-can")) {
            e.target.closest(".product").remove();

        }
})

const calculatePrice = (btn) => {
    const discountedPrice =btn.closest(".product-info").querySelector("#discounted-price")

    const productPrice = btn.closest(".buttons-div").querySelector("#product-price")

    const quantity = btn.parentNode.querySelector("#quantity")

    productPrice.textContent = (quantity.textContent*discountedPrice.textContent).toFixed(2)
}

const calculateTotalPrice = () =>{
    const prices = document.querySelectorAll("#product-price")

    const total = [...prices].reduce((sum, price) => sum + Number(price.textContent),0)
    prices.red((p) => console.log(first))

    //! Doma sonuçları yazdırma
    const selectedPrice = document.querySelector("#selected-price")
    selectedPrice.textContent = total.toFixed(2)
}