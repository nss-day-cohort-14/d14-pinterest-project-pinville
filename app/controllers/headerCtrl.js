"use strict";
app.controller('HeaderCtrl', function($scope, AuthFactory, $location, $rootScope, Filter) {

  $scope.filter = Filter;

  $scope.userPicture = firebase.auth().currentUser.photoURL;
  console.log("USER PICTURE", firebase.auth().currentUser.photoURL);

  $scope.boardsPressed = function() {
		$location.url('/boards');
	}

	$scope.logoutPressed = function() {
		AuthFactory.logout();
		$location.url('/');
	}

});
