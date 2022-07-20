// Swiper initialization
var phoneSlider = new Swiper(".phone-slider__swiper", {
  autoplay: {
      delay: 5000,
  },
  rewind: true,
  navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique",
  },
});

var functionsSlider = new Swiper(".functions-slider__swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique",
  },
  breakpoints: {
      1400: {slidesPerView: 4},
      1200: {slidesPerView: 3},
      768: {slidesPerView: 2},
      0: {slidesPerView: 1}
  }
});

// Header tracker
window.onscroll = () => {headerTracker()};

const header = document.querySelector('.header')
const main = document.querySelector('.main')

const headerTracker = () => {
  if (window.pageYOffset > 50) {
    header.classList.add('compressed');
    main.classList.add('compressed');
  } else {
    header.classList.remove('compressed');
    main.classList.remove('compressed');
  }
}

// Section tracker
const scrollSection = () => {

  let mainNavigationDot = document.querySelector('.nav-main')
  let videoNavigationDot = document.querySelector('.nav-video')
  let functionsNavigationDot = document.querySelector('.nav-functions')
  let activationNavigationDot = document.querySelector('.nav-activation')
  let faqNavigationDot = document.querySelector('.nav-faq')

  let main = document.querySelector('.main-download-wrapper')
  let video = document.querySelector('.video')
  let functions = document.querySelector('.functions')
  let activation = document.querySelector('.activation')
  let faq = document.querySelector('.faq')
  
  if (window.scrollY + (window.innerHeight/2) >= main.offsetTop 
    && window.scrollY + (window.innerHeight/2) < main.offsetTop + main.offsetHeight
  ) {
    mainNavigationDot.classList.add('active')
  } else {
    mainNavigationDot.classList.remove('active')
  }

  if (window.scrollY + (window.innerHeight/2) >= video.offsetTop 
    && window.scrollY + (window.innerHeight/2) < video.offsetTop + video.offsetHeight
  ) {
    videoNavigationDot.classList.add('active')
  } else {
    videoNavigationDot.classList.remove('active')
  }

  if (window.scrollY + (window.innerHeight/2) >= functions.offsetTop 
    && window.scrollY + (window.innerHeight/2) < functions.offsetTop + functions.offsetHeight
  ) {
    functionsNavigationDot.classList.add('active')
  } else {
    functionsNavigationDot.classList.remove('active')
  }

  if (window.scrollY + (window.innerHeight/2) >= activation.offsetTop 
    && window.scrollY + (window.innerHeight/2) < activation.offsetTop + activation.offsetHeight
  ) {
    activationNavigationDot.classList.add('active')
  } else {
    activationNavigationDot.classList.remove('active')
  }

  if (window.scrollY + (window.innerHeight/2) >= faq.offsetTop 
    && window.scrollY + (window.innerHeight/2) < faq.offsetTop + faq.offsetHeight
  ) {
    faqNavigationDot.classList.add('active')
  } else {
    faqNavigationDot.classList.remove('active')
  }
}

window.addEventListener('scroll', scrollSection)

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
