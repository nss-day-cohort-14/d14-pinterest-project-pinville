"use strict";

app.factory("DataFactory", function( FirebaseCreds, $q, $http){

	let loadBoardsByUser = function (uid){
		return $q(function(resolve,reject){
			$http.get(`${FirebaseCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${uid}"`).
			success(function(snapshot){
				resolve(snapshot);
			}).error(function(error){
				reject(error);
			});
		});

	};

	return {loadBoardsByUser};

});