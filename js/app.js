var portfolio = angular.module('portfolio', [
  'ngRoute',
  'ngSanitize',
  'ngAnimate',
  'portCtrl',
  'mgcrea.ngStrap'
]);
 
portfolio.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'tpls/project-list.html',
        controller: 'ProjectListCtrl'
      }).
      when('/:projectId', {
        templateUrl: 'tpls/project-detail.html',
        controller: 'ProjectDetailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);