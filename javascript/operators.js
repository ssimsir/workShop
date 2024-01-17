

// OPERATORS

//Aritmetik operators

console.clear()

let a= 10;
let b=2;

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)  //üs alma
console.log(a%b)  //mod alma


//increment  - decrement
let k=5
console.log(k++)
console.log(k--)


//pre increment  - decrement
let x=5
console.log(++x)
console.log(--x)





// Assignment operators

let t=10
let y=5

console.log(t)
console.log(y)

console.log(t=t+y)
console.log(t+=y)
console.log(t-=y)
console.log(t*=y)
console.log(t/=y)
console.log(t**=y)
console.log(t%=y)




// comporation operator

let c=2
let d='2'

console.log(typeof c)
console.log(typeof d)
console.log(c==d)
console.log(c===d)

console.log(c!=d)
console.log(c!==d)

//Logical Operators

//And &&    hepsi true olmalı yoksa true değer dönmez

console.log([] && 0 && 2)
console.log([] && 'M' && 5)

//Or ||   hepsi false olsa bile birtane true varsa true dönderir

console.log(0 || null || undefined)
console.log(0 || null || 2 || undefined)


console.log(! null)