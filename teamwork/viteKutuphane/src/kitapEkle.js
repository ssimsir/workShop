import {kitaplar} from './kitapObject'

const kitapEkle = (bindElement) => {
  const mainDiv = document.createElement("div");
  mainDiv.style.width="500px";
  //Kitap Adı
  const adDiv = document.createElement("div");
  adDiv.classList.add("mb-3")
  const adLabel = document.createElement("label");
  adLabel.textContent = "Kitap Adı";
  adLabel.setAttribute("for", "adInput");
  adLabel.classList.add("form-label")
  const adInput = document.createElement("input");
  adInput.setAttribute("type", "text");
  adInput.setAttribute("id", "adInput");
  adInput.classList.add("form-control");
  adDiv.appendChild(adLabel);
  adDiv.appendChild(adInput);
  mainDiv.appendChild(adDiv);
  //yazar
  const yazarDiv = document.createElement("div");
  yazarDiv.classList.add("mb-3")
  const yazarLabel = document.createElement("label");
  yazarLabel.textContent = "Yazar";
  yazarLabel.setAttribute("for", "yazarInput");
  yazarLabel.classList.add("form-label");
  const yazarInput = document.createElement("input");
  yazarInput.setAttribute("type", "text");
  yazarInput.setAttribute("id", "yazarInput");
  yazarInput.classList.add("form-control");
  yazarDiv.appendChild(yazarLabel);
  yazarDiv.appendChild(yazarInput);
  mainDiv.appendChild(yazarDiv);
  //kitap türü
  const turDiv = document.createElement("div");
  turDiv.classList.add("mb-3")
  const turLabel = document.createElement("label");
  turLabel.textContent = "Kitap Türü";
  turLabel.setAttribute("for", "turInput");
  turLabel.classList.add("form-label");
  const turInput = document.createElement("input");
  turInput.setAttribute("type", "text");
  turInput.setAttribute("id", "turInput");
  turInput.classList.add("form-control");
  turDiv.appendChild(turLabel);
  turDiv.appendChild(turInput);
  mainDiv.appendChild(turDiv);
  //kopya sayısı
  const kopyaSayisiDiv = document.createElement("div");
  kopyaSayisiDiv.classList.add("mb-3")
  const kopyaSayisiLabel = document.createElement("label");
  kopyaSayisiLabel.textContent = "Kopya Sayısı";
  kopyaSayisiLabel.setAttribute("for", "kopyaSayisiInput");
  kopyaSayisiLabel.classList.add("form-label");
  const kopyaSayisiInput = document.createElement("input");
  kopyaSayisiInput.setAttribute("type", "number");
  kopyaSayisiInput.setAttribute("id", "kopyaSayisiInput");
  kopyaSayisiInput.classList.add("form-control");
  kopyaSayisiDiv.appendChild(kopyaSayisiLabel);
  kopyaSayisiDiv.appendChild(kopyaSayisiInput);
  mainDiv.appendChild(kopyaSayisiDiv);

  const kaydetButton = document.createElement("button");
  kaydetButton.textContent = "Kaydet";
  kaydetButton.classList.add("btn",  "btn-secondary")

  mainDiv.appendChild(kaydetButton);

  kaydetButton.addEventListener("click", () => {
    let yeniKitap = {};
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

export const yeniKitapEkle = () => {
  document.querySelector("#content").firstElementChild.remove();
  kitapEkle("#content");
};
