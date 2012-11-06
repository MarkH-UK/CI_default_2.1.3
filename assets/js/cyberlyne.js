// Harpers JavaScript Document

// Cufon Replacement
Cufon.replace('h2.block');
Cufon.replace('.headertop p');
Cufon.replace('.call');
Cufon.replace('#footer h2');
Cufon.replace('.welcome h3');
Cufon.replace('.navtext');

// Form Slider

$(document).ready(function() {
	
	$('#banner').cycle({
		fx: 'fade',
		speed: 2500
	});
	 
//Hide (Collapse) the toggle containers on load
    
	$(".toggle_container").hide();
 	
	//Slide up and down & toogle the Class on click

$("h2.trigger").click(function(){

if ( $('h2.trigger').hasClass("active") ) {
            $('h2.trigger').removeClass("active");
        } else {
            $(this).addClass("active");
        }
        var $nextDiv = $(this).next();
        var $visibleSiblings = $nextDiv.siblings('div:visible');

        if ($visibleSiblings.length ) {
            $(this).addClass("active");
            $visibleSiblings.slideUp('slow', function() {
                $nextDiv.slideToggle('slow');
            });
        } else {
            $nextDiv.slideToggle('slow');
        }
		
$(".close_form").click(function(){
	$('h2.trigger').removeClass("active");
		$('.toggle_container').slideUp('slow');	
});

}); return false;   
   
});