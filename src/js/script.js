window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile__menu');
    const humburger = document.querySelector('.humburger');
    const overlay = document.querySelector('.overlay');
    const menuLinks = document.querySelectorAll('nav > .link > li > a');

    function closeMenu() {
        document.querySelector('body').style.overflow = 'auto';
        menu.style.height = `0px`;
        menu.style.padding = '0';
        humburger.classList.toggle('humburger-active');
        if (humburger.classList.contains('humburger-active')) {
          humburger.classList.toggle('humburger-active');
        }
        overlay.classList.remove('overlay_active');
    }

    
  menuLinks.forEach(item => {
    item.addEventListener('click', () => {
      if (humburger.classList.contains('humburger-active')) {
        closeMenu();
      }
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay_active')) {
      closeMenu();
    }
  });


  humburger.addEventListener('click', () => {
    humburger.classList.toggle('humburger-active');
    overlay.classList.toggle('overlay_active');

    if (humburger.classList.contains('humburger-active')) {
      document.querySelector('body').style.overflow = 'hidden';
      menu.style.paddingTop = '24px';
      menu.style.height = `${menu.scrollHeight + 48}px`;

    } else {
      closeMenu();
    }
    // menu.classList.toggle('mobile__menu-active');
  });

});