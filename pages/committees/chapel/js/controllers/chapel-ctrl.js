chapelApp.controller("chapelCtrl",["$scope","$timeout","dbServices" ,function($scope,$timeout,dbServices){
    
    dbServices.get("chapelList", function(obj){
        $timeout(function() {
            $scope.chapelList = obj;
        });
    });
	
	$scope.readReaders = [];
	
	$scope.hasRead = function( reader )
	{
		console.log("clicked");
		$scope.readReaders.push(reader);
	}
	
}]);