'use strict';

/* Filters */
// need load the moment.js to use this filter. 
angular.module('myApp')
  .filter('fromNow', function() {
    return function(date) {
      return moment(date,"YYYY-MM-DD HH:mm").fromNow();
    }
  });