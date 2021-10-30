import Swiper, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Mousewheel,
  Keyboard,
  Parallax,
  Lazy,
  EffectFade,
  Thumbs,
  Controller,
} from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay, Mousewheel, Keyboard, Parallax, Lazy, EffectFade, Thumbs, Controller]);

(function () {
  document.addEventListener('DOMContentLoaded', () => {

    // Handle Default swipers
    const swipers = document.querySelectorAll('[data-swiper]') || [];

    swipers.forEach((elem) => {
      let options = elem.dataset && elem.dataset.options ? JSON.parse(elem.dataset.options) : {};
      var swiper = new Swiper(elem, options);
    });

    // Handle our linked swipers on homepage
    var swiperLinkedTop = new Swiper('.swiper-linked-top', {
      spaceBetween: 23,
      breakpoints: {
        300: {
          slidesPerView: 2
        },       
        999: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      },      
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      }
    });
    var swiperLinkedBottom = new Swiper('.swiper-linked-bottom', {
      spaceBetween: 0,
      slidesPerView: 1,
      parallax: true,
      thumbs: {
        swiper: swiperLinkedTop
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      }
    });  

  })
})();