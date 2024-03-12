
// export let kitaplar = [
//     {ad:"Suç ve Ceza", yazar: "Fyodor Dostoyevski",tur: "Roman" , kopya_sayisi: 10},
//     {ad:"Yeraltından Notlar", yazar: "Fyodor Dostoyevski",tur: "Roman" , kopya_sayisi: 10},
//     {ad:"Kumarbaz", yazar: "Fyodor Dostoyevski",tur: "Roman" , kopya_sayisi: 10},
//     {ad:"Karamazov Kardeşler", yazar: "Fyodor Dostoyevski",tur: "Roman" , kopya_sayisi: 10},
//     {ad:"Sefiller", yazar: "Victor Hugo", tur: "Roman" , kopya_sayisi: 10},
//     {ad: "Anna Karenina",yazar: "Leo Tolstoy", tur: "Roman" , kopya_sayisi: 10},
//     {ad: "Savaş ve Barış",yazar: "Leo Tolstoy", tur: "Roman" , kopya_sayisi: 10},
//     {ad: "Çocukluk",yazar: "Leo Tolstoy", tur: "Roman" , kopya_sayisi: 10},
//     {ad: "Diriliş",yazar: "Leo Tolstoy", tur: "Roman" , kopya_sayisi: 10},
//     {ad:"Dönüşüm", yazar: "Franz Kafka",tur: "Roman" , kopya_sayisi: 10},
//     {ad: "Dune", yazar: "Frank Herbert", tur: "Bilim Kurgu" , kopya_sayisi: 10},
//     {ad:"Yıldız Gemisi Askerleri",yazar: "Robert A. Heinlein",tur: "Bilim Kurgu" , kopya_sayisi: 10},
//     {ad:"Yerdeniz Büyücüsü", yazar: "Ursula K. Le Guin",tur: "Bilim Kurgu" , kopya_sayisi: 10},
//     {ad:"Varlık ve Zaman",yazar: "Martin Heidegger", tur: "Felsefe" , kopya_sayisi: 10},
//     {ad:"Bir İnsan Nasıl Tanınır",yazar: "Jean-Paul Sartre", tur: "Felsefe" , kopya_sayisi: 10},
//     {ad:"Bir Varoluşçu Düşünür Notları",yazar: "Albert Camus",tur: "Felsefe" , kopya_sayisi: 10}
// ];


export let kitaplar = []

export const getKitaplar = async () => {
    try {
        const response = await fetch("http://localhost:3000/kitaplar")
        if (response.ok) {
             kitaplar = await response.json()
            
        } else {
            throw new Error(`Something went wrong ${res.status}`)

        }
    } catch (error) {
        console.log(`hata oluştu ${error}`)
    }
}
