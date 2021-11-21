const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');
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
        
    }
})

const linkClose = () => {
        links.forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('open');
                nav.classList.remove('nav--open');
                menuOpen = false;
                console.log('pops');
            })
        });
}

linkClose();


window.onscroll = () => {
    var top = window.scrollY;
    var width = window.innerWidth;
    if(top >= 100 && width > 1200) {
        header.classList.add('header--active');
    } else {
        header.classList.remove('header--active');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(ref => {
    ref.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: 'smooth'
        });
    })
});