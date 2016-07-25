app.controller('BoardsCtrl', function($scope, DataFactory, AuthFactory) {

	DataFactory.loadBoardsByUser(AuthFactory.getUser()).
	then(function(stuff){
		console.log(stuff);
	})

});
