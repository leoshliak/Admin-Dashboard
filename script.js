
const menuBurger = document.querySelector('.menu-icon');
const aside = document.querySelector('aside');
const asideBackground = document.querySelector('.aside-background')

menuBurger.addEventListener('click', () =>{
  menuBurger.classList.toggle('active');
  aside.classList.toggle('show');
  asideBackground.classList.toggle('show');
});
