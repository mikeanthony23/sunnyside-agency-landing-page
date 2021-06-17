const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');
const showMenu = document.querySelector('.show-burger-menu');
const overlayHidden = document.querySelector('.overlay-hidden');
const showOverlay = document.querySelector('.overlay-show');

const addOpacity = function () {
  showMenu.classList.contains('hidden')
    ? (burgerMenu.style.opacity = 1)
    : (burgerMenu.style.opacity = 0.5);
};

burgerMenu.addEventListener('click', function (e) {
  const btn = e.target.closest('.menu');
  if (!btn) return;
  showMenu.classList.toggle('hidden');
  overlayHidden.classList.add('overlay-show');
  if (showMenu.classList.contains('hidden'))
    overlayHidden.classList.toggle('overlay-show');
  addOpacity();
});

overlayHidden.addEventListener('click', function (e) {
  const btn = e.target;
  if (!btn) return;
  if (overlayHidden.classList.contains('overlay-show'))
    showMenu.classList.toggle('hidden');
  addOpacity();
});
