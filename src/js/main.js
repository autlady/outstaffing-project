// const toggleMenu = document.querySelector('menu-toggle');

// if (toggleMenu){
//     toggleMenu.addEventListener('click', function(){

//         if(this.classList.contains('active')){
//             this.classList.remove('active');
//         }else{
//             this.classList.add('active');
//         }
//     })
// }



// const swiper = new Swiper('#products-slider', {

//   slidesPerView: 3,
//   spaceBetween: 32,
//   loop: true,

//   pagination: {
//     el: '#products-slider-pagination',
//   },

//   navigation: {
//     nextEl: '#btn-next',
//     prevEl: '#btn-prev',
//   },
// });

const swiper = new Swiper(".outstaffing-benefits-slider", {
  breakpoints: {
    320: {
      enabled: false,
    },
    767: {
      enabled: true,
      slidesPerView: 2,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    1024: {
      enabled: false,
    },
  },
});

const swiperSteps = new Swiper(".steps-slider", {
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
      },
    },
    768: {
      enabled: false,
    },
  },
});


