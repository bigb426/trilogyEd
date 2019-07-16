// FOUC fix
$(document).ready(function(){
	$('html').hide();
	// iOS back-forward history caching fix for videos
		window.onpageshow = function(event) {
		 if (event.persisted) {
		  $('video').each(function(){
		   $(this).trigger('play');
		  });
		 }
		};



// INTERNET EXPLORER FIX FOR PARALLAX SECTIONS
    if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.match(/Edge\/12\./) || navigator.userAgent.match(/Edge\/13\./) || navigator.userAgent.match(/Edge\/14\./) || navigator.userAgent.match(/Edge\/15\./) || navigator.userAgent.match(/Edge\/16\./) || navigator.userAgent.match(/Edge\/17\./) || navigator.userAgent.match(/Edge\/18\./)) {
        $('body').on("mousewheel", function () {
            event.preventDefault();
            var wd = event.wheelDelta;
            var csp = window.pageYOffset;
            window.scrollTo(0, csp - wd);
        });
    }
// END IE FIX    

	var tags = $('html, body'); 

	$('a[href^="#"]').click(function(event) {
		event.preventDefault();

		if ($('nav button').attr('class') === 'navbar-toggle') {
			// collapse the mobile nav bar after clicking a nav link
			$("#navbar-collapse").attr('class', 'navbar-collapse collapse');
		} else { 
			// do nothing
		}
	    tags.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top - 150
	    }, 1200);  
	});

});

	$('html').show();
});