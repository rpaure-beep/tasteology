// Tasteology interactions

// Modal open/close for gallery images
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const galleryImgs = document.querySelectorAll('.gallery-img');
const closeBtn = document.querySelector('.close');

galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') modal.style.display = 'none';
});

// Log clicks for all card links (if any are added)
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    console.log('Card link clicked:', e.target);
  });
});
