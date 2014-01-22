'use strict';

angular.module('ngEditorApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
