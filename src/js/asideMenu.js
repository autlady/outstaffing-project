const burger = document.querySelector('.burger');
const asideMenu = document.querySelector('.aside-menu-wrapper');
const asideMenuBlock = document.querySelector('.aside-menu');
const btnCloseAsideMenu = document.querySelector('.btn-close-menu');
const linkAsideMenu = document.querySelectorAll('.menu-link');
const asideListItems = document.querySelectorAll('.menu-item');
const bodyEl = document.body;

burger.addEventListener('click', function() {
    asideMenu.classList.add('active');
    bodyEl.classList.add('noscroll');
});

asideMenu.addEventListener('click', function (e) {
    if (e.target === e.currentTarget){
        asideMenuBlock.classList.remove('aside-menu-large');
        asideMenu.classList.remove('active');
        bodyEl.classList.remove('noscroll');
    }
});

btnCloseAsideMenu.addEventListener('click', function () {
    asideMenuBlock.classList.remove('aside-menu-large');
    asideMenu.classList.remove('active');
    bodyEl.classList.remove('noscroll');
    if (window.innerWidth < 1200) {
        if (asideMenu.querySelector('.open')) {
            asideMenu.querySelector('.open').classList.remove("open");

            console.log(linkAsideMenu);
            asideListItems.forEach((el) => {
                console.log(el);
                el.classList.remove('menu-item-bg');
            });

        }
    }
});

for (let link of linkAsideMenu) {
    link.addEventListener('click', function() {
        let submenu = this.nextElementSibling;
        if (window.innerWidth < 1200) {
            if (submenu) {
                // asideMenuBlock.querySelector('.open').classList.remove('open');

                submenu.classList.toggle("open");
                submenu.closest(".menu-item").classList.toggle('menu-item-bg');
            }
        }

        if (window.innerWidth >= 1200) {
            asideMenuBlock.classList.add('aside-menu-large');
            if( asideMenuBlock.querySelector('.open')){
                asideMenuBlock.querySelector('.open').classList.remove('open');
            }
            if (submenu) {
                submenu.classList.add('open');
            }

        }

    })

}
