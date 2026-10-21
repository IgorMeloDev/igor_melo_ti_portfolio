// Navegação mobile acessível
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    mainNav.classList.toggle('is-open', !isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      mainNav.classList.remove('is-open');
    });
  });
}

// Galeria: abre uma imagem em uma janela ampliada
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const lightboxCaption = lightbox?.querySelector('p');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

if (lightbox && lightboxImage && lightboxCaption && lightboxClose) {
  document.querySelectorAll('.artwork-button').forEach((button) => {
    button.addEventListener('click', () => {
      const imagePath = button.getAttribute('data-image');
      const caption = button.getAttribute('data-caption') || 'Peça do portfólio';
      if (!imagePath) return;
      lightboxImage.src = imagePath;
      lightboxImage.alt = caption;
      lightboxCaption.textContent = caption;
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
    });
  });

  lightboxClose.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('close', () => {
    lightboxImage.removeAttribute('src');
  });
}
