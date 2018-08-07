(function () {

  const nav = document.querySelector('#nav-bar');
  const header = document.querySelector('.header');
  const pageLoad = document.querySelector('.page-load');
  const burgerContainer = document.querySelector('.burger-container');
  const burger = document.querySelector('.burger-icon');
  const mobileNavMenu = document.querySelector('#mobile-nav');
  let = lastScrollY = 0, ticking = false;
  
  // https://www.html5rocks.com/en/tutorials/speed/animations/#debouncing-scroll-events
  /**
   * Callback for our scroll event - just
   * keeps track of the last scroll value
   */
  const onScroll = () => {
    lastScrollY = window.scrollY;
    requestTick();
  }

  /**
   * Calls rAF if it's not already
   * been done already
   */
  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(addClassOnScroll);
      ticking = true;
    }
  }
  // Change header appearance based on scroll position
  const addClassOnScroll = () => {
    if (window.scrollY > 80) {
      header.classList.add('bg-blue');
      nav.classList.add('nav-has-scroll');
    } else if (window.scrollY < 80) {
      header.classList.remove('bg-blue');
      nav.classList.remove('nav-has-scroll');
    }
    // allow further rAFs to be called
    ticking = false;
  }

  // Silly page loading spinner
  const pageFade = () => {
    setTimeout(() => {
      pageLoad.classList.remove('page-load');
      pageLoad.style.display = "none";
    }, 300);
  }

  // Mobile nav
  let isToggled = false;
  const triggerMobileNav = (e) => {
    // Toggle mobile menu on or off
    // If the menu is toggled on, clicking anywhere will close it
    if ( (e.target === burger || e.target === burgerContainer) && !isToggled) {
      mobileNavMenu.classList.add('show');
      isToggled = true;
    } else if (isToggled){
      mobileNavMenu.classList.remove('show');
      isToggled = false;
    }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('load', pageFade);
  window.addEventListener('click', triggerMobileNav);
})();