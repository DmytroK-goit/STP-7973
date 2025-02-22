document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1200) {
    const swiper = new Swiper('.swiper', {
      loop: true, // Безкінечний цикл
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1, // Показує одну картку на екрані
      spaceBetween: 20, // Відступ між картками
    });
  }
});
