messApp.controller("messCtrl",["$scope","$timeout","dbServices" ,function($scope,$timeout,dbServices){
	
    dbServices.get("/generalList", function(obj){
        $timeout(function() {
            $scope.messList = obj;
        })
    });
	
	dbServices.get("/chapelList", function(obj){
        $timeout(function() {
            $scope.chapelList = obj;
        })
    });
	
	$scope.updateMess = function()
	{
		dbServices.update( '/generalList', $scope.messList, function(){} );
	}
	
	$scope.toggleToMake = function(makerKey)
	{
		makerKey.toMake = !makerKey.toMake;
	}
	
	$scope.toggleHasRead = function(reader)
	{
		reader.hasRead = !reader.hasRead;
	}
    
}]);