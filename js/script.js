const humbergerMenuToggle = document.querySelector('.header-burger-menu');
const menu = document.querySelector('.header-menu');
const btnHero = document.querySelector('.btn-hero');
const btnHero1 = document.querySelector('.btn-hero1')
const projectLayer = document.querySelector('#project-layer');
const project = document.querySelector('#project');

humbergerMenuToggle.addEventListener('click', () => {
    menu.classList.toggle('active')
})
btnHero.addEventListener('click', (e) => {
    e.preventDefault();
    projectLayer.classList.add('active');
    project.classList.add('active');
})
projectLayer.addEventListener('click', (e) => {
    projectLayer.classList.remove('active');
    project.classList.remove('active');
})
btnHero1.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
    projectLayer.classList.add('active');
    project.classList.add('active');
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