document.addEventListener('DOMContentLoaded', () => {
  let swiperInstance; // Глобальна змінна для збереження екземпляра Swiper

  function initSwiper() {
    if (window.innerWidth < 1200 && !swiperInstance) {
      // Перевіряємо, чи не створений Swiper
      swiperInstance = new Swiper('.swiper', {
        loop: true,
        navigation: {
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 20,
      });

      const prevButton = document.querySelector('.custom-swiper-button-prev');
      const nextButton = document.querySelector('.custom-swiper-button-next');

      if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
          swiperInstance.slidePrev();
        });

        nextButton.addEventListener('click', () => {
          swiperInstance.slideNext();
        });
      }
    }
  }

  function destroySwiper() {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }

  function handleResize() {
    if (window.innerWidth >= 1200) {
      destroySwiper();
    } else {
      initSwiper();
    }
  }

  initSwiper();
  window.addEventListener('resize', handleResize);
});

document.addEventListener('DOMContentLoaded', () => {
  const mobileList = document.querySelector(
    '.section-reviews__mobile .section-reviews__list'
  );
  const desktopContainer = document.querySelector('.section-reviews__desktop');

  if (mobileList && desktopContainer) {
    const desktopList = mobileList.cloneNode(true);
    desktopList.classList.remove('swiper-wrapper');
    desktopContainer.appendChild(desktopList);
  }
});
