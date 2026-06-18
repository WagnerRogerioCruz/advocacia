
const slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
  slides[index].classList.remove('active');

  index = (index + 1) % slides.length;

  slides[index].classList.add('active');
}

// troca a cada 5 segundos
setInterval(nextSlide, 5000);
