import spritePath from '../public/sprite.svg';
console.log(spritePath);

const headerCont = document.querySelector('#header__container-js');
const headerLogo = document.querySelector('#header__logo-js');
const burgerBtn = document.querySelector('#burger-btn-js');
const mobNavLinks = document.querySelectorAll('#mob-menu__nav-js a');

const toggleBodyScroll = shouldBlock => {
  if (shouldBlock) {
    document.body.classList.add('no-scroll');
    document.body.classList.add('blur-bg');
  } else {
    document.body.classList.remove('no-scroll');
    document.body.classList.remove('blur-bg');
  }
};

const closeMenu = () => {
  headerCont.classList.remove('opened');
  toggleBodyScroll(false);

  const iconMenu = document.querySelector('.icon-burger use');
  iconMenu.setAttribute('href', `${spritePath}#icon-burger-btn`);
  // iconMenu.;
};

burgerBtn.addEventListener('click', () => {
  headerCont.classList.toggle('opened');
  const isOpened = headerCont.classList.contains('opened');
  toggleBodyScroll(isOpened);

  const iconMenu = document.querySelector('.icon-burger use');
  if (iconMenu.getAttribute('href').includes('icon-burger-btn')) {
    iconMenu.setAttribute('href', '/sprite.svg#icon-close-btn');
  } else {
    iconMenu.setAttribute('href', '/sprite.svg#icon-burger-btn');
  }
});

document.addEventListener('click', event => {
  const isClickInsideMenu = headerCont.contains(event.target);

  const isClickOnLogoOrBurger =
    headerLogo.contains(event.target) || burgerBtn.contains(event.target);

  const isClickOnMobNavLinks = [...mobNavLinks].some(
    link => link === event.target
  );

  if (isClickOnMobNavLinks) {
    closeMenu();
    return;
  }

  if (!isClickOnLogoOrBurger && !isClickInsideMenu) {
    closeMenu();
  }
});
