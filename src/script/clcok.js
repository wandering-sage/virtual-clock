var secHand = document.querySelector(".second-hand");
var minHand = document.querySelector(".minute-hand");
var hrHand = document.querySelector(".hour-hand");

// Initialize Clock
var d = new Date();
let cursec = d.getSeconds() + d.getMilliseconds() / 1000;
let curMinute = d.getMinutes() + d.getSeconds() / 60;
let curHour = (d.getHours() % 12) + curMinute / 60;
let secInit = cursec * 6;
let minInit = curMinute * 6;
let hrInit = curHour * 30;

// Run Clock
animateClockHand(secHand, secInit, 60);
animateClockHand(minHand, minInit, 3600);
animateClockHand(hrHand, hrInit, 3600 * 60);

// Digital time
var digTime = document.querySelector(".disp-Time");
setInterval(fillTime, 100);

// Functions
function animateClockHand(hand, init, time) {
    hand.animate([{ transform: `rotate(${init}deg)` }, { transform: `rotate(${init + 360}deg)` }], {
        // timing options
        duration: time * 1000,
        iterations: Infinity,
    });
}

function fillTime() {
    digTime.innerHTML = new Date().toLocaleTimeString();
}
