let x;
let startstop = 0;

function startStop() { 

  startstop = startstop + 1;
  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = `<i class="fa-sharp fa-solid fa-pause"></i>`;
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = `<i class="fa-sharp fa-solid fa-play"></i>`;
    startstop = 0;
    stop();
  }
}

function start() {
  x = setInterval(timer, 10);
}

function stop() {
  clearInterval(x);
}

let milisec = 0;
let sec = 0; 
let min = 0;

let miliSecOut = 0;
let secOut = 0;
let minOut = 0;

function timer() {
  miliSecOut =  milisec<10 ? "0"+milisec : milisec;
  secOut = sec<10 ? "0"+sec : sec;
  minOut = min<10 ? "0"+min : min;

  milisec = ++milisec;

  if (milisec === 100) {
    milisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  document.getElementById("milisec").innerHTML = miliSecOut;
  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;

}

function reset() {
  milisec = 0;
  sec = 0;
  min = 0
  hour = 0;

  document.getElementById("milisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";

}

window.addEventListener("load", reset())