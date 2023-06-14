document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário
  var searchTerm = document.getElementById('searchInput').value;
  var imagePath = 'image/ford/' + searchTerm + '.jpg'; // Constrói o caminho da imagem

  var enlargedImage = document.getElementById('enlargedImage'); // Seleciona a div para a imagem ampliada
  var enlargedImageElement = enlargedImage.querySelector('img');

  enlargedImageElement.src = imagePath; // Define a imagem ampliada
  enlargedImage.style.display = 'block'; // Exibe a div da imagem ampliada

  // Adicione o código para fechar a imagem quando o botão de fechar for clicado
  const closeButton = document.getElementById('closeButton');
  closeButton.addEventListener('click', function() {
    enlargedImage.style.display = 'none';
  });
});



