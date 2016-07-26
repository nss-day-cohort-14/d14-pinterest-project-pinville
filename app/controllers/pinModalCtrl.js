"use strict";
app.factory("pinModal", function(btfModal){
	return btfModal({
		controller: "PinModalCtrl",
		controllerAs: "modal",
		templateUrl: "partials/pinModal.html"
	});
});

app.controller("PinModalCtrl", function($scope, pinModal, ItemToPin){

  $scope.closeModal = pinModal.deactivate;

  $scope.itemToPin = ItemToPin.getItem();

	$scope.pinToBoard = function(){
		console.log("Pinned to board!");
	};


});
