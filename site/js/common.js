$(document).ready(function() {
	function validateEmail(email) {
	    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	    return re.test(email);
	}
	var error = 0;
	$('.js-submit').click(function(event) {
		event.preventDefault(); 
		$('.js-form input,.js-form textarea').removeClass('is-error');
		error = 0;
		if($('.input-name').val()=='') {
				$('.input-name').addClass('is-error');error = 1;
			}
		if($('.input-company').val()=='') {
				$('.input-company').addClass('is-error'); error = 1;
			}
		if($('.input-request').val()=='') {
				$('.input-request').addClass('is-error');error = 1;
			}
		ema = $('.input-mail').val();
		if(!validateEmail(ema)) {
				$('.input-mail').addClass('is-error');error = 1;
			}
		
		if(error!=1){
			// here goes submit
			$.ajax({
				type: "POST",
				url: "/send.php",
				data: $(".js-form").serialize(), // serializes the form's elements.
				success: function(data) {
					$('.js-form').addClass('is-success');
					console.log(data);
					setTimeout(function(){$('.form').removeClass("is-success");}, 5000);
				}
			});
		}
		return false;
	});

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

});