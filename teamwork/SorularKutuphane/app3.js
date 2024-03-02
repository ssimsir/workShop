kitapEkle = (bindElement) => {
  const mainDiv = document.createElement("div");
  //Kitap Adı
  const adDiv = document.createElement("div");
  const adLabel = document.createElement("label");
  adLabel.textContent = "Kitap Adı  :";
  const adInput = document.createElement("input");
  adInput.setAttribute("type", "text");
  adDiv.appendChild(adLabel);
  adDiv.appendChild(adInput);
  mainDiv.appendChild(adDiv);
  //yazar
  const yazarDiv = document.createElement("div");
  const yazarLabel = document.createElement("label");
  yazarLabel.textContent = "Yazar  :";
  const yazarInput = document.createElement("input");
  yazarInput.setAttribute("type", "text");
  yazarDiv.appendChild(yazarLabel);
  yazarDiv.appendChild(yazarInput);
  mainDiv.appendChild(yazarDiv);
  //kitap türü
  const turDiv = document.createElement("div");
  const turLabel = document.createElement("label");
  turLabel.textContent = "Kitap Türü  :";
  const turInput = document.createElement("input");
  turInput.setAttribute("type", "text");
  turDiv.appendChild(turLabel);
  turDiv.appendChild(turInput);
  mainDiv.appendChild(turDiv);

  const kopyaSayisiDiv = document.createElement("div");
  const kopyaSayisiLabel = document.createElement("label");
  kopyaSayisiLabel.textContent = "Kopya Sayısı  :";
  const kopyaSayisiInput = document.createElement("input");
  kopyaSayisiInput.setAttribute("type", "number");
  kopyaSayisiDiv.appendChild(kopyaSayisiLabel);
  kopyaSayisiDiv.appendChild(kopyaSayisiInput);
  mainDiv.appendChild(kopyaSayisiDiv);

  kaydetButton = document.createElement("button");
  kaydetButton.textContent = "Kaydet";
  mainDiv.appendChild(kaydetButton);

  kaydetButton.addEventListener("click", () => {
    yeniKitap = {};
    yeniKitap.ad = adInput.value;
    yeniKitap.yazar = yazarInput.value;
    yeniKitap.tur = turInput.value;
    yeniKitap.kopyaSayisi = Number(kopyaSayisiInput.value);
    console.log(yeniKitap)
    kitaplar.push(yeniKitap);
    alert("kitap kaydı yapıldı")
    adInput.value = "";
    yazarInput.value = "";
    turInput.value = "";
    kopyaSayisiInput.value = "";
  });

  const kayitDiv = document.querySelector(bindElement);
  kayitDiv.appendChild(mainDiv);
};

yeniKitapEkle = () => {
  document.querySelector("#content").firstElementChild.remove();
  kitapEkle("#content");
};
