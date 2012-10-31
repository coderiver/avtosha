$(document).ready(function () {

//enter social
$('.enter__fb, .enter__vk').click(function() {
    $('.popup-bg, .popup').fadeIn(300);
});
$('.popup__close, .popup-bg').click(function() {
    $('.popup-bg, .popup').fadeOut(300);
});

//$('.tabs__content:not(:first)').hide();
$('.tabs__link li').click(function() {
	$('.tabs__link li').removeClass('active');
	data_item = $(this).attr('class');
	$('.tabs__content').hide();
	$('#'+data_item).show();
	$(this).addClass('active');
});

$('.tabs__slider').scrollable({
	prev: '.tabs__slider-prev',
	next: '.tabs__slider-next'
});

//gallery
$('.gallery__img-s .items a').click(function() {
    $('.gallery__img-s .items a').removeClass('active');
    pic_link = $(this).attr('href');
    $('gallery__img-b img').attr('src',pic_link);
    $(this).addClass('active');
    return false;
});

//filter
$(function() {
    $( ".filter" ).slider({
        range: true,
        min: 0,
        max: 100000,
        values: [ 0, 50000 ],
        slide: function( event, ui ) {
        	$("#min").val( ui.values[ 0 ]);
    		$("#max").val( ui.values[ 1 ]);
            //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $("#min").val($( ".filter" ).slider( "values", 0 ));
    $("#max").val($( ".filter" ).slider( "values", 1 ));
});

});