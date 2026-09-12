const revealItems = document.querySelectorAll('.directory-card, .reading-item, .book-card');

const revealOnScroll = () => {
  revealItems.forEach((item, index) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight * 0.88) {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
      item.style.transitionDelay = `${index * 70}ms`;
    }
  });
};

revealItems.forEach((item) => {
  item.style.opacity = '0';
  item.style.transform = 'translateY(12px)';
  item.style.transition = 'opacity 500ms ease, transform 500ms ease';
});

window.addEventListener('scroll', revealOnScroll, { passive: true });
revealOnScroll();
