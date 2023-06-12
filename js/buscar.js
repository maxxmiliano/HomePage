document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    var searchTerm = document.getElementById('searchInput').value;
    var imagePath = 'image/' + searchTerm + '.jpg'; // Constrói o caminho da imagem
  
    var imageElement = document.querySelector('.image-list img'); // Seleciona a primeira imagem da lista
    if (imageElement) {
      imageElement.src = imagePath;
      imageElement.alt = searchTerm; // Define o termo de pesquisa como o texto alternativo da imagem
  
      // Adiciona um listener de clique para abrir a modal quando a imagem for clicada
      imageElement.addEventListener('click', function() {
        var modal = document.getElementById('myModal');
        var modalImage = document.getElementById('modalImage');
        var caption = document.getElementById('caption');
  
        modal.style.display = 'block'; // Exibe a modal
        modalImage.src = this.src; // Define a imagem da modal
        caption.innerHTML = this.alt; // Define o texto de legenda da modal
      });
    }
  });
  
  // Adiciona um listener de clique para fechar a modal
  document.getElementById('closeModal').addEventListener('click', function() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none'; // Esconde a modal
  });
  

