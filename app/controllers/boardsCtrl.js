"use strict";
app.controller('BoardsCtrl', function($scope, DataFactory, AuthFactory, boardModal, $rootScope, $timeout, $location, $route, Filter) {

	$scope.filter = Filter;

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

	$scope.boardsPressed = function() {
		$location.url('/boards');
	}

	$scope.logoutPressed = function() {
		AuthFactory.logout();
		$location.url('/');
	}

	$scope.deleteBoard = function(board){
		DataFactory.deleteBoard(board.boardid).
		then(function(){
			$route.reload();
		});
	}

});
