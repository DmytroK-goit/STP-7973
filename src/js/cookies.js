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

  setTimeout(() => {
    cookiesBlock.classList.add('active');
    blockScroll();
  }, 500);

  acceptBtn.addEventListener('click', () => {
    cookiesBlock.classList.remove('active');
    allowScroll();
  });

  declineBtn.addEventListener('click', () => {
    cookiesBlock.classList.remove('active');
    allowScroll();
  });
});
