const headerCont = document.querySelector('#header__container-js');
const headerLogo = document.querySelector('#header__logo-js');
const burgerBtn = document.querySelector('#burger-btn-js');
const mobNavLinks = document.querySelectorAll('#mob-menu__nav-js a');

const toggleBodyScroll = shouldBlock => {
  document.body.classList.toggle('no-scroll', shouldBlock);
  document.body.classList.toggle('blur-bg', shouldBlock);
};

const closeMenu = () => {
  headerCont.classList.remove('opened');
  toggleBodyScroll(false);

  const iconMenu = document.querySelector('.icon-burger use');
  iconMenu.setAttribute('href', '/sprite.svg#icon-burger-btn');

  document.removeEventListener('click', handleOutsideClick);
};

const handleOutsideClick = event => {
  const isClickInsideMenu = headerCont.contains(event.target);
  const isClickOnLogoOrBurger =
    headerLogo.contains(event.target) || burgerBtn.contains(event.target);
  const isClickOnMobNavLinks = [...mobNavLinks].some(
    link => link === event.target
  );

  if (isClickOnMobNavLinks || (!isClickOnLogoOrBurger && !isClickInsideMenu)) {
    closeMenu();
  }
};

burgerBtn.addEventListener('click', () => {
  headerCont.classList.toggle('opened');
  const isOpened = headerCont.classList.contains('opened');
  toggleBodyScroll(isOpened);

  const iconMenu = document.querySelector('.icon-burger use');
  iconMenu.setAttribute(
    'href',
    isOpened ? '/sprite.svg#icon-close-btn' : '/sprite.svg#icon-burger-btn'
  );

  if (isOpened) {
    document.addEventListener('click', handleOutsideClick);
  } else {
    document.removeEventListener('click', handleOutsideClick);
  }
});
