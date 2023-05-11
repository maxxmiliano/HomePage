

// Seleciona todas as imagens da galeria
var imagens = document.querySelectorAll(".image-list img");

// Adiciona um ouvinte de evento de clique a cada imagem
for (var i = 0; i < imagens.length; i++) {
  imagens[i].addEventListener("click", exibirImagem);
}

// Função para exibir a imagem em tamanho maior
function exibirImagem(event) {
  // Seleciona a imagem clicada
  var imagem = event.target;

  // Cria um elemento de imagem para exibir a imagem em tamanho maior
  /*var imagemMaior = document.createElement("img");
  imagemMaior.src = imagem.src;*/

  // Define o tamanho da imagem maior para preencher 80% da largura da tela
  imagemMaior.style.width = "50%";
  imagemMaior.style.height = "auto";

  // Cria uma div para exibir a imagem maior em um fundo escuro
  var divEscura = document.createElement("div");
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

  // Adiciona a div à página
  document.body.appendChild(divEscura);

  // Adiciona um ouvinte de evento de clique à div para fechá-la quando clicada
  divEscura.addEventListener("click", function() {
    document.body.removeChild(divEscura);
  });
}

// Get the modal
var modal = document.getElementById("myModal");

// Obter a imagem e inseri-la dentro do modal
var images = document.querySelectorAll(".image-list img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (var i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
}

// elemento que fecha modal
var span = document.getElementsByClassName("close")[0];

// quando o usuario clicar fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}