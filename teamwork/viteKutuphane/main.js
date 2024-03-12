import './style.css'

import {kitaplariListele} from './src/kitapListele.js'
import {yeniKitapEkle} from './src/kitapEkle.js'
import {kitapAl, kitapIadeEt} from './src/kitapAlIadeEt.js'
import {yazaraGoreKitapListele} from './src/kitapYazarListele.js'

import {listKitap} from './src/kitapObject.js'

window.addEventListener("load", () => {
    listKitap()
  })
  

document.querySelector("#kitaplariListele").addEventListener("click", () => { kitaplariListele()})
document.querySelector("#yeniKitapEkle").addEventListener("click", () => { yeniKitapEkle()})

document.querySelector("#kitapAl").addEventListener("click", () => { kitapAl()})
document.querySelector("#kitapIadeEt").addEventListener("click", () => { kitapIadeEt()})
document.querySelector("#yazaraGoreKitapListele").addEventListener("click", () => { yazaraGoreKitapListele()})
