$(document).ready(function() {
    console.log("wow!")

    //$(".left").find("img").animate("opacity","1");
    $(".left").find("img").animate({
        opacity: "1"
    }, 2000);
    //$("p").fadeIn(60000);
    
    $(".pAbout").animate({
        left: "0"
    }, 2000);

});




// 	sten = document.getElementById("sten"),
// 	house = document.getElementById("house"),

// console.log(sten);

// 2









// $(document).ready(function() {
// 	// $('.style').click(function() {
// 	// 	console.log('test');
// 	// 	//var e = document.getElementsByClassName('form-basic');

// 	// 	$('.form-basic').toggleClass('style-class');
// 	// 	//$('.form-basic').removeClass('style-class-two')

// 	// });
// 	// $('.ringading').click(function() {
// 	// 	console.log('test');
// 	// 	//var e = document.getElementsByClassName('form-basic');
// 	// 	$('.form-basic').toggleClass('style-class-two');
// 	// });
// 	// $('.doodledoo').click(function() {
// 	// 	console.log('test');
// 	// 	//var e = document.getElementsByClassName('form-basic');
// 	// 	$('.form-basic').toggleClass('style-class-three');
// 	// });


// 	$('.style-one').on('click', function() {
// 		if ($('.form-a__basic').hasClass('style-class-two style-class-three')) {
// 			$('.form-a__basic').removeClass('style-class-two style-class-three');
// 			$('.form-a__basic').addClass('style-class-one');
// 		}

// 		else if ($('.form-a__basic').hasClass('style-class-one')) {
// 			$('.form-a__basic').removeClass('style-class-one style-class-two style-class-three');
// 		}
// 		else {
// 			$('.form-a__basic').addClass('style-class-one');
// 		}
// 	});

// 	$('.style-two').on('click', function() {
// 		if ($('.form-a__basic').hasClass('style-class-one style-class-three')) {
// 			$('.form-a__basic').removeClass('style-class-one style-class-three');
// 			$('.form-a__basic').addClass('style-class-two');
// 		}

// 		else if ($('.form-a__basic').hasClass('style-class-two')) {
// 			$('.form-a__basic').removeClass('style-class-one style-class-two style-class-three');
// 		}
// 		else {
// 			$('.form-a__basic').addClass('style-class-two');
// 		}
// 	});

// 	$('.style-three').on('click', function() {
// 		if ($('.form-a__basic').hasClass('style-class-one style-class-two')) {
// 			$('.form-a__basic').removeClass('style-class-one style-class-two');
// 			$('.form-a__basic').addClass('style-class-three');
// 		}

// 		else if ($('.form-a__basic').hasClass('style-class-three')) {
// 			$('.form-a__basic').removeClass('style-class-one style-class-two style-class-three');
// 		}
// 		else {
// 			$('.form-a__basic').addClass('style-class-three');
// 		}
// 	});

// 	$('.form-four').parallax({imageSrc : 'forest_bg.jpg'});

// 	$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});



// 	$('.sign-up').click(function() {
// 		console.log('test');
// 		$('.fields').append('<input type="text" id="login-username" placeholder="username" class="form-two__field"><input type="text" id="login-password" placeholder="password" class="form-two__field"><input type="text" id="login-username" placeholder="confirm password" class="form-two__field">');
// 	});




// 	$(".navbar").hide();
// 	$(function() {
// 		$(window).scroll(function() {
// 			if ($(this).scrollTop() > 100) {
// 				$('.navbar').fadeIn();
// 			}
// 			else {
// 				$('.navbar').fadeOut();
// 			}
// 		});
// 	});

// });

//document.getElementById("myDIV").onscroll = function() {myFunction()};

// function myFunction() {
//     document.getElementById("demo").innerHTML = "You scrolled in div.";
// }

var two = document.getElementById("two")

two.onscroll = function () {
    scrollTriggers()    
}
console.log(two)

function scrollTriggers() {
    console.log("two")
    if (document.body.scrollTop > 50) {
       $("#two").css("background-color","yellow")
    }
}
