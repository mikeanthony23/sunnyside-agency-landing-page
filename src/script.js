'use strict';

// navigation menu selectors
const burgerMenuBtn = document.querySelector('.burger-btn-container');
const modalNavLinks = document.querySelector('.modal-nav-links');
const overlay = document.querySelector('.overlay');

const aboutSection = document.querySelector('.about-content');
const aboutSectionChild = document.querySelector(
  '.about-transform-image-mobile'
);

// navigation menu functionality
const controlOpacity = function () {
  overlay.classList.contains('show-overlay')
    ? (burgerMenuBtn.style.opacity = 0.5)
    : (burgerMenuBtn.style.opacity = 1);
};

const openBurgerMenu = function () {
  burgerMenuBtn.addEventListener('click', function () {
    overlay.classList.toggle('show-overlay');
    modalNavLinks.classList.toggle('hidden');
    controlOpacity();
  });
};
openBurgerMenu();

const closeNavLinks = function () {
  overlay.addEventListener('click', function () {
    modalNavLinks.classList.toggle('hidden');
    overlay.classList.toggle('show-overlay');
    controlOpacity();
  });
};
closeNavLinks();

const renderDesktopImage = function () {};
renderDesktopImage();
