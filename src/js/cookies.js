document.addEventListener('DOMContentLoaded', () => {
  const cookiesBlock = document.querySelector('.cookies');
  const acceptBtn = cookiesBlock.querySelector('button:last-child');
  const declineBtn = cookiesBlock.querySelector('button:first-child');

  setTimeout(() => {
    cookiesBlock.classList.add('active');
  }, 1000);

  acceptBtn.addEventListener('click', () => {
    cookiesBlock.classList.remove('active');
  });

  declineBtn.addEventListener('click', () => {
    cookiesBlock.classList.remove('active');
  });
});
