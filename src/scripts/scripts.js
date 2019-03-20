
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

    $(".nav-bar #burger").click(function () {
		$(this).toggleClass("open");
        $(this).next(".menu").slideToggle(50);
        $(this).next(".menu").toggleClass("open");
    });

    fn.updateVars();

    $(window).ready(function() {
      fn.updateVars();
      if ($(window).width() < 999) {
        $("#header .menu").addClass("mobile-menu");
      }
      else $("#header .menu").removeClass("mobile-menu");
      
      fn.updateVars();
      if($(window).width() > 700) {
        $(window).scroll(doParallax); 
      }

      });
    

      $("#header #burger").click(function () { 
            fn.updateVars();
            if ($(window).width() < 999) {
              $(this).toggleClass("open");
              $(this).next(".menu").slideToggle(50);
              $(this).next(".menu").toggleClass("open");
            }
        });
    
      $("#header  .menu a").click(function () {
            fn.updateVars();
            if ($(window).width() < 999) {
              $("#header #burger").toggleClass("open"); 
              $("#header  .logo").removeClass("open");
              $("#header  .menu").slideToggle(100);
              $("#header .menu").toggleClass("open");
            }
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

    var gallery = require('gallery');
 
    // Init galleries found inside specific node
    gallery(document.querySelector('.gallery')); 

  });

  function initMap() {
    var mapElement = document.getElementById("map");

    if (mapElement == null)
        return;

    var uluru = {lat: 50.4799999, lng: 17.3343700};

    var map = new google.maps.Map(mapElement, {
        zoom: 9,
        scrollwheel: false,
        disableDefaultUI: true,
        center: uluru,
        styles:[
            {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#242f3e"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#746855"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#242f3e"
                  }
                ]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "administrative.neighborhood",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.neighborhood",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "visibility": "on"
                  },
                  {
                    "weight": 4
                  }
                ]
              },
              {
                "featureType": "poi",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#263c3f"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#6b9a76"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#38414e"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#212a37"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9ca5b3"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#746855"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                  {
                    "color": "#1f2835"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#f3d19c"
                  }
                ]
              },
              {
                "featureType": "transit",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#2f3948"
                  }
                ]
              },
              {
                "featureType": "transit.station",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#d59563"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#17263c"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#515c6d"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#17263c"
                  }
                ]
              }
        ]
    });

    var marker = new google.maps.Marker({
        position: uluru,
        icon: pin,
        map: map
    });
}

var images = [].slice.call(document.querySelectorAll('.js-parallax-bg'));

function getViewportHeight() {
  var a = document.documentElement.clientHeight, b = window.innerHeight;
  return a < b ? b : a;
}

function getViewportScroll() {
  if(typeof window.scrollY != 'undefined') {
      return window.scrollY;
  }
  if(typeof pageYOffset != 'undefined') {
      return pageYOffset;
  }
  var doc = document.documentElement;
  doc = doc.clientHeight ? doc : document.body;
  return doc.scrollTop;
}

function doParallax() {
  var el, elOffset, elHeight,
      offset = getViewportScroll(),
      vHeight = getViewportHeight();

  for(var i in images) {
      el = images[i];
      elOffset = el.offsetTop;
      elHeight = el.offsetHeight;

      if((elOffset > offset + vHeight) || (elOffset + elHeight < offset)) { continue; }

      el.style.backgroundPosition = '50% '+Math.round((elOffset - offset)*5/8)+'px';
  }
}
