// main banner
var swiper1 = new Swiper(".banner_slide", {
  spaceBetween: 40,
  pagination: {
    el: ".pg1",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  initialSlide: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
var swiper2 = new Swiper(".banner_slide", {
  spaceBetween: 40,
  pagination: {
    el: ".pg2",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  initialSlide: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// sec1 반응형
var swiper3 = new Swiper(".m_banner_slide", {
  spaceBetween: 40,
  pagination: {
    el: ".pg1",
    type: "progressbar",
  },
  initialSlide: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
var swiper4 = new Swiper(".m_banner_slide", {
  spaceBetween: 40,
  pagination: {
    el: ".pg2",
    type: "fraction",
  },
  initialSlide: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// sec2
var swiper5 = new Swiper(".sec2_slide", {
  slidesPerView: 3,
  spaceBetween: 20,
});

// sec4
var swiper6 = new Swiper(".md_con", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});

// sec5
var swiper7 = new Swiper(".sns_slide", {
  slidesPerView: "auto",
  spaceBetween: 0,
  slidesPerGroup: 3,
  speed: 10000,
  loop: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
