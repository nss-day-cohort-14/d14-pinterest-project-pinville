"use strict";
app.controller('BoardsCtrl', function($scope, DataFactory, AuthFactory, boardModal, $rootScope, $timeout, $location) {

	DataFactory.loadBoardsByUser(AuthFactory.getUser()).
	then(function(userBoards){
		$timeout(function(){
			$scope.boards=userBoards;
		});
	});

	$scope.openModal = boardModal.activate;
	$scope.boardSelected = function(board) {
		let boardURL = `${board.boardid}/pins`;
		$location.url(boardURL);
	}

});
