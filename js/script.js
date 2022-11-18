const humbergerMenuToggle = document.querySelector('.header-burger-menu');
const menu = document.querySelector('.header-menu');
const btnHero = document.querySelector('.btn-hero');
const btnHero1 = document.querySelector('.btn-hero1');
const btnHero2 = document.querySelector('.btn-hero2');
const projectLayer = document.querySelector('#project-layer');
const project = document.querySelector('#project');
const preload = document.querySelector('#preload');
const html = document.querySelector('html')
var a = setTimeout(load,2000);

function load(){
  preload.style.display = 'none';
}
humbergerMenuToggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})
btnHero.addEventListener('click', (e) => {
    e.preventDefault();
    projectLayer.classList.add('active');
    project.classList.add('active');
    html.classList.add('hidden-ovrflw')
})
projectLayer.addEventListener('click', (e) => {
    projectLayer.classList.remove('active');
    project.classList.remove('active');
    html.classList.remove('hidden-ovrflw')
})
btnHero1.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
    projectLayer.classList.add('active');
    project.classList.add('active');
    html.classList.add('hidden-ovrflw')
})
btnHero2.addEventListener('click', (e) => {
  e.preventDefault();
  projectLayer.classList.add('active');
  project.classList.add('active');
  html.classList.add('hidden-ovrflw')
})

let topButton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    540: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});