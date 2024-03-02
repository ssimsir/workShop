

let kitaplar = [
    {ad:"Suç ve Ceza", yazar: "Fyodor Dostoyevski",tur: "Roman" ,sayfa_sayisi: 551, yayin_tarihi: 1866, kopya_sayisi: 15},
    {ad:"Sefiller", yazar: "Victor Hugo", tur: "Roman" ,sayfa_sayisi: 1232, yayin_tarihi: 1862, kopya_sayisi: 15},
    {ad: "Anna Karenina",yazar: "Leo Tolstoy", tur: "Roman" ,sayfa_sayisi: 864, yayin_tarihi: 1877, kopya_sayisi: 15},
    {ad:"Dönüşüm", yazar: "Franz Kafka",tur: "Roman" ,sayfa_sayisi: 112,yayin_tarihi: 1915, kopya_sayisi: 15},
    {ad: "Dune", yazar: "Frank Herbert", tur: "Bilim Kurgu" ,sayfa_sayisi: 412,yayin_tarihi: 1965, kopya_sayisi: 15},
    {ad:"Yıldız Gemisi Askerleri",yazar: "Robert A. Heinlein",tur: "Bilim Kurgu" ,sayfa_sayisi: 263, yayin_tarihi: 1959, kopya_sayisi: 15},
    {ad:"Yerdeniz Büyücüsü", yazar: "Ursula K. Le Guin",tur: "Bilim Kurgu" ,sayfa_sayisi: 288,yayin_tarihi: 1968 , kopya_sayisi: 15},
    {ad:"Varlık ve Zaman",yazar: "Martin Heidegger", tur: "Felsefe" ,sayfa_sayisi: 530,yayin_tarihi: 1927, kopya_sayisi: 15},
    {ad:"Bir İnsan Nasıl Tanınır",yazar: "Jean-Paul Sartre", tur: "Felsefe" ,sayfa_sayisi: 224,yayin_tarihi: 1946 , kopya_sayisi: 15},
    {ad:"Bir Varoluşçu Düşünür Notları",yazar: "Albert Camus",tur: "Felsefe" ,sayfa_sayisi: 160,yayin_tarihi: 1961, kopya_sayisi: 15}
];

// Kitaplar nesnesini yazdırma
console.log(kitaplar);


kitaplariTablodaGoster = (kitaplarObject, bindElement) => {
  
    tablo = document.createElement("table")
    //TABLO HEADER
    const tabloBaslik = tablo.createTHead();
    const tabloBaslikRow = tabloBaslik.insertRow();
    const basliklar = Object.keys(kitaplarObject[0]);
    for(let baslik of basliklar){
        let tabloBaslik = document.createTextNode(baslik.toUpperCase());
        let tabloTH = document.createElement("th");
        tabloTH.appendChild(tabloBaslik)
        tabloBaslikRow.appendChild(tabloTH)
    }
    
    //TABLO BODY 
    const tabloBody = tablo.createTBody();
    kitaplarObject.forEach(element => {
        let tabloRow = tabloBody.insertRow();
        for(key in element){
            let tabloCell = tabloRow.insertCell();
            let tabloIcerik = document.createTextNode(element[key]);
            tabloCell.appendChild(tabloIcerik);
        }
        
    });

    const tabloDiv = document.querySelector(bindElement)   
    tabloDiv.appendChild(tablo)
}

kitaplariTablodaGoster(kitaplar, ".tablo");

