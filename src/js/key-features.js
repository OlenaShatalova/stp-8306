const keyFeaturesButtons = document.querySelectorAll('.key-features__button');
const star = document.querySelector('.key-features__star');
const starBlock = document.querySelector('.star-block');
const firstItem = document.querySelector('.key-features__item');

console.log(star, starBlock);

keyFeaturesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.key-features__item');
    item.classList.toggle('openedBlock');
  });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          firstItem.classList.add('openedBlock');
        }, 1000);
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(starBlock);
