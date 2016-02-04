$(document).ready(function() {
	$('.style').click(function() {
		console.log('test');
		//var e = document.getElementsByClassName('form-basic');
		
		$('.form-basic').toggleClass('style-class');
		//$('.form-basic').removeClass('style-class-two')
		
	});
	$('.ringading').click(function() {
		console.log('test');
		//var e = document.getElementsByClassName('form-basic');
		$('.form-basic').toggleClass('style-class-two');
	});
	$('.doodledoo').click(function() {
		console.log('test');
		//var e = document.getElementsByClassName('form-basic');
		$('.form-basic').toggleClass('style-class-three');
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
