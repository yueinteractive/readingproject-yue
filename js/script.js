$(document).ready(function(){
	    $('#top-menu li a').on('click', function(){
	    	$(this).addClass('active').parent().siblings().find('a').removeClass('active');
        });

    	$(function() {
    // find each section with id
		$("#homenav").bind('click', { id: '#home' }, scroller);
	    $("#plannav").bind('click', { id: '#plan' }, scroller);
	    $("#join").bind('click', { id: '#plan' }, scroller);
		$("#donav").bind('click', { id: '#do' }, scroller);
		$("#reviewnav").bind('click', { id: '#review' }, scroller);
		$("#feedbacknav").bind('click', { id: '#feedback' }, scroller);

		function scroller(event){
	  		var scrollYPos = $(event.data.id).offset().top;
	  		event.preventDefault();
	  		TweenLite.to(window, 2, {scrollTo:{y:scrollYPos, x:0}, ease:Power4.easeOut})
	  };



	});
	// Cache the Window object
	$window = $(window);



	// find each section with the data-type of "background"
	// for each section found add this function
   	$('section[data-type="background"]').each(function() {
   	
   		// 1.Store the current section in a variabble
		var $bgobj = $(this);
		
        // 2.Create a scroll function for the window       
      	$(window).scroll(function() {
                    
			// getting the current scroll value from the top
			// Divide by the var speed to slow down the movement
			// the yPos is a negative value because we're scrolling it UP!								
			var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
			// Put together our final background position
			// 50% keeps the X-position static
			var coords = '50% '+ yPos + 'px';

			// Move the background, set the css position 
			$bgobj.css({ backgroundPosition: coords });

      // stylize top menu
			if($(window).height() < $window.scrollTop()) $('#top-menu').addClass('shortened');
			else $('#top-menu').removeClass('shortened');
		
		}); // window scroll Ends
 	});
}); 

/* 
 * Create HTML5 elements for IE's sake
 */
document.createElement("article");
document.createElement("section");