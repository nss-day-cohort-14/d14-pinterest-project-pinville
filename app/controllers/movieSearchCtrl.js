'use strict';

app.controller('movieSearchCtrl', function($scope, $location) {

  $scope.movieQuery = {
    title: ""
  };
  $scope.movieSearch = function() {
    console.log($scope.movieQuery);
  };
});
