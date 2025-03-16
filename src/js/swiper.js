import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper/modules';

// Swiper for Gallery Section
document.addEventListener('DOMContentLoaded', () => {
  const gallerySwiper = new Swiper('.gallery-swiper', {
    modules: [Scrollbar],
    scrollbar: {
      el: '.gallery-swiper .swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 48,
    centeredSlides: false,
    on: {
      reachEnd: function () {
        setTimeout(() => {
          this.slideTo(0);
        }, 3000);
      },
    },

    loop: false,
  });

  // Swiper for Reviews Section
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    modules: [Scrollbar],
    scrollbar: {
      el: '.reviews-swiper .swiper-scrollbar',
      draggable: true,
    },
    loop: false,
    slidesPerView: 1.2,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 38,
      },
    },
  });
});
