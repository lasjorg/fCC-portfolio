document.addEventListener('DOMContentLoaded', () => {
  const pageLoad = document.querySelector('.page-load');
  const menuIconContainer = document.querySelector('.menu-icon-container');
  const menuIcon = document.querySelector('.menu-icon-container__icon');
  const navList = document.querySelector('.js-nav-trigger');
  const emailForm = document.querySelector('form');

  // Silly page loading spinner
  const pageFade = () => {
    setTimeout(() => {
      pageLoad.classList.remove('page-load');
      pageLoad.style.display = 'none';
    }, 300);
  };

  const triggerMobileNav = ({ target }) => {
    const clickTarget = target;
    if (clickTarget === menuIcon || clickTarget === menuIconContainer) {
      navList.classList.toggle('show');
      menuIconContainer.classList.toggle('toggled');
    } else {
      navList.classList.remove('show');
      menuIconContainer.classList.remove('toggled');
    }
  };

  emailForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const modal = document.querySelector('.dialog');
    const closeButton = document.querySelector('dialog svg');

    modal.showModal ? modal.showModal() : modal.setAttribute('open', true);

    closeButton.addEventListener('click', () => {
      modal.close ? modal.close() : modal.removeAttribute('open');
    });
    emailForm.reset();
  });

  window.addEventListener('load', pageFade);
  window.addEventListener('click', triggerMobileNav);
});
