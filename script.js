const items = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
  items.forEach(item => {
    const pos = item.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    }
  });
});
