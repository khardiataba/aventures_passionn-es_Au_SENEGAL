// Animation d'apparition au scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.region').forEach(region => {
  observer.observe(region);
});

// Formulaire : simple alerte (simulation)
document.querySelector('#contact form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Merci pour votre message et bienvenue à "Aventures passionnées au Sénégal", nous vous répondrons bientôt !');
  e.target.reset();
});
