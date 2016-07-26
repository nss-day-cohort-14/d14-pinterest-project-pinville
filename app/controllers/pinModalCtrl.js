"use strict";
app.factory("PinModal", function(btfModal){
	return btfModal({
		controller: "PinModalCtrl",
		controllerAs: "modal",
		templateUrl: "partials/pinModal.html"
	});
});

app.controller("PinModalCtrl", function($scope, PinModal, ItemToPin){

  $scope.closeModal = PinModal.deactivate;

  $scope.itemToPin = ItemToPin.getItem();

	console.log($scope.itemToPin);

	$scope.pinToBoard = function(){
		console.log("Pinned to board!");
	};


});
