app.controller("calcCtrl", function($scope) {
	$scope.firstNumber = -1;
	$scope.secondNumber = -1;
	$scope.operator = '*';
	$scope.total = 0;
	$scope.add = function() {
		$scope.operator = '+';
	}
	
	$scope.subtract = function() {
		$scope.operator = '-';
	}
	
	$scope.multiply = function() {
		$scope.operator = '*';
	}
	
	$scope.divide = function() {
		$scope.operator = '/';
	}
	
	$scope.equals = function() {
		total = 0;
		if ($scope.operator == '*') {
			total = $scope.firstNumber * $scope.secondNumber;
		} else if ($scope.operator == '/') {
			total = $scope.firstNumber / $scope.secondNumber;
		} else if ($scope.operator == '+') {
			total = $scope.firstNumber + $scope.secondNumber;
		} else {
			total = $scope.firstNumber - $scope.secondNumber;
		}
		$scope.firstNumber = -1;
		$scope.secondNumber = -1;
		
		$scope.total = total;
	}
	
	$scope.enterNumber = function(number) {
		if ($scope.firstNumber < 0) {
			$scope.firstNumber = number;
			$scope.total = number;
		} else {
			$scope.secondNumber = number;
			$scope.total = number;
		}
	}
	
	$scope.clear = function() {
		$scope.firstNumber = -1;
		$scope.secondNumber = -1;
		$scope.total = 0; 
	}
});