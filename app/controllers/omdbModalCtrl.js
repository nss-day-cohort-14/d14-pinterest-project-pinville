'use strict';

app.factory("omdbModal", function(btfModal) {
  return btfModal({
      controller: "omdbModalCtrl",
      controllerAs: "modal",
      templateUrl: "partials/omdbModal.html"
  });
});

app.controller("omdbModalCtrl", function($location, $scope, omdbModal, MoviesF){
	$scope.closeModal = omdbModal.deactivate;

	$scope.submitMovie = function(){
		let searchTitle = $scope.title;
    console.log('submit movie', searchTitle);
    MoviesF.searchOMDB(searchTitle)
    .then(function(movies) {
      $scope.closeModal();
      $location.url('/movies/results');
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
