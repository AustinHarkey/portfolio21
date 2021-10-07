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
        toggle.innerHTML = '<i class="far fa-lightbulb"></i>';
        logo.src = 'img/logo-dark-2-green.png';
        icon.src = 'img/code2-green.png';
    }
})
