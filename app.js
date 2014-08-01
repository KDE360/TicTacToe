
/* 

var tttApp = angular.module('triplettt', ["firebase"]);

tttApp.controller('boardController', function($scope, $firebase) {
  	TTTRef = new Firebase("https://triplettt.firebaseio.com");
		$scope.TTT = $firebase(TTTRef);

		$scope.remoteCellList = 
    $firebase(new Firebase("https://triplettt.firebaseIO.com" + '/remoteCellList')) ;
	/* greetings
  	$scope.greet = function() {
    	$scope.message = "Hello, " + $scope.user.name;
  }
});

*/





//Game methods

function boardController ($scope) {
	$scope.boxes = ["","","","","","","","",""]
	$scope.xTurn = 'x';
	$scope.turnCounter = 0;
	$scope.win = false;
	$scope.p1Score = 0;
	$scope.p2Score = 0;


	$scope.resetGame= function () {

		$scope.boxes = [
			"","","",
			"","","",
			"","",""
			];
		$scope.winMsg = "";
		$scope.turnCounter = 0;
		$scope.win = false;


		document.getElementsByClassName('message')[0].style.display="none";

	};



	$scope.xoTurn = function (i) {
		if ($scope.boxes[i] == "") {
				$scope.boxes[i] = $scope.xTurn;

				if ($scope.boxes[i] == "x") {
					$scope.xTurn = "o"
				} else {
					$scope.xTurn = "x";
				};
			$scope.turnCounter++;	
			} 
		else {
				alert('dude! watch where you are clicking!!!')
			};
		if ($scope.turnCounter >= 3) {
			 	$scope.checkWin();
			};


	};

// use the same winning combinations in javascript game method to check for winner

	$scope.checkWin = function() {
		$scope.winCombo = [
				[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],
				[2,4,6]
			]		

			for(i=0; i<$scope.winCombo.length; i++) {
				winCombo = $scope.winCombo[i];
				var xoxo = $scope.boxes[winCombo[0]];
				if($scope.boxes[winCombo[0]]==$scope.boxes[winCombo[1]] 
					&& $scope.boxes[winCombo[1]] == $scope.boxes[winCombo[2]] && $scope.boxes[winCombo[0]] !=="") {

//document.getElementsByClassName('names');
//Returns an array-like object of all child elements which have all of the given class names
					document.getElementsByClassName('message')[0].style.display="block";
					$scope.winMsg="You Rock!";
					if(xoxo=="x"){
						$scope.p1Score++;
					}
					else if(xoxo=="o"){
						$scope.p2Score++;
					}	
					$scope.win = true;			

				};

			};
		if($scope.turnCounter == 9 && $scope.win==false) {
			document.getElementsByClassName('message')[0].style.display="block";
// need to work on draw message!!!!!  not working!!!!
			$scope.tieMsg="It's a Draw!";			
		};
	};

};