(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const logo = document.querySelector('.logo-one');
  const form = document.querySelector('.search-form');
  const teme = document.querySelector('.theme-switch');
  const box = document.querySelector('.flex-box');

  

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
    if (!isMenuOpen) {
      closeMenuBtn.classList.remove('is-hiden-btn');
      openMenuBtn.classList.add('is-hiden-btn');
    } 
    else {
      openMenuBtn.classList.remove('is-hiden-btn');
      closeMenuBtn.classList.add('is-hiden-btn');
    }

    if (!isMenuOpen & window.innerWidth <= 768) {
      logo.style.display = "none";
      teme.style.display = "flex";
      form.classList.add('show');
      box.style.flexDirection = "row-reverse";
      return
    } 
    else {
      logo.style.display = "flex";
      teme.style.display = "none";
      form.classList.remove('show');
      box.style.flexDirection = "row";
    }

    if (!isMenuOpen & window.innerWidth > 768 && window.innerWidth <= 1280) {
        form.style.display = "none";
        teme.style.display = "flex";
        
    } else{
      form.style.display = "flex";
      teme.style.display = "none";
     
    }
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
