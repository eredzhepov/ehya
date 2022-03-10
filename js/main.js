$(document).ready(function () {
 if (window.screen.width <= 768 ) {
  // Resolution is 1024x768 or above
  
 $("a.to-top-mobile").on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        });
} else if (window.screen.width > 768) {
  $("a.to-top").on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        });
}

$('a[href^="#collection"]').on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        });
$('a[href^="#trends"]').on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        });
$('a[href^="#review"]').on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        });
$('a[href^="#contacts"]').on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
        });
  var menuButton = document.querySelector(".header-button");
  var menuClose = document.querySelector(".header__close");
  var menuButer = document.querySelector(".header-button__line--hide");
  var closeMenuMob = document.querySelector(".header-nav__close");
  menuButton.addEventListener("click", function () {
       $(".header-menu").toggleClass("header-menu--visible")
       $(menuButton).toggleClass("activee")
       
     })

  closeMenuMob.addEventListener("click", function () {
    $(".header-menu").toggleClass("header-menu--visible");
      
    $(menuButton).toggleClass("activee");
  });
  var tabsItem = $(".trends__item");
  var contentItem = $(".trends-container");
  tabsItem.on("click", function(event){
    var activeContent = $(this).attr("data-target");
    $(tabsItem).removeClass('trends__item--active')
    $(contentItem).removeClass('trends-container--active')
    $(activeContent).addClass('trends-container--active')
    $(this).addClass('trends__item--active')
    
  } )
  // AOS.init();
  
  $("img.lazyload").lazyload();

  var mySwiper = new Swiper('.reviews__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

keyboard: {
    enabled: true,
  },
   autoplay: {
    delay: 7000,
  },

});
 var historySlider = new Swiper('.history-slider', {
  // Optional parameters
  direction: 'horizontal',
  
  
navigation: {
    nextEl: '.history__navigation-prev',
    prevEl: '.history__navigation-next',
    disabledClass: 'disabled',
  },
})


$( ".reviews__slider" )
  .mouseout(function() {
    mySwiper.autoplay.start();
  })
  .mouseover(function() {
    mySwiper.autoplay.stop(); 
  });
 

// обработка форм
$(".subscribe-form").validate({
  errorClass: "invalid",
  messages: {
    email: {
      required: "Введите email",
      email: "Введите корректный адрес name@domain.com",
    },
} 
}); 
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
    $(".header-menu").toggleClass("header-menu--visible");
      
    $(menuButton).toggleClass("activee");
  }

});
// закрытие окна по клику вне блока
$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal__dialog"); // тут указываем ID/class элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			closeModal(e); // скрываем его
		}
  });
  
// if($(".header-menu").classList.contains('header-menu--visible')) {
//   alert(1)
// $(document).mouseup(function (e){ // событие клика по веб-документу
// 		var headerMenu = $(".header-menu"); // тут указываем ID/class элемента
// 		if (!headerMenu.is(e.target) // если клик был не по нашему блоку
// 		    && headerMenu.has(e.target).length === 0) { // и не по его дочерним элементам
			
//   $(".header-menu").toggleClass("header-menu--visible");
      
//     $(menuButton).toggleClass("activee");
// 		}
// 	});
// }

});
