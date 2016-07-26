"use strict";
app.controller('AmazonPinsCtrl', function($scope, AmazonFactory, ItemToPin, pinModal) {

  // Bound to input to assist amazon search
  $scope.amazonSearchTerm = "";

  // Searches amazon and returns results in array
  $scope.searchAmazon = function() {
    AmazonFactory.getItemInfo($scope.amazonSearchTerm).then(function(itemData) {
      itemData = $.parseXML(itemData);
      let items = itemData.getElementsByTagName("Item");
      $scope.itemCollection = [];
      for (let item in items) {
        let currentItem = items[item];
        let formattedItem = {};
        if (typeof currentItem === "object") {
          formattedItem.itemPicture = currentItem.getElementsByTagName("LargeImage")[0].getElementsByTagName("URL")[0].innerHTML;
          formattedItem.itemTitle = currentItem.getElementsByTagName("ItemAttributes")[0].getElementsByTagName('Title')[0].innerHTML;
          $scope.itemCollection.push(formattedItem);
        }
      }
    });
  }

  // Sets item to pin
  // $scope.itemSelected = function(item) {
  //   // ItemToPin.setItem(item);
  //   pinModal.activate;
  // }
  $scope.itemSelected = pinModal.activate;

});
