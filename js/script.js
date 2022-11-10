const humbergerMenuToggle = document.querySelector('.header-burger-menu');
const menu = document.querySelector('.header-menu');
const btnHero = document.querySelector('.btn-hero');
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