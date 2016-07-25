"use strict";
app.controller("LoginCtrl", function($scope){
	$scope.registerUser = function(){
		console.log("register");
	};
	$scope.loginUser = function(){
		console.log("signin");
	};
});