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


function filterMonth(month) {
  const items = document.querySelectorAll('.timeline-item');
  const buttons = document.querySelectorAll('.month-filter button');

  buttons.forEach(btn => btn.classList.remove('active'));

  event.target.classList.add('active');

  items.forEach(item => {
    if (month === 'all') {
      item.style.display = 'block';
    } else {
      if (item.dataset.month === month) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  });
}


const music = document.getElementById('gsMusic');
const musicSource = document.getElementById('musicSource');
const musicBtn = document.getElementById('music-control');
const playlist = document.getElementById('playlist');
const musicIcon = document.getElementById('music-icon');

let isPlaying = false;

// Listeyi Aç/Kapat ve Oynat/Durdur
musicBtn.addEventListener('click', (e) => {
    // Sağ tıkla listeyi aç, sol tıkla durdur yapabiliriz ama 
    // en kolayı: Butona basınca liste açılsın, müzik çalsın.
    if (playlist.style.display === 'block') {
        toggleMusic();
    } else {
        playlist.style.display = 'block';
        if (!isPlaying) toggleMusic();
    }
});

// Müziği çalma/durdurma
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicIcon.innerText = '🔇';
    } else {
        music.play();
        musicIcon.innerText = '🎵';
    }
    isPlaying = !isPlaying;
}

// Şarkı Değiştirme Fonksiyonu
function changeMusic(path, element) {
    // Aktif şarkı görselini güncelle
    document.querySelectorAll('.playlist-item').forEach(item => item.classList.remove('active-song'));
    element.classList.add('active-song');

    // Şarkıyı değiştir ve çal
    music.src = path;
    music.play();
    isPlaying = true;
    musicIcon.innerText = '🎵';
}

// Liste dışına tıklanırsa listeyi kapat
document.addEventListener('click', (e) => {
    if (!e.target.closest('.music-player-container')) {
        playlist.style.display = 'none';
    }
});
