'use strict';

app.factory('Movies', function($q, $http) {

  let getMovies = function(query) {
    console.log(query.title);
  };

  return {
    getMovies
  };

});
