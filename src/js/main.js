document.addEventListener("DOMContentLoaded", function (){

    // OUTSTAFFING BENEFITS SLIDER
  let specificSwiperBen = null; // Для хранения экземпляра конкретного Swiper
  function initSpecificSwiperBen() {
    const windowWidth = window.innerWidth;

    // Уникальный селектор для конкретного слайдера
    const swiperContainerBen = document.querySelector(".outstaffing-benefits-slider");

    // Проверяем, нужно ли инициализировать слайдер

    if (windowWidth >= 768 && windowWidth <= 1301 && swiperContainerBen && !specificSwiperBen) {
      specificSwiperBen = new Swiper(".outstaffing-benefits-slider", {
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
  let specificSwiper = null; // Для хранения экземпляра конкретного Swiper

  function initSpecificSwiper() {
    const windowWidth = window.innerWidth;

    // Уникальный селектор для конкретного слайдера
    const swiperContainer = document.querySelector(".outstaffing-services-slider");

    // Проверяем, нужно ли инициализировать слайдер
    if (windowWidth <= 1199 && swiperContainer && !specificSwiper) {
      specificSwiper = new Swiper(".outstaffing-services-slider", {
        slidesPerView: 1,
        spaceBetween: 16,
        grid: {
          rows: 2, // Пример настройки сетки
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
          },
        },
      });
    }

    // Уничтожаем Swiper, если ширина больше 1199px
    if (windowWidth > 1199 && specificSwiper) {
      specificSwiper.destroy(true, true);
      specificSwiper = null; // Обнуляем экземпляр
    }
  }

  // Инициализация при загрузке страницы
  initSpecificSwiper();

  // Повторная проверка при изменении размера окна
  window.addEventListener("resize", initSpecificSwiper);

// STEPS SLIDER

  let specificSwiperSteps = null; // Для хранения экземпляра конкретного Swiper

  function initSpecificSwiperSteps() {
    const windowWidth = window.innerWidth;

    // Уникальный селектор для конкретного слайдера
    const swiperContainerSteps = document.querySelector(".steps-slider");

    // Проверяем, нужно ли инициализировать слайдер
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

    // Уничтожаем Swiper, если ширина больше 1199px
    if (windowWidth > 768 && specificSwiperSteps) {
      specificSwiperSteps.destroy(true, true);
      specificSwiperSteps = null; // Обнуляем экземпляр
    }
  }

  // Инициализация при загрузке страницы
  initSpecificSwiperSteps();

  // Повторная проверка при изменении размера окна
  window.addEventListener("resize", initSpecificSwiperSteps);

  // ADVANTAGES SLIDER

  let specificSwiperAdv = null; // Для хранения экземпляра конкретного Swiper

  function initSpecificSwiperAdv() {
    const windowWidth = window.innerWidth;

    // Уникальный селектор для конкретного слайдера
    const swiperContainerAdv = document.querySelector(".advantages-slider");

    // Проверяем, нужно ли инициализировать слайдер
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

    // Уничтожаем Swiper, если ширина больше 1199px
    if (windowWidth > 1199 && specificSwiperAdv) {
      specificSwiperAdv.destroy(true, true);
      specificSwiperAdv = null; // Обнуляем экземпляр
    }
  }

  // Инициализация при загрузке страницы
  initSpecificSwiperAdv();

  // Повторная проверка при изменении размера окна
  window.addEventListener("resize", initSpecificSwiperAdv);

  })
