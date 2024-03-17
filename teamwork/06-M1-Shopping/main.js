// import './style.css'


const getProducts = async ()=> {

  try {
    const response = await fetch("https://anthonyfs.pythonanywhere.com/api/products/");
    if (response.ok){
      const data = await response.json()
      console.log(data)
    } else {
      throw new Error("hata oluştu")
    }
  } catch (err) {
    console.log(err)
  }
}

window.addEventListener("load", getProducts)