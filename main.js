const MenuIcon = document.getElementById('MenuIcon');
const header = document.getElementById("header");
const navbar = document.getElementById("nav-links");
console.log(header);
window.addEventListener('scroll',() => {
  header.classList.toggle('sticky', window.scrollY > 0)
})
MenuIcon.addEventListener('click', () => {
  MenuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

// Scroll reveal

ScrollReveal({
  reset : true,
  distance : '90px',
  duration : 2000,
  delay : 200
})

ScrollReveal().reveal(' h1, .choose__card span ', { origin: 'top' });
ScrollReveal().reveal('.section__header, .offer_heading, #testimonials h2', { origin: 'left' });
ScrollReveal().reveal('.footer__icons, .footer__container h4', { origin: 'right' });





/* Swiper Js*/

const swiper = new Swiper('.swiper',{
  effect: 'slide',
  loop: true,
  autoplay : {
    delay : 1500,
  },
})




