"use strict";
app.controller("LoginCtrl", function($scope, AuthFactory){

	$scope.registerData = {
		email: "",
		password: ""
	};

	$scope.registerUser = function(){
		console.log("register");
		$scope.signUp = true;
	};

	$scope.loginUser = function(){
		console.log("signin");
		AuthFactory.authWithProvider();
	};

	$scope.createEmailAccount = function() {
		AuthFactory.createAccount($scope.registerData.email, $scope.registerData.password);
	};
});
