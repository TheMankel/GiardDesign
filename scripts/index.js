'use strict';

const carouselInstance = new Swiper('#carousel', {
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

class MobileMenu {
  constructor(hamburger, menu) {
    this.hamburger = hamburger;
    this.menu = menu;
    this.hamburger.addEventListener('click', this.toggleMobileMenu.bind(this));
    this.menu.addEventListener('click', this.handleMenuClick.bind(this));
  }

  toggleMobileMenu() {
    this.hamburger.classList.toggle('open');
    this.menu.classList.toggle('open');
    document.body.classList.toggle('overlay');
  }

  handleMenuClick(e) {
    if (e.target.tagName === 'A') {
      this.toggleMobileMenu();
    }
  }
}

const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-overlay');
const mobileMenu = new MobileMenu(hamburger, menu);

class ImageGallery {
  constructor(gallery, expandBtn, modal, macyInstance) {
    this.gallery = gallery;
    this.expandBtn = expandBtn;
    this.modal = modal;
    this.slideshow = null;
    this.images = this.gallery.querySelectorAll('img');
    this.expandBtn.addEventListener('click', this.handleExpandClick.bind(this));
    this.gallery.addEventListener('click', this.toggleModal.bind(this));
    this.modal.addEventListener('click', this.toggleModal.bind(this));
    this.macyInstance = macyInstance;
    this.targetImageIndices = {
      open: 15,
      closed: 6,
    };
    this.textElements = {
      open: 'Zwiń',
      closed: 'Rozwiń',
    };
    this.svgIconClass = 'rotate-180';
  }

  toggleModal(e) {
    if (e.target.tagName === 'IMG' && !this.modal.classList.contains('open')) {
      this.modal.classList.add('open');
      document.body.classList.add('overlay');

      const indexToSlide = Array.from(this.images).indexOf(e.target);

      if (!this.slideshow) this.initializeSlideshow();
      if (indexToSlide !== -1) this.slideshow.slideToLoop(indexToSlide);
    } else if (e.target === this.modal || e.target.closest('#modal-close')) {
      this.modal.classList.remove('open');
      document.body.classList.remove('overlay');
    }
  }

  initializeSlideshow() {
    this.slideshow = new Swiper('#slideshow', {
      loop: true,
      spaceBetween: 0,
      effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  toggleGallery() {
    this.gallery.classList.toggle('open');
    for (let i = this.images.length - 9; i < this.images.length; i++) {
      this.images[i].classList.toggle('hidden');
    }
    this.macyInstance.recalculate(true, true);

    const targetImageIndex = this.gallery.classList.contains('open')
      ? this.targetImageIndices.open
      : this.targetImageIndices.closed;

    const targetImage = this.images[targetImageIndex];
    targetImage.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }

  toggleGalleryButton() {
    this.expandBtn.classList.toggle('open');
    const textElement = this.expandBtn.querySelector('span');
    const svgIcon = this.expandBtn.querySelector('svg');

    textElement.textContent = this.expandBtn.classList.contains('open')
      ? this.textElements.open
      : this.textElements.closed;

    svgIcon.classList.toggle(this.svgIconClass);
  }

  handleExpandClick() {
    this.toggleGalleryButton();
    this.toggleGallery();
  }
}

const gallery = document.getElementById('gallery');
const expandBtn = document.getElementById('expand');
const modal = document.getElementById('modal');
const macyInstance = new Macy({
  container: '#gallery',
  mobileFirst: false,
  useContainerForBreakpoints: true,
  columns: 3,
  breakAt: {
    426: 1,
    769: 2,
    1025: 3,
  },
  margin: {
    x: 43,
    y: 43,
  },
});
const imageGallery = new ImageGallery(gallery, expandBtn, modal, macyInstance);

AOS.init({
  once: false,
  duration: 500,
});
