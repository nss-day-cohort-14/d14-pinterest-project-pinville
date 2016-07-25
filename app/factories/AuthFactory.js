"use strict";

app.factory('AuthFactory', function() {

  let provider = new firebase.auth.GoogleAuthProvider();
  let currentUserId = null;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("User logged in", user.uid);
      currentUserId = user.uid;
    } else {
      console.log("User not logged in");
    }
  });

  let authWithProvider = function() {
    return firebase.auth().signInWithPopup(provider);
  };

  let getUser = function() {
    return currentUserId;
  };

  let createAccount = function(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
      console.log("New account created:", user.uid);
    });
  };

  return {authWithProvider, getUser, createAccount};
});
