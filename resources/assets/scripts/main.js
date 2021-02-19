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
import 'jquery';

// Import bootstrap from autoload directory
import './autoload/_bootstrap';

// import local dependencies
import Router from './util/Router';
import common from './routes/common';

/** Populate Router instance with DOM routes */
const routes = new Router({
  common,
});

// Load Events
document.addEventListener('DOMContentLoaded', () => routes.loadEvents());
