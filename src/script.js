'use strict';

const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const showMenu = document.querySelector('.show-burger-menu');

burgerMenu.addEventListener('click', function (e) {
  const btn = e.target.closest('.menu');
  if (!btn) return;

  showMenu.classList.toggle('hidden');

  showMenu.classList.contains('hidden')
    ? (burgerMenu.style.opacity = 1)
    : (burgerMenu.style.opacity = 0.5);
});
