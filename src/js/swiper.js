import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Autoplay } from 'swiper/modules';

// Swiper for Gallery Section
document.addEventListener('DOMContentLoaded', () => {
  const gallerySwiper = new Swiper('.gallery-swiper', {
    modules: [Scrollbar, Autoplay],
    scrollbar: {
      el: '.gallery-swiper .swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 48,
    centeredSlides: false,
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    on: {
      reachEnd: function () {
        setTimeout(() => {
          this.slideTo(0);
        }, 3000);
      },
    },
  });

  // Swiper for Reviews Section
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    modules: [Scrollbar, Autoplay],
    scrollbar: {
      el: '.reviews-swiper .swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: 'auto',
    spaceBetween: 24,
    centeredSlides: false,
    loop: false,
    speed: 1000,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    on: {
      reachEnd: function () {
        setTimeout(() => {
          this.slideTo(0);
        }, 3000);
      },
    },

    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 38,
      },
    },
  });
});
