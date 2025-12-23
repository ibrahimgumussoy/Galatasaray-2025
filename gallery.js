document.addEventListener("DOMContentLoaded", () => {

  const contents = document.querySelectorAll('.content');
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  let images = [];
  let index = 0;

  contents.forEach(content => {

    // YouTube butonuna tıklanınca galeri açılmasın
    const ytBtn = content.querySelector('.yt-btn');
    if (ytBtn) {
      ytBtn.addEventListener('click', e => e.stopPropagation());
    }

    content.addEventListener('click', () => {
      const data = content.getAttribute('data-images');
      if (!data) return;

      images = data.split(',');
      index = 0;

      modalImg.src = images[index];
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // scroll kilitle
    });
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    modalImg.src = images[index];
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    modalImg.src = images[index];
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

});
