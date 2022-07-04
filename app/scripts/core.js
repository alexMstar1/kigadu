// Video controls onclick
let video = document.querySelector('.video__src')

video.onclick = () => {
    video.setAttribute('controls', 'controls')
}

// FAQ accordion activation
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active")
  });
}

// Download button scroll to the end
const scrollToEnd = (selector) => {
  document.querySelector(selector).scrollIntoView({block: "end", behavior: "smooth"})
}

let downloadBtn = document.querySelector('#toDownload')

downloadBtn.onclick = () => {
  scrollToEnd('.download')
}


// Burger menu sidebas GSAP
var burgerTop= document.getElementsByClassName("top");
var burgerBot= document.getElementsByClassName("bottom");
var burgerMid= document.getElementsByClassName("middle");
var burgerSidebar= document.getElementsByClassName("sidebar");
var sideText= document.getElementsByClassName("sidetext");
var burgerWhole= document.querySelectorAll(".top, .bottom, .middle");

var tl = new TimelineMax({paused:true, reversed:true});
tl.timeScale(2);
tl
.to(burgerTop, 0.7, { y: 11, yoyo: true, ease: Power1.easeInOut})
.to(burgerBot, 0.7, { y: -11, yoyo: true, ease: Power1.easeInOut}, '-=0.7')
.to(burgerTop, 1, {rotation:45})
.to(burgerMid, 1, {rotation:45}, '-=1')
.to(burgerBot, 1, {rotation:135}, '-=1')
.to(burgerWhole, 0.1, {css:{borderColor:"#000"}, ease: Power1.easeOut}, '-=1')
.to(burgerSidebar, 1, {x:-300, ease: Power2.easeOut}, '-=1')
.staggerFrom(sideText, 0.5, {opacity: 0, y: 25, ease: Power1.easeOut}, 0.1, "-=0.7")
.to(sideText, 0.2, {css:{color:"#000"}})
.reverse()

document.querySelector('.burger-click-region').addEventListener('click', () => {
  tl.reversed() ? tl.play() : tl.reverse()
})


