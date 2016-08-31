postEditApp.controller('anounCtrl',["$scope","$timeout","dbServices",function($scope,$timeout,dbServices){

	$scope.post = {
	
		title : "",
		content : "" 

	};
	
	$scope.submitPost = function()
	{
		console.log("Clicked");
		dbServices.push( "announcements", $scope.post);
	}
	
}])