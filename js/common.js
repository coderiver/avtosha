$(document).ready(function() {

//bg
$('.bgbtn').click(function() {
	$('.bg, .bg1, .bg2').show();
});	

//filter radio
$('.filter__price label').click(function() {
	$('.filter__price label').removeClass('active');
	$(this).addClass('active');
});

//filter range
if ($('.range__slider').length>0) {
	$('.range__slider').each(function() {
	  $(this).empty().slider({
	  	range: "max",
		  min: 0,
		  max: 5,
		  value: 0,
		  slide: function( event, ui ) {
			 	switch (ui.value) {
			 		case 0:
			      $(this).parent().next().next().css('width', '0');
		  			$(this).parent().next().val(ui.value);
			      break
			    case 1:
			      $(this).parent().next().next().css('width', '20%');
		  			$(this).parent().next().val(ui.value);
			      break
			    case 2:
			      $(this).parent().next().next().css('width', '40%');
		  			$(this).parent().next().val(ui.value);
			      break
			    case 3:
			      $(this).parent().next().next().css('width', '60%');
		  			$(this).parent().next().val(ui.value);
			      break
			    case 4:
			      $(this).parent().next().next().css('width', '80%');
		  			$(this).parent().next().val(ui.value);
			      break
			    case 5:
			      $(this).parent().next().next().css('width', '100%');
		  			$(this).parent().next().val(ui.value);
			      break
				};
			}
	  });
	});
};
$('.range__click i').click(function() {
	var rng_txt = $(this).text();
	$(this).parent().prev().prev().prev().val(rng_txt);
	$(this).parent().prev().prev().prev().prev().children().slider('value', rng_txt);
	rng_txt = parseFloat(rng_txt);
	switch (rng_txt) {
 		case 0:
      $(this).parent().prev().prev().css('width', '0');
      break
    case 1:
      $(this).parent().prev().prev().css('width', '20%');
      break
    case 2:
      $(this).parent().prev().prev().css('width', '40%');
      break
    case 3:
      $(this).parent().prev().prev().css('width', '60%');
      break
    case 4:
      $(this).parent().prev().prev().css('width', '80%');
      break
    case 5:
      $(this).parent().prev().prev().css('width', '100%');
      break
	};
});

//catalog
$('.catalog__list a').click(function() {
	$('.catalog__cars').hide();
	$('.catalog__list a').removeClass('active');
	$(this).addClass('active');
	var cc_val = $(this).attr('href');
	$('.'+cc_val).show();
	return false;
});

//top tabs
$('.top__list a').click(function() {
	$('.top__list a').removeClass('active');
	$('.top__slider').fadeOut(500);
	$(this).addClass('active');	
	var tl_val = $(this).attr('href');
	$('.'+tl_val).fadeIn(500);
	return false;
});

//top sliders
if ($(".top__slider_1").length>0) {
	$(".top__slider_1").scrollable({
		items: '.top__items',
		prev: '.top__slider_1 .top__slider-prev',
		next: '.top__slider_1 .top__slider-next',
		circular: true
	});
};
if ($(".top__slider_2").length>0) {
	$(".top__slider_2").scrollable({
		items: '.top__items',
		prev: '.top__slider_2 .top__slider-prev',
		next: '.top__slider_2 .top__slider-next',
		circular: true
	});
};
if ($(".top__slider_3").length>0) {
	$(".top__slider_3").scrollable({
		items: '.top__items',
		prev: '.top__slider_3 .top__slider-prev',
		next: '.top__slider_3 .top__slider-next',
		circular: true
	});
};

//slider
if ($('.slider').length>0) {
	$('.slider').scrollable({
		items: '.slider__items',
		prev: '.slider-prev',
		next: '.slider-next',
		circular: true
	}).navigator({
		navi: '.slider-navi'
	});
};

//gallery
if ($('.gallery__slider').length>0) {
	$('.gallery__slider').scrollable({
		items: '.gallery__items',
		prev: '.gallery__slider-prev',
		next: '.gallery__slider-next',
		circular: true
	});
};
var api = $('.gallery__slider').data('scrollable');
$('.gallery__thumb a').click(function() {
    var attr_href = $(this).attr('href');
    api.seekTo(attr_href, 400);
    return false;
});

//scroll
if ($('.gallery__thumb').length>0) {
	val_th = $('.gallery__thumb li').length;
	$('.gallery__thumb ul').css('width', val_th*97+4+'px');
	$('.gallery__thumb').jScrollPane();
};

//popup
$('.enter_user').click(function() {
	$('.popup-bg, .popup_enter').fadeIn();
	return false;
});
$('.enter_login-fb, .enter_login-vk').click(function() {
	$('.popup-bg, .popup_profile').fadeIn();
	return false;
});
$('.popup__close, .popup-bg').click(function() {
	$('.popup-bg, .popup_enter, .popup_profile').fadeOut();
});

//pic load
$('.profile__pic-load').click(function() {
	$(this).hide();
	$(this).next().show();
});

//select
$('.select span').click(function () {
    $(this).next().slideDown();
  });
$('.select li').click(function() {
	sel_txt = $(this).text();
	$(this).parent().prev().html(sel_txt);
	$(this).parent().slideUp();
});

});