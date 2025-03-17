const keyFeaturesButtons = document.querySelectorAll('.key-features__button');
const blueBlock = document.querySelector('.key-features__blue-block');

keyFeaturesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contentId = button.dataset.content;
    const content = document.getElementById(contentId);

    // Закриваємо всі відкриті блоки
    document.querySelectorAll('.key-features__text.active').forEach(item => {
      if (item !== content) {
        item.classList.remove('active');
        item.parentElement.querySelector('.key-features__button').style.height =
          '98px';
      }
    });

    if (content.classList.contains('active')) {
      content.classList.remove('active');
      button.style.height = '98px';
      blueBlock.style.height = '816px'; // Повертаємо початкову висоту синього блоку
    } else {
      content.classList.add('active');
      button.style.height = '208px';
      blueBlock.style.height = '1724px'; // Змінюємо висоту синього блоку
    }
  });
});
