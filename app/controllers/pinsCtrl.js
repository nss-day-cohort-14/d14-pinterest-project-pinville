'use strict';

app.controller('PinsCtrl', function($scope, $routeParams, DataFactory, pinsModal, $timeout, MoviesF, omdbModal) {

  DataFactory.getPins($routeParams.boardID).then(function(pins) {
    $timeout(function(){
      $scope.pins = pins;
      $(document).ready(function() {
        $('.materialboxed').materialbox();
      });
    });
  });

  $scope.openPinsModal = pinsModal.activate;
  $scope.openOmdbModal = function() {
    MoviesF.setCurrentBoard($routeParams.boardID);
    omdbModal.activate();
  };

});
