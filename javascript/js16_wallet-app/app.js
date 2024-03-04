
//? Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

//& Variables

let gelirler = 0
let harcamaListesi = []


//? Event listeners

window.addEventListener("load", ()=>{
    gelirler = Number(localStorage.getItem("gelirler")) || 0 //! Local storage den gelirleri al numberlaştır. Veri yoksa 0 ata
    gelirinizTd.textContent = gelirler
    tarihInput.valueAsDate = new Date()
})

//* Ekle Formu
ekleFormu.addEventListener("submit",(e)=>{
    e.preventDefault()  //! reload u engellemek için
    gelirler = gelirler + Number(gelirInput.value)
    ekleFormu.reset()
    console.log(gelirler)
    localStorage.setItem("gelirler", gelirler)
    gelirinizTd.textContent = gelirler

})


//! Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu")
const tarihInput = document.getElementById("tarih") 
const miktarInput = document.getElementById("miktar") 
const harcamaAlaniInput = document.getElementById("harcama-alani")

const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")

harcamaFormu.addEventListener("submit",(e)=>{
    e.preventDefault() //! reload u engellemek için
    const yeniHarcama = {
        tarih: tarihInput.value,
        miktar: miktarInput.value,
        alan: harcamaAlaniInput.value,
        id: new Date().getTime()
    }

    // console.log(yeniHarcama)
    harcamaListesi.push(yeniHarcama)
    console.log(harcamaListesi)
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))

    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()


})

harcamayiDomaYaz = () => {
    
}