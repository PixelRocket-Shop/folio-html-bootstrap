import LocomotiveScroll from 'locomotive-scroll';
import imagesLoaded from 'imagesloaded';

(function () {

  const scrollContainer = document.querySelector('[data-scroll-container]');

  const scroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    offset: ['17.5%'],
    repeat: true,
    class: 'animate',
    smartphone: {
      smooth: true
    },
    tablet: {
      smooth: true
    }
  });

  window.addEventListener('resize', () => { 
    scroll.update(); 
  });

  imagesLoaded(scrollContainer, { background: true }, () => {
    scroll.update();
  });

})();