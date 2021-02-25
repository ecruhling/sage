import loadInModal from '../plugins/loadInModal'
import smoothScroll from '../plugins/smoothScroll'
import addClassToElementOnScroll from '../plugins/addClassToElementOnScroll'

export default {
  init() {

    // variables
    const $modalDialog = $('#content-modal');
    const $loading = $('#loading');
    const $navbar = $('#navbar');

    // add accessibility class on TAB;
    // remove loading and reset modal on Escape
    $(document).on('keyup', function (e) {
      if (e.keyCode === 9) {// tab
        $('body').addClass('accessibility');
      }
      if (e.keyCode === 27) {// escape
        $loading.removeClass('show');
        $modalDialog.modal('hide');
      }
    });

    // Load clicked content in modal
    loadInModal();

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
