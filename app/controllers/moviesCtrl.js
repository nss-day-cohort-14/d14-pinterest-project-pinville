'use strict';

app.controller('moviesCtrl', function($scope, MoviesF, ItemToPin, PinModal) {
  // search object to passed to MovieFactory

  $scope.movies = MoviesF.getMovies();
  console.log($scope.movies);
  $scope.selectMovie = function(movie) {
    let movieToPin = {};
    movieToPin.boardid = MoviesF.getCurrentBoard();
    movieToPin.title = movie.Title;
    movieToPin.image = movie.Poster;
    movieToPin.comments = movie.Year
    ItemToPin.setItem(movieToPin);
    console.log(movieToPin);
    PinModal.activate();
  };

  $scope.openPinModal = PinModal.activate;
});
