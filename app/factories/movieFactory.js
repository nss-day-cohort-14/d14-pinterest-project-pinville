'use strict';

app.factory('MoviesF', function($q, $http) {

  // variables
  let movies;
  let currentBoard = '';

  let searchOMDB = function(query) {
    console.log(query);
    return $q(function(resolve, reject) {
      $http.get(`http://www.omdbapi.com/?s=${query}&r=json`)
      .success(function(results) {
        movies = results.Search;
        console.log(movies);
        resolve(movies);
      })
      .error(function(error) {
        reject(error);
      });
    });
  };

  let getMovies = () => movies;
  let setCurrentBoard = board => currentBoard = board;
  let getCurrentBoard = () => currentBoard;

  return {
    searchOMDB,
    getMovies,
    setCurrentBoard,
    getCurrentBoard
  };

});
