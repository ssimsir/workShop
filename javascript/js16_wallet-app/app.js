
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
    // console.log(harcamaListesi)
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
    harcamayiDomaYaz(yeniHarcama)

    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()


})


const harcamayiDomaYaz = ({id, miktar, tarih, alan}) =>{

    // const {id, miktar, tarih, alan} = yeniHarcama
    // console.log(id, miktar, tarih, alan)
 
    //! 1. yöntem
    // harcamaBody.innerHTML += `
    //     <tr>
    //         <td>${tarih}</td>
    //         <td>${alan}</td>
    //         <td>${miktar}</td>
    //         <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
    //     </tr>
    
    // `

    //^ <h2>Hello World!</h2><p>Have a nice day!</p>
    //^ <img src="https://5.imimg.com/data5/VK/EK/UG/SELLER-101818061/danger-signs-500x500.jpg">

    //! 2. yöntem
    const tr = document.createElement("tr")

    const appendTd = (content)=>{
        const td = document.createElement("td")
        td.textContent = content;
        return td
    }

    const createLastTd = () =>{
        const td = document.createElement("td")
        const iElement = document.createElement("i")
        iElement.id = id
        iElement.className = "fa-solid fa-trash-can text-danger"
        iElement.type = "button"
        td.appendChild(iElement)
        return td
    }

    tr.append(
        appendTd(tarih), //tarih td si
        appendTd(alan), //alan td si
        appendTd(miktar), //miktar td si
        createLastTd() // Çöp kutusu ve id yi ekler
    )
    harcamaBody.append(tr)
}
