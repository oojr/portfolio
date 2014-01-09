var portCtrl = angular.module('portCtrl', []);
 
portCtrl.controller('ProjectListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('js/projects.json').success(function(data) {
      $scope.projects = data;
    });

 
    $scope.aside = {
    	"title":"{{project.title}}"
    };
  }]);
 
portCtrl.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);