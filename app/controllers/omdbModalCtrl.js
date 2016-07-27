'use strict';

app.factory("omdbModal", function(btfModal) {
  return btfModal({
      controller: "omdbModalCtrl",
      controllerAs: "modal",
      templateUrl: "partials/omdbModal.html"
  });
});

app.controller("omdbModalCtrl", function($location, $scope, omdbModal, MoviesF, $routeParams){
	$scope.closeModal = omdbModal.deactivate;

	$scope.submitMovie = function(){
		let searchTitle = $scope.title;
    console.log('submit movie', searchTitle);
    MoviesF.searchOMDB(searchTitle)
    .then(function(movies) {
      let path = `/${$routeParams.boardID}/movies/results`;
      console.log('movie results path', path);
      $scope.closeModal();
      $location.url(path);
    });
    //
		// DataFactory.postNewBoard(newBoard).
		// then(function(){
		// 	$scope.closeModal()
		// 	.then(function() {
		// 		$route.reload();
		// 	});
		// });
	};
});
