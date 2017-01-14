$(document).ready(function(){
	
	$('.image-slider').slick({
		'autoplay': true,
		'arrows':false,
		'autoplaySpeed': 5000, 
		'slidesToShow': 4,
		'focusOnselect':true,
		'responsive': [
		{
			breakpoint: 1366,
			settings: {
				'slidesToShow': 3
			}
		},
		{
			breakpoint: 1024,
			settings: {
				'slidesToShow': 2
			}
		},
		{
			breakpoint: 600,
			settings: {
				'slidesToShow': 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				'slidesToShow': 1
			}
		}
		]
	});
	$(document).on('click', '.prev', function(e){
		e.preventDefault();
		$('.image-slider').slick('slickPrev');
	});
	
	$(document).on('click', '.next', function(e){
		e.preventDefault();
		$('.image-slider').slick('slickNext');
	});

	$(document).on('click', '.tabs-navigation li a', function(e){

		e.preventDefault();
		var tab_id = $(this).parent().attr('data-tab');
		$('.active[data-tab]').removeClass('active');
		$('[data-tab="' + tab_id + '"]').addClass('active');

	});

	$(document).on('click', '.tabs-next', function(e){
		e.preventDefault();
		var tab_id = $('.active[data-tab]').attr('data-tab');
		tab_id++;

		if ( $('[data-tab=' + tab_id + ']').length == 0 ){
			tab_id = $('[data-tab]:first-child').attr('data-tab');
		}

		$('.active[data-tab]').removeClass('active');
		$('[data-tab="' + tab_id + '"]').addClass('active');

	});

	$(document).on('click', '.tabs-prev', function(e){
		e.preventDefault();
		var tab_id = $('.active[data-tab]').attr('data-tab');
		tab_id--;

		if ( $('[data-tab=' + tab_id + ']').length == 0 ){
			tab_id = $('[data-tab]:last-child').attr('data-tab');
		}

		$('.active[data-tab]').removeClass('active');
		$('[data-tab="' + tab_id + '"]').addClass('active');
	});

});

$(window).load(function(){

	var tabs_max_height = 0;
	$('.tabs-content .tab-content').css('display', 'block');

	$('.tabs-content .tab-content').each(function(){
		var height = $(this).outerHeight(true);
		if (height > tabs_max_height){
			tabs_max_height = height;
		}
	});

	$('.tabs-content').css('height', tabs_max_height + 'px');
	$('.tabs-content .tab-content').css('display', '');

});