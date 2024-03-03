kutuphandenKitapAlIadeEt = (bindElement, durum) => {
  const mainDiv = document.createElement("div");

  let groupKitapTur = kitaplar.reduce((result, item) => {
    (result[item.tur] = result[item.tur] || []).push(item);
    return result;
  }, {});

  const selectElement = document.createElement("SELECT");
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

  kaydetButton = document.createElement("button");
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
          alert("kitap alındı");
        } else if (durum === 2) {
          kitap.kopya_sayisi += 1;
          alert("kitap iade edildi");
        }
      }
    });
  });

  const kayitDiv = document.querySelector(bindElement);
  kayitDiv.appendChild(mainDiv);
};

kitapAl = () => {
  document.querySelector("#content").firstElementChild.remove();
  kutuphandenKitapAlIadeEt("#content", 1);
};

kitapIadeEt = () => {
  document.querySelector("#content").firstElementChild.remove();
  kutuphandenKitapAlIadeEt("#content", 2);
};
