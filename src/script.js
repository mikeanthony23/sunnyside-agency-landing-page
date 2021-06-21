'use strict';

const burgerMenuBtn = document.querySelector('.burger-btn-container');
const modalNavLinks = document.querySelector('.nav-links-wrapper');
const overlay = document.querySelector('.overlay');

const controlOpacity = function () {
  overlay.classList.contains('show-overlay')
    ? (burgerMenuBtn.style.opacity = 0.5)
    : (burgerMenuBtn.style.opacity = 1);
};

const toggle = function (className1, className2) {
  overlay.classList.toggle(className1);
  modalNavLinks.classList.toggle(className2);
};

const openBurgerMenu = function () {
  burgerMenuBtn.addEventListener('click', function () {
    toggle('show-overlay', 'hidden');
    controlOpacity();
  });
};
openBurgerMenu();

const closeNavLinks = function () {
  overlay.addEventListener('click', function () {
    toggle('show-overlay', 'hidden');
    controlOpacity();
  });
};
closeNavLinks();
