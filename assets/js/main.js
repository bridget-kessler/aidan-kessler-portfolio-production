const images = document.querySelectorAll('img');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const img = entry.target;

    const reveal = () => {
      img.classList.add('visible');
      obs.unobserve(img);
    };

    if (img.complete) {
      reveal();
    } else {
      img.addEventListener('load', reveal, { once: true });
    }
  });
});

images.forEach(img => observer.observe(img));