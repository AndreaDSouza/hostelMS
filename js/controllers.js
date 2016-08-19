dashboardApp.controller('dashCtrl',["$scope","$timeout","dbServices",function($scope,$timeout,dbServices){

	 dbServices.get("announcements", function(obj){
		
		$scope.$apply(function(){
        	$scope.announcement = obj;
			console.log($scope.announcement);
		});
		
    });
	
}]);