"use strict";

app.factory("ItemToPin", function(){

  let itemToPin = null;

  let setItem = function(item) {
    itemToPin = item;
    console.log("Setting item to pin as ", itemToPin);
  }

  let getItem = function() {
    return itemToPin;
  }

  return {setItem, getItem};

});
