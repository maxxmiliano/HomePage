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

$(document).ready(function() {
  $('.image-list img').click(function() {
    var src = $(this).attr('src');
    $('body').append('<div class="modal"><img src="'+src+'"><div class="close">X</div></div>');
    $('.modal').fadeIn();
    $('.close').click(function() {
      $('.modal').fadeOut(function() {
        $(this).remove();
      });
    });
  });
});