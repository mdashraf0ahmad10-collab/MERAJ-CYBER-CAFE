// LOADER
window.addEventListener('load', () => {
  document.querySelector('.loader').classList.add('hidden');
});

// SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// PARALLAX EFFECT
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  document.querySelector('.hero-bg').style.transform = 
    `translateY(${scrolled * 0.5}px)`;
  
  // NAVBAR BACKGROUND
  const header = document.querySelector('header');
  if (scrolled > 100) {
    header.style.background = 'rgba(15,26,45,0.98)';
  } else {
    header.style.background = 'rgba(30,60,114,0.95)';
  }
});

// ANIMATION ON SCROLL
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, observerOptions);

// OBSERVE ALL ANIMATED ELEMENTS
document.querySelectorAll('.service-card, .price-card').forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// FORM SUBMISSION
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('आपका संदेश भेज दिया गया! हम जल्द संपर्क करेंगे 🚀');
  e.target.reset();
});

// PARTICLE EFFECT (OPTIONAL)
function createParticles() {
  const particles = document.createElement('canvas');
  particles.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:999;';
  document.body.appendChild(particles);
}
createParticles();
