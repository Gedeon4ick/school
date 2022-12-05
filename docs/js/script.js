window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile__menu');
    const hamburger = document.querySelector('.header__menu-hamburger');
    const overlay = document.querySelector('.menu__overlay');
    const menuLinks = document.querySelectorAll('.mobile__menu_links > li > a')

    function closeMenu() {
        document.querySelector('body').style.overflow = 'auto';
        menu.style.height = `0px`;
        menu.style.padding = '0';
        humburger.classList.toggle('header__menu-hamburger-active');
        if (hamburger.classList.contains('header__menu-hamburger-active')) {
            hamburger.classList.toggle('header__menu-hamburger-active')
        }
        overlay.classList.remove('menu__overlay_active')
    }

})