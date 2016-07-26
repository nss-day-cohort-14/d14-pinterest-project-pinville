"use strict";

app.factory("DataFactory", function( FirebaseCreds, $q, $http){
	let boards =[];
	let loadBoardsByUser = function (uid){
		return $q(function(resolve,reject){
			console.log('user id', uid);
			$http.get(`${FirebaseCreds.databaseURL}/boards.json?orderBy="uid"&equalTo="${uid}"`).
			success(function(snapshot){
				if(snapshot !== null){
					boards = [];
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

	let postNewBoard = function(boardObj){
		return $q(function(resolve,reject){
			$http.post(`${FirebaseCreds.databaseURL}/boards.json`,
			boardObj).success(function(){
				boards = [];
				loadBoardsByUser(boardObj.uid).
				then(function() {
					console.log("It worked! Here are the boards: ", boards);
					resolve();
				});
			}).error(function(error){
				reject(error);
			});
		});
	};
	let getBoards = function(){
		return boards;
	}

	return {loadBoardsByUser, getPins, postNewBoard, getBoards};
});
