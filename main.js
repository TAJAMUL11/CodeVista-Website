const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = document.querySelector("i");
const header = document.getElementById("header");
console.log(header);
window.addEventListener('scroll',() => {
  header.classList.toggle('sticky', window.scrollY > 0)
})

const swiper = new Swiper('.swiper',{
  effect: 'slide',
  loop: true,
  autoplay : {
    delay : 1500,
  },
})




