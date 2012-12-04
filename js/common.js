$(document).ready(function() {

//bg
$('.bgbtn').click(function() {
	$('.bg').show();
});	

//filter radio
$('.filter__price label').click(function() {
	$('.filter__price label').removeClass('active');
	$(this).addClass('active');
});

//filter range
$('.range__slider').each(function() {
  $(this).empty().slider({
  	range: "max",
	  min: 0,
	  max: 5,
	  value: 0,
	  slide: function( event, ui ) {
		 	switch (ui.value) {
		    case 1:
		      $(this).parent().next().next().css('width', '28px');
	  			$(this).parent().next().val(ui.value);
		      break
		    case 2:
		      $(this).parent().next().next().css('width', '58px');
	  			$(this).parent().next().val(ui.value);
		      break
		    case 3:
		      $(this).parent().next().next().css('width', '88px');
	  			$(this).parent().next().val(ui.value);
		      break
		    case 4:
		      $(this).parent().next().next().css('width', '118px');
	  			$(this).parent().next().val(ui.value);
		      break
		    case 5:
		      $(this).parent().next().next().css('width', '148px');
	  			$(this).parent().next().val(ui.value);
		      break
			};
		}
  });
});

//catalog
$('.catalog__list a').click(function() {
	$('.catalog__cars').hide();
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
$(".top__slider_1").scrollable({
	items: '.top__items',
	prev: '.top__slider_1 .top__slider-prev',
	next: '.top__slider_1 .top__slider-next',
	circular: true
});
$(".top__slider_2").scrollable({
	items: '.top__items',
	prev: '.top__slider_2 .top__slider-prev',
	next: '.top__slider_2 .top__slider-next',
	circular: true
});
$(".top__slider_3").scrollable({
	items: '.top__items',
	prev: '.top__slider_3 .top__slider-prev',
	next: '.top__slider_3 .top__slider-next',
	circular: true
});

});