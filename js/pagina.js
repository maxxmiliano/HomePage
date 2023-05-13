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




// Selecione todas as imagens com a classe "img2"
const imgs2 = document.querySelectorAll(".img2 img");

// Selecione a imagem com a classe "select-img"
const selectImg = document.querySelector(".select-img img");

// Adicione um evento de clique a todas as imagens com a classe "img2"
imgs2.forEach((img) => {
  img.addEventListener("click", () => {
    // Quando uma imagem for clicada, atribua o caminho da imagem clicada ao atributo "src" da imagem com a classe "select-img"
    selectImg.src = img.src;
  });
});
