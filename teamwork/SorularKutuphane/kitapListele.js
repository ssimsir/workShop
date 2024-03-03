tablodaGoster = (kitaplarObject, bindElement) => {
  tablo = document.createElement("table");
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

kitaplariListele = () => {
  document.querySelector("#content").firstElementChild.remove();
  tablodaGoster(kitaplar, "#content");
};
