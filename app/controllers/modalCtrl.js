"use strict";
app.factory("boardModal", function(btfModal){
	return btfModal({
		controller: "BoardModalCtrl",
		controllerAs: "modal",
		templateUrl: "partials/boardModal.html"
	});
});

app.controller("BoardModalCtrl", function($scope, boardModal, AuthFactory, DataFactory){
	$scope.closeModal = boardModal.deactivate;

	$scope.submitBoard = function(){
		let newBoard ={};
		newBoard.title= $scope.title;
		newBoard.category = $scope.category;
		newBoard.description = $scope.description;
		newBoard.uid = AuthFactory.getUser();

		DataFactory.postNewBoard(newBoard);
	};


});