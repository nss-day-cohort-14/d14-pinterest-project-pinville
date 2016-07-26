"use strict";
app.controller('HeaderCtrl', function($scope, AuthFactory, $location) {

  $scope.boardsPressed = function() {
		$location.url('/boards');
	}

	$scope.logoutPressed = function() {
		AuthFactory.logout();
		$location.url('/');
	}

});
