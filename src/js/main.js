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
              clickable: true,
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
  /************************************* */

  // COT SERVICE SLIDER
  let specificSwiperCot = null;

  function initSpecificSwiperCot() {
    const windowWidth = window.innerWidth;
    const swiperContainerCot = document.querySelector(".cot-services-slider");

    if (windowWidth <= 1369 && swiperContainerCot && !specificSwiperCot) {
      specificSwiperCot = new Swiper(".cot-services-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          870: {
            spaceBetween: 16,
            slidesPerView: 2,
          },
        },
      });
    }

    if (windowWidth > 1369 && specificSwiperCot) {
      specificSwiperCot.destroy(true, true);
      specificSwiperCot = null;
    }
  }

  initSpecificSwiperCot();
  window.addEventListener("resize", initSpecificSwiperCot);
  /************************************* */

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
  /************************************* */

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
  /************************************* */

  // GUIDE SLIDER
  let specificSwiperGuide = null;
  function initSpecificSwiperGuide() {
  const windowWidth = window.innerWidth;
  const swiperContainerGuide = document.querySelector(".guide-slider");

  if (windowWidth >= 768 && windowWidth <= 1301 && swiperContainerGuide && !specificSwiperGuide) {
    specificSwiperGuide = new Swiper(".guide-slider", {
        slidesPerView: 2,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          spaceBetween: 30,
    });
  }
    if (windowWidth < 768 && windowWidth > 1301 && specificSwiperGuide) {
      specificSwiperGuide.destroy(true, true);
      specificSwiperGuide = null;
    }
  }

  initSpecificSwiperGuide();
  window.addEventListener("resize", initSpecificSwiperGuide);
  /************************************* */

    // Knowledge SLIDER
    let specificSwiperKnowledge = null;
    function initSpecificSwiperKnowledge() {
    const windowWidth = window.innerWidth;
    const swiperContainerKnowledge = document.querySelector(".knowledge-slider");

    if (windowWidth >= 768 && windowWidth <= 1301 && swiperContainerKnowledge && !specificSwiperKnowledge) {
      specificSwiperKnowledge = new Swiper(".knowledge-slider", {
          slidesPerView: 2,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            spaceBetween: 30,
      });
    }
      if (windowWidth < 768 && windowWidth > 1301 && specificSwiperKnowledge) {
        specificSwiperKnowledge.destroy(true, true);
        specificSwiperKnowledge = null;
      }
    }

    initSpecificSwiperKnowledge();
    window.addEventListener("resize", initSpecificSwiperKnowledge);
    /************************************* */

  // REVIEWS slider

  const swiperReviews = new Swiper('.reviews-slider', {
  // Optional parameters
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,

  // Navigation arrows
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    },

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    920: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1301: {
      slidesPerView: 3,
      spaceBetween: 33,
    },
    1664: {
      spaceBetween: 44,
    },
  },
});

  // PARTNERS slider

  const swiperPartners = new Swiper('.partners-slider', {
    // Optional parameters
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,


    // Navigation arrows
      navigation: {
        nextEl: '.slider-next-partners',
        prevEl: '.slider-prev-partners',
      },

      pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      320: {
        grid: {
          rows: 3,
        },
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1301: {
        slidesPerView: 5,
      },
    },
  });

  // SECURITY SERVICE SLIDER
  let specificSwiperSec = null;

  function initSpecificSwiperSec() {
    const windowWidth = window.innerWidth;
    const swiperContainerSec = document.querySelector(".security-services-slider");

    if (windowWidth <= 1369 && swiperContainerSec && !specificSwiperSec) {
      specificSwiperSec = new Swiper(".security-services-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        breakpoints: {
          870: {
            spaceBetween: 16,
            slidesPerView: 2,
          },
        },
      });
    }

    if (windowWidth > 1369 && specificSwiperSec) {
      specificSwiperSec.destroy(true, true);
      specificSwiperSec = null;
    }
  }

  initSpecificSwiperSec();
  window.addEventListener("resize", initSpecificSwiperSec);
  /************************************* */

})
