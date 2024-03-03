// const urunler =  [
//     {
//       id: 1,
//       ad: "Akıllı Telefon",
//       marka: "Xiaomi",
//       model: "Redmi Note 12 Pro",
//       renk: "Siyah",
//       fiyat: 1999.99,
//       stok: 50
//     },
//     {
//       id: 2,
//       ad: "Dizüstü Bilgisayar",
//       marka: "Casper",
//       model: "Nirvana C370.4020-4C00B1",
//       renk: "Gri",
//       fiyat: 2999.99,
//       stok: 25
//     },
//     {
//       id: 3,
//       ad: "Kablosuz Kulaklık",
//       marka: "MATEO",
//       model: "Kablosuz 5.0 Bluetooth P9 Uyumlu Kablosuz Kulaklık",
//       renk: "Beyaz",
//       fiyat: 149.99,
//       stok: 100
//     }
//   ]

//   let sepet=[];
//   sepeteEkle = (urunler, urunId, miktar) => {
//     urunler.map((urun)=>{
//         if (urun.id === urunId) {

//           if (urun.stok > 0 && urun.stok>=miktar) {
//             sepet.push({id:urun.id, ad:urun.ad, marka:urun.marka, model:urun.model, renk:urun.renk, fiyat:urun.fiyat, miktar:miktar})
//             urun.stok -= miktar
//           } else {
//             alert(`ürün ${urun.stok} adet ile sınırlıdır`)
//           }
//         }
//     })
//   }

//   sepeteEkle(urunler,2, 30)
//   sepeteEkle(urunler,3, 5)
//   console.log(sepet)
//   console.log(urunler)



//   sepettenCikar = (urunId) => {
//     sepet.map((sepetUrun, i) => {
//         if (sepetUrun.id === urunId){
//             sepet.splice(i, 1)

//             urunler.map(urun => {
//                 if (urun.id===urunId) urun.stok += sepetUrun.miktar;
//             })
//         } 
//     } )
//   }

//   sepettenCikar(2)
//   console.log(sepet)
//   console.log(urunler)




//Seda Hocanın Cevabı
  // Nesne oluşturma
const urunler = [
  { ad: "Kalem", fiyat: 5, stok: 10 },
  { ad: "Defter", fiyat: 10, stok: 20 },
  { ad: "Silgi", fiyat: 2, stok: 15 }
]

// Kullanıcı sepeti
const sepet = {
  urunler: [],
  toplamTutar: 0,
  urunEkle: function(urunAdi) {
    const urun = urunler.find(item => {
      return item.ad === urunAdi
    })

    if (urun && urun.stok > 0) {
      this.urunler.push(urun)
      this.toplamTutar += urun.fiyat
      urun.stok--
      console.log(urunAdi + " sepete eklendi.")
      console.log("Toplam tutar: " + this.toplamTutar)
      console.log("Kalan stok: " + urun.stok)
    } else {
      console.log("Üzgünüz, " + urunAdi + " stokta yok veya yeterli stok bulunmamaktadır.");
    }
  },
  urunCikar: function(urunAdi) {
    const index = this.urunler.findIndex(item => { // ilk öğenin index ini döndür,yoksa -1 döndürür
      return item.ad === urunAdi;
    });

    if (index !== -1) {
      const urun = this.urunler[index]
      this.urunler.splice(index, 1)
      this.toplamTutar -= urun.fiyat
      urun.stok++
      console.log(urunAdi + " sepetten çıkarıldı.");
      console.log("Toplam tutar: " + this.toplamTutar);
      console.log("Kalan stok: " + urun.stok);
    } else {
      console.log("Üzgünüz, " + urunAdi + " sepetinizde bulunmamaktadır.");
    }
  }
};


sepet.urunEkle("Kalem");
sepet.urunEkle("Defter");
sepet.urunEkle("Silgi");
sepet.urunEkle("Defter");
sepet.urunCikar("Kalem");

