'use strict';

app.factory('MoviesF', function($q, $http) {

  let movies;

  let searchOMDB = function(query) {
    console.log(query.title);
    return $q(function(resolve, reject) {
      $http.get(`http://www.omdbapi.com/?s=${query.title}&r=json`)
      .success(function(results) {
        movies = results.Search;
        resolve(movies);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  let getMovies = () => movies;

  return {
    searchOMDB,
    getMovies
  };

});
