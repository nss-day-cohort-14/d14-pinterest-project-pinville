'use strict';

app.controller('PinsCtrl', function($scope, $routeParams, DataFactory, pinsModal, $timeout, $location, $route, AuthFactory) {

  $scope.chooseAmazonPins = function() {
    let path = $routeParams.boardID + "/pins/addAmazonPin";
    $location.url(path);
  }

  DataFactory.getPins($routeParams.boardID).then(function(pins) {
    $timeout(function(){
      $scope.pins = pins;
      $(document).ready(function() {
        $('.materialboxed').materialbox();
      })
    });
  });

  $scope.boardsPressed = function() {
    $location.url('/boards');
  };

  $scope.logoutPressed = function() {
    AuthFactory.logout();
    $location.url('/');
  }

  $scope.deletePin = function(pin){
  	DataFactory.deletePin(pin.pinid).
  	then(function(){
  		$route.reload();
  	})
  }

  $scope.openPinsModal = pinsModal.activate;

});
