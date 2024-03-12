
// export let "kitaplar" = [
    // {"id":1, "ad":"Suç ve Ceza", "yazar": "Fyodor Dostoyevski","tur": "Roman" , "kopya_sayisi": 10},
    // {"id":2, "ad":"Yeraltından Notlar", "yazar": "Fyodor Dostoyevski","tur": "Roman" , "kopya_sayisi": 10},
    // {"id":3, "ad":"Kumarbaz", "yazar": "Fyodor Dostoyevski","tur": "Roman" , "kopya_sayisi": 10},
    // {"id":4, "ad":"Karamazov Kardeşler", "yazar": "Fyodor Dostoyevski","tur": "Roman" , "kopya_sayisi": 10},
    // {"id":5, "ad":"Sefiller", "yazar": "Victor Hugo", "tur": "Roman" , "kopya_sayisi": 10},
    // {"id":6, "ad": "Anna Karenina","yazar": "Leo Tolstoy", "tur": "Roman" , "kopya_sayisi": 10},
    // {"id":7, "ad": "Savaş ve Barış","yazar": "Leo Tolstoy", "tur": "Roman" , "kopya_sayisi": 10},
    // {"id":8, "ad": "Çocukluk","yazar": "Leo Tolstoy", "tur": "Roman" , "kopya_sayisi": 10},
    // {"id":9, "ad": "Diriliş","yazar": "Leo Tolstoy", "tur": "Roman" , "kopya_sayisi": 10},
    // {"id":10, "ad":"Dönüşüm", "yazar": "Franz Kafka","tur": "Roman" , "kopya_sayisi": 10},
    // {"id":11, "ad": "Dune", "yazar": "Frank Herbert", "tur": "Bilim Kurgu" , "kopya_sayisi": 10},
    // {"id":12, "ad":"Yıldız Gemisi Askerleri","yazar": "Robert A. Heinlein","tur": "Bilim Kurgu" , "kopya_sayisi": 10},
    // {"id":13, "ad":"Yerdeniz Büyücüsü", "yazar": "Ursula K. Le Guin","tur": "Bilim Kurgu" , "kopya_sayisi": 10},
    // {"id":14, "ad":"Varlık ve Zaman","yazar": "Martin Heidegger", "tur": "Felsefe" , "kopya_sayisi": 10},
    // {"id":15, "ad":"Bir İnsan Nasıl Tanınır","yazar": "Jean-Paul Sartre", "tur": "Felsefe" , "kopya_sayisi": 10},
    // {"id":16, "ad":"Bir Varoluşçu Düşünür Notları","yazar": "Albert Camus","tur": "Felsefe" , "kopya_sayisi": 10}
// ];


export let kitaplar = []

export const listKitap = async () => {
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
