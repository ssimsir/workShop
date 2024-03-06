//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------
// const gecikme = (sure) => {    //? Senkron bloking kod
//     const basla = new Date().getTime();
//     while(new Date().getTime() < basla+sure){
//         ;
//     }
// }



// console.log("senkron") 

// console.time("timer")
// gecikme(2000)
// console.timeEnd("timer")
// //alert("blocking")  //?senkron çalışmada bir fonksiyon çok uzun sürerse uygulamayı bloklar
// console.log("FS-16")

console.log("start")
setTimeout(()=>{
    console.log("timeout doldu")
},1000)

console.log("uygulama bitti")


let sayac=0
const intervalId =  setInterval(()=>{
    console.log(++sayac)
    sya
},1000 )    //1000*60*60*24  bir gün için