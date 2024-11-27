const burger = document.querySelector('.burger');
const asideMenu = document.querySelector('.aside-menu-wrapper');
const btnCloseAsideMenu = document.querySelector('.btn-close-menu');
const bodyEl = document.body;

burger.addEventListener('click', function() {
    asideMenu.classList.add('active');
    bodyEl.classList.add('noscroll');
});

asideMenu.addEventListener('click', function (e) {
    if (e.target === e.currentTarget){
        asideMenu.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    }
});

btnCloseAsideMenu.addEventListener('click', function (e) {
        asideMenu.classList.remove('active');
        bodyEl.classList.remove('noscroll');
});