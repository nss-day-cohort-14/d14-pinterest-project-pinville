"use strict";
app.factory("pinsModal", function(btfModal){
	return btfModal({
		controller: "PinsModalCtrl",
		controllerAs: "modal",
		templateUrl: "partials/addPinModal.html"
	});
});

app.controller("PinsModalCtrl", function($location, $scope, pinsModal, AuthFactory, $routeParams, DataFactory, $rootScope, $route){

  $scope.closeModal = pinsModal.deactivate;

	$scope.newPin = function(){

		// Build pin object
		let newPin ={};
		newPin.image = $scope.image;
		newPin.title = $scope.title;
		newPin.comments = $scope.comments;
    newPin.boardid = $routeParams.boardID;

		// Post and reload pins
		DataFactory.postNewPin(newPin).
		then(function(){
			console.log('posting new pin');
			$scope.closeModal()
			.then(function() {
				console.log('modal closed');
				$route.reload();
			});
		});
	};
});
