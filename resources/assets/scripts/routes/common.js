import smoothScroll from '../plugins/smoothScroll'
import addClassToElementOnScroll from '../plugins/addClassToElementOnScroll'

export default {
  init() {

    // variables
    const $navbar = $('#navbar');

    // window scroll events
    $(window).on('scroll', function () {
      addClassToElementOnScroll(85, $navbar)
    });

  },
  finalize() {

    // all content loaded
    $(window).on('load', function() {
      smoothScroll();
    });

  },
};
