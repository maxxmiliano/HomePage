// Seleciona todas as imagens da galeria
var imagens = document.querySelectorAll(".image-list img");

// Adiciona um ouvinte de evento de clique a cada imagem
for (var i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("click", exibirImagem);
}

// Função para exibir a imagem em tamanho maior
function exibirImagem(event) {
  // Remove a imagem exibida anteriormente
  var divExistente = document.getElementById("imagem-maior");
  if (divExistente) {
    document.body.removeChild(divExistente);
  }

  // Seleciona a imagem clicada
  var imagem = event.target;

  // Cria um elemento de imagem para exibir a imagem em tamanho maior
  var imagemMaior = document.createElement("img");
  imagemMaior.src = imagem.src;
  imagemMaior.style.maxWidth = "80%";
  imagemMaior.style.maxHeight = "calc(80% - 60px)";

  // Cria um parágrafo para exibir o nome da imagem
  var nomeImagem = document.createElement("p");
  nomeImagem.textContent = imagem.alt;
  nomeImagem.style.color = "white";

  // Cria uma div para exibir a imagem maior em um fundo escuro
  var divEscura = document.createElement("div");
  divEscura.id = "imagem-maior";
  divEscura.style.position = "fixed";
  divEscura.style.top = "0";
  divEscura.style.left = "0";
  divEscura.style.width = "100%";
  divEscura.style.height = "100%";
  divEscura.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  divEscura.style.display = "flex";
  divEscura.style.justifyContent = "center";
  divEscura.style.alignItems = "center";

  // Adiciona a imagem maior à div
  divEscura.appendChild(imagemMaior);
  // Adiciona o nome da imagem à div
  divEscura.appendChild(nomeImagem);

  // Adiciona a div à página
  document.body.appendChild(divEscura);

  // Adiciona um ouvinte de evento de clique à div para fechá-la quando clicada
  divEscura.addEventListener("click", function() {
    document.body.removeChild(divEscura);
  });
}

for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
}

// Obter o botão de fechamento e adicionar um evento de clique
var closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});