document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    var searchTerm = document.getElementById('searchInput').value;
    var imagePath = 'image/' + searchTerm + '.jpg'; // Constrói o caminho da imagem

    // Lógica adicional, como verificação de existência da imagem, manipulação de erros, etc.

    // Exemplo de ação para atualizar uma imagem existente
    var imageElement = document.getElementById('myImage');
    if (imageElement) {
        imageElement.src = imagePath;
    }

    // Lógica adicional após a atualização da imagem, se necessário
});