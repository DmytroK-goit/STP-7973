document.addEventListener('DOMContentLoaded', () => {
  const cookiesBlock = document.querySelector('.cookies');
  const acceptBtn = cookiesBlock.querySelector('button:last-child');
  const declineBtn = cookiesBlock.querySelector('button:first-child');

  const blockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const allowScroll = () => {
    document.body.style.overflow = '';
  };

  if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
      cookiesBlock.classList.add('active');
      blockScroll();
    }, 500);
  }

  const hideCookiesBanner = () => {
    cookiesBlock.classList.remove('active');
    allowScroll();
    localStorage.setItem('cookiesAccepted', 'true');
  };

  acceptBtn.addEventListener('click', hideCookiesBanner);
  declineBtn.addEventListener('click', hideCookiesBanner);
});
