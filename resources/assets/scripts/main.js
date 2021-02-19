// IE polyfill for the CustomEvent constructor
(function() {
  if (typeof window.CustomEvent === 'function') {
    return false;
  } //If not IE

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

// import external dependencies

/**
 Instead of loading everything, we're going to
 import a subset of Bootstrap's JS, in an attempt to keep the final
 JS file from getting too bloated with unused code
 */

import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/index';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/util';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';

/** Populate Router instance with DOM routes */
const routes = new Router({
  common,
});

// Load Events
document.addEventListener('DOMContentLoaded', () => routes.loadEvents());
