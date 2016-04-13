app.controller("calcCtrl", function($scope) {
	$scope.currentNumber = '';
	$scope.numbers = [];
	$scope.operators = [];
	$scope.total = 0;
	
	$scope.add = function() {
		$scope.operators.push('+');
		$scope.numbers.push($scope.currentNumber);
		$scope.currentNumber = '';
	}
	
	$scope.subtract = function() {
		$scope.operators.push('-');
		$scope.numbers.push($scope.currentNumber);
		$scope.currentNumber = '';
	}
	
	$scope.multiply = function() {
		$scope.operators.push('*');
		$scope.numbers.push($scope.currentNumber);
		$scope.currentNumber = '';
	}
	
	$scope.divide = function() {
		$scope.operators.push('/');
		$scope.numbers.push($scope.currentNumber);
		$scope.currentNumber = '';
	}
	
	$scope.equals = function() {
		if ($scope.currentNumber !== '') {
			$scope.numbers.push($scope.currentNumber);
			$scope.currentNumber = '';
		}
		
		currentTotal = 0;
		operatorCount = 0;
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
			
			operatorCount++;
		}
				
		$scope.total = currentTotal;
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
});