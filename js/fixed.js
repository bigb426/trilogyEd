$(window).load(function(){


	/* 

	RECALCULATE NAV HEIGHT MINUS COLLAPSE MENU AND
	SET MARGIN-BOTTOM OF NAV TO -navH AND FIRST DIV 
	AFTER NAV to navH.  

	*/
		function recalcHeight() {
	       navH = $('nav').children().children().not('.navbar-collapse.collapse.in').outerHeight();
	       $('nav').css('margin-bottom', -navH);
      	   $('nav').next().css('margin-top', navH);    
	    }

	  recalcHeight();

	// RECALCULATE NAV HEIGHT WHEN THE BROWSER WIDTH CHANGES
	var lastWidth = $(window).width();

	  $(window).on('resize', function() {
	    if ($(window).width() !== lastWidth) {
	    	recalcHeight();
	    	lastWidth = $(window).width();
	    }
	  });

	   function eventHandler() {
	     if ($('.navbar-collapse').hasClass('in')) {
	     $('button.navbar-toggle').click();
	     };
	    }
	   //CLOSES MOBILE NAV ON SCROLL
	   $(window).on('scroll', eventHandler);
	       
	   // CLOSES THE MOBILE NAV WHEN A MENU ITEM IS CLICKED
	   $('.nav li a').on('click', eventHandler);  


});