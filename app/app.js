"use strict";
var app = angular.module('app', ['ngRoute']);

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
  .when('/pin/login', {
    templateUrl: "partials/login.html",
    controller: "LoginCtrl"
  })
  .otherwise('/pin/login');
});
