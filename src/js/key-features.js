const keyFeaturesButtons = document.querySelectorAll('.key-features__button');
const blueBlock = document.querySelector('.key-features__blue-block');

keyFeaturesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contentId = button.dataset.content;
    const content = document.getElementById(contentId);
    const isActive = content.classList.contains('active');

    // Close all other items
    document.querySelectorAll('.key-features__text.active').forEach(item => {
      if (item !== content) {
        item.classList.remove('active');
        item.previousElementSibling.style.height = '98px';
      }
    });

    // Toggle current item
    if (isActive) {
      content.classList.remove('active');
      button.style.height = '98px';
      blueBlock.style.height = '816px';
    } else {
      content.classList.add('active');
      button.style.height = '208px';
      blueBlock.style.height = '1724px';
    }
  });
});
