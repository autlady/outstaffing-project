document.addEventListener("DOMContentLoaded", function () {
  //ASIDE MENU
  const burger = document.querySelectorAll('.btn-open-menu');
  const asideMenu = document.querySelector('.aside-menu-wrapper');
  const asideMenuBlock = document.querySelector('.aside-menu');
  const btnCloseAsideMenu = document.querySelector('.btn-close-menu');
  const linkAsideMenu = document.querySelectorAll('.menu-link');
  const asideListItems = document.querySelectorAll('.menu-item');
  const bodyEl = document.body;

  for (let item of burger) {
    item.addEventListener('click', function () {
      asideMenu.classList.add('active');
      bodyEl.classList.add('noscroll');
    });
  }

  asideMenu.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
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
    link.addEventListener('mouseover', function () {
      let submenu = this.nextElementSibling;
      if (window.innerWidth < 1200) {
        if (submenu) {

          document.querySelectorAll('.menu-item .open').forEach((item) => {
            if (item !== submenu) {
              item.classList.remove('open');
              item.closest(".menu-item").classList.remove('menu-item-bg');
            }
          });

          submenu.classList.toggle("open");
          submenu.closest(".menu-item").classList.toggle('menu-item-bg');
        }
      }

      if (window.innerWidth >= 1200) {
        asideMenuBlock.classList.add('aside-menu-large');
        if (asideMenuBlock.querySelector('.open')) {
          asideMenuBlock.querySelector('.open').classList.remove('open');
        }
        if (submenu) {
          submenu.classList.add('open');
        }
      }
    });
  }

  //TELEPHONE MASK
  const inputsPhone = document.querySelectorAll('.phone');
  const mask = new Inputmask('+7 (999) 999-99-99');

  for (let item of inputsPhone) {
    mask.mask(item);
  }

  //SEARCH HINT
  const hint = document.querySelector('.search-hint');
  const inputHeader = document.getElementById('header-search');
  inputHeader.addEventListener('keyup', function () {
    hint.classList.add('active');
  });

  inputHeader.addEventListener('focus', function () {
    this.closest('.header-search').classList.add('active');
  })

  inputHeader.addEventListener('blur', function () {
    hint.classList.remove('active');
    this.closest('.header-search').classList.remove('active');
  });

  //FIELDSET
  'use strict';

  ; (function (document, window, index) {
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
      var label = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
          fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
          fileName = e.target.value.split('\\').pop();

        if (fileName) {

          if (label.firstChild.nodeType === Node.ELEMENT_NODE) {
            console.log(label.firstChild.nodeType);
            label.querySelector('span').innerHTML = fileName;
          } else {
            label.nextElementSibling.innerHTML = fileName;
          }

          console.log(fileName);
        }
        else
          label.innerHTML = labelVal;
      });

      // Firefox bug fix
      input.addEventListener('focus', function () { input.classList.add('has-focus'); });
      input.addEventListener('blur', function () { input.classList.remove('has-focus'); });
    });
  }(document, window, 0));

  //DRAG N DROP
  const dropFileZone = document.querySelector(".form-fieldset");
  const dropFileButton = document.querySelector(".inputfile");

  ["dragover", "drop"].forEach(function (event) {
    document.addEventListener(event, function (evt) {
      evt.preventDefault();
      return false;
    });
  });

  dropFileZone.addEventListener("dragenter", function () {
    dropFileZone.classList.add("active");
  });

  dropFileZone.addEventListener("dragleave", function () {
    dropFileZone.classList.remove("active");
  });

  dropFileZone.addEventListener("drop", function () {
    dropFileZone.classList.remove("active");
    const file = event.dataTransfer?.files[0];
    if (file) {
      dropFileZone.getElementsByTagName("span")[0].innerHTML = file.name;

      console.log(dropFileZone.getElementsByTagName("span"));
    }
  });

  dropFileButton.addEventListener("change", function () {
    const file = dropFileButton.files?.[0];
    if (file) {
      dropFileZone.getElementsByTagName("span")[0].innerHTML = file.name;
    }
  });

  //MODAL
  const modalFramesOpen = document.querySelectorAll('[data-modal-button]');
  const modalFrames = document.querySelectorAll('[data-modal]');

  if (modalFrames.length > 0) {
    const modalFramesClose = document.querySelectorAll('[data-modal-close]');

    for (let item of modalFramesOpen) {
      item.addEventListener('click', function (e) {
        for (let item of modalFrames) {
          item.classList.add('hidden');
          bodyEl.classList.remove('noscroll');
        }
        e.preventDefault();
        const itemAttr = item.getAttribute('data-modal-button');
        for (let frame of modalFrames) {
          const frameAttr = frame.getAttribute('data-modal');
          if (frameAttr == itemAttr) {
            frame.classList.remove('hidden');
            bodyEl.classList.add('noscroll');
            if (frameAttr == "photo-modal") {
              const img = item.querySelector("img");
              const imgSrc = img.getAttribute('src');
              const modalImg = frame.querySelector('img');
              modalImg.setAttribute('src', imgSrc);
              console.log(imgSrc);
            }
          }
        }
      });
    }
    /*==  закрыть модалки  frame-modal по клику на крестик ======*/
    for (let item of modalFramesClose) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        item.closest('[data-modal]').classList.add('hidden');
        bodyEl.classList.remove('noscroll');
      });
    }

    /*=============== закрыть модалки по клику вне ===============*/
    for (let frame of modalFrames) {
      const frameWin = frame.querySelector('.modal-window');
      frameWin.addEventListener('click', function (e) {
        if (e.target === e.currentTarget) {
          e.preventDefault();
          frame.classList.add('hidden');
          bodyEl.classList.remove('noscroll');
        }
      });
    }
  }

  // SELECT
  // Полифилл для метода forEach для NodeList
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
  const dropdowns = document.querySelectorAll('.dropdown');
  if (dropdowns.length > 0) {
    for (drop of dropdowns) {
      const dropDownBtn = drop.querySelector('.dropdown__button');
      const dropDownList = drop.querySelector('.dropdown__list');
      const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
      const dropDownInput = drop.querySelector('.dropdown__input-hidden');

      // клик по кнопке. Открыть/закрыть select
      dropDownBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const dropActive = document.querySelector('.dropdown__list--visible');
        if (dropActive) {
          dropActive.classList.remove('dropdown__list--visible');
        }
        if (this.classList.contains('dropdown__button--active')) {
          dropDownList.classList.remove('dropdown__list--visible');
          this.classList.remove('dropdown__button--active');
        } else {
          dropDownList.classList.add('dropdown__list--visible');
          this.classList.add('dropdown__button--active');
        }

      });

      // выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
          e.stopPropagation();
          dropDownBtn.querySelector('span').innerText = this.innerText;
          dropDownBtn.querySelector('span').classList.add('text-black');
          console.log(this.innerText);
          dropDownBtn.focus();
          // dropDownInput.value = this.dataset.value;
          // console.log(dropDownInput.value);
          dropDownInput.setAttribute('value', this.innerText);
          dropDownList.classList.remove('dropdown__list--visible');
          dropDownBtn.classList.remove('dropdown__button--active');
        });
      });

      // клик снаружи дропдауна. Закрыть дропдаун
      document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
          dropDownBtn.classList.remove('dropdown__button--active');
          dropDownList.classList.remove('dropdown__list--visible');

        }
      });

      // нажатие на Tab или Escape. Закрыть дропдаун
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
          dropDownBtn.classList.remove('dropdown__button--active');
          dropDownList.classList.remove('dropdown__list--visible');
        }
      });

      const forms = document.querySelectorAll('.js-form');
      if (forms) {
        for (let formItem of forms) {
          const customBtn = formItem.querySelector('.js-reset');
          const customSelects = formItem.querySelectorAll('.js-btn span');

          customBtn.addEventListener('click', function () {

            for (item of customSelects) {

              item.textContent = "Не выбран";
              item.classList.remove('text-black');
            }
          });
        }
      }
    }
  }

  // BENEFITS SLIDER
  let specificSwiperBen = null;
  function initSpecificSwiperBen() {
    const windowWidth = window.innerWidth;
    const swiperContainerBen = document.querySelector(".benefits-slider");


    if (windowWidth >= 768 && windowWidth <= 1300 && swiperContainerBen && !specificSwiperBen) {
      specificSwiperBen = new Swiper(".benefits-slider", {
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 16,
      });
    }

    if (windowWidth < 768 && windowWidth > 1300 && specificSwiperBen) {
      specificSwiperBen.destroy(true, true);
      specificSwiperBen = null;
    }
  }

  initSpecificSwiperBen();
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

    if (windowWidth >= 768 && windowWidth <= 1300 && swiperContainerGuide && !specificSwiperGuide) {
      specificSwiperGuide = new Swiper(".guide-slider", {
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 30,
        lazy: true,
      });
    }
    if (windowWidth < 768 && windowWidth > 1300 && specificSwiperGuide) {
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

    if (windowWidth >= 768 && windowWidth <= 1300 && swiperContainerKnowledge && !specificSwiperKnowledge) {
      specificSwiperKnowledge = new Swiper(".knowledge-slider", {
        slidesPerView: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 30,
      });
    }
    if (windowWidth < 768 && windowWidth > 1300 && specificSwiperKnowledge) {
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
    lazy: true,

    // Navigation arrows
    navigation: {
      nextEl: '#slider-next-reviews',
      prevEl: '#slider-prev-reviews',
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
  /************************************* */

  // PARTNERS slider

  const swiperPartners = new Swiper('.partners-slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    lazy: true,

    // Navigation arrows
    navigation: {
      nextEl: '#slider-next-partners',
      prevEl: '#slider-prev-partners',
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
  /************************************* */

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


  // OBJECTS slider

  const swiperObjs = new Swiper('.objects-slider', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 16,

    // Navigation arrows
    navigation: {
      nextEl: '#slider-next-objects',
      prevEl: '#slider-prev-objects',
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
        slidesPerView: 1,
        spaceBetween: 16,
      },
      942: {
        grid: {
          rows: 3,
        },
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1301: {
        slidesPerView: 3,
        spaceBetween: 42,
      },
      1795: {
        spaceBetween: 56,
        slidesPerView: 3,
      },
    },
  });
  /************************************* */

  // CENTER SERVICE SLIDER
  let specificSwiperCenter = null;

  function initSpecificSwiperCenter() {
    const windowWidth = window.innerWidth;
    const swiperContainerCenter = document.querySelector(".center-services-slider");

    if (windowWidth <= 1300 && swiperContainerCenter && !specificSwiperCenter) {
      specificSwiperCenter = new Swiper(".center-services-slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            spaceBetween: 20,
            slidesPerView: 1,
          },
          870: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
        },
      });
    }

    if (windowWidth > 1300 && specificSwiperCenter) {
      specificSwiperCenter.destroy(true, true);
      specificSwiperCenter = null;
    }
  }

  initSpecificSwiperCenter();
  window.addEventListener("resize", initSpecificSwiperCenter);
  /************************************* */


  // SERTIFICATES SLIDER

  let specificSwiperSert = null;

  function initSpecificSwiperSert() {
    const windowWidth = window.innerWidth;
    const swiperContainerSert = document.querySelector(".sertificates-slider");

    if (windowWidth <= 945 && swiperContainerSert && !specificSwiperSert) {
      specificSwiperSert = new Swiper(".sertificates-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        lazy: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    if (windowWidth > 946 && specificSwiperSert) {
      specificSwiperSert.destroy(true, true);
      specificSwiperSert = null;
    }
  }

  initSpecificSwiperSert();
  window.addEventListener("resize", initSpecificSwiperSert);
  /************************************* */

  // DOCUMENTS slider

  const swiperDoc = new Swiper('.documents-slider', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,
    lazy: true,

    // Navigation arrows
    navigation: {
      nextEl: '#slider-next-documents',
      prevEl: '#slider-prev-documents',
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

  // UNIFORM SLIDER

  let specificSwiperUniform = null;

  function initSpecificSwiperUniform() {
    const windowWidth = window.innerWidth;
    const swiperContainerUniform = document.querySelector(".uniform-slider");

    if (windowWidth <= 945 && swiperContainerUniform && !specificSwiperUniform) {
      specificSwiperUniform = new Swiper(".uniform-slider", {
        slidesPerView: 1,
        lazy: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }

    if (windowWidth > 946 && specificSwiperUniform) {
      specificSwiperUniform.destroy(true, true);
      specificSwiperUniform = null;
    }
  }

  initSpecificSwiperUniform();
  window.addEventListener("resize", initSpecificSwiperUniform);
  /************************************* */

  // INTRO slider

const swiperIntro = new Swiper('.intro-slider', {
  // Optional parameters
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    autoplay: true,
    autoplayDelay: 5000,

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
 /************************************* */

   // TOP slider

const swiperTop = new Swiper('.top-slider', {
  // Optional parameters
    slidesPerView: 1,
    spaceBetween: 16,

    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

     // Navigation arrows
     navigation: {
      nextEl: '#slider-next-top',
      prevEl: '#slider-prev-top',
    },
});
 /************************************* */

   // PRESENTATION REVIEWS slider

   const swiperPresReviews = new Swiper('.presentation-reviews-slider', {
    // Optional parameters
      slidesPerView: 1,
      spaceBetween: 16,

      pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

       // Navigation arrows
       navigation: {
        nextEl: '#slider-next-present',
        prevEl: '#slider-prev-present',
      },
  });
   /************************************* */

  /************************************* */

   // ARTICLES REVIEWS slider

   const swiperArticles = new Swiper('.articles-slider', {
    // Optional parameters
      slidesPerView: 1,
      spaceBetween: 16,

      pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

       // Navigation arrows
       navigation: {
        nextEl: '#slider-next-articles',
        prevEl: '#slider-prev-articles',
      },
  });
   /************************************* */

});


