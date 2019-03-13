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
            items: 1
        });

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
            $("#header").addClass("fixed");
            $("#header li").addClass("fixed");        
        }
        
        else if (fn.scrollTop <= 250) {
            $("#header").removeClass("fixed");
            $("#header li").removeClass("fixed");
        }
    });

    $(function(){
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
        
            jQuery.get(imgURL, function(data) {
                var $svg = jQuery(data).find('svg');
        
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
    
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }
        
                $svg = $svg.removeAttr('xmlns:a');
                
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }
        
                $img.replaceWith($svg);
        
            }, 'xml');
        });
    });

var gallery = function() {

    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'https://placekitten.com/600/400',
            w: 600,
            h: 400,
            msrc: '/build/img/1.jpg'
        },
        {
            src: 'https://placekitten.com/1200/900',
            w: 1200,
            h: 900
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

    };
  });
