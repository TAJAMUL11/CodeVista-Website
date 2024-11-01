const MenuIcon = document.getElementById('MenuIcon');
const header = document.getElementById("header");
const navbar = document.getElementById("nav-links");

window.addEventListener('scroll',() => {
  header.classList.add('sticky', window.scrollY > 5)
})
window.addEventListener('scroll', () => {
  const offerBoxes = document.querySelectorAll('.offer-box');

  offerBoxes.forEach(box => {
    const rect = box.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Check if the box is within a certain distance from the viewport
    if (rect.top < viewportHeight * 1) {
      box.classList.add('show-offer');

      // After a delay, remove the 'show-offer' class to reset the animation
      setTimeout(() => {
        box.classList.remove('show-offer');
      }, 2000); // Adjust the delay as needed
    }
  });
});

MenuIcon.addEventListener('click', () => {
  MenuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

// Scroll reveal

ScrollReveal({
  reset : true,
  distance : '90px',
  duration : 1000,
  delay : 200
})

ScrollReveal().reveal('h1, #wrap, .choose__card span, #testimonials h2 ', { origin: 'top' });
ScrollReveal().reveal('.section__header, .offer_heading', { origin: 'left' });
ScrollReveal().reveal('.footer__icons, .footer__container h4', { origin: 'right' });

/* Swiper Js*/

const swiper = new Swiper('.swiper',{
  effect: 'slide',
  loop: true,
  autoplay : {
    delay : 2500,
  },
})




