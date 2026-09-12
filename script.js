const revealItems = document.querySelectorAll('.intro-item, .book-row, .read-list div, .essay-row, .subject-grid article');

revealItems.forEach((item, index) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(10px)';
  item.style.transition = `opacity 450ms ease ${index * 45}ms, transform 450ms ease ${index * 45}ms`;
});

const revealVisibleItems = () => {
  revealItems.forEach((item) => {
    if (item.getBoundingClientRect().top < window.innerHeight * .92) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', revealVisibleItems, { passive: true });
revealVisibleItems();
