// Scroll-reveal animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

// Contact form handler (demo — no backend)
function handleSubmit(e) {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Thank you. Your enquiry has been received.';
  e.target.reset();
  setTimeout(() => { msg.textContent = ''; }, 5000);
}

// Sticky header shadow on scroll
const header = document.getElementById('top') || document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.background = 'rgba(28, 28, 28, 0.97)';
  } else {
    header.style.background = 'rgba(28, 28, 28, 0.85)';
  }
}, { passive: true });
