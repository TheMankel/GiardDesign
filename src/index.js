'use strict';

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-overlay');
const expandBtn = document.getElementById('expand');
const gallery = document.getElementById('gallery');
const imagesData = [
  '/assets/images/Gallery_2.webp',
  '/assets/images/Gallery_1.webp',
  '/assets/images/Gallery_3.webp',
  '/assets/images/Gallery_4.webp',
  '/assets/images/Gallery_5.webp',
  '/assets/images/Gallery_6.webp',
  '/assets/images/Gallery_7.webp',
  '/assets/images/Gallery_8.webp',
  '/assets/images/Gallery_9.webp',
];

function toggleMobileMenu() {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.classList.toggle('overlay');
}

hamburger.addEventListener('click', toggleMobileMenu);

function handleMenuClick(e) {
  if (e.target.tagName === 'A') {
    toggleMobileMenu();
  }
}

menu.addEventListener('click', handleMenuClick);

function toggleGallery() {
  gallery.classList.toggle('open');

  if (gallery.classList.contains('open')) {
    imagesData.forEach((imageSrc) => {
      const imgElement = document.createElement('img');
      imgElement.className = 'cursor-pointer';
      imgElement.src = imageSrc;
      imgElement.alt = 'Hero slider';
      gallery.appendChild(imgElement);
    });
  } else {
    const imagesToRemove = 9;
    const images = gallery.querySelectorAll('img');
    for (
      let i = images.length - 1;
      i >= Math.max(images.length - imagesToRemove, 0);
      i--
    ) {
      gallery.removeChild(images[i]);
    }
  }
}

function toggleGalleryButton() {
  const textElement = expandBtn.querySelector('span');
  const svgIcon = expandBtn.querySelector('svg');
  expandBtn.classList.toggle('open');

  if (expandBtn.classList.contains('open')) {
    textElement.textContent = 'Zwiń';
    svgIcon.classList.add('rotate-180');
  } else {
    textElement.textContent = 'Rozwiń';
    svgIcon.classList.remove('rotate-180');
  }
}

function handleExpandClick() {
  toggleGallery();
  toggleGalleryButton();

  galleryObj.recalculate(true);

  const images = gallery.querySelectorAll('img');
  const targetImageIndex = images.length - 4;
  const targetImage = images[targetImageIndex];
  console.log(targetImageIndex);
  console.log(targetImage);
  targetImage.scrollIntoView({
    behavior: 'smooth',
  });
}

expandBtn.addEventListener('click', handleExpandClick);

new Swiper('.carousel', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '#left-slider-arrow',
    prevEl: '#right-slider-arrow',
  },
});

const galleryObj = new Macy({
  container: '#gallery',
  mobileFirst: false,
  columns: 3,
  breakAt: {
    425: 1,
    768: 2,
    1024: 3,
  },
  margin: {
    x: 43,
    y: 43,
  },
});
