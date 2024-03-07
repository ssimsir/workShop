//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")



const tablodaGoster = (kitaplarObject, bindElement) => {
    tablo = document.createElement("table");
  
    tablo.classList.add("table", "table-striped");
  
  
    //TABLO HEADER
    const tabloBaslik = tablo.createTHead();
    const tabloBaslikRow = tabloBaslik.insertRow();
    const basliklar = Object.keys(kitaplarObject[0]);
    for (let baslik of basliklar) {
      let tabloBaslikText = document.createTextNode(baslik.toUpperCase());
      let tabloBaslikTH = document.createElement("th");
      tabloBaslikTH.appendChild(tabloBaslikText);
      tabloBaslikRow.appendChild(tabloBaslikTH);
    }
    //TABLO BODY
    const tabloBody = tablo.createTBody();
    kitaplarObject.forEach((element) => {
      let tabloRow = tabloBody.insertRow();
      for (key in element) {
        let tabloCell = tabloRow.insertCell();
        let tabloIcerik = document.createTextNode(element[key]);
        tabloCell.appendChild(tabloIcerik);
      }
    });
  
    const tabloDiv = document.querySelector(bindElement);
    tabloDiv.appendChild(tablo);
  };



fetch("https://api.github.com/users").then((res)=> {
    //console.log(res.json())
    return res.json()
}
).then((data) => {

    tablodaGoster(data,"#tablo" )
})