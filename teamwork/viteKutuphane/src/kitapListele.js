
import { kitaplar } from './kitapObject'


const deleteKitap = async (id) =>{
  const response = await fetch(`http://localhost:3000/kitaplar/${id}`, {
    method: 'DELETE',
  } );
  return "Veri slime işlemi başarılı";
  // Burada very silindiği için bze dönen boş bir obje olacağı için kendimiz yazdırdık.
}


const tablodaGoster = (kitaplarObject, bindElement) => {
  const tablo = document.createElement("table");

  tablo.classList.add("table", "table-striped");


  //TABLO HEADER
  const tabloBaslik = tablo.createTHead();
  const tabloBaslikRow = tabloBaslik.insertRow();
  //const basliklar = Object.keys(kitaplarObject[0]);

  let tabloBaslikTH;
  let tabloBaslikText 
  tabloBaslikText = document.createTextNode("Kitap Adı");
  tabloBaslikTH = document.createElement("th");
  tabloBaslikTH.appendChild(tabloBaslikText);
  tabloBaslikRow.appendChild(tabloBaslikTH);

  tabloBaslikText = document.createTextNode("Yazar");
  tabloBaslikTH = document.createElement("th");
  tabloBaslikTH.appendChild(tabloBaslikText);
  tabloBaslikRow.appendChild(tabloBaslikTH);

  tabloBaslikText = document.createTextNode("Tür");
  tabloBaslikTH = document.createElement("th");
  tabloBaslikTH.appendChild(tabloBaslikText);
  tabloBaslikRow.appendChild(tabloBaslikTH);

  tabloBaslikText = document.createTextNode("Kopya Sayısı");
  tabloBaslikTH = document.createElement("th");
  tabloBaslikTH.appendChild(tabloBaslikText);
  tabloBaslikRow.appendChild(tabloBaslikTH);

  tabloBaslikText = document.createTextNode("Sil");
  tabloBaslikTH = document.createElement("th");
  tabloBaslikTH.appendChild(tabloBaslikText);
  tabloBaslikRow.appendChild(tabloBaslikTH);

  //TABLO BODY
  const tabloBody = tablo.createTBody();
  kitaplarObject.forEach((element) => {
    let tabloRow = tabloBody.insertRow();
    //console.log(element)
    let tabloCell;
    let tabloIcerik;

    tabloCell = tabloRow.insertCell();
    tabloIcerik = document.createTextNode(element.ad);
    tabloCell.appendChild(tabloIcerik);

    tabloCell = tabloRow.insertCell();
    tabloIcerik = document.createTextNode(element.yazar);
    tabloCell.appendChild(tabloIcerik);

    tabloCell = tabloRow.insertCell();
    tabloIcerik = document.createTextNode(element.tur);
    tabloCell.appendChild(tabloIcerik);

    tabloCell = tabloRow.insertCell();
    tabloIcerik = document.createTextNode(element.kopya_sayisi);
    tabloCell.appendChild(tabloIcerik);

    tabloCell = tabloRow.insertCell();
    const iElement = document.createElement("i")
    iElement.id = element.id
    iElement.className = "fa-solid fa-trash-can text-danger"
    iElement.type = "button"
    tabloCell.appendChild(iElement);
  });

  const tabloDiv = document.querySelector(bindElement);
  tabloDiv.appendChild(tablo);

  tablo.addEventListener("click",(e)=>{
    if (e.target.classList.contains("fa-trash-can")) {
      alert("tıklandı")
        e.target.parentElement.parentElement.remove()
        const id = e.target.id 
        kitaplarObject = kitaplarObject.filter((kitap)=> kitap.id != id)
        deleteKitap(id)
    }

    
})



};

export const kitaplariListele = () => {
  document.getElementById("content").innerHTML = "" //firstElementChild.remove();
  tablodaGoster(kitaplar, "#content");
};
