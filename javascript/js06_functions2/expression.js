// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****")


// ? ======================================
// ? Example 1
// ? ======================================

const tekVeyaCift = function(num){

    return num%2===0 ?  `${num} sayısı çifttir` : `${num} sayısı tektir`

}

const sonuc = tekVeyaCift(5)
console.log(sonuc)





// ? ======================================
// ? Example 2
// ? ======================================

const usAl = function(taban, us){
    return taban ** us;
}

const us = usAl(2,4)
console.log(us)