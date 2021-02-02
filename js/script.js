new WOW().init();

$(document).ready(function() {

	// Плавный скролл к форме

	$('a[href^="#"]').click(function(e) {
		e.preventDefault;
		var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        console.log(destination);
        $('html, body').animate({ scrollTop: destination }, 1500);
        return false; 
	});

	// Переключение info

	$(".sn-info").on("click", ".sn-info-menu-item", function() {
		// Удаляем классы active
		$(".sn-info").find(".active-menu").removeClass("active-menu");
		$(".sn-info").find(".active").removeClass("active");

		// Добавляем классы active
		$(this).addClass("active-menu");
		$(".sn-info-text-item").eq($(this).index()).addClass("active");
		$(".sn-info-more-item").eq($(this).index()).addClass("active");
	});

	// Checkbox

	$('#form input:checkbox').change(function() {
        var check = $('#form input:checked').filter(":checked").length;

        if (check) {
        	$('.submit').prop('disabled', false);
            
        } else {
            $('.submit').prop('disabled', true);
        }
	});

	//Burger
	
	$('.sn-burger-menu').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('sn-burger-menu-active');
	});

 });