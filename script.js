$(document).ready(function() {
	// $('.style').click(function() {
	// 	console.log('test');
	// 	//var e = document.getElementsByClassName('form-basic');
		
	// 	$('.form-basic').toggleClass('style-class');
	// 	//$('.form-basic').removeClass('style-class-two')
		
	// });
	// $('.ringading').click(function() {
	// 	console.log('test');
	// 	//var e = document.getElementsByClassName('form-basic');
	// 	$('.form-basic').toggleClass('style-class-two');
	// });
	// $('.doodledoo').click(function() {
	// 	console.log('test');
	// 	//var e = document.getElementsByClassName('form-basic');
	// 	$('.form-basic').toggleClass('style-class-three');
	// });
	
	
	$('.style-one').on('click', function() {
		if ($('.form-one__basic').hasClass('style-class-two style-class-three')) {
			$('.form-one__basic').removeClass('style-class-two style-class-three');
			$('.form-one__basic').addClass('style-class-one');
		}
		
		else if ($('.form-one__basic').hasClass('style-class-one')) {
			$('.form-one__basic').removeClass('style-class-one');
		}
		else {
			$('.form-one__basic').addClass('style-class-one');
		}
	});
	
	$('.style-two').on('click', function() {
		if ($('.form-one__basic').hasClass('style-class-one style-class-three')) {
			$('.form-one__basic').removeClass('style-class-one style-class-three');
			$('.form-one__basic').addClass('style-class-two');
		}
		
		else if ($('.form-one__basic').hasClass('style-class-two')) {
			$('.form-one__basic').removeClass('style-class-two');
		}
		else {
			$('.form-one__basic').addClass('style-class-two');
		}
	});
	
	$('.style-three').on('click', function() {
		if ($('.form-one__basic').hasClass('style-class-one style-class-two')) {
			$('.form-one__basic').removeClass('style-class-one style-class-two');
			$('.form-one__basic').addClass('style-class-three');
		}
		
		else if ($('.form-one__basic').hasClass('style-class-three')) {
			$('.form-one__basic').removeClass('style-class-three');
		}
		else {
			$('.form-one__basic').addClass('style-class-three');
		}
	});
	
	
	
	
	
	
	
	
	$('.sign-up').click(function() {
		console.log('test');
		$('.fields').append('<input type="text" id="login-username" placeholder="username" class="form-two__field"><input type="text" id="login-password" placeholder="password" class="form-two__field"><input type="text" id="login-username" placeholder="confirm password" class="form-two__field">');
	});
	
	
	
	
	$(".navbar").hide();
	$(function() {
		$(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('.navbar').fadeIn();
			}
			else {
				$('.navbar').fadeOut();
			}
		});
	});
	
});
