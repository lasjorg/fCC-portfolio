(function () {

  const pageLoad = document.querySelector('.page-load');
  const burgerContainer = document.querySelector('.burger-container');
  const burger = document.querySelector('.burger-icon');
  const navList = document.querySelector('.js-nav-trigger');

  // Silly page loading spinner
  const pageFade = () => {
    setTimeout(() => {
      pageLoad.classList.remove('page-load');
      pageLoad.style.display = "none";
    }, 300);
  }

  const triggerMobileNav = (e) => {
    console.log(e.target);
    if (e.target === burger || e.target === burgerContainer) {
      navList.classList.toggle('show');
      burgerContainer.classList.toggle('toggled');
    } else {
      navList.classList.remove('show');
      burgerContainer.classList.remove('toggled');
      }
  }

  window.addEventListener('load', pageFade);
  window.addEventListener('click', triggerMobileNav);
})();