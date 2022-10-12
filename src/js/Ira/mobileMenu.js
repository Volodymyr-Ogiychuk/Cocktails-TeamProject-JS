(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    if (!isMenuOpen) {
      closeMenuBtn.classList.remove('is-hiden-btn');
      openMenuBtn.classList.add('is-hiden-btn');
    } else {
      openMenuBtn.classList.remove('is-hiden-btn');
      closeMenuBtn.classList.add('is-hiden-btn');
    }

    // const scrollLockMethod = !isMenuOpen
    //   ? 'disableBodyScroll'
    //   : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 1200px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('is-hiden-btn');
    closeMenuBtn.classList.add('is-hiden-btn');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();
