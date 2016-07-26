"use strict";
var app = angular.module('app', ['ngRoute', 'btford.modal']);

app.config(function($routeProvider, FirebaseCreds) {

  let authConfig = {
    apiKey: FirebaseCreds.apiKey,
    authDomain: FirebaseCreds.authDomain,
    databaseURL: FirebaseCreds.databaseURL,
    storageBucket: FirebaseCreds.storageBucket
  };
  firebase.initializeApp(authConfig);

// associates which controller with which view
  $routeProvider
  .when('/login', {
    templateUrl: "partials/login.html",
    controller: "LoginCtrl"
  })
  .when('/boards', {
    templateUrl: "partials/boards.html",
    controller: "BoardsCtrl"
  })
  .when('/amazonpins', {
    templateUrl: "partials/amazonpins.html",
    controller: "AmazonPinsCtrl"
  })
  .otherwise('/login');
});
