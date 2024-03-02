const urunler =  [
    {
      "id": 1,
      "ad": "Akıllı Telefon",
      "marka": "Xiaomi",
      "model": "Redmi Note 12 Pro",
      "renk": "Siyah",
      "fiyat": 1999.99,
      "stok": 50
    },
    {
      "id": 2,
      "ad": "Dizüstü Bilgisayar",
      "marka": "Casper",
      "model": "Nirvana C370.4020-4C00B1",
      "renk": "Gri",
      "fiyat": 2999.99,
      "stok": 25
    },
    {
      "id": 3,
      "ad": "Kablosuz Kulaklık",
      "marka": "MATEO",
      "model": "Kablosuz 5.0 Bluetooth P9 Uyumlu Kablosuz Kulaklık",
      "renk": "Beyaz",
      "fiyat": 149.99,
      "stok": 100
    }
  ]

  sepet=[];
  sepeteEkle = (urunId, miktar) => {
    urunler.map(urun=>{
        if (urun.id === urunId) {
            sepet.push({id:urun.id, ad:urun.ad, marka:urun.marka, model:urun.model, renk:urun.renk, fiyat:urun.fiyat, stok:miktar})
            urun.stok -= miktar
        }
    })
  }

  sepeteEkle(1, 2)
  console.log(sepet)
  console.log(urunler)

  