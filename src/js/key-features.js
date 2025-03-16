const keyFeaturesButtons = document.querySelectorAll('.key-features__button');

keyFeaturesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contentId = button.dataset.content;
    const content = document.getElementById(contentId);

    // Закриваються всі відкриті блоки
    document.querySelectorAll('.key-features__text.active').forEach(item => {
      if (item !== content) {
        item.classList.remove('active');
      }
    });

    content.classList.toggle('active');
  });
});
