x=15
ad="Helen"
yas=40

console.log(yas)

/* -------------------------------------------------------------------------- */
/*                          JAVASCRIPT DE DEĞİŞKENLER                         */
/* -------------------------------------------------------------------------- */
// const let 
// ES6dan sonra gelen yapılardır
// Değişken tanımlama için kullanılır

//! CONST
// const : constant : sabit 
const tckimlik=12332213532
// tckimlik=34534534534543
// ALınacak hata 
//2-variables.js:18 Uncaught TypeError: Assignment to constant variable.

//!LET 
let toplam=0
x=60
y=70
toplam=x+y 
console.log(toplam)

// GLOBAL ALAN
// program içinde her ortamdan uaşabilen ortak alandır

// LOCAL ALAN
// Bir block içidir. { } ile ifade edilen bölümler bloklardır, if bloğu, while,for

//Burası global alan

const sayi=5

{ 
    // Burası local alan
    console.log(sayi)
    const pi=3.14
    console.log(pi)
}

// console.log(pi)

//! VAR - her yerden erişilebilir yeniden tanımlanabilir

var number=90
{
    console.log(number)
    var number=50
}
console.log(number+15)






