// Selecione todos os links das tags <li> na lista
var links = document.querySelectorAll('#carros li a');

// Adicione um evento de clique a cada link
links.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Impedir que o link seja aberto imediatamente
    event.preventDefault();
    // Obtenha o URL do link clicado
    var url = this.href;
    // Abra a nova página
    window.open(url, '_blank');
  });
});