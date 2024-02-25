
//?PCye 1-20 arasında rastgele sayı tutturduk
let rastgeleSayi = Math.ceil(Math.random()*20);

console.log(rastgeleSayi)

let mesaj = document.querySelector(".msg");

let skor = 10;

//skoru index.htmlden çekebilirdik fakat çok kullanacağımız için bu daha tercih edilen bir yol
let enYuksekSkor = localStorage.getItem("top-score");
document.querySelector(".top-score").textContent=enYuksekSkor

document.querySelector(".check").addEventListener("click" , () => {
    const tahmin = document.querySelector(".guess").value;
    console.log("tahmin : " +tahmin)
    //console.log(tahmin)

    //! Tahmin girmeden butona basıldı ise 
    if (!tahmin){
        mesaj.textContent="Lütfen bir sayı giriniz..."


    //!Tahminim Doğruysa
    } else if (tahmin === rastgeleSayi) {
        mesaj.textContent = "Tebrikler bildiniz... "
        document.body.style.backgroundColor = "green"
        document.querySelector(".number").textContent = rastgeleSayi;
        
        //top scor kontrolü yap

        if (skor > enYuksekSkor){

            localStorage.setItem("top-score", skor)
            enYuksekSkor = skor;
            document.querySelector()
        }


        //! Tahmin yanlışsa
    } else {
        //? Skor 1 den büyük olduğu sürece hakkım var
        if (skor > 1){
            skor--;
            document.querySelector(".score").textContent = skor;
        

            tahmin < rastgeleSayi 
            ? mesaj.textContent = "Arttır" 
            : mesaj.textContent = "Azalt"
        } else {
            // GAME OVER

            mesaj.textContent = "Oyunu Kaybettiniz "
            document.querySelector(".score").textContent = 0
            document.querySelector("body").style.backgroundColor = "red"
        }

    }
    
})

// Again butonuna basında ayarlar başlangıç değerinde kurulsun
// Arka plan #2d3436 olacak

document.querySelector(".again").onclick = () => {
    document.querySelector("body").style.backgroundColor = "#2d3436"
    rastgeleSayi = Math.ceil(Math.random() * 20);
    console.log("yeni rastgele sayi : "+ rastgeleSayi);

    skor = 10;
    document.querySelector(".score").textContent = skor;

    document.querySelector(".number").textContent = "?";

    document.querySelector(".guess").value = ""

    mesaj.textContent = "Oyun yeni oyuncu için başlıyor"

}


//! Enter Tuşu çalışşsın
// Klavyeden enter tuşuna basıldığında check butonu tetiklensin

document.addEventListener("keydown" , function (e){


    console.log(e)
    if (e.key === "Enter"){
        document.querySelector(".check").click();
    }

})

localStorage.setItem("sadik", 555)


console.log(localStorage.getItem("sadik"))
