let burger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let body = document.querySelector("body");
let links = document.querySelectorAll(".nav__link");
let isActive = false;
function addClass() {
  burger.addEventListener("click", () => {
    if (!isActive) {
      burger.classList.add("is-active");
      nav.classList.add("is-active");
      body.classList.add("lock");
      isActive = true;
    } else {
      burger.classList.remove("is-active");
      nav.classList.remove("is-active");
      body.classList.remove("lock");
      isActive = false;
    }
  });
}
addClass();

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  })
}
const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
