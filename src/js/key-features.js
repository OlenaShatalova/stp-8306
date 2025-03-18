const keyFeaturesButtons = document.querySelectorAll('.key-features__button');

keyFeaturesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.key-features__item');

    item.classList.toggle('openedBlock');
  });
});
