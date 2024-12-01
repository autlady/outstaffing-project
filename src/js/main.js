document.addEventListener("DOMContentLoaded", function (){

    // BENEFITS SLIDER
  let specificSwiperBen = null; // Для хранения экземпляра конкретного Swiper
  function initSpecificSwiperBen() {
    const windowWidth = window.innerWidth;

    // Уникальный селектор для конкретного слайдера
    const swiperContainerBen = document.querySelector(".benefits-slider");

    // Проверяем, нужно ли инициализировать слайдер

    if (windowWidth >= 768 && windowWidth <= 1301 && swiperContainerBen && !specificSwiperBen) {
      specificSwiperBen = new Swiper(".benefits-slider", {
          slidesPerView: 2,
            pagination: {
              el: '.swiper-pagination',
            },
            spaceBetween: 30,
      });
    }

    // Уничтожаем Swiper, если ширина больше 1199px
    if (windowWidth < 768 && windowWidth > 1301 && specificSwiperBen) {
      specificSwiperBen.destroy(true, true);
      specificSwiperBen = null; // Обнуляем экземпляр
    }
  }

  // Инициализация при загрузке страницы
  initSpecificSwiperBen();
  // Повторная проверка при изменении размера окна
  window.addEventListener("resize", initSpecificSwiperBen);
  /************************************* */


  // OUTSTAFFING SERVICE SLIDER
  let specificSwiper = null;

  function initSpecificSwiper() {
    const windowWidth = window.innerWidth;
    const swiperContainer = document.querySelector(".outstaffing-services-slider");

    if (windowWidth <= 1199 && swiperContainer && !specificSwiper) {
      specificSwiper = new Swiper(".outstaffing-services-slider", {
        slidesPerView: 1,
        spaceBetween: 32,
        grid: {
          rows: 2,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          768: {
            spaceBetween: 16,
            slidesPerView: 2,
          },
        },
      });
    }

    if (windowWidth > 1199 && specificSwiper) {
      specificSwiper.destroy(true, true);
      specificSwiper = null;
    }
  }

  initSpecificSwiper();
  window.addEventListener("resize", initSpecificSwiper);

// STEPS SLIDER

  let specificSwiperSteps = null;

  function initSpecificSwiperSteps() {
    const windowWidth = window.innerWidth;
    const swiperContainerSteps = document.querySelector(".steps-slider");

    if (windowWidth <= 767 && swiperContainerSteps && !specificSwiperSteps) {
      specificSwiperSteps = new Swiper(".steps-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    if (windowWidth > 768 && specificSwiperSteps) {
      specificSwiperSteps.destroy(true, true);
      specificSwiperSteps = null;
    }
  }

  initSpecificSwiperSteps();
  window.addEventListener("resize", initSpecificSwiperSteps);

  // ADVANTAGES SLIDER

  let specificSwiperAdv = null;

  function initSpecificSwiperAdv() {
    const windowWidth = window.innerWidth;
    const swiperContainerAdv = document.querySelector(".advantages-slider");

    if (windowWidth <= 1199 && swiperContainerAdv && !specificSwiperAdv) {
      specificSwiperAdv = new Swiper(".advantages-slider", {
        slidesPerView: 1,
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          931: {
            slidesPerView: 2,
          },
        },
      });
    }

    if (windowWidth > 1199 && specificSwiperAdv) {
      specificSwiperAdv.destroy(true, true);
      specificSwiperAdv = null;
    }
  }

  initSpecificSwiperAdv();
  window.addEventListener("resize", initSpecificSwiperAdv);

  })
