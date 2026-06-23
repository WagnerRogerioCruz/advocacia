const slides = document.querySelectorAll('.slide');

// GUARD CLAUSE: Protege o site. Se não houver slider na página, o script para aqui e não quebra o resto do JS.
if (slides.length > 0) {
  let index = 0;

  // GARANTIA DE ESTADO: Garante que o primeiro slide comece ativo imediatamente
  slides[0].classList.add('active');

  function nextSlide() {
    // Remove a classe do slide atual
    slides[index].classList.remove('active');

    // Avança o índice de forma circular (sua lógica excelente!)
    index = (index + 1) % slides.length;

    // Adiciona a classe ao próximo slide
    slides[index].classList.add('active');
  }

  // Troca a cada 5 segundos
  setInterval(nextSlide, 5000);
}