'use strict';

app.controller('moviesCtrl', function($scope, MoviesF, ItemToPin, PinModal) {
  // search object to passed to MovieFactory

  $scope.movies = MoviesF.getMovies();
  console.log($scope.movies);
  $scope.selectMovie = function(movie) {
    ItemToPin.setItem(movie);
    console.log(movie);
    PinModal.activate();
  };

  $scope.openPinModal = PinModal.activate;
});
