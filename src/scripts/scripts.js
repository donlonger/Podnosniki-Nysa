(function(fn) {
    'use strict';
	fn.scrollTop = $(this).scrollTop();

	fn.updateVars = function() {
		fn.window = {
			x: $(window).width(),
			y: $(window).height()
		};
		fn.scrollTop = $(window).scrollTop();
	};

	fn.getWindow = function() {
		return fn.window;
	};

	fn.getScrollTop = function() {
		return fn.scrollTop;
	};
}(window.fn = window.fn || {}));  

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
            navigation : true,
            responsive:{
                0: {
                    items: 1
                },
                
                1000:{
                    items:2
                },

                1300: {
                    items: 3
                }

            }  
        });

    AOS.init();

    $(".nav-bar #burger").click(function () {
		$(this).toggleClass("open");
        $(this).next(".menu").slideToggle(50);
        $(this).next(".menu").toggleClass("open");
    });

	$(".nav-bar  .menu a").click(function () {
        $(".nav-bar #burger").toggleClass("open"); 
        $(".nav-bar  .logo").removeClass("open");
        $(".nav-bar  .menu").slideToggle(100);
        $(".nav-bar  .menu").toggleClass("open");
        
    });

    $(window).scroll(function() {
        fn.updateVars();
        if (fn.scrollTop > 250) {
            $(".top-wrapper").addClass("fixed");        
        }
        
        else if (fn.scrollTop <= 250) {
            $(".top-wrapper").removeClass("fixed");    
        }
    });

  });
