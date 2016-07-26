"use strict";
app.factory("boardModal", function(btfModal){
	return btfModal({
		controller: "BoardModalCtrl",
		controllerAs: "modal",
		templateUrl: "partials/boardModal.html"
	});
});

app.controller("BoardModalCtrl", function($scope, boardModal, ItemToPin){
	$scope.closeModal = boardModal.deactivate;
	
});
