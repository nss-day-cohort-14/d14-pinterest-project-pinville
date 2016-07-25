"use strict";
app.controller('BoardsCtrl', function($scope, DataFactory, AuthFactory, boardModal) {

	DataFactory.loadBoardsByUser(AuthFactory.getUser()).
	then(function(boards){
		console.log(boards);
	});
	DataFactory.getPins('-KNYUdajW31lzK8-s62G')
	.then(function(results) {
		console.log(results);
	});
	$scope.openModal = boardModal.activate;

});
