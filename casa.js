// Seleciona o contêiner da lista
var caixa3 = document.querySelector(".caixa3");

// Seleciona todos os itens da lista
var slides = document.querySelectorAll(".slider-item");

// Define o índice do slide atual
var index = 0;

// Define o intervalo em milissegundos (1000 ms = 1 s)
var interval = 3000;

// Cria uma função para mudar o slide
function changeSlide() {
  // Desloca o contêiner da lista para a esquerda
  caixa3.style.transform = "translateX(-" + index * 100 + "%)";

  // Incrementa o índice, ou volta para zero se for o último
  index = (index + 1) % slides.length;
}

// Chama a função a cada intervalo de tempo
setInterval(changeSlide, interval);
