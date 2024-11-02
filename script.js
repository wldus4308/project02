let menu = document.querySelector('#nav-toggle');
let bar = document.querySelector('.menu-list');
let barsIcon = document.querySelector('.bars i');
let menuItems = document.querySelectorAll('.menu-list li');


menu.onclick = () => {
  bar.classList.toggle('open');
  barsIcon.classList.toggle('active');


}

menuItems.forEach(item => {
  item.onclick = () => {
    bar.classList.remove('open');
    barsIcon.classList.remove('active');
  };
});


const lectureSwiper = new Swiper(".swiper", {
  slidesPerView: 7,
  spaceBetween: 12,
  loop: true,
  autoplay: {
    delay:2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    768: {
      spaceBetween: 20,
      
    }
  }
});

const partnerSwiper = new Swiper(".partner-swiper-container", {
  slidesPerView: 7,
  spaceBetween: 12,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 2000,
  breakpoints: {
    980: {
      slidesPerView: 7,
    },
    536: { 
      slidesPerView: 4, 
      spaceBetween: 12, 
    },

    320: { 
      slidesPerView: 4, 
      spaceBetween: 30,
    },
  },

}); 

const scrollOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 500,
  easing: "ease-in",
};

ScrollReveal().reveal(".home .content h1", scrollOptions);
ScrollReveal().reveal(".home .content p", { ...scrollOptions, delay: 300 });
ScrollReveal().reveal(".home .search", { ...scrollOptions, delay: 500 });
ScrollReveal().reveal(".home .recommend-tag", { ...scrollOptions, delay: 700 });
ScrollReveal().reveal(".lecture", {...scrollOptions, delay:900})

ScrollReveal().reveal("section:not(.home):not(.lecture)", { ...scrollOptions, delay: 400 });