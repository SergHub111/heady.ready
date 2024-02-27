let swiperBox = document.querySelector('.product-slider__box');

const swiperParams = {
  loop: true,
  speed: 1000,
  slidesPerView: 3,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
  },
};

Object.assign(swiperBox, swiperParams);
swiperBox.initialize();
