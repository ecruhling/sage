import smoothScroll from '../plugins/smooth-scroll'

export default {
  init() {

  },
  finalize() {

    // all content loaded
    $(window).on('load', function() {

      smoothScroll();

    });

  },
};
