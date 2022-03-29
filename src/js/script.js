// инициализация WOW.js
new WOW().init();

const navWrapper = document.querySelector(".nav-wrapper");
const mobileBtn = document.querySelector(".mobile__icons");
const closeBtn = document.querySelector(".mobile__close");
// open mobile menu
mobileBtn.addEventListener('click', () => {
    mobileBtn.classList.add("d-none");
    closeBtn.classList.add("active");
    navWrapper.classList.add("active-menu");
});
// close mobile menu
closeBtn.addEventListener("click", () => {
  closeBtn.classList.remove("active");
  navWrapper.classList.remove("active-menu");
  mobileBtn.classList.remove("d-none");
 
});