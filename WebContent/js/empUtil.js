/*function EmpCtrl($scope,$http) {
	$scope.getDatafrmServer = function() {
		alert("entered"+$scope.empIdText+ "   ..  "+$http );
		 $http({method: 'GET', url: 'getEmpName.html',data: {id:$scope.empIdText},headers : { 'Content-Type': 'application/json' }}).
		    success(function(data, status, headers, config) {
		        alert("success status"+status+"  .... "+ data.firstName);
		        $scope.loadingIsDone = true;
		        $.scope.empData = "dfgdgdgfd"+data.firstName;
		       // alert("scopeee "+$.scope.empData);
		      // this callback will be called asynchronously
		      // when the response is available
		    }).
		    error(function(data, status, headers, config) {
		    	alert("error status"+status);
		      // called asynchronously if an error occurs
		      // or server returns response with an error status.
		    });
	  };
}*/
//angular.module("ngSanitize", []).value("$sanitize", $sanitize);
var frontEndApp = angular.module('EmpProject', ['ngSanitize']);
frontEndApp.controller('EmpCtrl', ['$scope','$http',
                                   function($scope, $http) {
	$scope.getDatafrmServer = function() {
		alert("entered"+$scope.empIdText+ "   ..  "+$http );
		$http({method: 'GET', url: 'getEmpName.html',data: {id:$scope.empIdText},headers : { 'Content-Type': 'application/json' }}).
		success(function(data, status, headers, config) {
			// $scope.content = $window.content;
			alert("success status"+status+"  .... "+ data.firstName);
			$scope.loadingIsDone = true;
			$.scope.content = "dfgdgdgfd";
			// alert("scopeee "+$.scope.empData);
			// this callback will be called asynchronously
			// when the response is available
		}).
		error(function(data, status, headers, config) {
			alert("error status"+status);
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	};
}]);