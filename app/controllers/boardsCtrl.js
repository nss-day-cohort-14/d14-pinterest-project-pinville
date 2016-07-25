"use strict";
app.controller('BoardsCtrl', function($scope, DataFactory, AuthFactory, boardModal) {

	DataFactory.loadBoardsByUser(AuthFactory.getUser()).
	then(function(boards){
		console.log(boards);
	});
		$scope.openModal = boardModal.activate;
	
});


