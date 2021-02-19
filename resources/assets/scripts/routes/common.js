export default {
  init() {

  },
  finalize() {

    // all content loaded
    $(window).on('load', function() {

      // Smooth scrolling on internal page links jQuery plugin

      // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on('click', function(e) {
          // On-page links only
          if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
            &&
            location.hostname === this.hostname
          ) {
            // Figure out the element to scroll to
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) { // make sure target exists
              // Only prevent the default behavior if the animation is actually going to play
              e.preventDefault();
              $('html, body').animate({
                scrollTop: $(target).offset().top - parseInt($('body').css('scroll-padding-top')), // use scroll-padding-top as offset for scroll
              }, 600, function() {
                // Callback after animation: change focus to target element
                const $target = $(target);
                $target.focus();
                if ($target.is(':focus')) { // Checks to see if target was focused already
                  return false;
                } else {
                  $target.attr('tabindex', '-1'); // Adding tabindex for elements that are not focusable
                  $target.focus(); // Set focus again
                }

              });
            }
          }
        });

    });

  },
};
