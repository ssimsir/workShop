import {kitaplar} from './kitapObject'



const updateKitap = async (kitap)=>{
  const response = await fetch(`http://localhost:3000/kitaplar/${kitap.id}`, {
    method: 'PUT',
    body: JSON.stringify(kitap),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  } );
  

}





const kutuphandenKitapAlIadeEt = (bindElement, durum) => {
  const mainDiv = document.createElement("div");
  mainDiv.style.width="500px";
  let groupKitapTur = kitaplar.reduce((result, item) => {
    (result[item.tur] = result[item.tur] || []).push(item);
    return result;
  }, {});

  const selectElement = document.createElement("SELECT");
  selectElement.classList.add("form-select")
  for (let tur in groupKitapTur) {
    let optgroup = document.createElement("optgroup");
    optgroup.label = tur;
    groupKitapTur[tur].forEach(function (kitap) {
      let option = document.createElement("option");
      option.textContent = kitap.ad;
      optgroup.appendChild(option);
    });
    selectElement.appendChild(optgroup);
  }
  mainDiv.appendChild(selectElement);

  const kaydetButton = document.createElement("button");
  kaydetButton.classList.add("btn", "btn-secondary", "m-3")
  durum === 1
    ? (kaydetButton.textContent = "Kitabı Al")
    : (kaydetButton.textContent = "Kitabı İade Et");

  mainDiv.appendChild(kaydetButton);

  kaydetButton.addEventListener("click", () => {
    const selectedText =
      selectElement.options[selectElement.selectedIndex].text;

    kitaplar.forEach((kitap) => {
      if (kitap.ad === selectedText) {
        if (durum === 1) {
          kitap.kopya_sayisi -= 1;
          updateKitap(kitap)
          alert("kitap alındı");
        } else if (durum === 2) {
          kitap.kopya_sayisi += 1;
          updateKitap(kitap)
          alert("kitap iade edildi");
        }
      }
    });
  });

  const kayitDiv = document.querySelector(bindElement);
  kayitDiv.appendChild(mainDiv);
};

export const kitapAl = () => {
  document.querySelector("#content").innerHTML="" //firstElementChild.remove();
  kutuphandenKitapAlIadeEt("#content", 1);
};

export const kitapIadeEt = () => {
  document.querySelector("#content").innerHTML="" //firstElementChild.remove();
  kutuphandenKitapAlIadeEt("#content", 2);
};
