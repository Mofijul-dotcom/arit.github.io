$('.slider').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1

})
/* Our happy client start here*/
$(document).ready(function(){
  $('.slidertwo').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 10000,
});
   });
   /* Our happy client start here*/

   /* Our recent project start here*/

$(document).ready(function(){
  $('.sliderthree').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 5000,

});

  });
  /* Our recent project start here*/


/* progressbar start here*/

var lang = {
  "html": "100%",
  "css": "90%",
  "javascript": "70%",
  "php": "55%",
  "angular": "65%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;

  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);

  multiply++;

});

/* progressbar end here*/

/* protfoilo details start here */
jQuery(document).ready(function ($) {
	$('.fadeshop').hover(
		function(){
			$(this).find('.captionshop').fadeIn(150);
		},
		function(){
			$(this).find('.captionshop').fadeOut(150);
		}
	);
});

/* protfoilo details end here */


/* gallery start here*/


/* gallery end here*/
