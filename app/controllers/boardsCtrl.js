"use strict";
app.controller('BoardsCtrl', function($scope, DataFactory, AuthFactory) {

	DataFactory.loadBoardsByUser(AuthFactory.getUser()).
	then(function(boards){
		console.log(boards);
	});

		});


