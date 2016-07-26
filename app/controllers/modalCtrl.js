"use strict";
app.factory("boardModal", function(btfModal){
	return btfModal({
		controller: "BoardModalCtrl",
		controllerAs: "modal",
		templateUrl: "partials/boardModal.html"
	});
});


app.controller("BoardModalCtrl", function($location, $scope, boardModal, AuthFactory, DataFactory, $rootScope, $route){
	$scope.closeModal = boardModal.deactivate;

	$scope.submitBoard = function(){
		let newBoard ={};
		newBoard.title= $scope.title;
		newBoard.category = $scope.category;
		newBoard.description = $scope.description;
		newBoard.uid = AuthFactory.getUser();

		DataFactory.postNewBoard(newBoard).
		then(function(){
			console.log('posting new board');
			$scope.closeModal()
			.then(function() {
				console.log('modal closed');
				$route.reload();
			});
		});
		console.log(DataFactory.getBoards());
};


});
