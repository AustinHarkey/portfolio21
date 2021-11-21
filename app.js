const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__link');
let menuOpen = false;



burger.addEventListener('click', () => {
    if(!menuOpen) {
        burger.classList.add('open');
        nav.classList.add('nav--open');
        menuOpen = true;
    } else {
        burger.classList.remove('open');
        nav.classList.remove('nav--open');
        menuOpen = false;
        
        links.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('open');
                nav.classList.remove('nav--open');
                menuOpen = false;
            })
        });
    }
})