// JavaScript для відкриття/закриття бургер-меню
const burgerButton = document.getElementById('burger-button');
const headerNav = document.getElementById('header-nav');

burgerButton.addEventListener('click', () => {
  headerNav.classList.toggle('header__nav--open');
});
