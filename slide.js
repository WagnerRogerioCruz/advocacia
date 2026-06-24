const slides = document.querySelectorAll('.slide');

if (slides.length > 0) {
  let index = 0;

  // Garante o primeiro ativo de imediato
  slides[0].classList.add('active');

  // FUNÇÃO AUXILIAR: Transforma o data-background em imagem real de fundo
  function carregarImagem(slide) {
    if (slide.dataset.background) {
      slide.style.backgroundImage = `url('${slide.dataset.background}')`;
      delete slide.dataset.background; // Limpa o atributo após carregar
    }
  }

  // ESTRATÉGIA MASTER: Só baixa as outras imagens após o site estar 100% carregado
  window.addEventListener('load', () => {
    slides.forEach((slide, i) => {
      if (i > 0) carregarImagem(slide);
    });
  });

  function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }

  // Troca a cada 5 segundos
  setInterval(nextSlide, 5000);
}