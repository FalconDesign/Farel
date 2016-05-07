$(function() {
	// Smooth scrollong
	smoothScroll(300);
// Function for the empty form validation!
	emptyFormValidation();

})


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

			var target = $( $(this).attr('href') );

			if( target.length ) {
					event.preventDefault();
					$('html, body').animate({
							scrollTop: target.offset().top
					}, duration);
			};
	});
};

function emptyFormValidation() {

	$('form input:eq(0)').on('input', function () {
	$('form input:eq(0)').css('background','#fff');
	});

	$('form input:eq(1)').on('input', function () {
	$('form input:eq(1)').css('background','#fff');
	});

	$('form input:eq(2)').on('input', function () {
	$('form input:eq(2)').css('background','#fff');
	});

	$('button[type="submit"]').on('click', function () {

	var form = $('form input');

	for (var i = 0; i < form.length; i++) {

	if (form[i].value === '') {

			makeRed();

		return false;

	} else {

		return true;
	};
};



	});
};


function makeRed() {


	var name = $('form input:eq(0)');
	var email = $('form input:eq(1)');
	var number = $('form input:eq(2)');

	if (name.val() === '') {
			name.attr('placeholder', 'Введите имя').css('background', 'rgb(255, 171, 171)');
	};
	if (email.val() === '') {
			email.attr('placeholder', 'Введите почту').css('background', 'rgb(255, 171, 171)');
	};
	if (number.val() === '') {
			number.attr('placeholder', 'Введите номер телефона').css('background', 'rgb(255, 171, 171)');
	};
};
