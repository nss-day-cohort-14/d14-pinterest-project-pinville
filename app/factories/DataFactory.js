"use strict";

app.factory("DataFactory", function( FirebaseCreds, $q, $http){

	let loadBoardsByUser = function (uid){
		let boards=[];
		return $q(function(resolve,reject){
			console.log('user id', uid);
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

	let getPins = function(boardId) {
		let pins = [];
		return $q(function(resolve, reject) {
			console.log('baord id', boardId);
			$http.get(`${FirebaseCreds.databaseURL}/pins.json?orderBy="boardid"&equalTo="${boardId}"`)
			.success(function(snapShot) {
				if(snapShot !== null) {
					Object.keys(snapShot).forEach(function(key) {
						snapShot[key].pinid = key;
						pins.push(snapShot[key]);
					});
				}
				resolve(pins);
			})
			.error(function(error) {
				reject(error);
			});
		});
	};

	return {loadBoardsByUser, getPins};
});
