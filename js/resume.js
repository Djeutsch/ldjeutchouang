(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

function startProgressBar() {
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },3000);
  });
};

$(window).scroll(function() {
    var target = $('#skills');
    var $targetPosTop = target.position().top; // Position in page
    var $targetHeight = target.height(); // target's height
    var $target = $targetPosTop - $targetHeight ; // the whole target position
    var $windowst = $(window).scrollTop()-($(window).height()/2);     // yes divided by 2 to get middle screen view.

    if (($windowst > $target) && ($windowst < $targetPosTop)){
                 // start progressbar I guess
                 startProgressBar();
    }

});
