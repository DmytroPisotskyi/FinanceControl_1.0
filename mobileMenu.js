

const mobileMenu = document.querySelector('.mobile-menu');
const buttonHeader = document.querySelector('.header__button');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const mobileMenuOpen = document.querySelector('.mobile-menu-open');

function openMobileMenu() {
    mobileMenu.classList.add('mobile-menu-open');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('mobile-menu-open');
}


buttonHeader.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);