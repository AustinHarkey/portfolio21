const toggle = document.querySelector('.toggle');
const stylesheet = document.getElementsByTagName('link')[1];
const logo = document.querySelector('.header__logo');
const icon = document.querySelector('.triple__icon');


toggle.addEventListener('click', (e) => {
    if(stylesheet.getAttribute('href') == 'style-dark.css') {
        stylesheet.setAttribute('href', 'style.css');
        toggle.innerHTML = '<i class="far fa-moon"></i>';
        logo.src = 'img/logo-dark-2.png';
        icon.src = 'img/code2.png';
    } else {
        stylesheet.setAttribute('href', 'style-dark.css');
        toggle.innerHTML = '<i class="far fa-sun"></i>';
        logo.src = 'img/logo-dark-2-green.png';
        icon.src = 'img/code2-green.png';
    }
})


// Collect DOM elements
let burger = document.querySelector(".burger");
let body = document.querySelector('.body');
let nav = document.querySelector(".nav");
let header = document.querySelector(".header");
let menu = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.nav__item');

// Toggle mobile menu
let navToggle = () => {
    // nav.classList.toggle("nav--open");
    burger.classList.toggle("burger--open");
    menu.classList.toggle("nav__open");
  };


// menu burger navToggle
burger.addEventListener("click", navToggle);

let menuClick = () => {
    if(menu.classList.contains('nav__open') && window.innerWidth < 751) {
        menu.classList.remove("nav__open");
        burger.classList.remove("burger--open");
    }
}

menuLinks.forEach(link => {
    link.addEventListener('click', menuClick);
});



