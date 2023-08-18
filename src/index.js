'use strict';

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-overlay');
const sliderNavigation = document.getElementById('slider-nav');

function toggleMobileMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.classList.toggle('overlay');
}

hamburger.addEventListener('click', toggleMobileMenu);

function handleSlider(e) {
  const clickedElement = e.target;

  if (clickedElement.closest('#left-slider-arrow')) {
    console.log('left');
  } else if (clickedElement.closest('#right-slider-arrow')) {
    console.log('right');
  }
}

sliderNavigation.addEventListener('click', handleSlider);
