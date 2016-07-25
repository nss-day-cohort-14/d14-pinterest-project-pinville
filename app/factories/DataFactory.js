"use strict";

app.factory("DataFactory", function( FirebaseCreds, $q, $http){

	let loadBoardsByUser = function (uid){
		let boards=[];
		return $q(function(resolve,reject){
			$http.get(`${FirebaseCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${uid}"`).
			success(function(snapshot){
				if(snapshot !== null){
				Object.keys(snapshot).forEach(function(key){
					snapshot[key].boardid=key;
					boards.push(snapshot[key]);
				});
			}
				resolve(boards);
			}).error(function(error){
				reject(error);
			});
		});

	};

	return {loadBoardsByUser};

});