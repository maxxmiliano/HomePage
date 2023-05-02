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