'use strict';

app.controller('PinsCtrl', function($scope, $routeParams, DataFactory, pinsModal, $timeout, $route) {
  
  DataFactory.getPins($routeParams.boardID).then(function(pins) {
    $timeout(function(){
      $scope.pins = pins;
      $(document).ready(function() {
        $('.materialboxed').materialbox();
      });
    });
  });

  $scope.deletePin = function(pin){
  	DataFactory.deletePin(pin.pinid).
  	then(function(){
  		$route.reload();
  	})
  }
  $scope.openPinsModal = pinsModal.activate;

});
