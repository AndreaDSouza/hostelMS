chapelApp.controller("chapelCtrl",["$scope","$timeout","dbServices" ,function($scope,$timeout,dbServices){
    
    dbServices.get("/chapelList", function(obj){
        $timeout(function() {
            $scope.chapelList = obj;
        });
    });
	
	$scope.updateChapel = function()
	{
		dbServices.update( '/chapelList/', $scope.chapelList, function(){} );
	}
	
}]);