'use strict';

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-overlay');

function toggleMobileMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.classList.toggle('overlay');
}

hamburger.addEventListener('click', toggleMobileMenu);
