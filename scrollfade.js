const observerOptions = {
  root: null, // viewport
  threshold: 0.5 // trigger when 40% visible
};  

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // optional if you want it to fade out
    }
  });
}, observerOptions);

// Observe all elements with class 'fade'
const targets = document.querySelectorAll('.fade');
targets.forEach(target => observer.observe(target));



