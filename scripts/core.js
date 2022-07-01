let video = document.querySelector('.video__src')

video.onclick = () => {
    video.setAttribute('controls', 'controls')
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active")
  });
}

const scrollToEnd = (selector) => {
  document.querySelector(selector).scrollIntoView({block: "end", behavior: "smooth"})
}

let downloadBtn = document.querySelector('#toDownload')

downloadBtn.onclick = () => {
  scrollToEnd('.download')
}