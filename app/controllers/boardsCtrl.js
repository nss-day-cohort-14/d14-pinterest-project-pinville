"use strict";
app.controller('BoardsCtrl', function($scope, DataFactory, AuthFactory, boardModal, $rootScope, $timeout) {


	DataFactory.loadBoardsByUser(AuthFactory.getUser()).
	then(function(userBoards){
	$timeout(function(){
		$rootScope.boards=DataFactory.getBoards();
	});

	}); 


	DataFactory.getPins('-KNYUdajW31lzK8-s62G')
	.then(function(results) {
		console.log(results);
	});
	$scope.openModal = boardModal.activate;

});
