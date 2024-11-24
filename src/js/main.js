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
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 30,
  breakpoints: {
    320: {
      enabled: false,
    },
    767: {
      enabled: true,
    },
    1024: {
      enabled: false,
    },
  },
});

const swiperSteps = new Swiper(".steps-slider", {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320: {
      enabled: true,
    },
    768: {
      enabled: false,
    },
  },
});

const swiperOutstaffServices = new Swiper(".outstaffing-services-slider", {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    1200: {
      enabled: false,
    },
  },
});


