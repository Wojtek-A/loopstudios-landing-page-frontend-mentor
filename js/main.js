const hamburger = document.querySelector('.header__hamburger');
const closeIcon = document.querySelector('.header__close');
const nav = document.querySelector('.navbar');
const list = document.querySelector('.navbar__list');

const switchingMenu = () => {
  if (window.matchMedia('(max-width: 1439px)').matches) {
    hamburger.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
    nav.classList.toggle('hidden');
  }
};
const showingNav = () => {
  if (window.matchMedia('(min-width: 1440px)').matches) {
    nav.classList.remove('hidden');
    hamburger.classList.add('hidden');
    closeIcon.classList.add('hidden');
  } else {
    nav.classList.add('hidden');
    hamburger.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }
};
showingNav();

hamburger.addEventListener('click', switchingMenu);
closeIcon.addEventListener('click', switchingMenu);
list.addEventListener('click', switchingMenu);
window.addEventListener('resize', showingNav);
