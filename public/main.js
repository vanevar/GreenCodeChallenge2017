angular.module("greenIT", ['ui.bootstrap']).controller("mainCtrl", function($scope, $http) {
	$scope.getJson = function() {
		$http.get("/getJson").then(function(res) {
			$scope.metadata = res.data;
		}, function() {
			console.log("error occured");
		})
	}
});
