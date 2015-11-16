$(document).ready(function() {
	
	if($(window).width()<751){

		$('.js-experts').slick({
			slidesToShow: 1,
		  	slidesToScroll: 1,
		  	infinite: true,
			arrows: true,
			dots: false,
			slide: '.down__col',
			prevArrow: $('.arrow-left'),
			nextArrow: $('.arrow-right')
		})
	}

	console.log($('body').html());
});