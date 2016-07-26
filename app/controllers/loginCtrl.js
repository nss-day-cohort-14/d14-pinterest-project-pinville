"use strict";
app.controller("LoginCtrl", function($scope, AuthFactory,DataFactory, $location){

	$scope.registerData = {
		email: "",
		password: ""
	};

	$scope.registerUser = function(){
		$scope.signUp = true;
	};

	$scope.loginUser = function(){
		AuthFactory.authWithProvider().then(function(user) {
			$location.url('/boards');
			$scope.$apply();
		});
	};

	$scope.createEmailAccount = function() {
		AuthFactory.createAccount($scope.registerData.email, $scope.registerData.password).then(function(user) {
			$location.url('/boards');
			$scope.$apply();
		});
	};
});


