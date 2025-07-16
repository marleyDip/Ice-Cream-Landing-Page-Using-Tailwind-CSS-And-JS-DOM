/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/

const navMenu = document.getElementById("nav-menu");

const hamburger = document.getElementById("hamburger");

const closeIcon = document.getElementById("closeicon");

const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
});

closeIcon.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
  });
});
/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*~~~~~~~~~~~~~~~ SWIPER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");

    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");

    scrollUpBtn.classList.remove("bottom-4");
  }
};

window.addEventListener("scroll", scrollUp);
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/

const activeLink = () => {
  const sections = document.querySelectorAll("section");

  const navLinks = document.querySelectorAll(".nav-link");

  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (this.scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("active");

    if (item.href.includes(current)) {
      item.classList.add("active");
    }
  });
};

window.addEventListener("scroll", activeLink);
/*~~~~~~~~~~~~~~~ ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

const scrollHeader = () => {
  const navbar = document.getElementById("navbar");

  if (this.scrollY >= 200) {
    navbar.classList.add("shadow-myboxshadow");
  } else {
    navbar.classList.remove("shadow-myboxshadow");
  }
};

window.addEventListener("scroll", scrollHeader);
/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
