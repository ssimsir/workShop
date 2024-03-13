import "./scss/style.scss"
import { getCoins } from "./src/getCoins"

//? Selectors

const form = document.querySelector("header form")

//? Form için submit event'nin tanimlanmasi
form.addEventListener("submit", (e) => {
  console.log(e)
  e.preventDefault() //! form eventinin tüm dogal davranilari disable eder.
  getCoinData()
  e.target.reset() //? formu silme davranisini aktif hale getir.
})

const getCoinData = () => {
  const input = document.querySelector("header form input").value
  if (!input.trim()) {
    alert("Input must be entered")
  } else {
    //? GET COIN
    getCoins()
  }
}
