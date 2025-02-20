document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.mob-menu-burg');
  const mobileMenu = document.querySelector('.mob-menu');
  const closeBtn = mobileMenu.querySelector('.mob-menu-cloth');
  const menuLinks = mobileMenu.querySelectorAll('.header-ul-mob a');

  const openMenu = () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  document.addEventListener('click', event => {
    if (!mobileMenu.contains(event.target) && !menuBtn.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
