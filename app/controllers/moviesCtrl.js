'use strict';

app.controller('moviesCtrl', function($scope, MoviesF) {
  // search object to passed to MovieFactory

  $scope.movies = MoviesF.getMovies();
  console.log($scope.movies);
  $scope.selectMovie = function(movie) {
    console.log(movie);
  };
});
