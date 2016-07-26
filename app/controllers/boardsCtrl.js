"use strict";
app.controller('BoardsCtrl', function($scope, DataFactory, AuthFactory, boardModal, $rootScope, $timeout) {

	console.log('im back');

	DataFactory.loadBoardsByUser(AuthFactory.getUser()).
	then(function(userBoards){
		console.log('loadBoardsByUser', userBoards);
		$timeout(function(){
			$scope.boards=userBoards;
		});
	});


	DataFactory.getPins('-KNYUdajW31lzK8-s62G')
	.then(function(results) {
		console.log(results);
	});
	$scope.openModal = boardModal.activate;

});
