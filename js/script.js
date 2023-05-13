// selecionando as imagens
const thumbnails = document.querySelectorAll(".thumbnail");

// aqui a imagem principal
const selectImg = document.querySelector(".select-img img");

// adicionando um evento de clique para cada miniatura
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // mudando a imagem principal para a imagem da miniatura clicada
    selectImg.src = thumbnail.querySelector("img").src;
  });
});






