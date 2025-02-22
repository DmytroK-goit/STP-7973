const scrollButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollButton.classList.remove('hidden');
  } else {
    scrollButton.classList.add('hidden');
  }
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
