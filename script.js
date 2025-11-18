const hamburger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

hamburger.addEventListener('click', () => {
    menuMobile.classList.toggle('open');
    hamburger.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuMobile.classList.remove('open')
        hamburger.classList.remove('active')
    }
});