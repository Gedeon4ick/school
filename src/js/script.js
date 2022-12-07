window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile__menu');
    const hamburger = document.querySelector('nav > .phone');
    const overlay = document.querySelector('.overlay');
    const menuLinks = document.querySelectorAll('nav > .link > li > a');

    function closeMenu() {
        document.querySelector('body').style.overflow = 'auto';
        menu.style.height = `0px`;
        menu.style.padding = '0';
        hamburger.classList.toggle('nav.phone-hamburger-active');
        if (hamburger.classList.contains('nav.phone-hamburger-active')) {
            hamburger.classList.toggle('nav.phone-hamburger-active');
        }
        overlay.classList.remove('overlay_active');
    }

    
  menuLinks.forEach(item => {
    item.addEventListener('click', () => {
      if (hamburger.classList.contains('nav.phone-hamburger-active')) {
        closeMenu();
      }
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay_active')) {
      closeMenu();
    }
  });


  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('nav.phone-hamburger-active');
    overlay.classList.toggle('overlay_active');

    if (hamburger.classList.contains('nav.phone-hamburger-active')) {
      document.querySelector('body').style.overflow = 'hidden';
      menu.style.paddingTop = '24px';
      menu.style.height = `${menu.scrollHeight + 48}px`;

    } else {
      closeMenu();
    }
    // menu.classList.toggle('mobile__menu-active');
  });

});