yazarKitapListele = (bindElement) =>{

    let groupKitapYazar = kitaplar.reduce((result, item) => {
        (result[item.yazar] = result[item.yazar] || []).push(item);
        return result;
      }, {});

      console.log(groupKitapYazar)


      const listElement = document.createElement("div");
      for (let yazar in groupKitapYazar) {
        let listgroup = document.createElement("ul");
        listgroup.textContent = yazar;
        groupKitapYazar[yazar].forEach(function (kitap) {
          let listion = document.createElement("li");
          listion.textContent = kitap.ad;
          listgroup.appendChild(listion);
        });
        listElement.appendChild(listgroup);
      }

      const kayitDiv = document.querySelector(bindElement);
      kayitDiv.appendChild(listElement);
}


yazaraGoreKitapListele = () => {
    document.querySelector("#content").firstElementChild.remove();
    yazarKitapListele("#content");
  };