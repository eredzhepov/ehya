$(document).ready(function () {
  var menuButton = document.querySelector(".header-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".header-menu")
      .classList.toggle("header-menu--visible");
  });
  
  $("img.lazyload").lazyload();


// обработка форм

$(".modal__form").validate({
  errorClass: "invalid__modal",
  messages: {
    login: {
      required: "Введите логин",
      minlength: "Больше 2 символов"
    },
    pass: {
      required: "Введите пароль",
      minlength: "Больше 4 символов"
    },
} 
}); 

var modalButton = $("[data-togle=modal]");
var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);


  function openModal() {
    var  modalOverlay = $(".modal__overlay");
    var  modalDialog = $(".modal__dialog");
    var  modalDialog = $(".modal__dialog");
  
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault()
    var  modalOverlay = $(".modal__overlay");
    var  modalDialog = $(".modal__dialog");
    var  modalDialog = $(".modal__dialog");
  
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
  }

$(document).keydown(function(event) { 
  if (event.keyCode === 27) { 
    closeModal(event);
  }

});


});
