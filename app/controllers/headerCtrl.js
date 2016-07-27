"use strict";
app.controller('HeaderCtrl', function($scope, AuthFactory, $location, $rootScope, Filter) {

  $scope.filter = Filter;

  $scope.boardsPressed = function() {
		$location.url('/boards');
	}

	$scope.logoutPressed = function() {
		AuthFactory.logout();
		$location.url('/');
	}

});
