'use strict';

app.controller('movieSearchCtrl', function($scope, $location, MoviesF) {

  $scope.movieQuery = {
    title: ""
  };
  $scope.movieSearch = function() {
    MoviesF.searchOMDB($scope.movieQuery)
    .then(function(results) {
      console.log(results);
      $location.url('/movies/results');
    });
  };
});
