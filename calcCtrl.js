app.controller("calcCtrl", function($scope) {
	$scope.currentNumber = '';
	$scope.numbers = [];
	$scope.operators = [];
	$scope.total = 0;
		
	$scope.equals = function() {
		if ($scope.currentNumber !== '') {
			$scope.numbers.push($scope.currentNumber);
			$scope.currentNumber = '';
		}
		
		var currentTotal = 0;
		var operatorCount = 0;
		for (i = 0; i < $scope.numbers.length; i++) {
			if (i == 0) {
				currentTotal = $scope.numbers[0];
				continue;
			}
			
			if ($scope.operators[operatorCount] == '*') {
				currentTotal = +currentTotal * +$scope.numbers[i];				
			} else if ($scope.operators[operatorCount] == '/') {
				currentTotal = +currentTotal / +$scope.numbers[i];								
			} else if ($scope.operators[operatorCount] == '+') {
				currentTotal = +currentTotal + +$scope.numbers[i];												
			} else {
				currentTotal = +currentTotal - +$scope.numbers[i];												
			}
			
			operatorCount = operatorCount + 1;
		}
				
		$scope.total = currentTotal;
		$scope.numbers = [];
		$scope.numbers.push($scope.total);
		$scope.operators = [];
	}
	
	$scope.enterNumber = function(number) {
		$scope.currentNumber = $scope.currentNumber + '' + number;
		$scope.total = $scope.currentNumber;
	}
	
	$scope.clear = function() {
		$scope.numbers = [];
		$scope.operators = [];
		$scope.total = 0; 
		$scope.currentNumber = '';
	}
	
	$scope.operation = function(operand) {
		$scope.operators.push(operand);
		if ($scope.currentNumber !== '') {
			$scope.numbers.push($scope.currentNumber);
			$scope.currentNumber = '';
		} 		
	}
});